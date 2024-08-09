import React from "react";
import { Link } from "react-router-dom";
import imag1 from "../pictures/imag1.png";
import imag2 from "../pictures/imag2.png"

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Section for Regular Users */}
      <div className="hero-section">
        <div className="content">
          <h1>Ahorra dinero en cada compra</h1>
          <p>
            LocalMart te hace la vida mas facil. Gasta de forma adecuada y mejora la gestion de tu dinero.
          </p>
          <Link to="/signup/user">
          <button className="cta-button">Convertirme en usuario</button>
          </Link>
        </div>
        <ul className="benefits">
          <li>
            <span>✔</span> Ofertas exclusivas
          </li>
          <li>
            <span>✔</span> Descuentos de hasta el 60%
          </li>
          <li>
            <span>✔</span> Apoya el comercio local
          </li>
        </ul>
        <div className="image-section">
          <img src={imag1} URL alt="User Image" />
        </div>
        <div className="features-section">
          <div className="feature-box">
            <h3>Ahorrar</h3>
            <p>
              Con las ofertas que tenemos en nuestra plataforma ahorrar sera mas facil que nunca
            </p>
          </div>
          <div className="feature-box">
            <h3>Controla tu dinero</h3>
            <p> Reserva las ofertas que mas te convengan, puedes cancelarlas sin gastos ni comisiones </p>
          </div>
          <div className="feature-box">
            <h3>Ofertas locales</h3>
            <p>
              Acceso exclusivo a fantasticas ofertas en tu panaderia local, tu bar habitual o tu restaurante favorito
            </p>
          </div>
        </div>
      </div>
      {/* Section for Businesses */}
      <div className="hero-section">
        <div className="content">
          <h1>Promociona tu negocio</h1>
          <p>
            LocalMart te da nuevos clientes, clientela recurrente. Sin esfuerzos, sin costes. Lleva tus ofertas a las personas adecuada.
          </p>
          <Link to="/signup/business">
          <button className="cta-button">Promocionar mi negocio</button>
          </Link>
        </div>
        <ul className="benefits">
          <li>
            <span>✔</span> Incrementa tus ventas
          </li>
          <li>
            <span>✔</span> Has crecer tu clientela habitual
          </li>
          <li>
            <span>✔</span> Miles de usuarios activos
          </li>
        </ul>
        <div className="image-section">
          <img
            src={imag2}
            URL
            alt="Business promotion"
          />
        </div>
        <div className="features-section">
          <div className="feature-box">
            <h3>Publicidad</h3> <p> Tu negocio sera visto por miles de clientes</p>
          </div>
          <div className="feature-box">
            <h3>Manegar tu negocio</h3>
            <p> Podras crear, editar o eliminar ofertas en cualquier momento </p>
          </div>
          <div className="feature-box">
            <h3> Ventas</h3>
            <p> Aumenta considerablemente tus ventas usando nuestras plataforma </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
