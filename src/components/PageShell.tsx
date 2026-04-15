import { type ReactNode, useState } from "react";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import "./PageShell.css";

interface PageShellProps {
  children: ReactNode;
  mainClassName?: string;
}

export function PageShell({ children, mainClassName = "" }: PageShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="page-shell">
      <Sidebar isOpen={isSidebarOpen} />

      <div
        className={`page-shell__surface ${
          !isSidebarOpen ? "page-shell__surface--expanded" : ""
        }`}
      >
        <div className="page-shell__content">
          <header className="page-shell__header">
            <div className="page-shell__header-inner">
              <button className="page-shell__menu-btn" onClick={toggleSidebar}>
                <div className="page-shell__hamburger" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                Menu Lateral
              </button>

              <nav className="page-shell__links">
                <a
                  href="https://www.panini.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mangás
                </a>
                <a
                  href="https://store.nintendo.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nintendo Store
                </a>
              </nav>
            </div>
          </header>

          <main className={`page-shell__main ${mainClassName}`.trim()}>
            {children}
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
