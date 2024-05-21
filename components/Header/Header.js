import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="header--items">
        <h1>Vira Jewels</h1>
        <p className="by">By Khushi Kotahwala</p>
      </div>
    </div>
  );
}
