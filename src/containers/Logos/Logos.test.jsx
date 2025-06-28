import { render, screen } from "@testing-library/react";
import Logos from "./Logos";
import React from "react";

describe("Logos component", () => {
  it("renders the Vite logo image", () => {
    render(<Logos />);
    const img = screen.getByAltText(/vite logo/i);
    expect(img).toBeInTheDocument();
  });

  it("links to the Vite website", () => {
    render(<Logos />);
    const link = screen.getByRole("link", { name: /vite logo/i });
    expect(link).toHaveAttribute("href", "https://vite.dev");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("applies the correct CSS classes", () => {
    render(<Logos />);
    const img = screen.getByAltText(/vite logo/i);
    expect(img).toHaveClass("logo");
    const container = img.closest("div");
    expect(container).toHaveClass("root");
  });
});
