import { useState } from "react";
import pokeApiClient, { type PokemonDetails } from "../../api/http-client";
import { PageShell } from "../../components/PageShell";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";
import "./styles.css";

export default function Busca() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setPokemon(null);

      const data = await pokeApiClient.get<PokemonDetails>(
          `pokemon/${searchTerm.toLowerCase().trim()}`
      );

      setPokemon({
        id: data.id,
        name: data.name,
        sprite:
            data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default,
        types: data.types.map((t: { type: { name: string } }) => t.type.name),
        stats: [
          { subject: "HP", A: data.stats[0].base_stat },
          { subject: "Atk", A: data.stats[1].base_stat },
          { subject: "Def", A: data.stats[2].base_stat },
          { subject: "Sp. Atk", A: data.stats[3].base_stat },
          { subject: "Sp. Def", A: data.stats[4].base_stat },
          { subject: "Speed", A: data.stats[5].base_stat },
        ],
        rawStats: {
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat,
          def: data.stats[2].base_stat,
          spAtk: data.stats[3].base_stat,
          spDef: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        }
      });
    } catch {
      setError("Pokémon não encontrado!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <section className="search-page">
        <h1 className="search-page__title">Procurar Pokémon</h1>

        <form className="search-page__form" onSubmit={handleSearch}>
          <input
            className="search-page__input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ex: Pikachu ou 25..."
          />
          <button className="search-page__button" type="submit" disabled={loading}>
            {loading ? "..." : "Buscar"}
          </button>
        </form>

        {error && <p className="search-page__error">{error}</p>}

        {pokemon && (
          <div className="search-page__card">
            <img src={pokemon.sprite} alt={pokemon.name} className="search-page__image" />
            <h2 className="search-page__name">{pokemon.name}</h2>

            <div className="search-page__types">
              {pokemon.types.map((t: string) => (
                <span key={t} className="search-page__type">
                  {t}
                </span>
              ))}
            </div>

            <div className="search-page__chart">
              <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={pokemon.stats}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar
                    name={pokemon.name}
                    dataKey="A"
                    stroke="#ef5350"
                    fill="#ef5350"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="search-page__stats">
              <p><strong>HP:</strong> {pokemon.rawStats.hp}</p>
              <p><strong>Atk:</strong> {pokemon.rawStats.atk}</p>
              <p><strong>Def:</strong> {pokemon.rawStats.def}</p>
              <p><strong>Sp.Atk:</strong> {pokemon.rawStats.spAtk}</p>
              <p><strong>Sp.Def:</strong> {pokemon.rawStats.spDef}</p>
              <p><strong>Spd:</strong> {pokemon.rawStats.speed}</p>
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
}
