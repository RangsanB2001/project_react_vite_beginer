import { Container } from "react-bootstrap";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}
