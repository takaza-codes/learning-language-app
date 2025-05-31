import "./App.scss";
import "./styles/fonts.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordCards from "./components/WordCards/WordCards";
import WordList from "./components/WordList/WordList";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/table" element={<WordList />} />
            <Route path="/game" element={<WordCards />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
