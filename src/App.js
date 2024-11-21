import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
