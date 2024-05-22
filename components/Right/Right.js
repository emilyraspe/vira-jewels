import About from "../About/About";
import History from "../History/History";
import Nav from "../Nav/Nav";

export default function Right({ historyRef, containerRef }) {
  return (
    <div className="right" ref={containerRef}>
      <div className="right--items">
        <Nav historyRef={historyRef} containerRef={containerRef} />
        <About />
        <History historyRef={historyRef} />
      </div>
    </div>
  );
}
