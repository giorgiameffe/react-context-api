// Link
import { Link } from "react-router-dom";
// useContext
import { useContext } from "react";
// PostsContext
import PostsContext from "../contexts/PostsContext";

import PostCard from "../components/PostCard";

// Posts list

export default function PostsList() {

    const { posts } = useContext(PostsContext);

    return (
        <ul className="posts-container">
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </ul>
    )
}