import ChessboardWBWB from "./ChessboardWBWB"
import ChessboardBWBW from "./ChessboardBWBW"
import styles from "../styles/ChessboardFull.module.css"

export default function ChessboardFull() {
  return (
    <>
    <div className={styles.board}>
      <ChessboardWBWB />
      <ChessboardBWBW />
      <ChessboardWBWB />
      <ChessboardBWBW />
      <ChessboardWBWB />
      <ChessboardBWBW />
      <ChessboardWBWB />
      <ChessboardBWBW />
    </div>
    </>
  )
}