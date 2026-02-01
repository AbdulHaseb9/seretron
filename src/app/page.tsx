import { Contact } from "@/components/shared/contact";
import { ModeToggle } from "@/components/theme-toggle";
import Hero from "./components/Hero";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Contact /> */}
      {/* <ModeToggle /> */}
    </main>
  );
}
