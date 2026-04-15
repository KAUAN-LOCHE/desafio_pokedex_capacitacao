import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemonPage, type PokemonBase } from '../api/http-client'; 

export const loadPokemons = createAsyncThunk(
  'pokedex/loadPokemons',
  async ({ page, limit }: { page: number; limit: number }) => {
    const offset = (page - 1) * limit;
    const response = await fetchPokemonPage(limit, offset);
    return response.results;
  }
);

interface PokedexState {
  list: PokemonBase[];
  loading: boolean;
  error: string | null;
  filters: {
    name: string;
    type: string;
  };
}

const initialState: PokedexState = {
  list: [],
  loading: false,
  error: null,
  filters: { name: '', type: '' }
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao buscar Pokémon';
      });
  },
});

export const { setFilters } = pokedexSlice.actions;
export default pokedexSlice.reducer;