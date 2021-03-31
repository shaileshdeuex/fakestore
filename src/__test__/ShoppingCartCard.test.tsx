import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ShoppingCart } from "../App";

import ShoppingCartCard from "../component/ShoppingCartCard";

describe("Create shoppingCartCard Component", () => {
  test("shoppingCartCard should get rendered", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
    });

    expect(await screen.findByTestId("cardContainer")).toBeInTheDocument();
  });

  test("Increase quantity button should get rendered", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
    });

    expect(await screen.findByTestId("increaseQty")).toBeInTheDocument();
  });

  test("Increase quantity button on click function should call", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
      fireEvent.click(await screen.findByTestId("increaseQty"));
    });

    expect(mockProps.increaseQty).toBeCalled();
  });

  test("Decrease quantity button should get rendered", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
    });

    expect(await screen.findByTestId("decreaseQty")).toBeInTheDocument();
  });

  test("Decrease quantity button on click function should call", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
      fireEvent.click(await screen.findByTestId("decreaseQty"));
    });

    expect(mockProps.decreaseQty).toBeCalled();
  });

  test("Delete button should get rendered", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
    });

    expect(await screen.findByTestId("deleteItem")).toBeInTheDocument();
  });

  test("Delete button on click function should call", async () => {
    await act(async () => {
      render(<ShoppingCartCard {...mockProps} />);
      fireEvent.click(await screen.findByTestId("deleteItem"));
    });

    expect(mockProps.decreaseQty).toBeCalled();
  });
});

const cartId = 1;
const item: ShoppingCart = {
  id: 1,
  itemQty: 2,
  itemName: "item",
  image: "imgPath",
  price: 123,
};
const increaseQty = jest.fn();
const decreaseQty = jest.fn();

const mockProps = {
  cartId,
  item,
  increaseQty,
  decreaseQty,
};
