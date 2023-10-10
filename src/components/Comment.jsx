import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/kevinbtv.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kevin Tavares</strong>
              <time
                title="05 de Outubro às 21:33h"
                dateTime="2023-10-04 21:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
