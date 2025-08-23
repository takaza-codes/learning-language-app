import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { revealWord } from "../../../store/cards/wordCardsSlice";
import styles from "./WordCard.module.scss";
import CardButton from "../CardButton/CardButton";

function WordCard({ props }) {
  const { english, transcription, russian, id } = props;
  const [isRevealed, setIsRevealed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsRevealed(false);
  }, [id]);

  const handleCheckClick = () => {
    if (!isRevealed) {
      dispatch(revealWord(id));
      setIsRevealed(true);
    }
  };

  return (
    <article className={styles.card}>
      <h3 className={styles.testWord}>{english}</h3>
      <p className={styles.transcription}>[{transcription}]</p>
      {!isRevealed ? (
        <CardButton onClick={handleCheckClick} text="Check" />
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
