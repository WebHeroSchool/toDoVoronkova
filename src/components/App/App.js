import React from "react";
import styles from "./App.module.css";
import "./Fonts/Fonts.css";
import Todo from "../Todo/Todo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';

const App = () => {
  return (
    <Router>
      <div className={styles.wrap}>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.content}>
          <nav className={styles.nav}>
            <Link to='/' className={styles.link}>About me</Link>
            <Link to='/todo' className={styles.link}>Todo</Link>
            <Link to='/contacts' className={styles.link}>Contacts</Link>
          </nav>
          <div className={styles.sidebar}>
            <Route path='/' exact component={AboutMe} className={styles.aboutMe}/>
            <Route path='/todo' component={Todo} />
            <Route path='/contacts' component={Contacts} />
          </div>
        </div>
      </div>
    </Router>
  );
}



export default App;
