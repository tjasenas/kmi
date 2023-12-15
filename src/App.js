import { useState } from "react";
import Result from "./components/Result";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [kmi, setKmi] = useState(0);
  const [info, setInfo] = useState({});

  const updateKmi = (kmi, info) => {
    setKmi(kmi);
    setInfo(info);
  };
  const resetKmi = () => {
    setKmi(0);
    setInfo({});
  };

  return (
    <div className="container mt-4">
      <Form onUpdateKmi={updateKmi} onReset={resetKmi} kmi={kmi} />
      {kmi !== 0 && <Result kmi={kmi} info={info} onReset={resetKmi} />}
    </div>
  );
}
export default App;
