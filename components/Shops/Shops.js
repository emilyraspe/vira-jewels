import React, { useRef } from "react";

export default function Shops({ shopsRef }) {
  return (
    <div ref={shopsRef} className="content--container">
      <p id="geschichte" className="tagline">
        Unsere Produkte
      </p>
      <h2>Shops</h2>
      <ul>
        <li>
          <a href="https://www.weltbild.de/suche/vira%20jewels">Weltbild</a>
        </li>
        <li>
          <a href="https://www.neckermann.at/search?Keyword=vira+jewels">
            Neckermann
          </a>
        </li>
        <li>
          <a href="https://www.kaufland.de/s/?search_value=vira%20jewels">
            Kaufland
          </a>
        </li>
        <li>
          <a href="https://www.limango.de/shop/products?q=vira+jewels">
            Limango
          </a>
        </li>
        <li>
          <a href="https://www.otto.de/suche/vira%20jewels/">Otto</a>
        </li>
        <li>
          <a href="https://www.ebay.de/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=vira+jewels&_sacat=0">
            Ebay
          </a>
        </li>
      </ul>
    </div>
  );
}
