import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

import Header from "../component/Header";
import { ShoppingCart } from "../App";

describe("Create Header", () => {
  test("Should render without crushing", async () => {
    await act(async () => {
      render(<Header {...mockProps} cart={mockCart} />);
    });

    expect(await screen.findByTestId("header")).toBeInTheDocument();
  });

  test("Button should get rendered", async () => {
    await act(async () => {
      render(<Header {...mockProps} cart={mockCart} />);
    });

    expect(await screen.findByTestId("addToCartIcon")).toBeInTheDocument();
  });

  test("Button click function should get call", async () => {
    await act(async () => {
      render(<Header {...mockProps} cart={mockCart} />);
      fireEvent.click(await screen.findByTestId("addToCartIcon"));
    });

    expect(mockProps.handleDrawer).toHaveBeenCalled();
  });
});

const mockSideDrawer = true;
const mockHandleDrawe = jest.fn();
const mockIncreaseQty = jest.fn();
const mockDecreaseQty = jest.fn();

export const mockProps = {
  sideDrawer: mockSideDrawer,
  handleDrawer: mockHandleDrawe,
  increaseQty: mockIncreaseQty,
  decreaseQty: mockDecreaseQty,
};

export const mockCart: ShoppingCart[] = [
  {
    id: 1,
    itemQty: 2,
    itemName: "item",
    image: "imgPath",
    price: 123,
  },
];
