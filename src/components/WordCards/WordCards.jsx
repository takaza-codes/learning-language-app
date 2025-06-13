import { useState } from "react";
import { wordList } from "../../assets/words";
import WordCard from "./WordCard/WordCard";
import CardButton from "./CardButton/CardButton";
import Carousel from "./Carousel/Carousel";
import styles from "./WordCards.module.scss";

function WordCards() {
  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleReset = () => {
    setCardIndex(0);
    setDirection(1);
  };

  const finalSlide = (
    <div className={styles.finalCard}>
      <h3>🎉 Look at that!</h3>
      <p>
        There are no more cards. <br />
        Well done!
      </p>
      <CardButton text="Again?" onClick={handleReset} />
    </div>
  );

  const [wordsLearned, setWordsLearned] = useState(0);
  const [revealedIds, setRevealedIds] = useState([]);

  const handleFirstReveal = (id) => {
    if (!revealedIds.includes(id)) {
      setWordsLearned((prev) => prev + 1);
      setRevealedIds([...revealedIds, id]);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wordsLearned}>
        <p>this session: </p>
        <p className={styles.counter}>{wordsLearned} </p>
        <p>words learned</p>
      </div>
      <Carousel
        items={wordList}
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
        direction={direction}
        setDirection={setDirection}
        renderItem={(word) => (
          <WordCard props={word} onFirstReveal={handleFirstReveal} />
        )}
        finalSlide={finalSlide}
        showProgress
      />
    </div>
  );
}

export default WordCards;
