import { render, screen } from '@testing-library/react';
import DeveloperItem from '../DeveloperItem';

describe('render DeveloperItem element', () => {
    it('render DeveloperItem element case 1', () => {
        const { container } = render(<DeveloperItem
            rank={1}
            avatar={'https://avatars.githubusercontent.com/u/11247099?s=96&v=4'}
            name={'test'}
            url={'https://github.com/antfu'}
            username={'antfu'}
            popularRepository={
                {
                    repositoryName: 'abc',
                    description: null,
                    url: "https://github.com/abiosoft/colima"
                }
            }
        />);
        expect(screen.getByText('antfu')).toBeInTheDocument();
        expect(screen.getByText('test')).toBeInTheDocument();
        const popular_part = container.querySelector("#popular_part");
        expect(popular_part).toBeInTheDocument();
        expect(screen.getByText('abc')).toBeInTheDocument();
    });
    it('render DeveloperItem element case 2 (for null)', () => {
        const { container } = render(<DeveloperItem
            rank={1}
            avatar={'https://avatars.githubusercontent.com/u/11247099?s=96&v=4'}
            name={'test'}
            url={'https://github.com/antfu'}
            username={'antfu'}
            popularRepository={
                {
                    repositoryName: null,
                    description: null,
                    url: null
                }
            }
        />);
        expect(screen.getByText('antfu')).toBeInTheDocument();
        expect(screen.getByText('test')).toBeInTheDocument();
        const popular_part = container.querySelector("#popular_part");
        expect(popular_part).toBeNull();
    });
});