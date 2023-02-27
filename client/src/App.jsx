import React from "react";
import LoadingLine from "./components/Loadinline";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { CreateUser } from "./components/CreateUser";
export function App() {
  return (
    <div className="App">
      <LoadingLine />

      <div className="wrapper">
        <Header />
        <Main>
          <CreateUser />
        </Main>
      </div>

      <Footer />
    </div>
  );
}
