import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordsAsync, addWordAsync } from "../../store/words/wordsSlice";
import Loader from "../Loader/Loader";
import BaseButton from "../BaseButton/BaseButton";
import WordEntry from "./WordEntry";
import styles from "./WordList.module.scss";

function useIsMobile(breakpoint = 576) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const WordList = () => {
  const dispatch = useDispatch();
  const [newWord, setNewWord] = useState(null); // store the temp word locally

  const { loading, error, words } = useSelector((state) => state.words);
  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(fetchWordsAsync());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

  const handleAddWord = (createdWord) => {
    dispatch(addWordAsync(createdWord));
    setNewWord(null);
  };

  const cancelAddWord = () => {
    setNewWord(null);
  };

  return (
    <>
      <BaseButton form="save" onClick={addWord}>
        Add a new word
      </BaseButton>
      <table className={styles.wordList}>
        <thead className={styles.topRow}>
          <tr>
            <th className={styles.headerCell}>#</th>
            <th className={styles.headerCell}>Word</th>
            {!isMobile && <th className={styles.headerCell}>Transcription</th>}
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
              isMobile={isMobile}
            />
          )}
          {words.map((word, index) => (
            <WordEntry
              key={word.id}
              word={word}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WordList;
