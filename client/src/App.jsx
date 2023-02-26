import React from "react";
import LoadingLine from "./components/Loadinline";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
export function App() {
  return (
    <div className="App">
      <LoadingLine />

      <div className="wrapper">
        <Header />
        <Main />
      </div>

      <Footer />
    </div>
  );
}
