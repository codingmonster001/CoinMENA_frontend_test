import React from 'react';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import Avatar from 'react-avatar';

function DeveloperItem(props: any) {

    return (
        <div className={styles.item}>
            <div className={styles.rank}>{props.rank}</div>
            <div className={styles.userpart}>
                <Avatar src={props.avatar} size="50" round={true} />
                <div className={styles.namepart}>
                    <a className={styles.namelink} href={props.url}>{props.name}</a>
                    <a className={styles.usernamelink} href={props.url}>{props.username}</a>
                </div>
            </div>
            <div className={styles.repopart}>
                {props.popularRepository.repositoryName != null && (
                    <div id="popular_part">
                        <div className={styles.popular}>
                            <Icon icon="lucide:flame" width="16" height="16" color="#bc4c00" inline={true} /> POPULAR REPO
                        </div>
                        <div className={styles.reponame_part}>
                            <Icon icon="octicon:repo-16" inline={true} />
                            <a href={props.popularRepository.url} className={styles.reponame}>{props.popularRepository.repositoryName}</a>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.footer}>
                <Button variant="dark" size="sm">Follow</Button>
            </div>
        </div>
    );
}

export default DeveloperItem;