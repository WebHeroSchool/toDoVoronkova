import React from 'react';
import styles from './AboutMe.module.css';
import { Octokit } from "@octokit/rest";
import preloader from './preloader.gif';
import InfoUser from '../InfoUser/InfoUser';
import RepoList from '../RepoList/RepoList';

const octokit = new Octokit();
class AboutMe extends React.Component {
    state = {
        isLoading: true,
        error: '',
        repoList: [],
        fetchFailure: false,
        userLogin: 'voronkova-ab',
        infoUser: {}
    }

    componentDidMount() {
        const fetchInfoUser = octokit.users.getByUsername({
            username: this.state.userLogin,
        });

        const fetchRepoList = octokit.rest.repos.listForUser({
            username: this.state.userLogin
        });

        Promise.all([fetchInfoUser, fetchRepoList])
            .then(([responseUser, responseRepo]) => {
                console.log([responseUser, responseRepo]);
                const dataUser = responseUser.data;
                const dataRepo = responseRepo.data;

                this.setState({
                    infoUser: {
                        userUrl: dataUser.avatar_url,
                        userName: dataUser.name,
                        userLocation: dataUser.location,
                        userBio: dataUser.bio,
                    },
                    repoList: dataRepo,
                    isLoading: false,
                });
            }).catch((err) => {
                this.setState({
                    isLoading: false,
                    fetchFailure: true,
                    error: err
                });
                console.log(this.state.error);
            });
    }


    render() {
        const { isLoading, repoList, fetchFailure, infoUser } = this.state;

        return (<div className={styles.aboutMe}>
            {isLoading ? <img src={preloader} alt={preloader} /> : (<article className={styles.wrap}>
                <InfoUser fetchFailure={fetchFailure} infoUser={infoUser} />
                <RepoList fetchFailure={fetchFailure} repoList={repoList} />
            </article>)}
        </div>)
    }

}



export default AboutMe;