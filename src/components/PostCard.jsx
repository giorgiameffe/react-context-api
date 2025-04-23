// Link
import { Link } from "react-router-dom";

// PostCard

export default function PostCard({ post }) {

    return (
        <li className="single-post">
            <h3>{post.title}</h3>
            <Link to={`/posts/${post.id}`}>Clicca qui per maggiori dettagli</Link>
        </li>
    )
}