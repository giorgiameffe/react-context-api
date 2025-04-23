// Posts list
import PostsList from "./PostsList";

import Alert from "../components/Alert.jsx";

// Post Page

export default function PostsPage() {

    return (
        <div className="main-container">
            <Alert />
            <h2>Posts Blog</h2>
            <PostsList />
        </div>
    )
}