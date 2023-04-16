import React, { startTransition } from "react";
import { Link } from 'react-router-dom';

import Starship from "../../assets/images/starship.jpg"
import styles from "./Card.module.css";

const Card = ({ starship }) => {
/*   const slugify = (str) => {
    return str.toLowerCase().replace(/ /g, '-');
  } */
  return (
    <Link to={`/starship/${starship.id}`}>
    <div className={styles.cardContainer}>
       
      <img
        className={styles.image}
        src={Starship}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{starship.name}</h3>
        <div className={styles.infoLine}>
          <h4>Model:</h4>
          <span>{starship.model}</span>
        </div>
        <div className={styles.infoLine}>
          <h4>Hyperdrive Rating:</h4>
          <span>{starship.hyperdrive_rating}</span>
        </div>
      </div>
      
    </div>
    </Link>
  );
};

export default Card;
