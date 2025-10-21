export const BarreLogo = () => {
  return (
    <img src="/Barre_mini_logo_png.png" alt="BeBarre Logo" height={56} width={56} style={{objectFit: 'contain', display: 'block'}} />
  );
};

export default function NavBar() {
  return (
    <nav className="bebarre-navbar-wrapper">
      <div className="bebarre-navbar-brand">
        <BarreLogo />
      </div>
      <ul className="bebarre-navbar-links">
        <li><a href="#metodo" className="bebarre-link">Método Barre</a></li>
        <li><a href="#clases" className="bebarre-link">Clases</a></li>
        <li><a href="#horarios" className="bebarre-link">Horarios</a></li>
        <li><a href="#team" className="bebarre-link">Team</a></li>
      </ul>
    </nav>
  );
}

