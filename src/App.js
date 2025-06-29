import "./App.scss";
import "./styles/fonts.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ROUTES from "../src/routes/routes";
import Loader from "../src/components/Loader/Loader";
import { WordsProvider } from "./context/WordsContext";

function App() {
  const MainPage = lazy(() => import("./components/Pages/MainPage/MainPage"));
  const WordList = lazy(() => import("./components/WordList/WordList"));
  const WordCards = lazy(() => import("./components/WordCards/WordCards"));
  const ErrorPage = lazy(() =>
    import("./components/Pages/ErrorPage/ErrorPage")
  );

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Header />
          <main>
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }>
              <WordsProvider>
                <Routes>
                  <Route path={ROUTES.MAIN} element={<MainPage />} />
                  <Route path={ROUTES.LIST} element={<WordList />} />
                  <Route path={ROUTES.GAME} element={<WordCards />} />
                  <Route path={ROUTES.ERROR} element={<ErrorPage />} />
                </Routes>
              </WordsProvider>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
