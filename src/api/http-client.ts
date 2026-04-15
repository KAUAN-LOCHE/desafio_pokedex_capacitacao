
// export interface PokemonResult {
//   name: string;
//   url: string;
// }

// export interface FetchPokemonsResponse {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: PokemonResult[];
// }

// const BASE_URL = 'https://pokeapi.co/api/v2';

// export const getPokemons = async (limit: number = 60, offset: number = 0): Promise<FetchPokemonsResponse> => {
//   try {
//     const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    
//     if (!response.ok) {
//       throw new Error(`Erro na API: ${response.status}`);
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error("Falha ao buscar Pokémons:", error);
//     throw error;
//   }
// };


// export const extractPokemonId = (url: string): string => {
//   const parts = url.split('/').filter(Boolean);
//   return parts[parts.length - 1];
// };



import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";


class HttpClient {
  private baseUrl: string;
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string, config: AxiosRequestConfig) {
    const parsedUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    this.baseUrl = parsedUrl;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      ...config,
    });
  }

  get instance(): AxiosInstance {
    return this.axiosInstance;
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(endpoint, config);
    return response.data;
  }
}


export const pokeApiClient = new HttpClient("https://pokeapi.co/api/v2", {
  headers: {
    "Content-Type": "application/json",
  },
});

export interface PokemonBase {
    name: string;
    url: string;
    id: string;
    image: string;
}

interface PokeApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
}

interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string | null;
        other: {
            'official-artwork': {
                front_default: string | null;
            };
        };
    };
    types: Array<{
        type: {
            name: string;
        };
    }>;
}

export interface PaginatedResponse {
    nextOffset: number | null;
    results: PokemonBase[];
}

export const fetchPokemonPage = async (limit: number = 40, offset: number = 0): Promise<PaginatedResponse> => {
    const data = await pokeApiClient.get<PokeApiResponse>("/pokemon", {
        params: { limit, offset } 
    });
    
    const results = data.results.map((poke) => {
        const urlParts = poke.url.split('/');
        const id = urlParts[urlParts.length - 2]; 
        
        return {
            name: poke.name,
            url: poke.url,
            id: id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
    });

    return {
        nextOffset: data.next ? offset + limit : null,
        results
    };
};

export const fetchDetailsRecursively = async (pokemonList: PokemonBase[], index: number = 0, results: PokemonDetails[] = []): Promise<PokemonDetails[]> => {
    if (index >= pokemonList.length) {
        return results;
    }

    const poke = pokemonList[index];
    try {
        const details = await pokeApiClient.get<PokemonDetails>(`/pokemon/${poke.id}`);
        results.push(details);
    } catch {
        console.error(`Erro ao buscar detalhes de ${poke.name}`);
    }

    return fetchDetailsRecursively(pokemonList, index + 1, results);
};