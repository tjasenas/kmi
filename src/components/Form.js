import { useState, useRef } from "react";

const Form = ({ onUpdateKmi, onReset, kmi }) => {
  const [error, setError] = useState("");

  const svoris = useRef();
  const ugis = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    if (ugis.current.value === "" || svoris.current.value === "") {
      onReset(0);
      return setError("Klaida! prašome užpildyti visus laukelius");
    }

    const ugis1 = Number(ugis.current.value);
    const svoris1 = Number(svoris.current.value);
    const kmi = ((svoris1 / (ugis1 * ugis1)) * 10000).toFixed(2);

    onUpdateKmi(kmi, { svoris: svoris1, ugis: ugis1 });

    ugis.current.value = "";
    svoris.current.value = "";
  };

  return (
    <>
      <h1 className="mb-5">Kūno masės indekso skaičiuoklė</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            ref={svoris}
            type="number"
            className="form-control"
            placeholder="Svoris KG"
          />
        </div>
        <div className="mb-3">
          <input
            ref={ugis}
            type="number"
            className="form-control"
            placeholder="Ugis CM"
          />
        </div>
        {error && <p className="mt-4">{error}</p>}
        <button className="btn btn-outline-primary mt-2" type="submit">
          Skaičiuoti
        </button>
        {kmi !== 0 && (
          <button className="btn btn-secondary mt-2 ms-2" type="reset">
            Atstatyti
          </button>
        )}
      </form>
    </>
  );
};

export default Form;
