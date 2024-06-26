import { useState } from "react";
import "./App.css";
import { appConatiner, board, buttons } from "./App.css.ts";
import BoardList from "./components/BoardList/BoardList.tsx";
import ListsContainer from "./components/ListsContainer/ListsContainer.tsx";
import { useTypedSelector } from "./hooks/redux.ts";
import EditModal from "./components/EditModal/EditModal.tsx";
// import LoggerModal from "./components/LoggerModal/LoggerModal.tsx";

function App() {
  // const [isLoggerOpen, setisLoggerOpen] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  const boards = useTypedSelector((state) => state.boards.boardArray);

  const getActiveBoard = boards.filter(
    (board) => board.boardId === activeBoardId
  )[0];

  const lists = getActiveBoard.lists;

  const modalAcitve = useTypedSelector((state) => state.boards.modalActive);
  return (
    <div className={appConatiner}>
      {/* {isLoggerOpen ? <LoggerModal setisLoggerOpen={setisLoggerOpen} /> : null} */}
      {modalAcitve ? <EditModal /> : null}
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className={board}>
        <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
        <button>활동 목록 보이기</button>
      </div>
    </div>
  );
}

export default App;
