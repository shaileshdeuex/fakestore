import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { CardItemType } from "../App";
import MediaCard from "../component/CardComponent";

describe("Create Card Component", () => {
  test("title should get rendered", async () => {
    await act(async () => {
      render(<MediaCard {...mockProps} />);
    });

    expect(await screen.findByText("title")).toBeInTheDocument();
  });

  test("category should get rendered", async () => {
    await act(async () => {
      render(<MediaCard {...mockProps} />);
    });

    expect(await screen.findByTestId("description")).toBeInTheDocument();
  });

  test("price should get rendered", async () => {
    await act(async () => {
      render(<MediaCard {...mockProps} />);
    });

    expect(await screen.findByTestId("price")).toBeInTheDocument();
  });

  test("Button should get rendered", async () => {
    await act(async () => {
      render(<MediaCard {...mockProps} />);
    });

    expect(await screen.findByTestId("addToCartBtn")).toBeInTheDocument();
  });

  test("Button on click function should get call", async () => {
    await act(async () => {
      render(<MediaCard {...mockProps} />);
      fireEvent.click(await screen.findByTestId("addToCartBtn"));
    });

    expect(mockaddToCart).toHaveBeenCalled();
  });
});

const mockData: CardItemType = {
  id: 1,
  category: "any",
  description: "lorem",
  image: "imgPath",
  price: 123,
  title: "title",
};

const mockaddToCart = jest.fn();

const mockProps = {
  item: mockData,
  addToCart: mockaddToCart,
};
