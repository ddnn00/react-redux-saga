import PostForm from "./components/PostForm"
import Posts from "./components/Posts"
import SumPosts from "./components/SumPosts"

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <div className="py-3">
            <PostForm />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="p-3" style={{ borderRadius: '10px', background: 'rgb(0 102 255 / 23%)' }}>
            <Posts />
          </div>
        </div>
        <div className="col">
          <div className="p-3" style={{ borderRadius: '10px', background: 'rgb(0 102 255 / 23%)' }}>
            <SumPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
