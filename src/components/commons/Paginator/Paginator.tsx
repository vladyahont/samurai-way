import React from 'react';
import s from "../../Users/users.module.css";

type PaginatorPtopsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: any
}
export const Paginator = (props: PaginatorPtopsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    console.log(pagesCount)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((p, index) => <span key={index}
                                                  className={props.currentPage === p ? s.selectedPage : ''}
                                                  onClick={() => {
                                                      props.onPageChanged(p)
                                                  }}>{p}</span>)
                }
            </div>
        </div>
    )
}

