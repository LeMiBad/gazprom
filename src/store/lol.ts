import { createStore, createEvent } from 'effector';




export const lolturn = createEvent()
export const $lol = createStore(false)
  .on(lolturn, () => true)