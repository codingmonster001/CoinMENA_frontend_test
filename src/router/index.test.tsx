// you can also use a renderer like "@testing-library/react" or "enzyme/mount" here
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TrendingDevelopers from "../views/TrendingDevelopers";
import TrendingRepos from "../views/TrendingRepos";

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import { screen } from '@testing-library/react';
describe('test router', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    // Render app
    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={['/developers']}>
                <Routes>
                    <Route path="/developers" element={<TrendingDevelopers />} />
                    <Route path="/repos" element={<TrendingRepos />} />
                </Routes>
            </MemoryRouter>
        </QueryClientProvider>,
        root
    );
    it("navigates /repos when you click the [Repositories] tab", async () => {

        // faking http request
        await new Promise((r) => setTimeout(r, 3000));
        // Check out the /developers page is loaded successfully.
        expect(screen.getByText('These are the developers building the hot tools today.')).toBeInTheDocument();

        // Interact with page
        act(() => {
            // Find the [Repositories] tab 
            const gotoRepo = document.querySelector('#toRepo');
            // Click it
            if (gotoRepo != null) {
                gotoRepo.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }

        });

        //faking http request
        await new Promise((r) => setTimeout(r, 3000));

        // Check out the /repos page is loaded successfully.
        expect(screen.getByText('See what the GitHub community is most excited about today.')).toBeInTheDocument();
    });

    it("navigates /developers when you click the [Developers] tab", async () => {

        // Interact with page
        act(() => {
            // Find the [Repositories] tab 
            const gotoDeveloper = document.querySelector('#toDeveloper');
            // Click it
            if (gotoDeveloper != null) {
                gotoDeveloper.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }
        });

        //faking http request
        await new Promise((r) => setTimeout(r, 3000));

        // Check out the /developers page is loaded successfully.
        expect(screen.getByText('These are the developers building the hot tools today.')).toBeInTheDocument();
    });
});