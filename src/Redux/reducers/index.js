import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';
import tours from './tours';
import cities from './cities';
import content from './content';
import pages from './pages';
import toptours from './toptours'


//{combineReducers} - это библиотека из редакса для комбинации нескольких редьюсеров
const root_reducer = combineReducers({
	posts,
	hotels,
	tours,
	cities,
	content,
	pages,
	toptours
});

export default root_reducer;