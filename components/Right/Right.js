import About from "../About/About";
import History from "../History/History";
import Nav from "../Nav/Nav";
import Values from "../Values/Values";
import Shops from "../Shops/Shops";

export default function Right({
  aboutRef,
  historyRef,
  valuesRef,
  shopsRef,
  containerRef,
}) {
  return (
    <div className="right" ref={containerRef}>
      <div className="right--items">
        <Nav
          aboutRef={aboutRef}
          historyRef={historyRef}
          valuesRef={valuesRef}
          shopsRef={shopsRef}
          containerRef={containerRef}
        />
        <About aboutRef={aboutRef} />
        <History historyRef={historyRef} />
        <Values valuesRef={valuesRef} />
        <Shops shopsRef={shopsRef} />
      </div>
    </div>
  );
}
