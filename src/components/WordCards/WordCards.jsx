import { useState } from "react";
import { wordList } from "../../assets/words";
import WordCard from "./WordCard/WordCard";
import CardButton from "./CardButton/CardButton";
import Carousel from "./Carousel";
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

  return (
    <Carousel
      items={wordList}
      cardIndex={cardIndex}
      setCardIndex={setCardIndex}
      direction={direction}
      setDirection={setDirection}
      renderItem={(word) => <WordCard props={word} />}
      finalSlide={finalSlide}
      showProgress
    />
  );
}

export default WordCards;
