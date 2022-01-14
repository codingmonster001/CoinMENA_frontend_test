import { render, screen } from "@testing-library/react";
import FilterDropdown from "../FilterDropdown";

test("render FilterDropdown element", () => {
    render(<FilterDropdown title="Spoken Language" />);
    expect(screen.getByText("Spoken Language:")).toBeInTheDocument();
});
