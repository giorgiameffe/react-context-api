// Hooks
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Axios
import axios from "axios";
// Link
import { Link } from "react-router-dom";

// Single Post 

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export default function SinglePost() {

    const { id } = useParams();

    // useNavigate per tornare alla pagina precedente
    const navigate = useNavigate();

    const [singlePost, setSinglePost] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const postEndpoint = `${postsEndpoint}/${id}`;

    // funzione chiamata ad API per il singolo post

    function getSinglePost() {
        setLoading(true);
        axios.get(postEndpoint)
            .then(res => {
                setSinglePost(res.data);

            })
            .catch(err => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(getSinglePost, [id]);

    if (loading) {
        return <div className="main-container loading">Caricamento..</div>
    }

    if (error) {
        return (
            <div className="not-found main-container">
                <h1>Ops..Post non trovato!</h1>
                <Link className="not-found-link" to='/posts'>Torna ai post</Link>
            </div>

        )
    }

    const newId = parseInt(id);

    // funzioni per mostrare il post precedente e successivo
    function previousPost() {

        const previousId = newId - 1 >= 1 ? newId - 1 : id;
        navigate(`/posts/${previousId}`);
    }

    function nextPost() {

        const nextId = newId + 1 <= 100 ? newId + 1 : id;
        navigate(`/posts/${nextId}`);
    }


    return (

        <div className="main-container">
            <section className="post-section">
                <h2>{singlePost.title}</h2>
                <p>{singlePost.body}</p>
                <button onClick={() => navigate(-1)}>Torna alla pagina precedente</button>
                <button onClick={previousPost} disabled={id <= 1}>Post precedente</button>
                <button onClick={nextPost} disabled={id >= 100}>Post successivo</button>
            </section>
        </div>

    )

}