import React, { useEffect, useState } from "react";
import "./styles.css";
import { PageShell } from "../../components/PageShell";

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
    <PageShell mainClassName="home-main">
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
    </PageShell>
  );
};

export default Home;
