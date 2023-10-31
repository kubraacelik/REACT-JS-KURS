function SearchHeader({ search }) {
  const handleFormSubmit = (event) => {
    search("kubra");
    event.preventDefault(); //sayfanın yenilenmesini önler
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default SearchHeader;
