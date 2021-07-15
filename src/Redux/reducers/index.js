import { combineReducers } from 'redux';

import posts from './posts';
import hotels from './hotels';
import tours from './tours';
import cities from './cities';
import content from './content';
import pages from './pages';
import auth from "./auth";
import order from "./order";
import voucher from "./voucher";
import payment from "./payment";
import message from "./message";
import toptours from './toptours';
import paxchoice from './paxchoice'


//{combineReducers} - это библиотека из редакса для комбинации нескольких редьюсеров
const root_reducer = combineReducers({
	posts,
	hotels,
	tours,
	cities,
	content,
	pages,
	toptours,
	auth,
	order,
	voucher,
	payment,
	message,
	paxchoice
});

export default root_reducer;
