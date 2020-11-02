import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import Body from "./Body";

describe("Body", () => {
    it("Should display form pop up when 'Request an Invite' is clicked", () => {
        // arrange 
        const {getByTestId, fireEvent} = render(<Body/>); 

        // act 
        fireEvent.click(getByTestId("inviteButton"));

        // assert 
        expect(getByTestId("inviteForm")).toBeVisible();
    })
})