import "./Sidebar.css";

interface SidebarProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
    return (
        <div className="home-sidebar-container">
            <aside className={`home-sidebar ${!isOpen ? "home-sidebar--closed" : ""}`}>
                <button
                    className="sidebar__toggle-btn"
                    onClick={onToggle}
                    aria-label="Alternar menu"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                    </svg>
                </button>

                <div className="sidebar__brand">
                    <h1 className="sidebar__title">
                        Poké<span>dex</span>
                    </h1>
                    <p className="sidebar__subtitle">Enciclopédia Pokémon</p>
                </div>

                <nav className="sidebar__nav">
                    <p className="sidebar__nav-label">Navegação</p>

                    <a href="/" className="sidebar__nav-item active">
                        <svg className="nav-icon" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                        <span>Home</span>
                    </a>

                    <a href="/pokedex" className="sidebar__nav-item">
                        <svg className="nav-icon" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                        </svg>
                        <span>Pokédex</span>
                    </a>

                    <a href="/busca" className="sidebar__nav-item">
                        <svg className="nav-icon" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <span>Busca</span>
                    </a>
                </nav>

                <div className="sidebar__status-wrapper">
                    <div className="sidebar__status-card">
                        <div className="sidebar__status-row">
                            <span className="sidebar__status-dot" />
                            <span>Sistema online</span>
                        </div>

                        <div className="sidebar__pokeball-row">
                            <div className="sidebar__ball-mini" />
                            <div className="sidebar__stat">
                                <strong>898</strong>
                                <span>Pokémons registrados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
