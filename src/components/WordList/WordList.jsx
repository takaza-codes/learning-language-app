import { useState, useEffect } from "react";
import { get } from "../../api/httpRequests";
import WordEntry from "./WordEntry";
import styles from "./WordList.module.scss";

const WordList = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    get("words").then(setWords).catch(console.error);
  }, []);

  const handleSaveWord = (updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) => (word.id === updatedWord.id ? updatedWord : word))
    );
  };

  const handleDelete = (delWord) => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== delWord));
  };

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
        {words.map((word, index) => (
          <WordEntry
            key={word.id}
            word={word}
            index={index}
            onSave={handleSaveWord}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default WordList;
