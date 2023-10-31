import "./App.css";
import SearchHeader from "./components/searchHeader";

function App() {
  const handleSubmit = (term) => {
    console.log(term);
    searchImages(term);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
