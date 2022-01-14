import { render, screen } from '@testing-library/react';
import RepoItem from '../RepoItem';

test('render RepoItem element', () => {
    render(<RepoItem
        repoName={'repoitem_test'}
        url={'https://avatars.githubusercontent.com/u/11247099?s=96&v=4'}
        username={'test'}
        description={'https://github.com/antfu'}
        language={'C++'}
        totalStars={20000}
        forks={20100}
        starsSince={100}
        builtBy={[{ "username": "v4d1", "url": "https://github.com/v4d1", "avatar": "https://avatars.githubusercontent.com/u/23397910?s=40&v=4" }, { "username": "freddieleeman", "url": "https://github.com/freddieleeman", "avatar": "https://avatars.githubusercontent.com/u/6225998?s=40&v=4" }]}
    />);
    expect(screen.getByText('repoitem_test')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('20,100')).toBeInTheDocument();
    expect(screen.getByText('100 stars today')).toBeInTheDocument();
});