import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QRCode from "./QRCode";
import type { QRCodeProps } from "./QRCodeProps";
import logo from "../../assets/react.svg";

jest.mock("qrcode.react", () => ({
  QRCodeSVG: ({
    value,
    size,
    level,
    fgColor,
    bgColor,
    marginSize,
    title,
    minVersion,
    boostLevel,
    "data-testid": testId,
  }: any) => (
    <div
      data-testid={testId || "qrcode-svg"}
      data-value={value}
      data-size={size}
      data-level={level}
      data-fgcolor={fgColor}
      data-bgcolor={bgColor}
      data-marginsize={marginSize}
      data-title={title}
      data-minversion={minVersion}
      data-boostlevel={boostLevel?.toString()}
    >
      QRCodeSVG
    </div>
  ),
}));

const defaultImageSrc = "placeholder.png";

const defaultProps: Partial<QRCodeProps> = {
  value: "",
  imageSettings: {
    src: logo,
    height: 0,
    width: 0,
    excavate: false,
    x: undefined,
    y: undefined,
    opacity: 1,
    crossOrigin: undefined,
  },
};

describe("QRCode", () => {
  it("renders QRCodeSVG when value is provided", () => {
    render(<QRCode value="https://example.com" />);
    expect(screen.getByTestId("qrcode-svg")).toBeInTheDocument();
    expect(
      screen.queryByAltText("QR Code Placeholder")
    ).not.toBeInTheDocument();
  });

  it("passes props to QRCodeSVG", () => {
    render(
      <QRCode
        value="https://test.com"
        size={200}
        level="H"
        fgColor="#123456"
        bgColor="#abcdef"
        marginSize={2}
        title="Test QR"
        minVersion={2}
        boostLevel={false}
        imageSettings={{
          src: "logo.png",
          height: 20,
          width: 20,
          excavate: true,
        }}
      />
    );
    const svg = screen.getByTestId("qrcode-svg");
    expect(svg).toHaveAttribute("data-value", "https://test.com");
    expect(svg).toHaveAttribute("data-size", "200");
    expect(svg).toHaveAttribute("data-level", "H");
    expect(svg).toHaveAttribute("data-fgColor", "#123456");
    expect(svg).toHaveAttribute("data-bgColor", "#abcdef");
    expect(svg).toHaveAttribute("data-marginSize", "2");
    expect(svg).toHaveAttribute("data-title", "Test QR");
    expect(svg).toHaveAttribute("data-minVersion", "2");
    expect(svg).toHaveAttribute("data-boostLevel", "false");
  });

  it("renders placeholder image when value is empty", () => {
    render(<QRCode value="" imageSettings={{ src: defaultImageSrc }} />);
    const img = screen.getByAltText("QR Code Placeholder") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(defaultImageSrc);
    expect(screen.queryByTestId("qrcode-svg")).not.toBeInTheDocument();
  });

  it("applies empty style when value is empty", () => {
    const { container } = render(<QRCode value="" />);
    expect(container.firstChild?.className).toContain("empty");
  });

  it("does not apply empty style when value is present", () => {
    const { container } = render(<QRCode value="something" />);
    expect(container.firstChild?.className).not.toContain("empty");
  });

  it("renders with default props if not provided", () => {
    render(<QRCode />);
    expect(screen.getByAltText("QR Code Placeholder")).toBeInTheDocument();
  });
});
