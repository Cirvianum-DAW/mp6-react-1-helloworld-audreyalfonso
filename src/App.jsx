import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat");
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);
  const setPlacesDisponibles = (updatedPlaces) => {
    console.log(updatedPlaces);
    tipusEstudiant === "no-graduat"
      ? setNGPlaces(updatedPlaces)
      : setGPlaces(updatedPlaces);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">

        <label className="mr-2">
          <b>Places Disponibles No Graduats: </b>
          {ngPlaces}
        </label>
        <br></br>

        <label className="mr-2">
          <b>Places Disponibles Graduats: </b>
          {gPlaces}
        </label>
        <br></br>

        <label className="mr-2">
          <b>Selecciona Tipus d'Estudiant: </b>
        </label>
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === "no-graduat" ? ngPlaces : gPlaces}
      />
    </div>
  );
}

export default App;
