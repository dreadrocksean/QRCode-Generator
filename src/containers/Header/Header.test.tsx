import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  it("renders a header element", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders the correct title", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { name: /QR Code Generator/i });
    expect(title).toBeInTheDocument();
  });
});
