import { createBrowserHistory, createMemoryHistory } from "history";
const global = require('global')

const isServer = !(
    typeof global.window !== 'undefined' &&
    global.window.document &&
    global.window.document.createElement
  );

// console.log('isServer: ', isServer);

export const history = isServer
? createMemoryHistory({
    initialEntries: ['/'],
  })
: createBrowserHistory();
