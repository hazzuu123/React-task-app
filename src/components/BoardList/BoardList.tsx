import React, { FC, useState, useRef } from "react";
import { useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import clsx from "clsx";
import {
  addSection,
  container,
  title,
  addButton,
  boardItem,
  boardItemActive,
} from "./BoardList.css";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};
const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId,
}) => {
  const { boardArray } = useTypedSelector((state) => state.boards);
  const [isFormOpen, setFormOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setFormOpen(!isFormOpen);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className={container}>
      <div className={title}>게시판</div>
      {boardArray.map((board, index) => (
        <div
          key={index}
          onClick={() => setActiveBoardId(board.boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId, activeBoardId) === index,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId, activeBoardId) !== index,
            }
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setFormOpen={setFormOpen} inputRef={inputRef} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
