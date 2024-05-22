import { useRef } from "react";

export default function Nav({
  aboutRef,
  historyRef,
  valuesRef,
  shopsRef,
  containerRef,
}) {
  const scrollToSection = (ref) => {
    if (ref.current && containerRef.current) {
      const element = ref.current;
      const containerElement = containerRef.current;
      const offsetTop = element.offsetTop;

      containerElement.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <ul className="nav--list">
        <li className="nav--item">
          {" "}
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="nav--button"
          >
            Über uns
          </button>
        </li>
        <li className="nav--item">
          <button
            onClick={() => scrollToSection(historyRef)}
            className="nav--button"
          >
            Geschichte
          </button>
        </li>
        <li className="nav--item">
          <button
            onClick={() => scrollToSection(valuesRef)}
            className="nav--button"
          >
            Werte
          </button>
        </li>
        <li className="nav--item">
          <button
            onClick={() => scrollToSection(shopsRef)}
            className="nav--button"
          >
            Shops
          </button>
        </li>
        <li className="nav--item">
          <button className="nav--button">Impressum</button>
        </li>
        <li className="nav--item">
          <button className="nav--button">Datenschutz</button>
        </li>
      </ul>
    </nav>
  );
}
