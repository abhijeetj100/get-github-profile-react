import { fireEvent } from "@testing-library/dom";
import {Checkbox} from "../UtilityFunctionComponents";
import React from "react";
import {render} from "@testing-library/react";

test("Selecting checbox", () => {
    const {getByLabelText} = render(<Checkbox />);
    const checkbox = getByLabelText(/Not Checked/);
    fireEvent.click(checkbox);
    console.log(checkbox.checked)
    expect(checkbox.checked).toEqual(true);
})