import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className="header">
      <div className="header--items">
        <a href="#">
          {" "}
          <img src="/Icon-weiß.png" alt="Icon Weiß" height={30} />
        </a>
        <h1>Vira Jewels</h1>
        <p className="by">By Khushi Kotahwala</p>
      </div>
    </div>
  );
}
