import React, { useState } from "react";
import styles from "./WordCard.module.scss";
import CardButton from "../CardButton/CardButton";

function WordCard({ props }) {
  const { english, transcription, russian } = props;
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <article className={styles.card}>
      <h3 className={styles.testWord}>{english}</h3>
      <p className={styles.transcription}>{transcription}</p>
      {!isRevealed ? (
        <CardButton onClick={() => setIsRevealed(true)} text="Проверить" />
      ) : (
        <div className={styles.translation}>{russian}</div>
      )}
    </article>
  );
}

export default WordCard;
