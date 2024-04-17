import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Hola ${firstName} ${lastName}!`);
    props.setPlacesDisponibles(props.placesActuals - 1);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Detalls d'estudiant: {props.tipusEstudiantSelect}
        </h1>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="nom"
              className="block text-gray-700 font-medium mb-2"
            >
              Nom:
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="form-input w-full border rounded-md shadow-sm bg-gray-200"
              onBlur={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="cognom"
              className="block text-gray-700 font-medium mb-2"
            >
              Cognom:
            </label>
            <input
              type="text"
              id="cognom"
              name="cognom"
              className="form-input w-full border rounded-md shadow-sm bg-gray-200"
              onBlur={(e) => setLastName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>

          <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
            {welcomeMessage}
          </label>
        </form>
      </div>
    </div>
  );
}

export default Form;
