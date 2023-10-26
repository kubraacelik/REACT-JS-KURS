import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
import "./Course.css";

//courseArray'de belirtilen key'ler üstte yazdığım value değerleri ile eşleşince adresleri belirterek resmi getir
const courseMap = {
  Angular,
  Bootstrap, //Bootstrap:Bootstrap
  Ccsharp,
  Kompleweb,
};

function Course({ courseName }) {
  console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
