import React from "react";
import {wordList} from "..//..//assets/words";
import WordCard from "./WordCard/WordCard";
import styles from "./WordCards.module.css";

function WordCards() {
    return (
        <div className={styles.cardsContainer}>
{wordList.map((word) => {return <WordCard key={word.id} props={word} />})}
        </div>
    )

}

export default WordCards;