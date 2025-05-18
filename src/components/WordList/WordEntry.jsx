import React, {useState} from "react";
import styles from "./WordList.module.css";
import BaseButton from "../BaseButton/BaseButton";

function WordEntry({ word, index }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempWord, setTempWord] = useState({ ...word });

    const handleEditClick = () => {
        setIsEditing(true);
        setTempWord({ ...word }); // Initialize temp state
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setTempWord({ ...word }); // Revert to original
    };

    const handleSaveClick = () => {
        // In a real app you'd also call a save function or update parent state
        console.log("Saved:", tempWord);
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        console.log("Deleted word with id:", word.id);
        // You could call a delete function passed in via props here
    };

    // const handleChange = (field, value) => {
    //     setTempWord(prev => ({ ...prev, [field]: value }));
    // };
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{index + 1}</td>
      <td className={styles.cell}>{word.english}</td>
      <td className={styles.cell}>{word.transcription}</td>
      <td className={styles.cell}>{word.russian}</td>
      <td className={styles.buttonContainer}>
                {!isEditing ? (
                    <>
                        <BaseButton onClick={handleEditClick}>Edit</BaseButton>
                        <BaseButton onClick={handleDeleteClick}>Delete</BaseButton>
                    </>
                ) : (
                    <>
                        <BaseButton onClick={handleSaveClick}>Save</BaseButton>
                        <BaseButton onClick={handleCancelClick}>Cancel</BaseButton>
                    </>
                )}
            </td>
    </tr>
  );
}


export default WordEntry;