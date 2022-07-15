import React from 'react';
import styles from './RepoList.module.css';

const RepoList = ({ repoList, fetchFailure }) => (!fetchFailure && <div className={styles.wrap}>
    <h1 className={styles.title}>Мои репозитории</h1>
    <ol className={styles.list}>
        {repoList.map(repo => <li key={repo.id}><a href={repo.html_url}  className={styles.item}>{repo.name}</a></li>)}
    </ol>
</div>);

export default RepoList;