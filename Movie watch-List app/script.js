let movie = document.querySelector("form");
let movieName = document.querySelector(".movie-input");

movie.addEventListener("submit", addMovie);

let movieList = [];
let div1;

function removeMovie(index) {
  movieList.splice(index, 1);
  render();
}

function render() {
  let div2 = movieList.map((ele, index) => {
    return (<div className="movie-name" key= {index}>
      <input type="checkbox"/>
      <label>{ele}</label>
      <i className="far fa-window-close" aria-hidden="true" onClick={() => removeMovie(index)}></i>
    </div>)
  });
  root.render(div2);
}

function addMovie(event) {
  event.preventDefault();
  movieList.push(movieName.value);
  movieName.value = "";
  render();

}

let root = ReactDOM.createRoot(document.getElementById("movieRender"));

