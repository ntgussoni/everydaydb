import { Features } from "./Features";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="dotted-bg-gray mb-20 flex min-h-screen flex-col items-center justify-between">
        <Hero />

        <Features />
      </main>
    </>
  );
}
