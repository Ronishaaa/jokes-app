import axios from "axios";

import { useNavigate } from "react-router-dom";

export async function loader() {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    console.log(data);
    return data;
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}

function Random() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum
        ducimus doloremque ipsa iste ut vero ullam? Dolorum, provident
        asperiores. Quod illo quis ea, vero minus rerum iusto alias nihil?
      </p>

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
