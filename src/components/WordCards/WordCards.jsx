import { useState } from "react";
import WordCard from "./WordCard/WordCard";
import CardButton from "./CardButton/CardButton";
import Carousel from "./Carousel/Carousel";
import styles from "./WordCards.module.scss";
import { useWords } from "../../context/WordsContext";

function WordCards() {
  const { words, isLoading, error } = useWords();
  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [wordsLearned, setWordsLearned] = useState(0);
  const [revealedIds, setRevealedIds] = useState(new Set());

  const handleReset = () => {
    setCardIndex(0);
    setDirection(1);
    setWordsLearned(0);
    setRevealedIds(new Set());
  };

  const handleFirstReveal = (id) => {
    if (!revealedIds.has(id)) {
      setWordsLearned((prev) => prev + 1);
      setRevealedIds((prev) => new Set([...prev, id]));
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wordsLearned}>
        <p>this session:</p>
        <p className={styles.counter}>{wordsLearned}</p>
        <p>words learned</p>
      </div>
      <Carousel
        items={words}
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
