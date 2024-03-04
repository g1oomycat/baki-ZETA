import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./pages/main/Main";
import Product from "./pages/product/Product";
import "./styles/main.scss";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <main className="main">
      <Header />
      <Routes>
        <Route
          location={location}
          key={location.pathname}
          path="/"
          element={<Main />}
        />

        <Route index element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/product" element={<Main />} />
        <Route path="product/:id/:name" element={<Product />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
