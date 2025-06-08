import { motion, AnimatePresence } from "framer-motion";
import styles from "./WordCards.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Carousel({
  items,
  cardIndex,
  setCardIndex,
  direction,
  setDirection,
  renderItem,
  finalSlide,
  showProgress = false,
}) {
  const currentItem = items[cardIndex];

  const isLastCard = cardIndex === items.length;

  const goBack = () => {
    if (cardIndex > 0) {
      setDirection(-1);
      setCardIndex((prev) => prev - 1);
    }
  };

  const goForward = () => {
    if (!isLastCard) {
      setDirection(1);
      setCardIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.cardsContainer}>
        <button
          onClick={goBack}
          disabled={cardIndex === 0}
          className={styles.clickButton}>
          <ArrowLeft />
        </button>

        <div className={styles.cardWrapper}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentItem ? currentItem.id : "end"}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}>
              {currentItem ? renderItem(currentItem) : finalSlide}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goForward}
          disabled={isLastCard}
          className={styles.clickButton}>
          <ArrowRight />
        </button>
      </div>

      {showProgress && currentItem && (
        <div className={styles.progress}>
          {cardIndex + 1} / {items.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;
