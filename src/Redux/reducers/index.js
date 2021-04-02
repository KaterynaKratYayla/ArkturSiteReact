import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';
import tours from './tours';
import cities from './cities';
import content from './content';
import pages from './pages';
import auth from "./auth";
import message from "./message";
import toptours from './toptours';
import localization from './localization';

console.log('[file]:import', 'import posts from \'./posts\';');
console.log('[file]:import', 'import hotels from \'./hotels\';');
console.log('[file]:import', 'import tours from \'./tours\';');
console.log('[file]:import', 'import cities from \'./cities\';');
console.log('[file]:import', 'import content from \'./content\';');
console.log('[file]:import', 'import pages from \'./pages\';');
console.log('[file]:import', 'import auth from "./auth";');
console.log('[file]:import', 'import message from "./message";');
console.log('[file]:import', 'import toptours from \'./toptours\';');
console.log('[file]:import', 'import localization from \'./localization\';');
console.log('[file]', 'src/Redux/reducers/index.js');

//{combineReducers} - это библиотека из редакса для комбинации нескольких редьюсеров
console.log('[file]:const root_reducer', 'src/Redux/reducers/index.js');
const root_reducer = combineReducers({
	posts,
	hotels,
	tours,
	cities,
	content,
	pages,
	toptours,
	auth,
	message,
	localization
});

export default root_reducer;
