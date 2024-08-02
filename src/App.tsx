import "./index.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header";
import { LoginPage, SignUpPage, ViewBooksPage, RentBooksPage, HomePage, AboutUsPage, ContactUsPage } from "./pages/";
import Footer from "./pages/Footer";
import { BookProvider } from "./context/BookContext"; 
import SeeBookDetailes from "./pages/SeeBookDetailes";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <BookProvider>
          <header className="sticky top-0">
            <Header />
          </header>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/view-books" element={<ViewBooksPage />} />
              <Route path="/see-book" element={<SeeBookDetailes />} />
              <Route path="/rent-books" element={<RentBooksPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
          </main>
          <footer className="sticky bottom-0">
            <Footer />
          </footer>
        </BookProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
