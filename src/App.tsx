import React from "react";
import Counter from "./components/Counter";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>カウンターアプリ</h1>
      <Counter />
    </div>
  );
};

export default App;
