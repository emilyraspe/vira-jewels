import React, { useRef } from "react";

export default function Shops({ shopsRef }) {
  return (
    <div ref={shopsRef} className="content--container">
      <p id="geschichte" className="tagline">
        Unsere Produkte
      </p>
      <h2>Shops</h2>
      <ul className="shops--list">
        <li className="shops--item">
          <h4>Weltbild</h4>
          <a href="https://www.weltbild.de/suche/vira%20jewels">
            <button>Zum Onlineshop</button>
          </a>
        </li>
        <li className="shops--item">
          <h4>Neckermann</h4>
          <a href="https://www.neckermann.at/search?Keyword=vira+jewels">
            <button>Zum Onlineshop</button>
          </a>
        </li>
        <li className="shops--item">
          <h4>Kaufland</h4>
          <a href="https://www.kaufland.de/s/?search_value=vira%20jewels">
            <button>Zum Onlineshop</button>
          </a>
        </li>
        <li className="shops--item">
          <h4>Limango</h4>
          <a href="https://www.limango.de/shop/products?q=vira+jewels">
            <button>Zum Onlineshop</button>
          </a>
        </li>
        <li className="shops--item">
          <h4>Otto</h4>
          <a href="https://www.otto.de/suche/vira%20jewels/">
            {" "}
            <button>Zum Onlineshop</button>
          </a>
        </li>
        <li className="shops--item">
          <h4>Ebay</h4>
          <a href="https://www.ebay.de/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=vira+jewels&_sacat=0">
            <button>Zum Onlineshop</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
