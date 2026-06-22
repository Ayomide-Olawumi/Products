import React from "react";
import styles from "../styles/notfound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>

      <p className={styles.text}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link to="/login" className={styles.button}>
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;