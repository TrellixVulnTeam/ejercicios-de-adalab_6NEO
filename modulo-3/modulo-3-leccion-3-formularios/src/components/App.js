import '../styles/App.scss';

// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  // Creamos la constante de estado name con el valor inicial de string vacío
  const [name, setName] = useState('');
  // OPCION 1 - HACER UN SELECT PARA ESCOGER LA TALLA
  // Creamos la constante de estado size con el valor inicial de string relleno
  // const [size, setSize] = useState('S');
  // OPCION 2 - ESCOGER LA TALLA EN VEZ DE CON SELECT, CON TRES RADIOS
  // Creamos la constante de estado size con el valor inicial de string vacío
  const [size, setSize] = useState('');
  // Creamos la constante de estado giftWrap con el valor inicial a booleano
  // Al iniciar suponemos que la clienta no quiere envolver el producto para regalo, por eso ponemos false
  const [giftWrap, setGiftWrap] = useState(false);

  // Creamos la función manejadora
  const handleName = (ev) => {
    // En la que guardamos el valor del input en name con setName
    setName(ev.target.value);
  };

  // // Creamos la función manejadora
  const handleSize = (ev) => {
    // En la que guardamos el valor del input en size con setSize
    setSize(ev.target.value);
  };

  // Creamos la función manejadora
  const handleGiftWrap = (ev) => {
    // En la que guardamos, no el valor del input, sino su propiedad checked, en giftWrap con setGiftWrap
    setGiftWrap(ev.target.checked);
  };

  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Escribe un nombre:</label>

          {/* Creamos un evento de tipo change en este input que va a ser manejado por handleName */}
          <input
            type="name"
            name="name"
            id="name"
            placeholder="María García"
            onChange={handleName}
          />

          {/* Usamos la constante name para pintarla en el HTML */}
          <p>Tu nombre es: {name}</p>
        </div>
        {/* <div>
          <label htmlFor="size">Selecciona tu talla de camiseta:</label>

          {/* Creamos un evento de tipo change en este select que va a ser manejado por handleSize */}
        {/* <select name="size" id="size" onChange={handleSize}>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select> */}

        {/* Usamos la constante size para pintarla en el HTML */}
        {/* <p>Tu talla de camiseta es: {size}.</p>
        </div> */}
        <div>
          <label htmlFor="giftWrap">
            ¿Quieres envolver para regalo tu compra?
          </label>

          {/* Creamos un evento de tipo change en este input que va a ser manejado por handleGiftWrap */}
          <input
            type="checkbox"
            name="gitWrap"
            id="gitWrap"
            onChange={handleGiftWrap}
          />

          {/* Usamos la constante giftWrap para pintarla en el HTML */}
          <p>
            {giftWrap === true ? 'Sí' : 'No'} te lo envolveremos para regalo
          </p>
        </div>
        <div>
          <label htmlFor="size">Selecciona tu talla de camiseta:</label>

          <label htmlFor="sizeS">Talla S</label>
          {/* Creamos un evento de tipo change en este radio que va a ser manejado por handleSize */}
          <input
            type="radio"
            id="sizeS"
            name="size"
            value="S"
            onChange={handleSize}
          />

          <label htmlFor="sizeM">Talla M</label>
          {/* Creamos un evento de tipo change en este radio que va a ser manejado por handleSize */}
          <input
            type="radio"
            id="sizeM"
            name="size"
            value="M"
            onChange={handleSize}
          />

          <label htmlFor="sizeL">Talla L</label>
          {/* Creamos un evento de tipo change en este radio que va a ser manejado por handleSize */}
          <input
            type="radio"
            id="sizeL"
            name="size"
            value="L"
            onChange={handleSize}
          />

          {/* Usamos la constante size para pintarla en el HTML */}
          <p>Tu talla de camiseta es: {size}</p>
        </div>
        <div>
          <label htmlFor="name">Escribe un nombre:</label>
          <input type="name" name="name" id="name" placeholder="María García" />
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default App;
