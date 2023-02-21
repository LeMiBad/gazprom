import { createEvent, createStore } from "effector";



export const setCurPage = createEvent<number>()
export const $curPage = createStore(0)
    .on(setCurPage, (_, i) => i)