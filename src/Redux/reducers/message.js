import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {};

console.log('[file]', 'src/Redux/reducers/message.js');
export default function (state = initialState, action) {
  console.log('[file]:export default function', 'src/Redux/reducers/message.js');
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
