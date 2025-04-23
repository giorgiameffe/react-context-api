// importare custom Hook usePosts per recuperare i dati 
import { usePosts } from "../contexts/PostsContext";
// PostCard
import PostCard from "../components/PostCard";

// Posts list

export default function PostsList() {

    const { posts } = usePosts();

    return (
        <ul className="posts-container">
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </ul>
    )
}