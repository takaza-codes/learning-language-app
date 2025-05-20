import React from "react";
import { wordList } from "../../assets/words";
import WordEntry from "./WordEntry";
import styles from "./WordList.module.scss";

const Table = () => {
  return (
    <table className={styles.wordList}>
      <thead className={styles.topRow}>
        <tr>
          <th className={styles.headerCell}>#</th>
          <th className={styles.headerCell}>Word</th>
          <th className={styles.headerCell}>Transcription</th>
          <th className={styles.headerCell}>Translation</th>
          <th className={styles.headerCell}>Action</th>
        </tr>
      </thead>
      <tbody>
        {wordList.map((word, index) => (
          <WordEntry key={word.id} word={word} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
