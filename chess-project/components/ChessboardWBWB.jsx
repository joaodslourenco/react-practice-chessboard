import styles from '../styles/ChessboardWBWB.module.css'

export default function ChessboardWBWB(props) {
  return (
    <div className={styles.row}>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
    </div>
  )
}