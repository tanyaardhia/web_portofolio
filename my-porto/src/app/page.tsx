import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
//fixing

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F4F6]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
      </div>
      <div className="mt-20"></div>
    </main>
  );
}
