import "./App.css";
import Main from "./components/main/Main";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
