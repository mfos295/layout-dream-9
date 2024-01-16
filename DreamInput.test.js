// __tests__/DreamInput.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DreamInput from "../components/DreamInput";

describe("DreamInput Component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <DreamInput value="" onChangeText={() => {}} />,
    );
    const dreamInput = getByTestId("dream-input");
    expect(dreamInput).toBeTruthy();
  });

  test("handles input change correctly", () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <DreamInput value="" onChangeText={onChangeTextMock} />,
    );
    const dreamInput = getByTestId("dream-input");

    fireEvent.changeText(dreamInput, "Test Dream Input");
    expect(onChangeTextMock).toHaveBeenCalledWith("Test Dream Input");
  });
});
