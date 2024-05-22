import Header from "@/components/Header/Header";
import Left from "@/components/Left/Left";
import Right from "@/components/Right/Right";
import { useRef } from "react";

export default function Home() {
  const historyRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <>
      <main>
        <Left />
        <Right historyRef={historyRef} containerRef={containerRef} />
      </main>
    </>
  );
}
