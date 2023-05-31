/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styles from "./ErrorModal.module.css";

function ErrorModal(props: any) {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={showModal ? styles.modal : styles.hidden}>
      <div className={styles["modal-content"]}>
        <p className={styles["modal-message"]}>{props.message}</p>
        <button className={styles["modal-button"]} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
