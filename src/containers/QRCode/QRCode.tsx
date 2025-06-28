import React from "react";
import type { FC } from "react";
import { QRCodeSVG } from "qrcode.react";

import styles from "./styles.module.css";

interface QRCodeProps {
  string: string;
}

const QRCode: FC<QRCodeProps> = ({ string }) => (
  <div className={styles.root}>{string && <QRCodeSVG value={string} />}</div>
);

export default QRCode;
