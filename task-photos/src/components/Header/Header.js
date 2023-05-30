import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        src="https://images.unsplash.com/photo-1685306314640-31a02b996d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="text-box">
        <h1>Title</h1>
        <p>Some about text</p>
        <p>in two lines</p>
        <button className="btn">Button</button>
      </div>
    </header>
  );
};

export default Header;
