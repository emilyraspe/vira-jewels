import Header from "@/components/Header/Header";
import Left from "@/components/Left/Left";
import Right from "@/components/Right/Right";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const shopsRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <>
      <main>
        <Left />
        <Right
          aboutRef={aboutRef}
          historyRef={historyRef}
          valuesRef={valuesRef}
          shopsRef={shopsRef}
          containerRef={containerRef}
        />
      </main>
    </>
  );
}
