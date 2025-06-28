import { useState } from "react";

import QRCode from "./containers/QRCode";
import Header from "./containers/Header";
import Logos from "./containers/Logos";
import AppInput from "./components/AppInput";

import "./App.css";

function App() {
  const [qrString, setQrString] = useState("");

  return (
    <>
      <Logos />
      <Header />
      <AppInput qrString={qrString} setQrString={setQrString} />
      <QRCode string={qrString} />
    </>
  );
}

export default App;
