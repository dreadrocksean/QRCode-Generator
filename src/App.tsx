import { useState } from "react";

import QRCode from "./containers/QRCode";
import Header from "./containers/Header";
import Logos from "./containers/Logos";
import AppInput from "./components/AppInput";
import logo from "./assets/react.svg";

import "./App.css";

function App() {
  const [qrString, setQrString] = useState("");
  const qrCodeImageSettings = {
    src: logo,
    height: 40,
    width: 40,
    excavate: true,
    x: undefined,
    y: undefined,
    opacity: 1,
    crossOrigin: undefined,
  };

  return (
    <>
      <Logos />
      <Header />
      <AppInput qrString={qrString} setQrString={setQrString} />
      <QRCode value={qrString} imageSettings={qrCodeImageSettings} />
    </>
  );
}

export default App;
