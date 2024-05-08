import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="p-5">
        <button className="bg-green-700 hover:bg-green-600 transition text-white text-lg font-semibold rounded-lg py-2 px-5">
          <a href="/create">Nova Tarefa</a>
        </button>
      </div>
    </div>
  );
}

export default App;
