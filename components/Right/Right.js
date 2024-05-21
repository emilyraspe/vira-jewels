import About from "../About/About";
import History from "../History/History";
import Nav from "../Nav/Nav";

export default function Right() {
  return (
    <div className="right">
      <div className="right--items">
        <Nav />
        <About />
        <History />
      </div>
    </div>
  );
}
