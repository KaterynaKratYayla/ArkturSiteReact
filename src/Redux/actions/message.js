import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

console.log('[file]', 'src/Redux/actions/message.js');
console.log('[file]:export const setMessage', 'src/Redux/actions/message.js');
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

console.log('[file]:export const clearMessage', 'src/Redux/actions/message.js');
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
