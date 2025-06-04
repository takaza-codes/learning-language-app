import { useState } from "react";
import { wordList } from "../../assets/words";
import WordCard from "./WordCard/WordCard";
import CardButton from "./CardButton/CardButton";
import styles from "./WordCards.module.scss";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WordCards() {
  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentWord = wordList[cardIndex] || null;

  const goBack = () => {
    if (cardIndex > 0) {
      setDirection(-1);
      setCardIndex((prev) => prev - 1);
    }
  };

  const goForward = () => {
    if (cardIndex < wordList.length) {
      setDirection(1);
      setCardIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.cardsContainer}>
        <button
          className={styles.clickButton}
          onClick={goBack}
          disabled={cardIndex === 0}>
          <ArrowLeft />
        </button>
        <div className={styles.cardWrapper}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentWord ? currentWord.id : "end"}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}>
              {currentWord ? (
                <WordCard props={currentWord} />
              ) : (
                <div className={styles.finalCard}>
                  <h3>🎉 Look at that!</h3>
                  <p>
                    There are no more cards. <br />
                    Well done!
                  </p>
                  <CardButton text="Again?" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className={styles.clickButton}
          onClick={goForward}
          disabled={cardIndex >= wordList.length}>
          <ArrowRight />
        </button>
      </div>
      <div className="progressBar">
        {cardIndex < wordList.length
          ? `${cardIndex + 1} / ${wordList.length}`
          : ""}
      </div>
    </div>
  );
}

export default WordCards;
