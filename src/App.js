import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import Musics from "./components/Musics"
import MusicForm from "./components/MusicForm"

const musics = [
  { id: 1, name: 'music 1' },
  { id: 2, name: 'music 2' },
  { id: 3, name: 'music 3' },
  { id: 4, name: 'music 4' },
  { id: 5, name: 'music 5' }
]

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
            <h2>Синхронные посты</h2>
            <Posts />
          </div>
        </div>
        <div className="col">
          <div className="p-3" style={{ borderRadius: '10px', background: 'rgb(0 102 255 / 23%)' }}>
            <h2>Асинхронные посты</h2>
            <FetchedPosts posts={[]} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MusicForm />
        </div>
        <div className="col">
          <Musics musics={musics} />
        </div>
      </div>

      
    </div>
  );
}

export default App;
