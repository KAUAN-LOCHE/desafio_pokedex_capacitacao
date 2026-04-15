import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__left">
                <div className="footer__logo-icon">
                    {/* Ícone estilizado de uma Pokébola simples */}
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86l5.7 5.7c.36.36.95.36 1.31 0l6.09-6.09c.03.28.05.57.05.86 0 4.41-3.59 8-8 8zm6.54-9.36l-5.69 5.69c-.18.18-.46.18-.64 0l-5.69-5.69C6.07 8.1 8.84 6 12 6c3.16 0 5.93 2.1 6.54 4.64z"/>
                    </svg>
                </div>
                <div className="footer__copy">
                    <strong>Pokédex EJCOMP da capacitação</strong>
                    <br />
                    © {new Date().getFullYear()} — Todos os direitos reservados
                </div>
            </div>

            <div className="footer__contacts">
                <div className="footer__contact-item">
                    <span className="footer__contact-label">Suporte Técnico</span>
                    <a href="mailto:dev@ejcomp.com.br" className="footer__contact-value">dev@ejcomp.com.br</a>
                </div>
                <div className="footer__contact-item">
                    <span className="footer__contact-label">Base de Dados</span>
                    <span className="footer__contact-value">PokeAPI v2</span>
                </div>
            </div>

            <div className="footer__version-tag">
                Capacitação 2026
            </div>
        </footer>
    );
}
