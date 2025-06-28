import type { FC } from "react";
import { QRCodeSVG } from "qrcode.react";
import type { QRCodeProps } from "./QRCodeProps";

import styles from "./styles.module.css";

const defaultProps: Partial<QRCodeProps> = {
  value: "",
  size: 300,
  level: "L",
  bgColor: "#552200",
  fgColor: "#00ffff",
  marginSize: 4,
  title: "QR Code",
  minVersion: 1,
  boostLevel: true,
  imageSettings: {
    src: "",
    height: 0,
    width: 0,
    excavate: false,
    x: undefined,
    y: undefined,
    opacity: 1,
    crossOrigin: undefined,
  },
};

const QRCode: FC<QRCodeProps> = ({ ...rest }) => {
  const props: QRCodeProps = { ...defaultProps, ...rest };
  return (
    <div className={[styles.root, !props.value && styles.empty].join(" ")}>
      {props.value ? (
        <QRCodeSVG {...props} />
      ) : (
        <div className={styles.placeholder}>
          <img src={props.imageSettings?.src} alt="QR Code Placeholder" />
        </div>
      )}
    </div>
  );
};

export default QRCode;
