// Axios
import axios from "axios";
// Hooks + createContext per creare un Context API pattern
import { useState, useEffect, useContext, createContext } from "react";

// Definizione del contesto => Posts Context
const PostsContext = createContext();

// Componente in cui sono presenti tutti i dati che si vogliono rendere disponibili 
// agli altri componenti al suo interno
function PostsProvider({ children }) {

    const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

    const [posts, setPosts] = useState([]);

    function getPosts() {
        axios.get(postsEndpoint)
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => alert('Qualcosa è andato storto, riprova più tardi'))
    }

    useEffect(getPosts, []);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    )
}

// Definire custom hook per consumare il contesto 

function usePosts() {

    const context = useContext(PostsContext);
    return context;
}

export { PostsProvider, usePosts };