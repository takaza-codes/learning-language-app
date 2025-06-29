import { useState, useEffect } from "react";
import { get, patch, post } from "../../api/httpRequests";
import Loader from "../Loader/Loader";
import BaseButton from "../BaseButton/BaseButton";
import WordEntry from "./WordEntry";
import styles from "./WordList.module.scss";

const WordList = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newWord, setNewWord] = useState(null); // store the temp word

  useEffect(() => {
    get("words").then(setWords).catch(console.error);
    setLoading(false);
  }, []);

  const handleSaveWord = (updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) => (word.id === updatedWord.id ? updatedWord : word))
    );
    patch(`words/${updatedWord.id}`, updatedWord);
  };

  const handleDelete = (delWord) => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== delWord));
  };

  const generateId = () => Date.now().toString();

  const addWord = () => {
    setNewWord({
      id: generateId(),
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "[]",
    });
  };

  const handleAddWord = async (createdWord) => {
    try {
      const savedWord = await post("words", createdWord);
      setWords((prevWords) => [...prevWords, savedWord]);
      setNewWord(null);
    } catch (error) {
      console.error("Error while saving new word:", error.message);
    }
  };

  const cancelAddWord = () => {
    setNewWord(null);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BaseButton form="save" onClick={addWord}>
            Add a new word
          </BaseButton>
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
              {newWord && (
                <WordEntry
                  word={newWord}
                  index={words.length}
                  isNew={true}
                  onSave={handleAddWord}
                  onCancel={cancelAddWord}
                />
              )}
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
        </>
      )}
    </>
  );
};

export default WordList;
