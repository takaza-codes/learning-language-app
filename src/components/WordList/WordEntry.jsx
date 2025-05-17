import React from "react";
import wordList from "../../assets/words";
import styles from "WordList.module.css";

function WordEntry({word}) {
    return (
<tr className={styles.row}>
    <td className={styles.cell}>{word.id}</td>
    <td className={styles.cell}>{word.english}</td>
    <td className={styles.cell}>{word.transcription}</td>
    <td className={styles.cell}>{word.russian}</td>
    <td className={styles.cell}>{word.tags}</td>
    <td className={styles.buttonContainer}>
        
    </td>
</tr>
    );
}

export default WordEntry;