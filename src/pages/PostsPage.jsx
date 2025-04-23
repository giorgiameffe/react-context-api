// Posts list
import PostsList from "./PostsList";
// Alert
import Alert from "../components/Alert.jsx";

// Posts Page

export default function PostsPage() {

    return (
        <div className="main-container">
            <Alert />
            <h2>Posts Blog</h2>
            <PostsList />
        </div>
    )
}