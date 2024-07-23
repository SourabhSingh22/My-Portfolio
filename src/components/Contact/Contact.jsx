import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="sourabhsingh22112003@gamil.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
                </li>

                <li className={styles.link}>

                    <a href="https://www.linkedin.com/in/sourabh-singh-036809258/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" /></a>
                </li>

                <li className={styles.link}>

                    <a href="https://github.com/SourabhSingh22"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
                </li>
            </ul>
        </footer>
    );
}
