import "./App.css";
import { useState } from "react";
import Course from "./Course.js";

//Kurs Ekle butonuna basınca resimlerin random gelmesi için yazıldı
function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  //kurs ekle butonun basınca gelen resimlerden yeni dizi oluşturur
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />; //her resmin index değeri farklı olduğu için key hatası verir diye key ekledik
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}
export default App;
