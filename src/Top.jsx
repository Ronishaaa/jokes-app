import "./Top.css";
import axios from "axios";

export async function loader() {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_ten"
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Response("Not Found", { status: 404 });
  }
}

function Top() {
  return (
    <div className="container">
      <ol>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          ratione dolorum, perspiciatis corrupti ducimus ab necessitatibus nisi
          dolores illum blanditiis voluptates! Libero commodi, obcaecati animi
          dolor perspiciatis quia adipisci nemo.
        </li>
      </ol>
    </div>
  );
}

export default Top;
