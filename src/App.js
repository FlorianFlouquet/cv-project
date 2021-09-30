import React from "react";
import './style/style.css'

function App() {
  return (
    <div id="container">
      <form>
        <label>Nom</label>
        <input type="text"></input>
        <label>Prénom</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="mail"></input>
        <label>Numéro de téléphone</label>
        <input type="number"></input>
      </form>
    </div>
  );
}

export default App;
