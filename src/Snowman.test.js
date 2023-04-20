import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";
//TODO: Could also test for which snowman image is showing based on nWrong
it("should only be able to guess up to 6 times", function () {
    const { container } = render(<Snowman  words={['apple']}/>);

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
  // for apple as answer
  it("matches snapshot", function () {
    const { container } = render(<Snowman words={['apple']}/>);
    const letters = container.querySelectorAll('button');
    fireEvent.click(letters[25]);
    fireEvent.click(letters[24]);
    fireEvent.click(letters[23]);
    fireEvent.click(letters[22]);
    fireEvent.click(letters[21]);
    fireEvent.click(letters[20]);
    expect(container).toMatchSnapshot();
  });