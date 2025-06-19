"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FashionPage from "./pages/FashionPage";
import FashionDetailPage from "./pages/FashionDetailPage";
import BeautyPage from "./pages/BeautyPage";
import BeautyDetailPage from "./pages/BeautyDetailPage";
import LifestylePage from "./pages/LifestylePage";
import LifestyleDetailPage from "./pages/LifestyleDetailPage";
import HoroscopePage from "./pages/HoroscopePage";
import HoroscopeDetailPage from "./pages/HoroscopeDetailPage";

import "./globals.css";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import ContactPage from "./pages/ContactPage";
import AllArticlesPage from "./pages/AllArticlesPage";
import TagPage from "./pages/TagPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex-grow mt-[20vh] bg-[var(--color-bg-primary)]">
        <Header />
        <main>
          <Routes>
            {/* Ana Sayfa */}
            <Route path="/" element={<HomePage />} />

            {/* Moda Sayfaları */}
            <Route path="/fashion" element={<FashionPage />} />
            <Route path="/fashion/:id" element={<FashionDetailPage />} />

            {/* Güzellik Sayfaları */}
            <Route path="/beauty" element={<BeautyPage />} />
            <Route path="/beauty/:id" element={<BeautyDetailPage />} />

            {/* Kültür & Yaşam Sayfaları */}
            <Route path="/lifestyle" element={<LifestylePage />} />
            <Route path="/lifestyle/:id" element={<LifestyleDetailPage />} />

            {/* Burçlar Sayfaları */}
            <Route path="/horoscope" element={<HoroscopePage />} />
            <Route path="/horoscope/:id" element={<HoroscopeDetailPage />} />

            {/* Haberler Sayfaları */}
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />

            {/* İletişim Sayfası */}
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/all-articles" element={<AllArticlesPage />} />
            <Route path="/tag/:tag" element={<TagPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
