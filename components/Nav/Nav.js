export default function Nav() {
  return (
    <nav>
      <a href="#">
        {" "}
        <img src="/Icon-weiß.png" alt="Icon Weiß" height={50} />
      </a>
      <ul className="nav--list">
        <li className="nav--item">
          <a href="#ueber-uns">Über uns</a>
        </li>
        <li className="nav--item">
          <a href="#geschichte">Geschichte</a>
        </li>
        <li className="nav--item">
          <a href="#werte">Werte</a>
        </li>
        <li className="nav--item">
          <a href="#shops">Shops</a>
        </li>
      </ul>
    </nav>
  );
}
