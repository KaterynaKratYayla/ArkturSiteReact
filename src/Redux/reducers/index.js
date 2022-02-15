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
import paxchoice from './paxchoice';
import hotelcontent from './hotelcontent';
import hotelrates from './hotelrates';
import hotelroomschoice from './hotelroomschoice'
import availabilitychoice from './availabilitychoice'
import hotelsearchdata from './hotelsearchdata'
import locale from './locale'
import hotelcities from './hotelcities';
import currency from './currency';
import promocode from './promocode';
import routes from './routes';
import hotelchoiceintours from './hotelchoiceintours';
import tourcontents from './tourcontents'


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
	paxchoice,
	hotelcontent,
	hotelrates,
	hotelroomschoice,
	availabilitychoice,
	hotelsearchdata,
	locale,
	hotelcities,
	currency,
	promocode,
	routes,
	hotelchoiceintours,
	tourcontents
});

export default root_reducer;
