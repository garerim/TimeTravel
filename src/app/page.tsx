import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Quiz />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
