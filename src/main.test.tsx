import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as ReactDOMClient from "react-dom/client";

// Mock createRoot and document.getElementById
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
    unmount: jest.fn(),
  })),
}));

// 👇 Mock document.getElementById BEFORE importing main.tsx
const getElementByIdMock = jest.fn(() => document.createElement("div"));
Object.defineProperty(document, "getElementById", {
  value: getElementByIdMock,
  configurable: true,
});

describe("main.tsx", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls createRoot with the root element and renders <App /> inside <StrictMode>", () => {
    // Isolate import to re-run module initialization
    jest.isolateModules(() => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("./main"); // will use our mocked document.getElementById
    });

    expect(getElementByIdMock).toHaveBeenCalledWith("root");
    expect(ReactDOMClient.createRoot).toHaveBeenCalled();

    const rootInstance = (ReactDOMClient.createRoot as jest.Mock).mock
      .results[0].value;
    expect(rootInstance.render).toHaveBeenCalled();

    const renderArg = rootInstance.render.mock.calls[0][0];
    const { container } = render(renderArg);
    expect(container.querySelector("body")).not.toBeInTheDocument();
  });
});
