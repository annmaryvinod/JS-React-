const Navbar = () => {
  return <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className ="links">
          <a href ="/">Home</a>
          <a href ="/create" >New Blog</a>
      </div>
  </nav>;
};

export default Navbar;
// remember the function is exported and imported
// also : component is a function that returns some jsx template.
// the Navbar has to be imported to the App.js and then nested within the App function

