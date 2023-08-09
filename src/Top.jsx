import "./Top.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_ten"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Response("Not Found", { status: 404 });
  }
}

function Top() {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="wrapper">
      {data.map((joke, index) => (
        <div key={joke.id}>
          <h2>
            {index + 1}. Setup: {joke.setup}
          </h2>
          <h2>Punchline: {joke.punchline}</h2>
        </div>
      ))}
    </div>
  );
}

export default Top;
