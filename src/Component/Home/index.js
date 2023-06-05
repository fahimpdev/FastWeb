import React from "react";
import Main from "./components/Main";
import Wordpress from "./components/Wordpress";
import Website from "./components/Website";
import Service from "./components/Service";
import Essential from "./components/Essential";
import Choice from "./components/Choice";

function Home() {
  return (
    <>
      <Main />
      <Wordpress />
      <Website />
      <Service />
      <Essential />
      <Choice />
    </>
  );
}

export default Home;
