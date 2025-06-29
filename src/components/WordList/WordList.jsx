import { useWords } from "../../context/WordsContext";
import Loader from "../Loader/Loader";
import BaseButton from "../BaseButton/BaseButton";
import WordEntry from "./WordEntry";
import styles from "./WordList.module.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const WordList = () => {
  const { words, loading, error, addWord, updateWord, deleteWord } = useWords();

  const handleAddClick = () => {
    addWord({
      id: Date.now().toString(),
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "[]",
    });
  };

  if (loading) return <Loader />;

  return (
    <>
      {error && <ErrorMessage message={error} />}
      <BaseButton form="save" onClick={handleAddClick}>
        Add a new word
      </BaseButton>
      <table className={styles.wordList}>
        <thead className={styles.topRow}>
          <tr>
            <th>#</th>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <WordEntry
              key={word.id}
              word={word}
              index={index}
              onSave={updateWord}
              onDelete={deleteWord}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WordList;
