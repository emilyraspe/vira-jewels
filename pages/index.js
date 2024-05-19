import Header from "@/components/Header/Header";
import Left from "@/components/Left/Left";
import Right from "@/components/Right/Right";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Left />
        <Right />
      </main>
    </>
  );
}
