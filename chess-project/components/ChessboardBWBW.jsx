import styles from '../styles/ChessboardBWBW.module.css'

export default function ChessboardBWBW(props) {
  return (
    <div className={styles.row}>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
      <div className={styles.blackbox}></div>
      <div className={styles.whitebox}></div>
    </div>
  )
}