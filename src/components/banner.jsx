import "../styles/banner.css";

export default function Banner() {
  return (
    <div className="tide-banner" role="status" aria-label="Anuncio de temporada">
      <div className="tide-banner__track">
        <span className="tide-banner__item">
          ☀️ La playa se acerca — aprovechá los precios antes de que suba la marea 🌊
        </span>
        <span className="tide-banner__item">🌙 Envíos a todo el país</span>
        <span className="tide-banner__item">
          ☀️ La playa se acerca — aprovechá los precios antes de que suba la marea 🌊
        </span>
        <span className="tide-banner__item">🌙 Envíos a todo el país</span>
      </div>
    </div>
  );
}