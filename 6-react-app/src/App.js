import "./App.css";
import Posts from "./components/posts/Posts";
import PostsWithComments from "./components/postsWithComments/PostsWithComments";

function App() {
  return (
    <>
      <div className="App">
      <h1>Posts </h1>
        <Posts />
      </div>
      <div className="App">
        <h1>Posts With Comments</h1>
        <PostsWithComments />
      </div>
    </>
  );
}

export default App;
