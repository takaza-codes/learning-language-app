import React, { useState } from "react";
import styles from "./WordList.module.scss";
import BaseButton from "../BaseButton/BaseButton";
import { Edit3, Trash2, X, Save } from "lucide-react";

function WordEntry({ word, index, onSave }) {
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
    // console.log("Saved:", tempWord);
    onSave(tempWord);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    console.log("Deleted word with id:", word.id);
  };

  const handleChange = (field, value) => {
    setTempWord((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{index + 1}</td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            type="text"
            value={tempWord.english}
            onChange={(e) => handleChange("english", e.target.value)}
            className={styles.input}
          />
        ) : (
          word.english
        )}
      </td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            type="text"
            value={tempWord.transcription}
            onChange={(e) => handleChange("transcription", e.target.value)}
            className={styles.input}
          />
        ) : (
          word.transcription
        )}
      </td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            type="text"
            value={tempWord.russian}
            onChange={(e) => handleChange("russian", e.target.value)}
            className={styles.input}
          />
        ) : (
          word.russian
        )}
      </td>
      <td className={styles.buttonContainer}>
        {!isEditing ? (
          <>
            <BaseButton onClick={handleEditClick} type="edit">
              <Edit3 size={16} />
            </BaseButton>
            <BaseButton onClick={handleDeleteClick} type="delete">
              <Trash2 size={16} />
            </BaseButton>
          </>
        ) : (
          <>
            <BaseButton onClick={handleSaveClick} type="save">
              <Save size={16} />
            </BaseButton>
            <BaseButton onClick={handleCancelClick} type="cancel">
              <X size={16} />
            </BaseButton>
          </>
        )}
      </td>
    </tr>
  );
}

export default WordEntry;
