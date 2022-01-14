import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";
import { useQuery } from 'react-query'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterDropdown from "../../components/FilterDropdown";
import DeveloperItem from "../../components/DeveloperItem";

function TrendingDevelopers() {
    const navigate = useNavigate();

    const { isLoading, error, data } = useQuery('developerData', () =>
        // axios.get(`https://cors-anywhere.herokuapp.com/https://gh-trending-api.herokuapp.com/repositories`).then(res => {
        //     return res.data
        // })
        axios.get(`https://jsonp.afeld.me/?url=https://gh-trending-api.herokuapp.com/developers`).then(res => {
            return res.data
        })

    )
    const toRepo = () => {
        navigate('/repos');
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        const listItems = data.map((d: any) =>
            // <div key={d.rank}></div>
            <DeveloperItem key={d.rank}
                name={d.name}
                rank={d.rank}
                url={d.url}
                username={d.username}
                avatar={d.avatar}
                popularRepository={d.popularRepository}
            />
        );
        return (
            <div className="App">
                <div className={styles.title}>Trending</div>
                <div className={styles.subtitle}>These are the developers building the hot tools today.</div>
                <div className={styles.seperator}></div>
                <div className={styles.content}>
                    <div className={styles.tableheader}>
                        <div className={styles.tab}>
                            <div className={styles.tab_left} onClick={toRepo} id="toRepo">Repositories</div>
                            <div className={styles.tab_right} >Developers</div>
                        </div>
                        <div className={styles.filter_group}>
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

export default TrendingDevelopers;
