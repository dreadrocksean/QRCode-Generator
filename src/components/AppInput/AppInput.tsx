import React from "react";
import styles from "./styles.module.css";

interface AppInputProps {
  qrString: string;
  setQrString: (value: string) => void;
}
type HandleChangeEvent = React.ChangeEvent<HTMLInputElement>;

const AppInput: React.FC<AppInputProps> = ({ qrString, setQrString }) => {
  const handleChange = (e: HandleChangeEvent): void => {
    const trimmedValue: string = e.target.value
      .trim()
      .replace(/https:\/\//g, "");
    if (trimmedValue) setQrString(`https://${trimmedValue}`);
    else setQrString("");
  };

  return (
    <div className={styles.formGroup}>
      <span>https://</span>
      <input
        className={styles.formField}
        value={qrString.replace(/https:\/\//g, "")}
        type="text"
        placeholder="Enter website to generate code"
        onChange={handleChange}
      />
    </div>
  );
};

export default AppInput;
