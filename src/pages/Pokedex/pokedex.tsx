import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PageShell } from "../../components/PageShell";
import type { AppDispatch, RootState } from "../../store/";
import { loadPokemons } from "../../store/pokedex-slice";
import styles from "./pokedex.module.css";

export default function Pokedex() {
  const dispatch = useDispatch<AppDispatch>();
  const { list: pokemons, loading, error } = useSelector((state: RootState) => state.pokedex);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const LIMIT = 40;
  const totalPages = 32;

  useEffect(() => {
    dispatch(loadPokemons({ page: currentPage, limit: LIMIT }));
  }, [currentPage, dispatch]);

  const handlePrevPage = () => {
    if (currentPage > 1) setSearchParams({ page: String(currentPage - 1) });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setSearchParams({ page: String(currentPage + 1) });
  };

  const goToPage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  const getPaginationGroup = () => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <PageShell mainClassName={styles.shellMain}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Pokédex - EJCOMP</h1>
        </header>

        <main className={styles.main}>
          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.grid}>
            {pokemons.map((poke) => (
              <article key={poke.id} className={styles.card}>
                <img
                  src={poke.image}
                  alt={poke.name}
                  className={styles.image}
                  loading="lazy"
                />
                <span className={styles.idNumber}>Nº {poke.id.padStart(3, "0")}</span>
                <h2 className={styles.name}>{poke.name.replace("-", " ")}</h2>
              </article>
            ))}
          </div>

          {loading && <p className={styles.loading}>Carregando dados da PokeAPI...</p>}

          {!loading && (
            <div className={styles.pagination}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`${styles.pageBtn} ${styles.navBtn}`}
              >
                &laquo;
              </button>

              {getPaginationGroup().map((item, index) => {
                if (item === "...") {
                  return (
                    <span key={`dots-${index}`} className={styles.dots}>
                      &#8230;
                    </span>
                  );
                }

                const pageNumber = item as number;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`${styles.pageBtn} ${
                      currentPage === pageNumber ? styles.activePage : ""
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`${styles.pageBtn} ${styles.navBtn}`}
              >
                &raquo;
              </button>
            </div>
          )}
        </main>
      </div>
    </PageShell>
  );
}
