import React, { useState, useEffect } from "react";
import styles from "./WordCard.module.scss";
import CardButton from "../CardButton/CardButton";

function WordCard({ props }) {
  const { english, transcription, russian, id } = props;
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(false);
  }, [id]);

  return (
    <article className={styles.card}>
      <h3 className={styles.testWord}>{english}</h3>
      <p className={styles.transcription}>{transcription}</p>
      {!isRevealed ? (
        <CardButton onClick={() => setIsRevealed(true)} text="Check" />
      ) : (
        <div
          className={styles.translation}
          onClick={() => setIsRevealed(false)}>
          {russian}
        </div>
      )}
    </article>
  );
}

export default WordCard;
