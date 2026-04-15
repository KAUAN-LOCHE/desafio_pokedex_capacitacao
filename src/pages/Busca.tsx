import { useState } from "react";
import pokeApiClient, { type PokemonDetails } from "../api/http-client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

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
      <section className="content">
        <h1>Procurar Pokémon</h1>
        <form
            onSubmit={handleSearch}
            style={{ display: "flex", gap: "10px", marginBottom: "20px", width: "100%", maxWidth: "500px" }}
        >
          <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ex: Pikachu ou 25..."
              style={{ padding: "10px", flex: 1, borderRadius: "8px", border: "1px solid #808080" }}
          />
          <button type="submit" disabled={loading} style={{ padding: "10px 20px", cursor: "pointer" }}>
            {loading ? "..." : "Buscar"}
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {pokemon && (
            <div className="search-card">
              <img src={pokemon.sprite} alt={pokemon.name} style={{ width: "200px", display: "block", margin: "0 auto" }} />
              <h2 style={{ textTransform: "capitalize", textAlign: "center" }}>{pokemon.name}</h2>

              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                {pokemon.types.map((t: string) => (
                    <span key={t} className={`type-badge type-${t.toLowerCase()}`}>{t}</span>
                ))}
              </div>

              <div style={{ width: "100%", height: 250, marginTop: "20px" }}>
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

              <div className="stats-grid">
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
  );
}
