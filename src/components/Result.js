const Result = ({ kmi, onReset, info }) => {
  const textss = () => {
    if (kmi < 18) {
      return (
        <h3 className="my-5">
          Jūsų svoris <span className="text-warning">per mažas</span> Jūsų kūno
          masės indeksas yra {kmi}
        </h3>
      );
    }

    if (kmi >= 18 && kmi <= 25) {
      return (
        <h3 className="my-5">
          Jūsų svoris <span className="text-success">Normalus</span> Jūsų kūno
          masės indeksas yra {kmi}
        </h3>
      );
    }

    if (kmi > 25 && kmi <= 30) {
      return (
        <h3 className="my-5">
          Jūsų svoris <span Style="color: rgb(224, 120, 16)">per didelis</span>{" "}
          Jūsų kūno masės indeksas yra {kmi}
        </h3>
      );
    }

    if (kmi > 30) {
      return (
        <h3 className="my-5">
          Jūsų svoris{" "}
          <span className="text-danger">per didelis (nutukimas)</span> Jūsų kūno
          masės indeksas yra {kmi}
        </h3>
      );
    }
  };

  const resetHandler = () => {
    onReset();
  };

  return (
    <div className="mt-5">
      <h1>Jūsų masės indeksas</h1>
      <div className="mt-4">
        <strong>Jūsų svoris:</strong> {info.svoris}
      </div>
      <div>
        <strong>Jūsų ugis:</strong> {info.ugis}
      </div>

      {textss()}
      <button
        onClick={resetHandler}
        className="btn btn-secondary mt-2"
        type="button"
      >
        Skaičiuoti iš naujo
      </button>
    </div>
  );
};

export default Result;
