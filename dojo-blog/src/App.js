import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      {/* nesting the Navbar  below*/}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
