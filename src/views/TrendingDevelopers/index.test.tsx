// you can also use a renderer like "@testing-library/react" or "enzyme/mount" here
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TrendingDevelopers from "../TrendingDevelopers";

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import { screen } from '@testing-library/react';
describe('test TrendingDevelopers page', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    // Render app
    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={['/developers']}>
                <Routes>
                    <Route path="/developers" element={<TrendingDevelopers />} />
                </Routes>
            </MemoryRouter>
        </QueryClientProvider>,
        root
    );
    it("test component rendering", async () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
        //faking http request
        await new Promise((r) => setTimeout(r, 3000));

        // Check out the page is loaded successfully.
        expect(screen.getByText('These are the developers building the hot tools today.')).toBeInTheDocument();
    });

});