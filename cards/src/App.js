import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi ea corporis harum odit iste ut, 
                    eaque, velit ratione beatae illo molestias natus, nisi fugit facere earum consequatur quam. Soluta?"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi ea corporis harum odit iste ut, 
                    eaque, velit ratione beatae illo molestias natus, nisi fugit facere earum consequatur quam. Soluta?"
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi ea corporis harum odit iste ut, 
                    eaque, velit ratione beatae illo molestias natus, nisi fugit facere earum consequatur quam. Soluta?"
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi ea corporis harum odit iste ut, 
                    eaque, velit ratione beatae illo molestias natus, nisi fugit facere earum consequatur quam. Soluta?"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
