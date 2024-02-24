import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>🚀 Welcome to Homepage!</h1>
      <ul className="people">
        {["articles", "books", "people"].map((path,index) => {
          return (
            <li className="card" key={index}>
              <Link to={"/" + path}>
                <div className="info">
                  <h2>{path.toUpperCase() + " PAGE"}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
