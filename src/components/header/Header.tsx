'use client';

import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import styles from './Header.module.css';

export default function Header() {
    return (
        <section className={styles.header} >
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <h1 className={styles.title}>O.Mohebbi</h1>
                        <h6 className={styles.subtitle}>Senior Software Engineer / Solution Architect</h6>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={styles.socialLinks}>
                            <a href="https://www.linkedin.com/in/omidmohebbise" target="_blank" rel="noopener noreferrer">
                                <Linkedin className={styles.icon} />
                            </a>
                            <a href="mailto:omidmohebbise@gmail.com">
                                <Mail className={`${styles.icon} ${styles.mailIcon}`} />
                            </a>
                            <a href="https://www.github.com/omidmohebbise" target="_blank" rel="noopener noreferrer">
                                <Github className={`${styles.icon} ${styles.githubIcon}`} />
                            </a>
                            <a href="https://x.com/omid_mohebbi_se" target="_blank" rel="noopener noreferrer">
                                <Twitter className={`${styles.icon} ${styles.twitterIcon}`} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}