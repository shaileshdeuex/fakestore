import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

import CardDrawer from "../component/CartDrawer";
import { mockProps, mockCart } from "./Header.test";

describe("Create Card Component", () => {
  test("Drawer should get rendered", async () => {
    await act(async () => {
      render(<CardDrawer {...mockProps} cart={mockCart} />);
    });

    expect(await screen.findByTestId("drawer")).toBeInTheDocument();
  });

  test("Button should get rendered", async () => {
    await act(async () => {
      render(<CardDrawer {...mockProps} cart={mockCart} />);
    });

    expect(await screen.findByTestId("closeIcon")).toBeInTheDocument();
  });

  test("Total amout should get rendered", async () => {
    await act(async () => {
      render(<CardDrawer {...mockProps} cart={mockCart} />);
    });

    expect(await screen.findByTestId("totalAmount")).toBeInTheDocument();
  });

  test("Button click function should get call", async () => {
    await act(async () => {
      render(<CardDrawer {...mockProps} cart={mockCart} />);
      fireEvent.click(await screen.findByTestId("closeIcon"));
    });

    expect(mockProps.handleDrawer).toHaveBeenCalled();
  });

  test("No item should display if Cart is empty", async () => {
    await act(async () => {
      render(<CardDrawer {...mockProps} cart={[]} />);
    });

    expect(await screen.findByTestId("noItemDiv")).toBeInTheDocument();
  });
});
