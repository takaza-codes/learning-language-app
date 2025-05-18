import React, {useState} from "react";
import styles from "./WordList.module.css";
import BaseButton from "../BaseButton/BaseButton";

function WordEntry({ word, index }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempWord, setTempWord] = useState({ ...word });

    const handleEditClick = () => {
        setIsEditing(true);
        setTempWord({ ...word });
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setTempWord({ ...word });
    };

    const handleSaveClick = () => {
        console.log("Saved:", tempWord);
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        console.log("Deleted word with id:", word.id);
    };

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{index + 1}</td>
      <td className={styles.cell}>{word.english}</td>
      <td className={styles.cell}>{word.transcription}</td>
      <td className={styles.cell}>{word.russian}</td>
      <td className={styles.buttonContainer}>
                {!isEditing ? (
                    <>
                        <BaseButton onClick={handleEditClick} type="edit" text="Edit"/>
                        <BaseButton onClick={handleDeleteClick} type="delete" text="Delete"/>
                    </>
                ) : (
                    <>
                        <BaseButton onClick={handleSaveClick} type="save" text="Save"/>
                        <BaseButton onClick={handleCancelClick} type="cancel" text="Cancel"/>
                    </>
                )}
            </td>
    </tr>
  );
}


export default WordEntry;