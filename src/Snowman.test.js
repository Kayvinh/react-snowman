import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";

it("should only be able to guess up to 6 times", function () {
    const { container } = render(<Snowman/>);

    const letters = container.querySelectorAll('button');
    console.log(letters)

    // clicking z
    fireEvent.click(letters[25]);
    fireEvent.click(letters[24]);
    fireEvent.click(letters[23]);
    fireEvent.click(letters[22]);
    fireEvent.click(letters[21]);
    fireEvent.click(letters[20]);

    expect(
      container.querySelector('.numWrong')
    ).toHaveAttribute('data', '6');

    expect(container.querySelector('.btns')).not.toBeInTheDocument();
  });
  
  it("matches snapshot", function () {
    const { container } = render(<Snowman/>);
    const letters = container.querySelectorAll('button');
    fireEvent.click(letters[25]);
    fireEvent.click(letters[24]);
    fireEvent.click(letters[23]);
    fireEvent.click(letters[22]);
    fireEvent.click(letters[21]);
    fireEvent.click(letters[20]);
    expect(container).toMatchSnapshot();
  });