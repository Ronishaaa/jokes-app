import { useNavigate } from "react-router-dom";

export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 2));
  return null;
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
