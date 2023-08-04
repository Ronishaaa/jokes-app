export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 2));
  return null;
}

function Joke() {
  return (
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum
        ducimus doloremque ipsa iste ut vero ullam? Dolorum, provident
        asperiores. Quod illo quis ea, vero minus rerum iusto alias nihil?
      </p>
    </div>
  );
}

export default Joke;
