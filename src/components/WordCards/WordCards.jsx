import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWordsAsync } from "../../store/words/wordsSlice";
import {
  setCardIndex,
  setDirection,
  resetSession,
} from "../../store/cards/wordCardsSlice";
import WordCard from "./WordCard/WordCard";
import CardButton from "./CardButton/CardButton";
import Carousel from "./Carousel/Carousel";
import styles from "./WordCards.module.scss";

function WordCards() {
  const dispatch = useDispatch();
  const { words, loading } = useSelector((state) => state.words);
  const { cardIndex, direction, wordsLearned } = useSelector(
    (state) => state.wordCards
  );

  useEffect(() => {
    dispatch(fetchWordsAsync());
  }, [dispatch]);

  const finalSlide = (
    <div className={styles.finalCard}>
      <h3>🎉 Look at that!</h3>
      <p>
        There are no more cards. <br />
        Well done!
      </p>
      <CardButton text="Again?" onClick={() => dispatch(resetSession())} />
    </div>
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wordsLearned}>
        <p>this session: </p>
        <p className={styles.counter}>{wordsLearned} </p>
        <p>words learned</p>
      </div>
      <Carousel
        items={words}
        cardIndex={cardIndex}
        setCardIndex={(idx) => dispatch(setCardIndex(idx))}
        direction={direction}
        setDirection={(dir) => dispatch(setDirection(dir))}
        renderItem={(word) => <WordCard props={word} />}
        finalSlide={finalSlide}
        showProgress
      />
    </div>
  );
}

export default WordCards;
