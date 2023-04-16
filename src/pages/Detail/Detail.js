import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import StarshipImg from "../../assets/images/starship.jpg";

const Detail = () => {
  const [starship, setStarship] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = (id) => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((response) => {
        setStarship(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  };

  useEffect(() => {
    if (!id) {
      navigate("/"); // Eğer userId yoksa anasayfaya yönlendirilir
    }

    fetchData(id);
  }, []);


  return (
    <div className={styles.detailContainer}>
      <button className={styles.goBackButton} onClick={() => navigate("/")}>
        <svg width="24px" height="24px" viewBox="0 0 1024 1024">
          <path
            fill="#fff"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill="#fff"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
      </button>
      <div className={styles.firstCard}>
        <div className={styles.secondCard}>
          <h1>
            {starship.name}
            <hr className={styles.line} />
          </h1>
          <img className={styles.image} src={StarshipImg} />
          <div className={styles.info}>
            <div className={styles.infoLine}>
              <h4>Model:</h4>
              <span>{starship.model}</span>
            </div>
            <div className={styles.infoLine}>
              <h4>HyperDrive Rating:</h4>
              <span>{starship.hyperdrive_rating}</span>
            </div>
            <div className={styles.infoLine}>
              <h4>Passengers:</h4>
              <span>{starship.passengers}</span>
            </div>
            <div className={styles.infoLine}>
              <h4>Max Atmosphering Speed:</h4>
              <span>{starship.max_atmosphering_speed}</span>
            </div>
            <div className={styles.infoLine}>
              <h4>Manufacturer:</h4>
              <span>{starship.manufacturer}</span>
            </div>
            <div className={styles.infoLine}>
              <h4>Spaceworks</h4>
            </div>
            <div className={styles.infoLine}>
              <h4>Crew:</h4>
              <span>{starship.crew}</span>
            </div>
            <div className={styles.infoLine}>
              <h4>Cargo Capacity:</h4>
              <span>{starship.cargo_capacity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
