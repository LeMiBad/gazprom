import { createStore } from 'effector';
import { createEvent } from 'effector';


export const setCharModal = createEvent()
export const $charModal = createStore(false)
    .on(setCharModal, (cur) => cur? false : true)
