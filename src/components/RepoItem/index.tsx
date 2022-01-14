import React from 'react';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { formatNumber } from '../../utils/utils';
import Avatar from 'react-avatar';

function RepoItem(props: any) {
    const listItems = props.builtBy.map((d: any) =>
        <a target='_blank' key={d.username} href={d.url} style={{ marginLeft: '5px' }}>
            <Avatar src={d.avatar} size="24" round={true} />
        </a>
    );
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <div className={styles.title_group}>
                    <Icon icon="octicon:repo-16" />
                    <a className={styles.title} href={props.url}>
                        <div className={styles.username}>{props.username}</div> / <div className={styles.reponame}>{props.repoName}</div>
                    </a>
                </div>
                <div>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="dark" size="sm" className={styles.starbtn}>
                            <Icon icon="ant-design:star-outlined" width="16" height="16" inline={true} />Star
                        </Button>
                        <Dropdown.Toggle split variant="dark" size="sm" className={styles.starbtn_dropdown} />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            {props.description}
            <div className={styles.footer}>
                <div className={styles.start_part}>
                    <div className={styles.language}>{props.language}</div>
                    <div className={styles.stars}>
                        <Icon icon="ant-design:star-outlined" width="16" height="16" inline={true} />
                        {formatNumber(props.totalStars)}
                    </div>
                    <div className={styles.forks}>
                        <Icon icon="eos-icons:fork-outlined" width="16" height="16" inline={true} />
                        {formatNumber(props.forks)}
                    </div>
                    <div className={styles.builtby} >
                        Built by
                        <div className={styles.avatars}>  {listItems}  </div>

                    </div>
                </div>
                <div className={styles.end_part}>
                    <Icon icon="ant-design:star-outlined" width="16" height="16" inline={true} />
                    {formatNumber(props.starsSince)} stars today
                </div>
            </div>
        </div>
    );
}

export default RepoItem;