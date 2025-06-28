import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppInput from "./AppInput";

describe("AppInput", () => {
  const placeholderText = "Enter website to generate code";
  const setup = (qrString = "https://example.com", setQrString = jest.fn()) => {
    render(<AppInput qrString={qrString} setQrString={setQrString} />);
    return { setQrString };
  };

  it("renders input with value without https:// prefix", () => {
    setup("https://test.com");
    const input = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    expect(input.value).toBe("test.com");
  });

  it("renders the https:// prefix as a span", () => {
    setup();
    expect(screen.getByText("https://")).toBeInTheDocument();
  });

  it("calls setQrString with https:// prefix when input changes", () => {
    const setQrString = jest.fn();
    setup("https://old.com", setQrString);
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "newsite.com" } });
    expect(setQrString).toHaveBeenCalledWith("https://newsite.com");
  });

  it("trims whitespace from input value before calling setQrString", () => {
    const setQrString = jest.fn();
    setup("https://old.com", setQrString);
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "  spaced.com  " } });
    expect(setQrString).toHaveBeenCalledWith("https://spaced.com");
  });

  it("shows empty input if qrString is only https://", () => {
    setup("https://");
    const input = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    expect(input.value).toBe("");
  });

  it("calls setQrString with '' when input is ''", () => {
    const { setQrString } = setup("test.com");
    const input = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    expect(setQrString).toHaveBeenCalledWith("");
  });

  it("calls setQrString with '' when input is only 'https://'", () => {
    const { setQrString } = setup("");
    const input = screen.getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "https://" } });
    expect(setQrString).toHaveBeenCalledWith("");
  });
});
