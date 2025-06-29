import { useState } from "react";
import { patch, post, del } from "../../api/httpRequests";
import styles from "./WordList.module.scss";
import BaseButton from "../BaseButton/BaseButton";
import { Edit3, Trash2, X, Save } from "lucide-react";

const DEFAULT_ERRORS = {
  english: false,
  transcription: false,
  russian: false,
};

const VALIDATION_PATTERNS = {
  english: /^[a-zA-Z]+$/,
  russian: /^[а-яА-ЯёЁ]+$/,
  transcription: /^[a-zA-Z[\]\sˈˌəɛæɔʌθðŋɪʊɒ]+$/,
};

function WordEntry({ word, index, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempWord, setTempWord] = useState({ ...word });

  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const hasErrors = Object.values(errors).some((error) => error);

  const validateField = (field, value) => {
    const trimmed = value.trim();
    if (trimmed === "") return false;
    return VALIDATION_PATTERNS[field]?.test(trimmed) || false;
  };

  const handleSaveClick = () => {
    if (hasErrors) {
      return;
    }
    onSave(tempWord);
    setIsEditing((prev) => !prev);
  };

  const handleChange = (field, value) => {
    setTempWord((prev) => ({ ...prev, [field]: value }));

    const isValid = validateField(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
    }));
  };

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    setTempWord({ ...word });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempWord({ ...word });
    setErrors(DEFAULT_ERRORS);
  };

  const handleDeleteClick = async () => {
    try {
      await del(`words/${word.id}`);
      console.log("Deleted word with id:", word.id);
      onDelete(word.id);
    } catch (error) {
      console.error("Ошибка при удалении:", error.message);
    }
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
