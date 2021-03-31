import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

import CoverPost from "../component/CoverPost";

describe("Create CoverPage", () => {
  test("Should render without crush", async () => {
    await act(async () => {
      render(<CoverPost />);
    });

    expect(await screen.findByTestId("coverPostContainer")).toBeInTheDocument();
  });

  test("Heading should get render", async () => {
    await act(async () => {
      render(<CoverPost />);
    });

    expect(await screen.findByTestId("coverPostHeading")).toBeInTheDocument();
  });

  test("Para should get render", async () => {
    await act(async () => {
      render(<CoverPost />);
    });

    expect(await screen.findByTestId("coverPostPara")).toBeInTheDocument();
  });
});
