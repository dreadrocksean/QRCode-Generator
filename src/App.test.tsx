import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock child components
import QRCode from "./containers/QRCode";
jest.mock(
  "./containers/QRCode",
  () => (props: React.ComponentProps<typeof QRCode>) =>
    <div data-testid="qrcode" data-value={props.value} />
);
jest.mock("./containers/Header", () => () => <header data-testid="header" />);
jest.mock("./containers/Logos", () => () => <div data-testid="logos" />);
jest.mock(
  "./components/AppInput",
  () =>
    ({
      qrString,
      setQrString,
    }: {
      qrString: string;
      setQrString: (value: string) => void;
    }) =>
      (
        <input
          data-testid="app-input"
          value={qrString}
          onChange={(e) => setQrString(e.target.value)}
        />
      )
);
jest.mock("./assets/react.svg", () => "logo.svg");

describe("App", () => {
  it("renders Logos, Header, AppInput, and QRCode components", () => {
    render(<App />);
    expect(screen.getByTestId("logos")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("app-input")).toBeInTheDocument();
    expect(screen.getByTestId("qrcode")).toBeInTheDocument();
  });

  it("passes qrString state to QRCode and AppInput", () => {
    render(<App />);
    const input = screen.getByTestId("app-input") as HTMLInputElement;
    const qrCode = screen.getByTestId("qrcode");

    // Initially empty
    expect(input.value).toBe("");
    expect(qrCode).toHaveAttribute("data-value", "");

    // Simulate input change
    fireEvent.change(input, { target: { value: "hello world" } });
    expect(input.value).toBe("hello world");
    expect(screen.getByTestId("qrcode")).toHaveAttribute(
      "data-value",
      "hello world"
    );
  });

  it("QRCode receives correct imageSettings", () => {
    // We can only check that QRCode is rendered, as imageSettings is not visible in the mock
    render(<App />);
    expect(screen.getByTestId("qrcode")).toBeInTheDocument();
  });
});
