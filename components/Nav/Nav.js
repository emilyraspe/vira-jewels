import { useRef } from "react";

export default function Nav({ historyRef, containerRef }) {
  const scrollToHistory = () => {
    if (historyRef.current && containerRef.current) {
      const historyElement = historyRef.current;
      const containerElement = containerRef.current;
      const offsetTop = historyElement.offsetTop;
      containerElement.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <ul className="nav--list">
        <li className="nav--item">Über uns</li>
        <li className="nav--item">
          <button onClick={scrollToHistory}>Geschichte</button>
        </li>
        <li className="nav--item">Werte</li>
        <li className="nav--item">Shops</li>
        <li className="nav--item">Impressum</li>
        <li className="nav--item">Datenschutz</li>
      </ul>
    </nav>
  );
}
