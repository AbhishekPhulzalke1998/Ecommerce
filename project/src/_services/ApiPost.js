import axios from 'axios'
import './ApiPost.css';



const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

const ApiPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);
 
    // ...
 
    const handleSubmit = (e) => {
       e.preventDefault();
       addPosts(title, body);
    };
 
    const addPosts = (title, body) => {
       client
          .post('', {
             title: title,
             body: body,
          })
          .then((response) => {
             setPosts([response.data, ...posts]);
          });
       setTitle('');
       setBody('');
    };
    
    return (
        <div>
      <form onSubmit={handleSubmit}>
         <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         </label>
         <br />
         <label>
            Body:
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
         </label>
         <br />
         <button type="submit">Submit</button>
      </form>
 
      <div>
         <h2>Posts</h2>
         <ul>
            {posts.map((post, index) => (
               <li key={index}>{post.title}: {post.body}</li>
            ))}
         </ul>
      </div>
   </div>
 
    );
 };
 
 export default ApiPost;
  

