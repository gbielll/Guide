import React from 'react';
import './styles.css';
import mobile from "../images/mobile_app.png";

function Main() {
  return (
    <div className="main-container">
      <div className="left">

        <div className="box-text">
          <h1 className="main-h1">Venha ter o turismo na palma da mão com<br />o Guide.</h1>
          <p className="main-p">Ei! Você deseja ampliar o seu estabelecimento e torná-lo acessível para turistas? Não perca tempo! Venha fazer parte do Team Guide!</p>
          <button className="main-button">
            Ser Guide
          </button>

        </div>


      </div>
      <div className="right">
        <img
          src={mobile}
          alt="Logo"
          style={{
            marginTop: '30px',
            width: '500px',
            height: 'auto',
          }}
        />
      </div>

      
    </div>
  );
}

export default Main;
