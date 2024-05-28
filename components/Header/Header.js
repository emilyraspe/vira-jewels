import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className="header">
      <div className="header--items">
        <p className="tagline">By Khushi Kotahwala</p>{" "}
        <a href="/">
          {" "}
          <img src="/Icon-weiß.png" alt="Icon Weiß" height={30} />
        </a>{" "}
      </div>
      <h1>Vira Jewels</h1>
    </div>
  );
}
