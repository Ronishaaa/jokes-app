import axios from "axios";

import { useNavigate, useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    return data;
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}

function Random() {
  const navigate = useNavigate();
  const data = useLoaderData();

  return (
    <div className="container">
      <p>Setup: {data.setup}</p>
      <p>Punchline: {data.punchline}</p>

      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Random;
