import axios from "axios";
import { useLoaderData } from "react-router-dom";
import "./Joke.css";

export async function loader({ params }) {
  try {
    console.log(params);
    const { data } = await axios.get(
      `https://official-joke-api.appspot.com/jokes/${params.jokeId}`
    );
    return data;
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}

function Joke() {
  const data = useLoaderData();
  console.log(data);

  // const joke = data.find((joke) => joke.id === id);

  return (
    <div className="container">
      <p>Setup: {data.setup}</p>
      <p>Punchline: {data.punchline}</p>
    </div>
  );
}

export default Joke;

// import axios from "axios";

// export async function loader() {
//   try {
//     const { data } = await axios.get(
//       "https://official-joke-api.appspot.com/jokes/:id"
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw new Response("Not Found", { status: 404 });
//   }
// }

// function Joke() {
//   return (
//     <div className="container">
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum
//         ducimus doloremque ipsa iste ut vero ullam? Dolorum, provident
//         asperiores. Quod illo quis ea, vero minus rerum iusto alias nihil?
//       </p>
//     </div>
//   );
// }

// export default Joke;
