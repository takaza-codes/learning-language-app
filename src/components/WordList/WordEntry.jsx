import React, { useState } from "react";
import styles from "./WordList.module.scss";
import BaseButton from "../BaseButton/BaseButton";
import { Edit3, Trash2, X, Save } from "lucide-react";

function WordEntry({ word, index, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempWord, setTempWord] = useState({ ...word });

  const defaultErrors = {
    english: false,
    transcription: false,
    russian: false,
  };

  const [errors, setErrors] = useState({ defaultErrors });

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    setTempWord({ ...word });
  };

  const handleCancelClick = () => {
    setIsEditing((prev) => !prev);
    setTempWord({ ...word });
    setErrors(defaultErrors);
  };

  const handleSaveClick = () => {
    if (Object.values(errors).some((e) => e)) {
      console.warn("Cannot save: there are validation errors.");
      return;
    }
    onSave(tempWord);
    setIsEditing((prev) => !prev);
  };

  const handleDeleteClick = () => {
    console.log("Deleted word with id:", word.id);
  };

  const validateField = (field, value) => {
    const trimmed = value.trim();
    if (trimmed === "") return false;

    switch (field) {
      case "english":
        return /^[a-zA-Z]+$/.test(trimmed);
      case "russian":
        return /^[а-яА-ЯёЁ]+$/.test(trimmed);
      case "transcription":
        return /^[a-zA-Z[\]\sˈˌəɛæɔʌθðŋɪʊɒ]+$/.test(trimmed);
      default:
        return false;
    }
  };

  const hasErrors = Object.values(errors).some((error) => error);

  const handleChange = (field, value) => {
    setTempWord((prev) => ({ ...prev, [field]: value }));

    const isValid = validateField(field, value.trim());
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
    }));
  };

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{index + 1}</td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            type="text"
            value={tempWord.english}
            name="english"
            onChange={(e) => handleChange("english", e.target.value)}
            className={styles.input}
            style={{
              borderColor: errors.english ? "red" : "none",
              borderWidth: "2px",
            }}
          />
        ) : (
          word.english
        )}
        {errors.english && (
          <div className={styles.errorMsg}>
            Please don't leave the field empty and use English letters only.
          </div>
        )}
      </td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            type="text"
            value={tempWord.transcription}
            name="transcription"
            onChange={(e) => handleChange("transcription", e.target.value)}
            className={styles.input}
            style={{
              borderColor: errors.transcription ? "red" : "none",
              borderWidth: "2px",
            }}
          />
        ) : (
          word.transcription
        )}
        {errors.transcription && (
          <div className={styles.errorMsg}>
            Please don't leave the field empty and use valid symbols only.
          </div>
        )}
      </td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            type="text"
            value={tempWord.russian}
            name="russian"
            onChange={(e) => handleChange("russian", e.target.value)}
            className={styles.input}
            style={{
              borderColor: errors.russian ? "red" : "none",
              borderWidth: "2px",
            }}
          />
        ) : (
          word.russian
        )}
        {errors.russian && (
          <div className={styles.errorMsg}>
            Please don't leave the field empty and use Russian letters only.
          </div>
        )}
      </td>
      <td className={styles.buttonContainer}>
        {!isEditing ? (
          <>
            <BaseButton onClick={handleEditClick} form="edit">
              <Edit3 size={16} />
            </BaseButton>
            <BaseButton onClick={handleDeleteClick} form="delete">
              <Trash2 size={16} />
            </BaseButton>
          </>
        ) : (
          <>
            <BaseButton
              onClick={handleSaveClick}
              form="save"
              disabled={hasErrors}>
              <Save size={16} />
            </BaseButton>
            <BaseButton onClick={handleCancelClick} form="cancel">
              <X size={16} />
            </BaseButton>
          </>
        )}
      </td>
    </tr>
  );
}

export default WordEntry;
