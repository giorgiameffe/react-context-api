// Link
import { Link } from "react-router-dom";
// useContext
import { useContext } from "react";
// PostsContext
import PostsContext from "../contexts/PostsContext";

// Posts list

export default function PostsList() {

    const { posts } = useContext(PostsContext);

    return (
        <ul className="posts-container">
            {posts.map(post =>
                <li key={post.id} className="single-post">
                    <h3>{post.title}</h3>
                    <Link to={`/posts/${post.id}`}>Clicca qui per maggiori dettagli</Link>
                </li>
            )}
        </ul>
    )
}