import "./App.css";
import { appConatiner, board, buttons } from "./App.css.ts";

function App() {
  return (
    <div className={appConatiner}>
      <div className={board}></div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
        <button>활동 목록 보이기</button>
      </div>
    </div>
  );
}

export default App;
