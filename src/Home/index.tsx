import React, { useState, useEffect } from "react";
import "./styles.css";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";


const Home: React.FC = () => {
  const noticias = [
    "Nova temporada de Pokémon anunciada!",
    "Mangás em promoção na Nintendo Store.",
    "Participando da capacitação EJCOMP 2026!",
    "Novos recursos adicionados à PokeAPI este mês."
  ];

  const [noticiaAtual, setNoticiaAtual] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setNoticiaAtual((prev) => (prev + 1) % noticias.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [noticias.length]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
      <div className="home-layout">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        <div className="home-page">
          <div className="home-container">
            <header className="home-header">
              <div className="header-inner">
                <button className="btn-menu-lateral" onClick={toggleSidebar}>
                  <div className="icon-hamburguer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                  Menu Lateral
                </button>

                <nav className="header-links">
                  <a href="https://www.panini.com.br" target="_blank" rel="noreferrer">
                    Mangás
                  </a>
                  <a href="https://store.nintendo.com.br" target="_blank" rel="noreferrer">
                    Nintendo Store
                  </a>
                </nav>
              </div>
            </header>

            <main className="home-main">
              <img
                  src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                  alt="PokeAPI Logo"
                  className="logo-home"
              />

              <p className="subtitle-elegante">
                Bem-vindo ao sistema de catalogação Pokémon moderno.
              </p>

              <section className="news-card-isolated">
                <div className="news-header">
                  <div className="icon-news"></div>
                  <h3>Últimas Notícias Pokémon</h3>
                </div>

                <p className="news-text-isolated">{noticias[noticiaAtual]}</p>
              </section>
            </main>

            <Footer />
          </div>
        </div>
      </div>
  );
};

export default Home;
