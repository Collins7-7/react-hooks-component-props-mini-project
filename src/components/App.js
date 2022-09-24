import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";

const data = blogData;

function App() {
  return (
    <div className="App">
      <Header headerData={data}/>
      <About aboutData={data}/>
      <ArticleList listData= {data}/>
    </div>
  );
}

export default App;
