import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";
import { useQuery } from 'react-query'
import RepoItem from "../../components/RepoItem/index";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterDropdown from "../../components/FilterDropdown";

function TrendingRepos() {
    const navigate = useNavigate();

    const { isLoading, error, data } = useQuery('repoData', () =>
        // axios.get(`https://cors-anywhere.herokuapp.com/https://gh-trending-api.herokuapp.com/repositories`).then(res => {
        //     return res.data
        // })
        axios.get(`https://jsonp.afeld.me/?url=https://gh-trending-api.herokuapp.com/repositories`).then(res => {
            return res.data
        })

    )
    const toDeveloper = () => {
        navigate('/developers');
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        const listItems = data.map((d: any) =>
            // <div key={d.rank}></div>
            <RepoItem key={d.rank}
                repoName={d.repositoryName}
                url={d.url}
                username={d.username}
                description={d.description}
                language={d.language}
                totalStars={d.totalStars}
                forks={d.forks}
                starsSince={d.starsSince}
                builtBy={d.builtBy}
            />
        );
        return (
            <div className="App">
                <div className={styles.title}>Trending</div>
                <div className={styles.subtitle}>See what the GitHub community is most excited about today.</div>
                <div className={styles.seperator}></div>
                <div className={styles.content}>
                    <div className={styles.tableheader}>
                        <div className={styles.tab}>
                            <div className={styles.tab_left}  >Repositories</div>
                            <div className={styles.tab_right} onClick={toDeveloper} id="toDeveloper">Developers</div>
                        </div>
                        <div className={styles.filter_group}>
                            <FilterDropdown title="Spoken Language" />
                            <FilterDropdown title="Language" />
                            <FilterDropdown title="Date range" />
                        </div>
                    </div>
                    <div className="tablebody">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }

}

export default TrendingRepos;
