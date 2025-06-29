import { createContext, useContext, useEffect, useState } from "react";
import { get, post, patch, del } from "../api/httpRequests";

export const WordsContext = createContext();

export const useWords = () => useContext(WordsContext);

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWords = async () => {
    setLoading(true);
    try {
      const data = await get("words");
      setWords(data);
    } catch (error) {
      setError("Failed to load words");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const addWord = async (word) => {
    try {
      const newWord = await post("words", word);
      setWords((prev) => [...prev, newWord]);
    } catch (error) {
      setError("Failed to add word");
    }
  };

  const updateWord = async (updatedWord) => {
    try {
      await patch(`words/${updatedWord.id}`, updatedWord);
      setWords((prev) =>
        prev.map((word) => (word.id === updatedWord.id ? updatedWord : word))
      );
    } catch (error) {
      setError("Failed to update word");
    }
  };

  const deleteWord = async (id) => {
    try {
      await del(`words/${id}`);
      setWords((prev) => prev.filter((word) => word.id !== id));
    } catch (error) {
      setError("Failed to delete word");
    }
  };

  return (
    <WordsContext.Provider
      value={{ words, loading, error, addWord, updateWord, deleteWord }}>
      {children}
    </WordsContext.Provider>
  );
};
