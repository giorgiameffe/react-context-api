// PostsContext
import { usePosts } from "../contexts/PostsContext";
// Postcard
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