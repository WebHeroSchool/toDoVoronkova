import React from 'react';
import styles from './InfoUser.module.css';

const InfoUser = ({infoUser, fetchFailure}) => { 
    return (fetchFailure ? <h1>Упс, что-то пошло не так...</h1> : <div className={styles.wrap}>
        <img src={infoUser.userUrl} alt='avatar' className={styles.img} />
        <div>
            <h1>{infoUser.userName}</h1>
            <p className={styles.description}>{infoUser.userBio}</p>
            <p className={styles.description}>{infoUser.userLocation}</p>
        </div>
    </div>)};

export default InfoUser;