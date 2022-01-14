// you can also use a renderer like "@testing-library/react" or "enzyme/mount" here
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TrendingRepos from "../TrendingRepos";

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import { screen } from '@testing-library/react';
describe('test TrendingRepos page', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    // Render app
    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={['/repos']}>
                <Routes>
                    <Route path="/repos" element={<TrendingRepos />} />
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
        expect(screen.getByText('See what the GitHub community is most excited about today.')).toBeInTheDocument();
    });

});