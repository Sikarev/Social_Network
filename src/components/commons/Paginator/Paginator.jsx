import React, { useState } from 'react';
import styles from './Paginator.module.css';

let Paginator = ({ portionSize = 10, ...props }) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.pageNumbers}>
            {portionNumber > 1 && <button className={styles.portionBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).
                map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}

            {portionNumber < portionCount && <button className={styles.portionBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator;