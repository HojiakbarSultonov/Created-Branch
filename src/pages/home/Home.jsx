// import { datas } from "../../datas";
// import About from "../about/About";
// import axios from "axios";
import "./Home.css";

function Home() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [id,setId]=useState(1)
  //   const [inputVal, setInputVal] = useState(1);
  //   const [obj, setObj] = useState({});
  //   useEffect(() => {
  //     axios
  //       .get(`https:fakestoreapi.com/products/${id}`)
  //       .then((res) => setObj(res.data))
  //   }, [id]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setId(Number(inputVal))

  //   };

  return (
    <div>
      <h1>Home</h1>
    <h1 className="newTitle">new Created Branch for Github</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={e=>setInputVal(e.target.value)}
          type="text"
          placeholder="write ID"
        />
        <button type="submit">ADD ID</button>
      </form>
      <img width={"300px"} src={obj.image} alt="" /> */}

      <button>create</button>
    </div>
  );
}

export default Home;
