import React, { useState, useEffect } from 'react';
import './styles.css';

const Home: React.FC = () => {
  const noticias = [
    "Nova temporada de Pokémon anunciada!",
    "Mangás em promoção na Nintendo Store.",
    "Participando da capacitação EJCOMP 2026!",
    "Novos recursos adicionados à PokeAPI este mês."
  ];

  const [noticiaAtual, setNoticiaAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNoticiaAtual((prev) => (prev + 1) % noticias.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [noticias.length]);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-inner">
          <button className="btn-menu-lateral">
            <div className="icon-hamburguer">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            Menu Lateral
          </button>
          
          <nav className="header-links">
            <a href="https://www.panini.com.br" target="_blank" rel="noreferrer">Mangás</a>
            <a href="https://store.nintendo.com.br" target="_blank" rel="noreferrer">Nintendo Store</a>
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
      
        {/* Card de Notícias ISOLADO e CENTRALIZADO (Não Full Width) */}
        <section className="news-card-isolated">
          <div className="news-header">
            <div className="icon-news"></div>
            <h3>Últimas Notícias Pokémon</h3>
          </div>
          <p className="news-text-isolated">{noticias[noticiaAtual]}</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer-isolated">
        <div className="footer-content-isolated">
          <p>© 2026 DexApp LTDA. Todos os direitos reservados.</p>
          <p>Contato: capacita@ejcomp.com.br</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;