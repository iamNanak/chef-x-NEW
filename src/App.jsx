import React from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-start p-4">
      <Header />
      <Input />
    </main>
  );
};

export default App;
