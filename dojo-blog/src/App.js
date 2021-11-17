import "./App.css";

const App = () => {
  // all hoistings here

  const title = "Welcome to the new blog!";
  const likes = 50;
  // const person = { name: "Harry", age: 23 };
  const link = "http://www.google.com";

  // To add dynamic content such as a variable into the component 1. declare it within the component before the return statement and then use the curly braces syntax
  // The curly braces will denote that the variable within it has to be dispplayed in the browser like we added within the <h1>{ title }</h1> here!
  // This kind of output does not work for objects and booleans! They will show error!
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{ [1,2,3,4,5] }</p>
        <p> {"Hello Ninja"}</p>
        <p>{52}</p>
        <p>{ Math.random() * 84}</p>
        {/* <p> { person} </p> */}
        <a href={ link }>Google Site</a>
      </div>
    </div>
  );
};

export default App;
