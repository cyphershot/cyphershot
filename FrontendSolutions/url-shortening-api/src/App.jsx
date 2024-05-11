import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Herosection from "./components/Hero/Herosection";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
        <Herosection />
        <Footer />
      </main>
    </>
  );
}
