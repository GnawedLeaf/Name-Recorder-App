import React from "react";
import styles from "./DeleteButton.module.css"

const DeleteButton = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }



    return (
        <button onClick={deleteHandler} className={styles.button} type={props.type}>{props.value}</button>
    )
}

export default DeleteButton;