import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {

  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/54317829?s=460&u=4be6d3b6128129b992f3b6b0673d6d4ae3b9f6ae&v=4" alt="Professor" />
        <div>
          <strong>Thiago Rodrigues</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio sequi eius repellendus, nostrum quam ut ipsa libero temporibus.
            <br /> <br />
            Nostrum sit asperiores fugit hic vero ratione error facilis labore distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores voluptatum asperiores tempora, ex error enim incidunt voluptate fuga ducimus unde.
          </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type='button' >
          <img src={whatsappIcon} alt="Fale comigo" />
              Entrar em contato
            </button>
      </footer>
    </article>

  )
};

export default TeacherItem;