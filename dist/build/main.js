/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34988:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(89366);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var es_Helmet = __webpack_require__(64593);
// EXTERNAL MODULE: ./node_modules/react-html-parser/lib/index.js
var lib = __webpack_require__(30653);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(node_modules_axios);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(93379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(19216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(44589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/PageComponents/ResponsiveHeader/header.css
var header = __webpack_require__(62335);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/ResponsiveHeader/header.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(header/* default */.Z, options);




       /* harmony default export */ const ResponsiveHeader_header = (header/* default */.Z && header/* default.locals */.Z.locals ? header/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 17 modules
var emotion_styled_browser_esm = __webpack_require__(95056);
;// CONCATENATED MODULE: ./src/Components/Library/Slider/SliderContent.js


var _templateObject;



var SliderContent = emotion_styled_browser_esm/* default.div */.Z.div(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n    transform: translateX(-", "px); \n    height: 100%; \n    width: ", "px;\n    display: flex;  \n"])), function (props) {
  return props.translate;
}, function (props) {
  return props.width;
}); //transition: transform ease-out ${props => props.transition}s; 

console.log(SliderContent);
/* harmony default export */ const Slider_SliderContent = (SliderContent);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/Slider/SliderCss.css
var SliderCss = __webpack_require__(94716);
;// CONCATENATED MODULE: ./src/Components/Library/Slider/SliderCss.css

      
      
      
      
      
      
      
      
      

var SliderCss_options = {};

SliderCss_options.styleTagTransform = (styleTagTransform_default());
SliderCss_options.setAttributes = (setAttributesWithoutAttributes_default());

      SliderCss_options.insert = insertBySelector_default().bind(null, "head");
    
SliderCss_options.domAPI = (styleDomAPI_default());
SliderCss_options.insertStyleElement = (insertStyleElement_default());

var SliderCss_update = injectStylesIntoStyleTag_default()(SliderCss/* default */.Z, SliderCss_options);




       /* harmony default export */ const Slider_SliderCss = (SliderCss/* default */.Z && SliderCss/* default.locals */.Z.locals ? SliderCss/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/Helpers/WindowResizeHook.js


var WindowResizeHook_useWindowWidthAndHeight = function useWindowWidthAndHeight() {
  // 1- Получаем размер окна
  var windowInnerSize = [window.innerWidth, window.innerHeight]; // 2- Define the state variable windowSize and pass windowInnerSize as its initial value

  var _useState = (0,react.useState)(windowInnerSize),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      windowSize = _useState2[0],
      setWidowSize = _useState2[1];

  (0,react.useEffect)(function () {
    var changeWindowSize = function changeWindowSize() {
      setWidowSize([window.innerWidth, window.innerHeight]);
    };
    /* 3- add a 'resize' eventListener to window so that whenever 
    the size of window changes the state variable windowSize changes and the component re-renders */


    window.addEventListener("resize", changeWindowSize); // 4- cleanup the 'resize' eventListener

    return function () {
      return window.removeEventListener('resize', changeWindowSize);
    };
  }, []); // 5- return the window size

  return windowSize;
};
;// CONCATENATED MODULE: ./src/Components/Library/Slider/Slide.js




 // const Slide = (props) => { 
//     const {name} = props;
//       return(
//      <div>{name}</div>
//   )
// }

var Slide = function Slide(_ref) {
  var content = _ref.content;

  // console.log(content)
  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('HEIGHT', height);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    style: {
      width: '100%',
      margin: "".concat(width > 1000 ? '-55px 0 0 0' : '0'),
      //  margin: '-105 0 0 0',
      height: "".concat(width > 1000 ? height * 0.92 : width > 786 ? height / 1.5 : height / 2, "px")
    },
    src: content
  }), " ");
}; // const Slide = ({content}) => (
//     <div css={css`
//       height: 100;
//       width: 100%;
//       background-image: url(${content});
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: center;
//     `}
// />
// )
// console.log(Slide)


/* harmony default export */ const Slider_Slide = (Slide);
;// CONCATENATED MODULE: ./src/Components/Library/Slider/ArrowSlider.js




var test = function test() {
  return /*#__PURE__*/React.createElement("div", null, "Test");
};

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      handleClick = _ref.handleClick;
  return (
    /*#__PURE__*/
    // console.log('Hi Kate')
    react.createElement("div", {
      onClick: handleClick
    }, direction === 'right' ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
      className: "prev"
    }, "\u276E")) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
      className: "next"
    }, "\u276F")))
  );
}; //   export default Arrow;
// css={css`
// display: flex;
// position: absolute;
// ${direction === 'right' ? 'right: 50px' : 'left: 25px'};
// height: 50px;
// width: 50px;
// justify-content: center;
// background: white;
// border-radius: 50%;
// cursor: pointer;
// align-items: center;
// transition: transform ease-in 0.1s;
// &:hover {
//   transform: scale(1.1);
// }
// img {
//   transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//   &:focus {
//     outline: 0;
//   }
// }
// `}
;// CONCATENATED MODULE: ./src/Components/Library/Slider/Slider.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






 // import Dots from './dots'

var Slider = function Slider(props) {
  var getWidth = function getWidth() {
    return window.innerWidth;
  };

  var _useState = (0,react.useState)({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var translate = state.translate,
      transition = state.transition,
      activeIndex = state.activeIndex;

  var nextSlide = function nextSlide() {
    if (activeIndex === props.slides.length - 1) {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        translate: 0,
        activeIndex: 0
      }));
    } else {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * getWidth()
      }));
    }
  };

  var timer = null;
  (0,react.useEffect)(function () {
    timer = setTimeout(nextSlide, 3000);
    return function () {
      clearInterval(timer);
    };
  });

  var prevSlide = function prevSlide() {
    if (activeIndex === 0) {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      }));
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    }));
  }; // console.log(props.slides)


  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "SliderCSS"
  }, /*#__PURE__*/react.createElement(Slider_SliderContent, {
    translate: translate,
    transition: transition,
    width: getWidth() * props.slides.length
  }, props.slides.map(function (slide, index) {
    return /*#__PURE__*/react.createElement(Slider_Slide, {
      key: index,
      content: 'https://' + slide
    }) //was slide+index
    ;
  })), /*#__PURE__*/react.createElement("div", {
    "class": "Arrows"
  }, /*#__PURE__*/react.createElement(Arrow, {
    direction: "left",
    handleClick: prevSlide
  }), /*#__PURE__*/react.createElement(Arrow, {
    direction: "right",
    handleClick: nextSlide
  }))));
};

/* harmony default export */ const Slider_Slider = (Slider);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/react-autocomplete/build/lib/Autocomplete.js
var lib_Autocomplete = __webpack_require__(14631);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(lib_Autocomplete);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(64078);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 66 modules
var date_picker = __webpack_require__(17890);
;// CONCATENATED MODULE: ./src/Redux/config.js
/* harmony default export */ const config = ({
  // apiUrl:"https://next.json-generator.com/api/json/get/V1TbDaNiK"
  apiUrl: "https://jsonplaceholder.typicode.com/",
  //City Content
  cityUrl: "http://hotels-ua.biz/interface/citycontent?id=13&language=en",
  //Localization
  supportedLangs: ['en', 'uk', 'ru', 'tr'],
  defaultLang: 'en'
});
;// CONCATENATED MODULE: ./src/Redux/helpers/public.axios.js


var publicAxios = axios_default().create({
  baseURL: config.apiUrl
});
/* harmony default export */ const public_axios = (publicAxios);
;// CONCATENATED MODULE: ./src/Redux/actions/list.js



 // import { GET_TOUR_REQ, GET_TOUR_RES , GET_TOUR_ERR } from '../constants';

var postsRepsonse = function postsRepsonse(res) {
  return {
    type: GET_POSTS_RES,
    payload: res
  };
};
var getPosts = function getPosts(id) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_POSTS_REQ
    });
    axios.get('https://next.json-generator.com/api/json/get/V1TbDaNiK', {// params: {
      //     ID: 12345
      // }
    }) // axios.get('https://next.json-generator.com/api/json/get/V1TbDaNiK')  
    .then(function (res) {
      // console.log( res );
      dispatch(postsRepsonse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_POSTS_ERR,
        error: err
      });
    });
  };
};
var descResponse = function descResponse(res) {
  return {
    type: GET_DESC_RES,
    payload: res
  };
};
var list_getDescription = function getDescription() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_DESC_REQ
    });
    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription', {}).then(function (res) {
      // console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
      dispatch(descResponse(JSON.parse(res.data.substring(30, res.data.length - 1))));
    })["catch"](function (err) {
      dispatch({
        type: GET_DESC_ERR,
        error: err
      });
    });
  };
};
var en_descResponse = function en_descResponse(res) {
  return {
    type: GET_EN_DESC_RES,
    payload: res
  };
};
var list_getENdescription = function getENdescription() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_EN_DESC_REQ
    });
    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription', {}).then(function (res) {
      var obj = JSON.parse(res.data.substring(30, res.data.length - 1));

      for (var key in obj) {
        if (key === 'en') {
          console.log(obj[key]);
          dispatch(en_descResponse(obj[key]));
        }
      }
    })["catch"](function (err) {
      dispatch({
        type: GET_EN_DESC_ERR,
        error: err
      });
    });
  };
};
var imagesResponse = function imagesResponse(res) {
  return {
    type: GET_IMAGES_RES,
    payload: res
  };
};
var list_getImages = function getImages() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_IMAGES_REQ
    });
    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription', {}).then(function (res) {
      var obj = JSON.parse(res.data.substring(30, res.data.length - 1));

      for (var key in obj) {
        if (key === 'photo_gallery') {
          // console.log(obj[key])
          var newArr = [];

          for (var item in obj[key]) {
            newArr.push(obj[key][item]);
          }

          dispatch(imagesResponse(newArr));
        }
      }
    })["catch"](function (err) {
      dispatch({
        type: GET_IMAGES_ERR,
        error: err
      });
    });
  };
}; // export const tourResponse = ( res ) => ({
//     type: GET_TOUR_RES,
//     payload: res
// });
// export const getTour = () => ( dispatch, getState ) => {
//     dispatch({ type: GET_TOUR_REQ });
//     axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
//         }) 
//         .then( res => {
//             // console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
//             dispatch( tourResponse(JSON.parse(res.data.substring(30, res.data.length-1))) );
//         })
//         .catch( err => {
//             dispatch({ type: GET_TOUR_ERR, error: err });
//         });
// }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/SecondPageofSearchModule/Tours/SearchItems.css
var SearchItems = __webpack_require__(79799);
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Tours/SearchItems.css

      
      
      
      
      
      
      
      
      

var SearchItems_options = {};

SearchItems_options.styleTagTransform = (styleTagTransform_default());
SearchItems_options.setAttributes = (setAttributesWithoutAttributes_default());

      SearchItems_options.insert = insertBySelector_default().bind(null, "head");
    
SearchItems_options.domAPI = (styleDomAPI_default());
SearchItems_options.insertStyleElement = (insertStyleElement_default());

var SearchItems_update = injectStylesIntoStyleTag_default()(SearchItems/* default */.Z, SearchItems_options);




       /* harmony default export */ const Tours_SearchItems = (SearchItems/* default */.Z && SearchItems/* default.locals */.Z.locals ? SearchItems/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/Switcher.js




var Switcher_Switcher = function Switcher(props) {
  var children = props.children,
      active = props.active,
      name = props.name,
      changeHandler = props.changeHandler,
      switcherWidth = props.switcherWidth;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('SWITCHER', props);
  return (
    /*#__PURE__*/
    // <div className='switcher'> {name} : {
    react.createElement("div", {
      className: "switcher",
      style: {
        width: switcherWidth
      }
    }, "  ", react.Children.count(children) > 0 && /*#__PURE__*/react.createElement(react.Fragment, null, react.Children.map(children, function (child) {
      if ( /*#__PURE__*/react.isValidElement(child)) {
        return /*#__PURE__*/react.cloneElement(child, {
          active: child.props.value === active,
          changeHandler: changeHandler(child.props.value)
        });
      }
    })))
  );
};
var Switcher_SwitcherItem = function SwitcherItem(props) {
  var children = props.children,
      active = props.active,
      changeHandler = props.changeHandler,
      value = props.value;
  console.log(props);
  return /*#__PURE__*/react.createElement("button", {
    className: active ? 'switcher__item active' : "switcher__item",
    onClick: changeHandler
  }, children);
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SwitcherFront.css
var SwitcherFront = __webpack_require__(7691);
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SwitcherFront.css

      
      
      
      
      
      
      
      
      

var SwitcherFront_options = {};

SwitcherFront_options.styleTagTransform = (styleTagTransform_default());
SwitcherFront_options.setAttributes = (setAttributesWithoutAttributes_default());

      SwitcherFront_options.insert = insertBySelector_default().bind(null, "head");
    
SwitcherFront_options.domAPI = (styleDomAPI_default());
SwitcherFront_options.insertStyleElement = (insertStyleElement_default());

var SwitcherFront_update = injectStylesIntoStyleTag_default()(SwitcherFront/* default */.Z, SwitcherFront_options);




       /* harmony default export */ const SearchResizersAndSwitchers_SwitcherFront = (SwitcherFront/* default */.Z && SwitcherFront/* default.locals */.Z.locals ? SwitcherFront/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Redux/constants/index.js
var constants_GET_POSTS_REQ = "GET_POSTS_REQ";
var constants_GET_POSTS_RES = "GET_POSTS_RES";
var constants_GET_POSTS_ERR = "GET_POSTS_ERR";
var constants_GET_DESC_REQ = "GET_DESC_REQ";
var constants_GET_DESC_ERR = "GET_DESC_ERR";
var constants_GET_DESC_RES = "GET_DESC_RES";
var constants_GET_EN_DESC_REQ = "GET_EN_DESC_REQ";
var constants_GET_EN_DESC_ERR = "GET_EN_DESC_ERR";
var constants_GET_EN_DESC_RES = "GET_EN_DESC_RES";
var constants_GET_IMAGES_REQ = "GET_IMAGES_REQ";
var constants_GET_IMAGES_ERR = "GET_IMAGES_ERR";
var constants_GET_IMAGES_RES = "GET_IMAGES_RES";
var constants_GET_TOUR_REQ = "GET_TOUR_REQ";
var constants_GET_TOUR_RES = "GET_TOUR_RES";
var constants_GET_TOUR_ERR = "GET_TOUR_ERR";
var constants_GET_EN_TOUR_REQ = "GET_EN_TOUR_REQ";
var constants_GET_EN_TOUR_RES = "GET_EN_TOUR_RES";
var constants_GET_EN_TOUR_ERR = "GET_EN_TOUR_ERR";
var constants_GET_IMAGES_TOUR_REQ = "GET_IMAGES_TOUR_REQ";
var constants_GET_IMAGES_TOUR_RES = "GET_IMAGES_TOUR_RES";
var constants_GET_IMAGES_TOUR_ERR = "GET_IMAGES_TOUR_ERR";
var GET_GEO_REQ = "GET_GEO_REQ";
var GET_GEO_RES = "GET_GEO_RES";
var GET_GEO_ERR = "GET_GEO_ERR";
var GET_GENERAL_GEO_REQ = "GET_GENERAL_GEO_REQ";
var GET_GENERAL_GEO_RES = "GET_GENERAL_GEO_RES";
var GET_GENERAL_GEO_ERR = "GET_GENERAL_GEO_ERR";
var GET_CONTENT_REQ = "GET_CONTENT_REQ";
var GET_CONTENT_RES = "GET_CONTENT_RES";
var GET_CONTENT_ERR = "GET_CONTENT_ERR";
var GET_PAGES_REQ = "GET_PAGES_REQ";
var GET_PAGES_RES = "GET_PAGES_RES";
var GET_PAGES_ERR = "GET_PAGES_ERR";
var GET_PurePage_REQ = "GET_PurePage_REQ";
var GET_PurePage_RES = "GET_PurePage_RES";
var GET_PurePage_ERR = "GET_PurePage_ERR";
var GET_hotelPAGESfooter_REQ = "GET_hotelPAGESfooter_REQ";
var GET_hotelPAGESfooter_RES = "GET_hotelPAGESfooter_RES";
var GET_hotelPAGESfooter_ERR = "GET_hotelPAGESfooter_ERR";
var GET_TOPTOURS_REQ = "GET_TOPTOURS_REQ";
var GET_TOPTOURS_RES = "GET_TOPTOURS_RES";
var GET_TOPTOURS_ERR = "GET_TOPTOURS_ERR";
var GET_PAX_REQ = "GET_PAX_REQ";
var GET_PAX_RES = "GET_PAX_RES";
var GET_PAX_ERR = "GET_PAX_ERR";
var GET_PAX_INNER_REQ = "GET_PAX_INNER_REQ";
var GET_PAX_INNER_RES = "GET_PAX_INNER_RES";
var GET_PAX_INNER_ERR = "GET_PAX_INNER_ERR";
var GET_PageTYPE_REQ = "GET_PageTYPE_REQ";
var GET_PageTYPE_RES = "GET_PageTYPE_RES";
var GET_PageTYPE_ERR = "GET_PageTYPE_ERR";
var GET_PageREGION_REQ = "GET_PageREGION_REQ";
var GET_PageREGION_RES = "GET_PageREGION_RES";
var GET_PageREGION_ERR = "GET_PageREGION_ERR";
var GET_HOTELS_REQ = "GET_HOTELS_REQ";
var GET_HOTELS_RES = "GET_HOTELS_RES";
var GET_HOTELS_ERR = "GET_HOTELS_ERR";
var GET_GENERAL_HOTELS_REQ = "GET_GENERAL_HOTELS_REQ";
var GET_GENERAL_HOTELS_RES = "GET_GENERAL_HOTELS_RES";
var GET_GENERAL_HOTELS_ERR = "GET_GENERAL_HOTELS_ERR";
var GET_HOTEL_CONTENT_REQ = "GET_HOTEL_CONTENT_REQ";
var GET_HOTEL_CONTENT_RES = "GET_HOTEL_CONTENT_RES";
var GET_HOTEL_CONTENT_ERR = "GET_HOTEL_CONTENT_ERR";
var GET_HOTEL_RATES_REQ = "GET_HOTEL_RATES_REQ";
var GET_HOTEL_RATES_RES = "GET_HOTEL_RATES_RES";
var GET_HOTEL_RATES_ERR = "GET_HOTEL_RATES_ERR";
var GET_HTL_ROOM_NUMBER_REQ = 'GET_HTL_ROOM_NUMBER_REQ';
var GET_HTL_ROOM_NUMBER_RES = "GET_HTL_ROOM_NUMBER_RES";
var GET_HTL_ROOM_NUMBER_ERR = "GET_HTL_ROOM_NUMBER_ERR";
var GET_AVAIL_REQ = "GET_AVAIL_REQ";
var GET_AVAIL_RES = "GET_AVAIL_RES";
var GET_AVAIL_ERR = "GET_AVAIL_ERR";
var GET_HTL_SEARCH_REQ = "GET_HTL_SEARCH_REQ";
var GET_HTL_SEARCH_RES = "GET_HTL_SEARCH_RES";
var GET_HTL_SEARCH_ERR = "GET_HTL_SEARCH_ERR";
var GET_SEARCH_OCCUPANCY_REQ = "GET_SEARCH_OCCUPANCY_REQ";
var GET_SEARCH_OCCUPANCY_RES = "GET_SEARCH_OCCUPANCY_RES";
var GET_SEARCH_OCCUPANCY_ERR = "GET_SEARCH_OCCUPANCY_ERR"; // export const CHANGE_LOCALE = "CHANGE_LOCALE";

var GET_LOCALE_REQ = "GET_LOCALE_REQ";
var GET_LOCALE_RES = "GET_LOCALE_RES";
var GET_LOCALE_ERR = "GET_LOCALE_ERR";
var GET_LANG_REQ = "GET_LANG_REQ";
var GET_LANG_RES = "GET_LANG_RES";
var GET_LANG_ERR = "GET_LANG_ERR";
var GET_HOTEL_CITIES_REQ = "GET_HOTEL_CITIES_REQ";
var GET_HOTEL_CITIES_RES = "GET_HOTEL_CITIES_RES";
var GET_HOTEL_CITIES_ERR = "GET_HOTEL_CITIES_ERR";
var constants_GET_HOTEL_NAME_REQ = "GET_HOTEL_NAME_REQ";
var constants_GET_HOTEL_NAME_RES = "GET_HOTEL_NAME_RES";
var GET_HOTEL_NAME_ERR = "GET_HOTEL_NAME_ERR";
var GET_CURRENCY_REQ = "GET_CURRENCY_REQ";
var GET_CURRENCY_RES = "GET_CURRENCY_RES";
var GET_CURRENCY_ERR = "GET_CURRENCY_ERR";
var GET_PROMOCODE_REQ = "GET_PROMOCODE_REQ";
var GET_PROMOCODE_RES = "GET_PROMOCODE_RES";
var GET_PROMOCODE_ERR = "GET_PROMOCODE_ERR";
var constants_GET_PhotoGalleryPage_REQ = "GET_PhotoGalleryPage_REQ";
var constants_GET_PhotoGalleryPage_RES = "GET_PhotoGalleryPage_RES";
var constants_GET_PhotoGalleryPage_ERR = "GET_PhotoGalleryPage_ERR";
;// CONCATENATED MODULE: ./src/Redux/actions/cities.js




var geoResponse = function geoResponse(res) {
  return {
    type: GET_GEO_RES,
    payload: res
  };
};
var cities_getGeo = function getGeo() {
  return function (dispatch) {
    dispatch({
      type: GET_GEO_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=contract"), {}).then(function (res) {
      var newArray1 = res.data.map(function (b) {
        return {
          id: b.tour_id,
          name: b.tour_name
        };
      });
      var newArray2 = res.data.map(function (q) {
        return {
          id: q.city_id,
          name: q.city_name
        };
      });
      var newArray3 = newArray2.filter(function (item, index, array) {
        return array.findIndex(function (t) {
          return t.name === item.name && t.id === item.id;
        }) === index;
      });
      console.log('[NEW ARRAY3] : ', newArray3);
      dispatch(geoResponse([].concat((0,toConsumableArray/* default */.Z)(newArray1), (0,toConsumableArray/* default */.Z)(newArray3))));
    })["catch"](function (err) {
      dispatch({
        type: GET_GEO_ERR,
        error: err
      });
    });
  };
};
var generalGeoResponse = function generalGeoResponse(res) {
  return {
    type: GET_GENERAL_GEO_RES,
    payload: res
  };
};
var cities_getGeneralGeo = function getGeneralGeo() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_GENERAL_GEO_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=contract"), {}).then(function (res) {
      console.log('[GeneralGeo] : ', res.data);
      dispatch(generalGeoResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_GENERAL_GEO_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/hotels.js

var hotels_Hotels = function Hotels() {
  return /*#__PURE__*/react.createElement("svg", {
    color: "#003057",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "hotel",
    "class": "svg-inline--fa fa-hotel fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z"
  }));
};
var WhiteHotels = function WhiteHotels() {
  return /*#__PURE__*/react.createElement("svg", {
    color: "#ffffff",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "hotel",
    "class": "svg-inline--fa fa-hotel fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z"
  }));
};
var HotelsObject = {
  name: 'Hotels',
  icon: hotels_Hotels()
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/tours.js

var tours_Tours = function Tours() {
  return /*#__PURE__*/react.createElement("svg", {
    color: "#003057",
    width: "25%",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "globe-europe",
    "class": "svg-inline--fa fa-globe-europe fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256zM130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1 5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3 8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2 0-11.3-5.1-11.3-11.3zm128 306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8 0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16 8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5 23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0 16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9 5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1z"
  }));
};
var ToursObject = {
  name: 'Tours',
  icon: tours_Tours()
};
;// CONCATENATED MODULE: ./src/Components/Library/SearchPanneldel/SearchPanneldel.js



 // import './SearchPannelCSS.css';













 // import './SearchPannelCSS.css'

var SearchInner = function SearchInner(_ref) {
  var wrapper = _ref.wrapper,
      innerWrapper = _ref.innerWrapper,
      formClass = _ref.formClass,
      autocompleteClass = _ref.autocompleteClass,
      datepickerClass = _ref.datepickerClass,
      props = _ref.props;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      testDate = _useState4[0],
      setTestDate = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      open = _useState10[0],
      setOpen = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isOpen = _useState12[0],
      setIsOpen = _useState12[1];

  var _useState13 = useState(''),
      _useState14 = _slicedToArray(_useState13, 2),
      align = _useState14[0],
      setAlign = _useState14[1];

  var history = useHistory();
  var dispatch = useDispatch();
  var geo = useSelector(function (state) {
    return state.cities.locs;
  });
  var geoGeneral = useSelector(function (state) {
    return state.cities.gen_locs;
  });

  var _useWindowWidthAndHei = useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = _slicedToArray(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; // const dateFormat = 'DD-MM-YYYY'


  useEffect(function () {
    dispatch(getGeo());
  }, []);
  console.log('[GEO] : ', geo);
  useEffect(function () {
    dispatch(getGeneralGeo());
  }, []);
  console.log('[general_GEO] : ', geoGeneral);

  var toggler = function toggler(me) {
    return function (_) {
      setAlign(me);
    };
  };

  function dateFunc(e) {
    return setDate(e.target.value);
  }

  function onChange(date, dateString) {
    setTestDate(dateString);
    console.log('[TEST_DATE] : ', dateString);
    console.log('[DATE_PICKER] : ', date, dateString);
  }

  var optionChecker = function optionChecker(e) {
    console.log('[VALUE] : ', e.target.value);
    setValue(e.target.value);

    if (value.length >= 0) {
      setOpen(true);
    }
  }; // console.log('[TODAY DATE]' , moment().format('YYYY-MM') , '[TEST_DATE] : ' , testDate)


  var addToList = function addToList() {
    var filtered = geo.filter(function (item) {
      return item.name === value;
    });
    var filtered_city_id = geoGeneral.filter(function (item) {
      if (item.tour_id === filtered[0].id) {
        return item.city_id;
      } else return item.city_id === filtered[0].id;
    });
    console.log('FILTERED_CITY_ID', filtered_city_id);
    var newList = {
      id: filtered[0].id,
      title: value,
      date: testDate
    };
    setList([].concat(_toConsumableArray(list), [newList]));
    setDate('');
    setValue('');
    var route_query = "?title=".concat(value, ",date=").concat(testDate, ",id=").concat(filtered[0].id, ",city_id=").concat(filtered_city_id[0].city_id);
    console.log('[NewList] : ', newList);
    history.push("/search_results/".concat(route_query), [].concat(_toConsumableArray(list), [newList]));
    console.log('[HISTORY : ] ', history);
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat((width * 0, 7)),
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Switcher, {
    className: "SwitcherSearchPannel",
    name: 'align',
    changeHandler: toggler,
    active: align
  }, ".", /*#__PURE__*/React.createElement(SwitcherItem, {
    value: "HOTELS"
  }, /*#__PURE__*/React.createElement(Hotels, null), " Hotels"), /*#__PURE__*/React.createElement(SwitcherItem, {
    value: "TOURS"
  }, /*#__PURE__*/React.createElement(Tours, null), " Tours")), /*#__PURE__*/React.createElement("div", {
    "class": wrapper
  }, /*#__PURE__*/React.createElement("div", {
    "class": innerWrapper
  }, /*#__PURE__*/React.createElement("form", {
    className: formClass,
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Autocomplete, _extends({}, props, {
    menuStyle: {
      fontFamily: 'Tahoma',
      fontSize: '16px',
      background: '#d9e6f1',
      borderRadius: '5px',
      border: '2px solid #BCD7EE',
      color: 'darkslategrey',
      //  marginTop: '0.2vw',
      marginLeft: '-0.5vw',
      position: 'fixed',
      ///
      display: 'block',
      zIndex: '100',
      overflow: 'auto' ///

    },
    inputProps: {
      style: {
        width: "".concat(width * 0.8, "px"),
        height: '37px',
        fontFamily: 'Tahoma',
        fontSize: '16px',
        border: '1px solid lightgrey',
        marginTop: '1vh',
        marginLeft: '4.4vw',
        marginBottom: '1vh'
      },
      placeholder: 'Country, city or tour name'
    },
    items: geo,
    shouldItemRender: function shouldItemRender(item, value) {
      return value !== "" ? item.name.toLowerCase().includes(value.toLowerCase()) : null;
    },
    getItemValue: function getItemValue(item) {
      return item.name;
    },
    open: open,
    onMenuVisibilityChange: function onMenuVisibilityChange(isOpen) {
      return setOpen(false);
    },
    renderItem: function renderItem(item, highlighted) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        style: {
          backgroundColor: highlighted ? 'lightblue' : 'transparent'
        }
      }, item.name);
    },
    value: value,
    onChange: optionChecker,
    onSelect: function onSelect(value) {
      return setValue(value) + setOpen(false);
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Space, {
    direction: "vertical"
  }, /*#__PURE__*/React.createElement(DatePicker, {
    size: 'large',
    onChange: onChange,
    picker: "month" //  format={dateFormat} 
    ,
    placeholder: "Choose month",
    bordered: true,
    className: datepickerClass,
    style: {
      width: "".concat(width * 0.8, "px")
    } //  dropdownClassName='dropdownDatePicker'
    // style={{fontFamily:'Tahoma', 
    //           paddingTop: '0.8vw',
    //           marginLeft: '0.5vw',
    //            width: 
    //            }}

  }))), /*#__PURE__*/React.createElement("div", {
    "class": "borderInnerWrapper2_inner"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onClick: addToList
  }, "SEARCH"))))), /*#__PURE__*/React.createElement(React.Fragment, null, list.length > 0 && /*#__PURE__*/React.createElement(GuestItem, {
    title: value,
    list: list
  })));
};
;// CONCATENATED MODULE: ./src/Redux/actions/content.js

 //action creator

var contentResponse = function contentResponse(res) {
  return {
    type: GET_CONTENT_RES,
    payload: res
  };
}; // console.log('[CONTENTRESPONCE]' , contentResponse)

var getContent = function getContent(id, locale) {
  return function (dispatch, getState) {
    console.log('GET_STATE:', getState());
    dispatch({
      type: GET_CONTENT_REQ
    });
    console.log('[GET_POSTS]', id);
    public_axios.get("".concat("http://smartbooker.biz/", "interface/content?id=").concat(id, "&language=").concat(locale)).then(function (res) {
      dispatch(contentResponse(res.data));
      console.log('[GET_CONTENT]:', res.data);
    })["catch"](function (err) {
      dispatch({
        type: GET_CONTENT_ERR,
        error: err
      });
    });
  };
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PageDevices/LoadingMessage.css
var LoadingMessage = __webpack_require__(29718);
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/LoadingMessage.css

      
      
      
      
      
      
      
      
      

var LoadingMessage_options = {};

LoadingMessage_options.styleTagTransform = (styleTagTransform_default());
LoadingMessage_options.setAttributes = (setAttributesWithoutAttributes_default());

      LoadingMessage_options.insert = insertBySelector_default().bind(null, "head");
    
LoadingMessage_options.domAPI = (styleDomAPI_default());
LoadingMessage_options.insertStyleElement = (insertStyleElement_default());

var LoadingMessage_update = injectStylesIntoStyleTag_default()(LoadingMessage/* default */.Z, LoadingMessage_options);




       /* harmony default export */ const PageDevices_LoadingMessage = (LoadingMessage/* default */.Z && LoadingMessage/* default.locals */.Z.locals ? LoadingMessage/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/LoadingMessage.js





var LoadingMessage_LoadingMessage = function LoadingMessage(_ref) {
  var loadingMessageClass = _ref.loadingMessageClass,
      itemWidth = _ref.itemWidth,
      noTextMessage = _ref.noTextMessage;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)(true),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  (0,react.useEffect)(function () {
    var timer = setTimeout(function () {
      return setShow(false);
    }, 10000);
    return function () {
      clearTimeout(timer);
    };
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: loadingMessageClass ? loadingMessageClass : 'Loading',
    style: {
      width: "".concat(itemWidth ? itemWidth : null),
      display: 'block',
      position: 'absolute',
      zIndex: '30000',
      backgroundColor: 'rgb(227, 227, 241)',
      borderRadius: '5px'
    }
  }, show === true ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '20%'
    }
  }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    className: "LoadingOutlinedIcon"
  })), /*#__PURE__*/react.createElement("div", {
    className: "LoadingText"
  }, !noTextMessage ? messages && messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 18) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }) : null)) : /*#__PURE__*/react.createElement("h3", {
    className: "LoadingText"
  }, !noTextMessage ? messages && messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 26) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }) : null));
};
// EXTERNAL MODULE: ./node_modules/moment/locale/uk.js
var uk = __webpack_require__(67691);
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Tours/ItemContent.js














moment_default().locale('uk');
var ItemContent = function ItemContent(_ref) {
  var tour = _ref.tour;

  // console.log('[TOUR]' , tour)
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/content?id=").concat(tour.tour_id, "&language=").concat(locale)).then(function (res) {
      setResult(res.data);
    })["catch"](function (error) {
      setResult(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);
  console.log('[RESULT] : ', result); //   useEffect ( () => {
  //     dispatch (getContent (tour.tour_id));
  //   },[]);

  if (!result) {
    return /*#__PURE__*/react.createElement("div", null, " ", /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
      noTextMessage: true,
      loadingMessageClass: 'contentLoadingWheel'
    }));
  }

  return /*#__PURE__*/react.createElement("div", {
    style: {
      paddingRight: '2vw'
    }
  }, /*#__PURE__*/react.createElement("ul", {
    "class": "Ul_ItemContent"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, result ? result.map(function (trip) {
    if (trip.content_name === 'Summary') {
      return /*#__PURE__*/react.createElement("li", {
        "class": "Li_ItemContent",
        style: {
          width: "".concat(width > 1000 ? '50%' : '60%')
        }
      }, (0,lib/* default */.ZP)(trip.text));
    } else if (trip.content_name === 'Image') {
      return /*#__PURE__*/react.createElement("li", {
        style: {
          listStyleType: 'none',
          textAlign: 'left',
          width: "".concat(width > 1000 ? '50%' : '40%')
        }
      }, /*#__PURE__*/react.createElement("img", {
        // class='imageSearchrender'
        style: {
          width: '100%',
          borderRadius: '5px',
          height: '20vw'
        },
        src: 'http://' + trip.text[2]
      }));
    }
  }) :
  /*#__PURE__*/
  // <div>{tour.name}{tour.duration}</div> 
  react.createElement("div", null, "Content is not available"))));
};
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Tours/MinRate.js
 // import {history} from '../../Front Page/History'




 // import {TourDetails} from './tourDetails';




 // import 'moment/locale/uk'

moment_default().locale('uk');
var MinRate = function MinRate(_ref) {
  var selection = _ref.selection,
      datesArray = _ref.datesArray;
  console.log('[SELECTION]', selection, datesArray);
  var minRateValue = datesArray.filter(function (item) {
    if (selection === item.date) {
      return true;
    } else return false;
  }).sort(function (a, b) {
    // if(a.n_available > 0 || b.n_available > 0){
    return a.n_value - b.n_value; // }                          
  });
  console.log('[SORTED ARRAY] : ', minRateValue[0]);
  return /*#__PURE__*/react.createElement("div", {
    className: "minimumRate_details"
  }, "Rates from ", minRateValue[0].price, " UAH");
};
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 63 modules
var es_select = __webpack_require__(10357);
;// CONCATENATED MODULE: ./src/Components/Pages/Helpers/helper.js
var ValidateQuery = function ValidateQuery(location) {
  var data = location.search.replace('?', '').split(',');
  console.log('DATA', data);
  var result = {};
  var query = data.map(function (item) {
    var name = item.match(/\w+(?==)/);
    var value = item.match(/\=.+/);
    console.log('[REGULAR VALIDATION]', value[0].replace('=', ''));
    result[name[0]] = value[0].replace('=', '');
    console.log('REGULAR', result);
  });
  console.log('RESULTING', result);
  return result;
};
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(26946);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 6 modules
var es_radio = __webpack_require__(85627);
;// CONCATENATED MODULE: ./src/Components/Library/StaticJsonData/OccupancyTypes.js
var OccupancyTypes = ['Single Occupancy', 'Double Occupancy', 'Triple Occupancy', 'Quadruple Occupancy'];
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/ThirdPageofSearchModule/TourDetailsCSS.css
var TourDetailsCSS = __webpack_require__(82601);
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/TourDetailsCSS.css

      
      
      
      
      
      
      
      
      

var TourDetailsCSS_options = {};

TourDetailsCSS_options.styleTagTransform = (styleTagTransform_default());
TourDetailsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      TourDetailsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
TourDetailsCSS_options.domAPI = (styleDomAPI_default());
TourDetailsCSS_options.insertStyleElement = (insertStyleElement_default());

var TourDetailsCSS_update = injectStylesIntoStyleTag_default()(TourDetailsCSS/* default */.Z, TourDetailsCSS_options);




       /* harmony default export */ const ThirdPageofSearchModule_TourDetailsCSS = (TourDetailsCSS/* default */.Z && TourDetailsCSS/* default.locals */.Z.locals ? TourDetailsCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/BookButton.js








 // import {CartDemo} from '../Cart/Cart'


var BookButton = function BookButton(_ref) {
  var hotel_room_id = _ref.hotel_room_id,
      value = _ref.value,
      totalPax = _ref.totalPax,
      date = _ref.date,
      tour_id = _ref.tour_id,
      hotelChoice = _ref.hotelChoice,
      tour_room = _ref.tour_room,
      hotel_id = _ref.hotel_id,
      tariff = _ref.tariff;

  // console.log("TARIFF",tariff[0],tour_room)
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      booking = _useState2[0],
      setBooking = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      rateTotal = _useState4[0],
      setrateTotal = _useState4[1];

  var _useState5 = (0,react.useState)(),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      tourTariffId = _useState6[0],
      setTourTariffId = _useState6[1];

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var AddToBasket = function AddToBasket(param) {
    return function (e) {
      var newBooking = {
        tour_id: tour_id,
        tour_tariff_id: e.target.value,
        tourDate: date,
        totalPax: totalPax,
        paxPerRoom: value,
        hotel_room_id: hotel_room_id,
        hotelName: hotelChoice,
        tour_room_id: tour_room.id,
        hotel_id: hotel_id,
        amount: param
      };
      console.log('ETARGET', e.target.value);
      setBooking([newBooking]); // const route_query_form = `${location.search},smart_id=123234`

      var route_query_form = "?start=".concat(date, ",contract_id=").concat(tour_id, ",tariff_id=").concat(e.target.value, ",room_id=").concat(tour_room.id, ",hotel_id=").concat(hotel_id, ",hotel_room_id=").concat(hotel_room_id, ",adults=").concat(totalPax.counterAdults, ",children=").concat(totalPax.counterChild, ",infant=").concat(totalPax.counterInfant, ",htlName=").concat(hotelChoice, ",amount=").concat(param, ",service_type_id=", 11);
      history.push("/".concat(locale, "/booking_form/").concat(route_query_form), [].concat((0,toConsumableArray/* default */.Z)(booking), [newBooking]));
    };
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(react.Fragment, null, tariff && tariff[0].map(function (item) {
    if (item.smart_category_id === tour_room.id) {
      return item.rates.map(function (item1) {
        // if(item1.tariff_name.match(/\=.+/)[0].replace('=','') === hotel_id&&item.smart_category_id === tour_room.id)
        //   return item1.rate_details.filter((item2,index,array)=>array.findIndex(t=>t.smart_category_id===item2.smart_category_id)===index).map((item3)=>{
        return item1.rate_details.map(function (item3) {
          if (totalPax.counterAdults >= item3.min_adult && totalPax.counterAdults <= item3.max_adult) {
            return /*#__PURE__*/react.createElement("div", {
              "class": "TourWrapperAddToBasket",
              style: {
                width: "".concat(width > 1000 ? width * 0.5 : width * 0.8, "px")
              }
            }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement("span", {
              style: {
                color: 'blue'
              }
            }, 'TOTAL tour cost '), "with ", item1.tariff_name, " :", /*#__PURE__*/react.createElement("span", {
              style: {
                color: 'blue',
                fontWeight: 'bold',
                fontSize: '22px'
              }
            }, Math.ceil(item3.sale * totalPax.counterAdults), " UAH")), /*#__PURE__*/react.createElement("span", {
              style: {
                fontSize: '12px',
                color: 'grey',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                lineHeight: '8px'
              }
            }, 'Cost Includes: ' + item.room_name + ' ' + item3.sale + 'UAH tour per person' + ' x ' + totalPax.counterAdults + ' adults')), /*#__PURE__*/react.createElement("button", {
              type: "submit",
              "class": "AddToCartTour",
              value: item1.smart_tariff_type_id,
              onClick: AddToBasket(Math.ceil(item3.sale * totalPax.counterAdults))
            }, messages && messages.map(function (item) {
              if (item.sitepage_region_id === 7 && item.sitepage_type_id === 14) {
                return /*#__PURE__*/react.createElement(message/* default */.Z, {
                  id: item.title.map(function (item1) {
                    return item1.text;
                  })
                });
              }
            })));
          }
        });
      });
    }
  })));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/OccupancyRates.js









var OccupancyRates = function OccupancyRates(_ref) {
  var choiceDetailsNew = _ref.choiceDetailsNew,
      hotelChoice = _ref.hotelChoice,
      tour_id = _ref.tour_id,
      selectionDetails = _ref.selectionDetails,
      totalPax = _ref.totalPax;

  var _useState = (0,react.useState)([{}]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      hotels = _useState2[0],
      setHotels = _useState2[1];

  console.log('OCCUPANCY', choiceDetailsNew, hotelChoice);
  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/sitechoice3new?tour_id=").concat(tour_id, "&date=").concat(selectionDetails)).then(function (res) {
      var hotelChoice = res.data[0].hotels.map(function (item) {
        return item;
      });
      setHotels(hotelChoice);
    })["catch"](function (error) {
      setHotels(undefined);
      console.log('[axios error]: ', error);
    });
  }, []);
  console.log('HOTEL', hotels);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '5vh'
    }
  }, choiceDetailsNew[0].mapping && choiceDetailsNew[0].mapping.length > 0 ? choiceDetailsNew[0].mapping.map(function (item) {
    for (var key in item) {
      if (key === hotelChoice) {
        for (var i in item[key].room_hotel) {
          if (i === "id") {
            return /*#__PURE__*/react.createElement("div", {
              "class": "RadioWrapper"
            }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Ticks, {
              hotelChoice: hotelChoice,
              room_id: item[key].room_hotel[i],
              hotels: hotels,
              totalPax: totalPax,
              date: selectionDetails,
              tour_id: tour_id,
              mappingItem: item[key],
              tariff: choiceDetailsNew[0].tariff.map(function (item) {
                return item.rooms;
              })
            })));
          }
        }
      }
    } // })

  }) : null);
};

var Ticks = function Ticks(_ref2) {
  var hotelChoice = _ref2.hotelChoice,
      room_id = _ref2.room_id,
      hotels = _ref2.hotels,
      totalPax = _ref2.totalPax,
      date = _ref2.date,
      tour_id = _ref2.tour_id,
      mappingItem = _ref2.mappingItem,
      tariff = _ref2.tariff;
  console.log('KEY', hotels);

  var _useState3 = (0,react.useState)(2),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var onChange = function onChange(e) {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }; // const OccupancyTypes = ['Single Occupancy', 'Double Occupancy', 'Triple Occupancy','Quadruple Occupancy']


  return /*#__PURE__*/react.createElement("div", null, hotels && hotels.length > 0 ? hotels.map(function (item1) {
    if (hotelChoice === item1.hotel_name) {
      return item1.rooms.filter(function (item2, index, array) {
        return array.findIndex(function (t) {
          return t.smart_category_id === item2.smart_category_id;
        }) === index;
      }).map(function (item3) {
        if (item3.smart_category_id === room_id) {
          return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", null, /*#__PURE__*/react.createElement("span", {
            style: {
              fontSize: '17px',
              color: 'rgb(77, 75, 75)',
              fontStyle: 'italic'
            }
          }, "with accommodation at hotel"), ' ' + hotelChoice + ' ', /*#__PURE__*/react.createElement("span", {
            style: {
              fontSize: '17px',
              color: 'rgb(77, 75, 75)',
              fontStyle: 'italic'
            }
          }, "in a"), ' ' + item3.room_name.toLowerCase() + ' ', /*#__PURE__*/react.createElement("span", {
            style: {
              fontSize: '17px',
              color: 'rgb(16, 45, 105)',
              fontStyle: 'italic'
            }
          }, "room. "), /*#__PURE__*/react.createElement("h4", {
            style: {
              marginTop: '2vh',
              textAlign: 'center',
              textDecoration: 'underline',
              fontSize: '20px',
              color: '#102D69'
            }
          }, "Please choose your occupancy : ")), totalPax.counterChild === 0 ? /*#__PURE__*/react.createElement(es_radio/* default.Group */.ZP.Group, {
            onChange: onChange,
            value: value,
            className: "Radio"
          }, OccupancyTypes && OccupancyTypes.map(function (item, index, array) {
            if (index < item3.max_adults_room) {
              return /*#__PURE__*/react.createElement(es_radio/* default */.ZP, {
                style: {
                  color: '#102D69',
                  fontWeight: 'bold'
                },
                value: index + 1,
                key: index
              }, item);
            }
          })) : /*#__PURE__*/react.createElement(es_radio/* default.Group */.ZP.Group, {
            onChange: onChange,
            value: value,
            className: "Radio"
          }, OccupancyTypes && OccupancyTypes.map(function (item, index, array) {
            if (index < item3.max_adults_room && index > 0) {
              return /*#__PURE__*/react.createElement(es_radio/* default */.ZP, {
                style: {
                  color: '#102D69',
                  fontWeight: 'bold'
                },
                value: index + 1,
                key: index
              }, item);
            }
          })), /*#__PURE__*/react.createElement("div", null));
        }
      });
    }
  }) : /*#__PURE__*/react.createElement("label", {
    value: "Please print your occupancy requirements"
  }, /*#__PURE__*/react.createElement("input", null)), /*#__PURE__*/react.createElement(BookButton, {
    value: value,
    hotel_room_id: room_id,
    totalPax: totalPax,
    date: date,
    tour_id: tour_id,
    hotelChoice: hotelChoice,
    tour_room: mappingItem.room_tour,
    hotel_id: mappingItem.hotel_id,
    tariff: tariff
  }));
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(57254);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MinusOutlined.js + 1 modules
var MinusOutlined = __webpack_require__(1058);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
;// CONCATENATED MODULE: ./src/Components/Library/Icons/pax.js

var Pax = function Pax() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "20",
    height: "20",
    color: "#102D69",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "user",
    "class": "svg-inline--fa fa-user fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
  }));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/PaxChoice.js










var PaxChoice = function PaxChoice(_ref) {
  var MakeVisible = _ref.MakeVisible,
      open = _ref.open,
      tour_id = _ref.tour_id,
      selectionDetails = _ref.selectionDetails;

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      paxAmountNew = _useState2[0],
      setPaxAmountNew = _useState2[1];

  var _useState3 = (0,react.useState)(2),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      counterAdults = _useState4[0],
      setCounterAdults = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      counterChild = _useState6[0],
      setCounterChild = _useState6[1];

  var _useState7 = (0,react.useState)(0),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      counterInfant = _useState8[0],
      setCounterInfant = _useState8[1];

  var _useState9 = (0,react.useState)({
    counterAdults: counterAdults,
    counterChild: counterChild,
    counterInfant: counterInfant
  }),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      total = _useState10[0],
      setTotal = _useState10[1];

  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/sitechoice3new?tour_id=").concat(tour_id, "&date=").concat(selectionDetails)).then(function (res) {
      var tour_capacity;
      res.data[0].tariff.forEach(function (item) {
        item.rooms.forEach(function (item1) {
          tour_capacity = item1.rates.map(function (item2) {
            var min = item2.rate_details.sort(function (a, b) {
              return a.min_adult - b.min_adult;
            })[0].min_adult;
            var max = item2.rate_details[0].max_adult;

            for (var i = 0; i < item2.rate_details.length; i++) {
              if (item2.rate_details[i].max_adult > max) {
                max = item2.rate_details[i].max_adult;
              }
            }

            return min + max;
          }).join('').split('').sort(function (a, b) {
            return a - b;
          });
        });
      });
      setPaxAmountNew(tour_capacity);
    })["catch"](function (error) {
      setPaxAmountNew(undefined);
      console.log('[axios error]: ', error);
    });
  }, []);
  console.log('PAX AMOUNT NEW', paxAmountNew[0], paxAmountNew[paxAmountNew.length - 1]);

  if (!paxAmountNew) {
    return /*#__PURE__*/react.createElement("div", null, " Loading...");
  } // console.log('CHECKING' , pax)


  var TotalPax = function TotalPax() {
    var totalpax = {
      counterAdults: counterAdults,
      counterChild: counterChild,
      counterInfant: counterInfant
    };
    setTotal(totalpax);
  };

  var add = function add() {
    counterAdults < paxAmountNew[paxAmountNew.length - 1] ? setCounterAdults(counterAdults + 1) : alert("This tour allows upto ".concat(paxAmountNew[paxAmountNew.length - 1], " Adults"));
  };

  var deduct = function deduct() {
    counterAdults > 0 ? setCounterAdults(counterAdults - 1) : setCounterAdults(0);
  };

  var addChild = function addChild() {
    counterChild < 2 ? setCounterChild(counterChild + 1) : alert('This tour allows upto 2 Children');
  };

  var deductChild = function deductChild() {
    counterChild > 0 ? setCounterChild(counterChild - 1) : setCounterChild(0);
  };

  var addInfant = function addInfant() {
    counterInfant < 1 ? setCounterInfant(counterInfant + 1) : alert('This tour allows upto 1 Infant');
  };

  var deductInfant = function deductInfant() {
    counterInfant > 0 ? setCounterInfant(counterInfant - 1) : setCounterInfant(0);
  };

  return /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '3vh'
    }
  }, /*#__PURE__*/react.createElement("div", {
    "class": "TourPaxChoiceWrapper"
  }, /*#__PURE__*/react.createElement("div", {
    "class": "PaxChoice"
  }, /*#__PURE__*/react.createElement(Pax, null), /*#__PURE__*/react.createElement("h4", null, "Amount of People")), /*#__PURE__*/react.createElement("div", {
    "class": "PaxResult",
    onClick: MakeVisible
  }, /*#__PURE__*/react.createElement("h4", {
    onClick: TotalPax
  }, counterAdults, " Adults, ", counterChild, " Children, ", counterInfant, " Infants", /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
    className: "DownOutlined"
  }))), /*#__PURE__*/react.createElement("div", {
    "class": open === false ? 'TourPopUpNotActive' : 'TourPopUpActive'
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 6vh)',
      rowGap: '10px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '25% 20% 10% 20% 25%'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Adults"), /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    className: "Minus",
    onClick: deduct
  }), /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h4", null, counterAdults)), /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "Plus",
    onClick: add
  }), /*#__PURE__*/react.createElement("span", null, "12+ y.o.")), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '25% 20% 10% 20% 25%'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Children"), /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    className: "Minus",
    onClick: deductChild
  }), /*#__PURE__*/react.createElement("h4", null, counterChild), /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "Plus",
    onClick: addChild
  }), /*#__PURE__*/react.createElement("span", null, "2-11 y.o.")), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '25% 20% 10% 20% 25%'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Infants"), /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    className: "Minus",
    onClick: deductInfant
  }), /*#__PURE__*/react.createElement("h4", null, counterInfant), /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "Plus",
    onClick: addInfant
  }), /*#__PURE__*/react.createElement("span", null, "0-2 y.o."))), /*#__PURE__*/react.createElement("div", {
    onClick: TotalPax
  }, /*#__PURE__*/react.createElement("button", {
    "class": "TourPopUpButton",
    onClick: MakeVisible
  }, "Confirm")))), /*#__PURE__*/react.createElement(RateChoiceBlock, {
    totalPax: total,
    tour_id: tour_id,
    selectionDetails: selectionDetails
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/coach.js

var Coach = function Coach() {
  return /*#__PURE__*/react.createElement("svg", {
    color: "#102D69",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "bus-alt",
    "class": "svg-inline--fa fa-bus-alt fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8V72zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112v160zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32H272zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/guide.js

var Guide = function Guide() {
  return /*#__PURE__*/react.createElement("svg", {
    id: "Layer_1",
    "enable-background": "new 0 0 512 512",
    height: "30",
    viewBox: "0 0 512 512",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "m398.616 449.192c-3.118-2.727-7.855-2.408-10.583.709l-30.921 35.364c-3.275 3.749-7.821 5.906-12.799 6.074-4.992.178-9.66-1.676-13.181-5.193l-23.831-23.821v-15.753c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v18.821.077 39.03c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-20.966l13.228 13.222c6.138 6.132 14.537 9.593 23.193 9.593 9.406 0 18.497-4.127 24.684-11.212l30.92-35.362c2.727-3.119 2.408-7.857-.71-10.583zm-311.478-10.12c-4.143 0-7.5 3.358-7.5 7.5v57.928c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-57.928c0-4.142-3.358-7.5-7.5-7.5zm415.363-320.17-50.271-40.846c-3.477-2.824-8.148-3.384-12.194-1.458-4.045 1.925-6.558 5.904-6.558 10.384v96.401c0 .014.003.027.003.041v121.646l-75.516 86.126-23.923-44.665c-11.418-21.333-32.493-36.41-56.379-40.332-9.85-1.617-32.841-5.376-41.126-6.739-6.192-1.019-10.688-6.309-10.688-12.58v-8.863c5.844-3.685 11.331-8.027 16.335-13.035 17.583-17.594 27.266-40.977 27.266-65.842v-3.26h2.89c14.839.068 27.46-12.551 27.46-27.46 0-7.91-3.474-15.262-9.108-20.37 4.36-6.219 5.596-14.391 3.115-21.566-2.142-6.193-6.805-11.27-12.793-13.928-.787-.35-1.582-.686-2.374-1.028v-53.988c0-31.727-25.813-57.54-57.54-57.54h-89.49c-31.727 0-57.54 25.813-57.54 57.54v53.988c-.79.342-1.582.678-2.369 1.027-5.989 2.659-10.652 7.736-12.794 13.93-2.513 7.268-1.279 15.314 3.101 21.574-5.629 5.104-9.098 12.451-9.098 20.361 0 14.869 12.476 27.545 27.47 27.46h2.89v3.26c0 33.167 17.428 62.334 43.601 78.834v10.436c0 5.762-3.911 10.753-9.506 12.138l-62.28 15.36c-30.226 7.455-51.335 34.403-51.335 65.532v123.06c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-123.06c0-24.211 16.418-45.17 39.926-50.968l48.242-11.897c14.915 23.919 41.008 38.549 69.439 38.549 29.5 0 56.13-15.469 70.774-40.728l28.104 4.605c19.311 3.171 36.351 15.361 45.583 32.61l24.207 45.194c2.253 4.216 6.436 7.059 11.188 7.605 4.76.546 9.482-1.278 12.636-4.876l51.365-58.582 32.626 32.638c.031.03.064.056.095.086l-41.824 47.833c-2.727 3.118-2.408 7.856.71 10.583 3.107 2.717 7.847 2.419 10.583-.709l68.933-78.836c14.109-16.004 11.635-41.598-4.885-54.804-11.098-8.872-25.631-10.563-37.972-5.589v-107.204l54.021-43.892c3.653-2.969 5.749-7.371 5.749-12.079 0-4.707-2.096-9.109-5.749-12.077zm-217.701 49.518c0 6.76-5.695 12.494-12.46 12.46h-2.89v-22.76c2.847.204 5.679-.108 8.377-.892 4.19 2.067 6.973 6.409 6.973 11.192zm-201.53 12.46h-2.89c-6.804.035-12.47-5.691-12.47-12.46 0-4.779 2.776-9.113 6.955-11.177 2.699.784 5.576 1.103 8.404.895v22.742zm1.857-38.43c-4.297 1.905-9.274.041-11.51-4.126-2.356-4.39-.38-10.038 4.17-12.058 41.218-18.296 86.635-24.752 131.354-18.667 4.097.553 7.884-2.316 8.442-6.42.559-4.104-2.316-7.884-6.421-8.443-41.272-5.616-83.111-1.164-122.093 12.858v-48.054c0-23.457 19.083-42.54 42.54-42.54h89.491c23.457 0 42.54 19.083 42.54 42.54v48.051c-5.741-2.064-11.552-3.927-17.396-5.571-3.983-1.12-8.129 1.201-9.251 5.188s1.201 8.129 5.188 9.251c11.141 3.135 22.158 7.107 32.746 11.806 4.512 2.003 6.5 7.656 4.186 12.028-2.196 4.148-7.125 6.106-11.527 4.156-55.968-24.784-125.746-25.143-182.459.001zm13.143 56.69v-45.935c50.042-20.014 106.142-20.013 156.181.003v45.932c0 20.86-8.124 40.478-22.875 55.238-14.631 14.641-34.342 22.881-55.215 22.881-43.06.001-78.091-35.044-78.091-78.119zm78.087 142.984c-21.562 0-41.476-10.311-53.968-27.431 12.228-3.798 20.708-16.029 19.481-29.062 10.672 4.274 22.311 6.629 34.49 6.629 12.009 0 23.661-2.279 34.489-6.597-.768 12.921 8.135 24.591 20.287 27.938-12.401 17.805-32.595 28.523-54.779 28.523zm300.726-30.669c10.051 8.034 11.534 23.513 2.961 33.218l-17.216 19.689-32.702-32.713 15.235-17.375c8.141-9.293 22.078-10.527 31.722-2.819zm15.959-180.039-44.562 36.207-.003-73.288 44.564 36.209c.227.141.233.726.001.872zm-275.39 62.043c4.143 0 7.5-3.358 7.5-7.5v-16.524c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v16.524c0 4.143 3.358 7.5 7.5 7.5zm-82.59-31.523c-4.143 0-7.5 3.358-7.5 7.5v16.524c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-16.524c0-4.143-3.358-7.5-7.5-7.5zm64.388 68.821c-1.992-3.63-6.549-4.96-10.183-2.968-2.816 1.545-7.404 3.362-13.191 3.313-5.555-.058-9.934-1.833-12.629-3.313-3.635-1.993-8.191-.665-10.184 2.967s-.664 8.19 2.967 10.184c4.2 2.305 11.025 5.071 19.689 5.162 8.753.091 16.236-2.788 20.563-5.161 3.632-1.993 4.96-6.552 2.968-10.184z",
    stroke: "#102D69",
    "stroke-width": "15"
  })));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/RateChoiceBlock.js






 // import PropTypes from 'prop-types';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

 // import {CalendarOutlined} from '@ant-design/icons'







var RateChoiceBlock = function RateChoiceBlock(_ref) {
  var selectionDetails = _ref.selectionDetails,
      tour_id = _ref.tour_id,
      totalPax = _ref.totalPax;

  // const [choiceDetails, setchoiceDetails] = useState([{}]);
  var _useState = (0,react.useState)('Hotels Available'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      hotelChoice = _useState2[0],
      sethotelChoice = _useState2[1]; // const [open, setOpen] = useState(false)


  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      occupancy = _useState4[0],
      setOccupancy = _useState4[1];

  var _useState5 = (0,react.useState)([{}]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      choiceDetailsNew = _useState6[0],
      setChoiceDetailsNew = _useState6[1];

  var AmountPax = (0,es/* useSelector */.v9)(function (state) {
    return state.paxchoice.pax;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  var Option = es_select/* default.Option */.Z.Option;
  console.log('tour_id', tour_id); // useEffect ( () => {
  //   dispatch (getPax ());
  //   },[]);

  function handleChange(value) {
    sethotelChoice(value);
  } // const handleSelected = (value) =>{
  //   setOccupancy(!occupancy)
  // }


  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/sitechoice3new?tour_id=").concat(tour_id, "&date=").concat(selectionDetails)).then(function (res) {
      setChoiceDetailsNew(res.data);
    })["catch"](function (error) {
      setChoiceDetailsNew(undefined);
      console.log('[axios error]: ', error);
    });
  }, []);
  console.log('CHOICE_DETAILS_NEW', choiceDetailsNew);
  return /*#__PURE__*/react.createElement("div", {
    "class": "TourChoiceBlockWrapper"
  }, /*#__PURE__*/react.createElement("div", {
    "class": "TourChoiceBlock"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, choiceDetailsNew[0].hotels && choiceDetailsNew[0].hotels.length > 0 && choiceDetailsNew[0].hotels !== 'no attached hotels' ? /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '4vh'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '0.5vh'
    }
  }, /*#__PURE__*/react.createElement(hotels_Hotels, null), /*#__PURE__*/react.createElement("h4", {
    style: {
      marginLeft: '0.5vw'
    }
  }, "Accommodation")), /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    defaultValue: hotelChoice,
    style: {
      width: '90%',
      color: '#102D69',
      fontWeight: 'bold'
    },
    size: "medium",
    onChange: handleChange // onSelect={()=>dispatch (getPax ())}
    ,
    bordered: true
  }, choiceDetailsNew[0].hotels && choiceDetailsNew[0].hotels.map(function (hotel, index) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Option, {
      value: hotel.hotel_name,
      key: index
    }, hotel.hotel_name, " ", hotel.hotel_rating));
  })), /*#__PURE__*/react.createElement(OccupancyRates, {
    choiceDetailsNew: choiceDetailsNew,
    hotelChoice: hotelChoice,
    selectionDetails: selectionDetails,
    tour_id: tour_id,
    totalPax: totalPax
  })) : /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
    loadingMessageClass: "TourRateLoading"
  }))), /*#__PURE__*/react.createElement("div", {
    "class": "TourInclusionsBlock"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, choiceDetailsNew.inclusions && choiceDetailsNew.inclusions.length > 0 ? choiceDetailsNew.inclusions.map(function (item1) {
    if (item1.Transfer) {
      return /*#__PURE__*/react.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        } //  class='third'

      }, /*#__PURE__*/react.createElement(Coach, null), /*#__PURE__*/react.createElement("h4", {
        style: {
          marginTop: '1vh'
        }
      }, "Transfer Included"));
    } else if (item1.Excursion || item1.Guide) {
      return /*#__PURE__*/react.createElement("div", {
        style: {
          marginBottom: '4vh',
          marginTop: '4vh',
          display: 'flex',
          flexDirection: 'column'
        },
        "class": "forth"
      }, /*#__PURE__*/react.createElement(Guide, null), /*#__PURE__*/react.createElement("h4", {
        style: {
          marginTop: '1vh'
        }
      }, "Guide Included"));
    }
  }) : null)));
};
;// CONCATENATED MODULE: ./src/Components/Library/PhotoGallery/PhotosContent.js


var PhotosContent_templateObject;



var PhotosContent_GalleryContent = emotion_styled_browser_esm/* default.div */.Z.div(PhotosContent_templateObject || (PhotosContent_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n    transform: translateX(-", "px); \n    width: ", "px; \n    display: flex; \n"])), function (props) {
  return props.translate;
}, function (props) {
  return props.width;
}); //transition: transform ease-out ${props => props.transition}s; 

console.log(PhotosContent_GalleryContent);
/* harmony default export */ const PhotosContent = (PhotosContent_GalleryContent);
;// CONCATENATED MODULE: ./src/Components/Library/Images/ArkturDMClogo.svg
/* harmony default export */ const ArkturDMClogo = (__webpack_require__.p + "ef358c4d600eea8f788dc2a94d88880d.svg");
;// CONCATENATED MODULE: ./src/Components/Library/PhotoGallery/Photo.js






var Photo_Photo = function Photo(_ref) {
  var content = _ref.content;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      paddingTop: '2vw',
      paddingBottom: '5vw',
      //     textAlign: 'left',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    // style={{width: '50%', height: '60vh' }} 
    style: {
      height: "".concat(height / 2, "px"),
      width: '100%'
    },
    src: content.includes('jpg') ? 'http://' + content : ArkturDMClogo
  }));
};

/* harmony default export */ const PhotoGallery_Photo = (Photo_Photo);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PhotoGallery/PhotoGalleryCSS.css
var PhotoGalleryCSS = __webpack_require__(33582);
;// CONCATENATED MODULE: ./src/Components/Library/PhotoGallery/PhotoGalleryCSS.css

      
      
      
      
      
      
      
      
      

var PhotoGalleryCSS_options = {};

PhotoGalleryCSS_options.styleTagTransform = (styleTagTransform_default());
PhotoGalleryCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      PhotoGalleryCSS_options.insert = insertBySelector_default().bind(null, "head");
    
PhotoGalleryCSS_options.domAPI = (styleDomAPI_default());
PhotoGalleryCSS_options.insertStyleElement = (insertStyleElement_default());

var PhotoGalleryCSS_update = injectStylesIntoStyleTag_default()(PhotoGalleryCSS/* default */.Z, PhotoGalleryCSS_options);




       /* harmony default export */ const PhotoGallery_PhotoGalleryCSS = (PhotoGalleryCSS/* default */.Z && PhotoGalleryCSS/* default.locals */.Z.locals ? PhotoGalleryCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PhotoGallery/Arrow.js


var Arrow_ArrowGallery = function ArrowGallery(_ref) {
  var direction = _ref.direction,
      photoClick = _ref.photoClick;
  return (
    /*#__PURE__*/
    // console.log(direction),
    react.createElement("div", {
      onClick: photoClick
    }, direction === 'right' ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
      className: "prevGallery"
    }, "\u276E")) : /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
      className: "nextGallery"
    }, "\u276F")))
  );
};
;// CONCATENATED MODULE: ./src/Components/Library/PhotoGallery/PhotoGallery.js



function PhotoGallery_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PhotoGallery_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PhotoGallery_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PhotoGallery_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // import { css ,jsx } from '@emotion/react'





 // import Dots from './dots'

var Gallery = function Gallery(_ref) {
  var galleryImages = _ref.galleryImages;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var getWidth = function getWidth() {
    return window.innerWidth;
  };

  console.log('[GALLERY IMAGES] : ', galleryImages);

  var _useState = (0,react.useState)({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var translate = state.translate,
      transition = state.transition,
      activeIndex = state.activeIndex;

  var nextPhoto = function nextPhoto() {
    if (activeIndex === galleryImages.length - 1) {
      return setState(PhotoGallery_objectSpread(PhotoGallery_objectSpread({}, state), {}, {
        translate: 0,
        activeIndex: 0
      }));
    } else {
      return setState(PhotoGallery_objectSpread(PhotoGallery_objectSpread({}, state), {}, {
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * width
      }));
    }
  };

  var prevPhoto = function prevPhoto() {
    if (activeIndex === 0) {
      return setState(PhotoGallery_objectSpread(PhotoGallery_objectSpread({}, state), {}, {
        translate: (galleryImages.length - 1) * width,
        activeIndex: galleryImages.length - 1
      }));
    }

    setState(PhotoGallery_objectSpread(PhotoGallery_objectSpread({}, state), {}, {
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width
    }));
  };

  return (
    /*#__PURE__*/
    //  <div>   
    react.createElement("div", {
      className: "photoGalleryCSS",
      style: {
        height: "".concat(height / 2, "px")
      }
    }, /*#__PURE__*/react.createElement(PhotosContent, {
      translate: translate,
      transition: transition,
      width: width * galleryImages.length
    }, galleryImages.map(function (slide, index, array) {
      return /*#__PURE__*/react.createElement(PhotoGallery_Photo, {
        key: index,
        content: slide
      });
    })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Arrow_ArrowGallery, {
      direction: "left",
      photoClick: nextPhoto
    }), /*#__PURE__*/react.createElement(Arrow_ArrowGallery, {
      direction: "right",
      photoClick: prevPhoto
    }))) // </div>

  );
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/moon.js

var Moon = function Moon() {
  return /*#__PURE__*/react.createElement("svg", {
    color: "grey",
    width: "1.2%",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "moon",
    "class": "svg-inline--fa fa-moon fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/sun.js

var Sun = function Sun() {
  return /*#__PURE__*/react.createElement("svg", {
    color: "grey",
    width: "1.2%",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "sun",
    "class": "svg-inline--fa fa-sun fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
  }));
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CalendarOutlined.js + 1 modules
var CalendarOutlined = __webpack_require__(53318);
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/TourDetails.js




















var TourDetails = function TourDetails(props) {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();
  console.log('PROPS', props);
  var search_data = ValidateQuery(location);
  console.log('Tour Details Location', search_data.selection);

  var _useState = (0,react.useState)([{}]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      details = _useState2[0],
      setDetails = _useState2[1];

  var _useState3 = (0,react.useState)([{}]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      rateDetails = _useState4[0],
      setrateDetails = _useState4[1];

  var _useState5 = (0,react.useState)(search_data.selection),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      selectionDetails = _useState6[0],
      setSelection = _useState6[1];

  var _useState7 = (0,react.useState)([{}]),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      filteredDetails = _useState8[0],
      setfilteredDetails = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      open = _useState10[0],
      setOpen = _useState10[1];

  var Option = es_select/* default.Option */.Z.Option;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/content?id=").concat(search_data.tour_id, "&language=").concat(locale)).then(function (res) {
      setDetails(res.data);
    })["catch"](function (error) {
      setDetails(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);
  console.log('[DETAILED CONTENT]', details);

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": currentUser.user_id,
      "action": "GetPriceTourRQ",
      "data": {
        city_id: search_data.city_id,
        // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
        date: search_data.selection,
        window: 30,
        tour_id: search_data.tour_id
      }
    }; // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))

    axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })) // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    .then(function (res) {
      setrateDetails(res.data); // console.log('setrateDetails]' , res.data)
    })["catch"](function (error) {
      setrateDetails(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);
  console.log('[setrateDetails] : ', rateDetails);
  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": currentUser.user_id,
      "action": "GetPriceTourRQ",
      "data": {
        city_id: search_data.city_id,
        // date: currentMonth === search_data.date ? today : (search_data.date + '-01'),
        date: search_data.selection,
        window: 30,
        tour_id: search_data.tour_id
      }
    }; // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))

    axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })) // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    .then(function (res) {
      var filtered = res.data[0].rate.filter(function (item1, index, array) {
        return array.findIndex(function (t) {
          return t.date === item1.date;
        }) === index;
      });
      setfilteredDetails(filtered);
      console.log('[setfilteredDetails]', filtered);
    })["catch"](function (error) {
      setfilteredDetails(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);

  function selectedPeriod(value) {
    console.log('SELECTED : ', value);
    setSelection(value);
  }

  var MakeVisible = function MakeVisible() {
    setOpen(!open);
  };

  return /*#__PURE__*/react.createElement("div", {
    "class": "TourDetailsWrapper"
  }, /*#__PURE__*/react.createElement("h2", {
    style: {
      marginTop: '4vh'
    }
  }, search_data.tour_name.replace(/%20/g, ' ')), /*#__PURE__*/react.createElement("div", {
    "class": "Icons"
  }, /*#__PURE__*/react.createElement(Sun, null), /*#__PURE__*/react.createElement("div", {
    style: {
      marginLeft: '0.4vw'
    }
  }, rateDetails[0].duration, " days"), /*#__PURE__*/react.createElement("div", {
    style: {
      marginLeft: '0.4vw',
      marginRight: '0.4vw'
    }
  }, " - "), /*#__PURE__*/react.createElement(Moon, null), /*#__PURE__*/react.createElement("div", {
    style: {
      marginLeft: '0.4vw'
    }
  }, " ", rateDetails[0].duration - 1, " nights ")), /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width > 1000 ? 'TourDetailsInner' : 'TourDetailsInnerSmallScreen') // style={{width:`${width}`}}

  }, details && details.map(function (item) {
    if (item.content_name === "Image") {
      return /*#__PURE__*/react.createElement("div", {
        "class": "GalleryTourDetails",
        style: {
          width: "".concat(width > 1000 ? '40%' : '100%'),
          height: "".concat(height / 2, "px")
        }
      }, /*#__PURE__*/react.createElement(Gallery, {
        galleryImages: item.text
      }));
    }
  }), /*#__PURE__*/react.createElement("div", {
    "class": "TourBookingDetails",
    style: {
      width: "".concat(width > 1000 ? '60%' : '100%')
    }
  }, /*#__PURE__*/react.createElement("h3", null, "Tour Booking Details ", rateDetails[0].duration), /*#__PURE__*/react.createElement("div", {
    "class": "TourBookingChoice"
  }, /*#__PURE__*/react.createElement("div", {
    "class": "BookingChoiceInner",
    style: {
      gridRow: '1',
      gridColumn: '1'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/react.createElement(CalendarOutlined/* default */.Z, {
    style: {
      fontSize: '2vw',
      border: '2px solid white',
      color: '#102D69'
    }
  }), /*#__PURE__*/react.createElement("h4", null, "Chosen date of travel : ")), /*#__PURE__*/react.createElement("div", {
    "class": "DateSelection"
  }, selectionDetails)), /*#__PURE__*/react.createElement("div", {
    "class": "BookingChoiceInner",
    style: {
      gridRow: '1',
      gridColumn: '2'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Available dates :"), /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    defaultValue: selectionDetails,
    onChange: selectedPeriod,
    bordered: true,
    size: "medium"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, filteredDetails && filteredDetails.map(function (filter, index) {
    return /*#__PURE__*/react.createElement(Option, {
      value: filter.date,
      key: (rateDetails[0].tour_id, '-', index)
    }, filter.date, " -- ", moment_default()(filter.date).add(rateDetails[0].duration, 'days').format('YYYY-MM-DD'), " (", rateDetails[0].duration, " days)");
  })))), /*#__PURE__*/react.createElement("div", {
    style: {
      gridRow: '2',
      gridColumn: '1/4'
    }
  }, /*#__PURE__*/react.createElement(PaxChoice, {
    selectionDetails: selectionDetails,
    tour_id: search_data.tour_id,
    MakeVisible: MakeVisible,
    open: open
  }))))), /*#__PURE__*/react.createElement("div", null, details && details.map(function (item) {
    if (item.content_name === 'Body') {
      return /*#__PURE__*/react.createElement("div", {
        "class": "DescriptionTourDetails"
      }, (0,lib/* default */.ZP)(item.text));
    }
  })));
};
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Tours/ItemObj.js


 // import {history} from '../../Front Page/History'





 // import {TourDetails} from './tourDetails';






 // import 'moment/locale/uk'



moment_default().locale('uk');
var ItemObj = function ItemObj(_ref) {
  var tariff = _ref.tariff,
      searchResults = _ref.searchResults,
      tour_name = _ref.tour_name;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages; // console.log('CHECKING', tariff,searchResults,tour_name)


  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();
  var search_data = ValidateQuery(location);
  console.log('ITEM OBJ LOCATION', location);
  console.log('HISTORY CHECK', history);

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; //фильтрую объект с тарифами, датами так, чтобы вывести первую встречающую дату каждого вида (к примеру, у меня пришло
  //в массиве 10 раз дата 2021-03-03, 3 раза дата 2021-03-04, 4 раза дата 2021-03-05 - я вывожу новый массив, где будет
  //объект в массиве, где первый раз встречается 2021-03-03, потом объект, где встречается 2021-03-04 первый раз, и т.д.)
  //это нужно, чтобы вывести список периодов для выбора


  var filtered_tour_dates = tariff.rate.filter(function (item1, index, array) {
    return array.findIndex(function (t) {
      return t.date === item1.date;
    }) === index;
  });
  console.log('[FILTERED_TOUR_DATES] : ', filtered_tour_dates);

  var _useState = (0,react.useState)(filtered_tour_dates[0].date),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      selection = _useState2[0],
      setSelection = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      detailsList = _useState4[0],
      setDetailsList = _useState4[1]; // const [detailsList, setdetailsList] = useState([{}]);


  console.log('[ItemObj TARIFF]', tariff);
  console.log('[ItemObj searchResults]', searchResults); // console.log('[ItemObj HISTORY]', history)

  function selectedPeriod(e) {
    console.log('SELECTED : ', e.target.value);
    setSelection(e.target.value);
  }

  var addToDetails = function addToDetails(e) {
    e.preventDefault();
    var outline = {
      id: tariff.tour_id,
      date: selection
    };
    setDetailsList([outline]); // console.log('TEST TEST', e.view.history)
    // console.log('[DETAILS LIST] : ' , detailsList)

    var route_query = "".concat(location.search, ",tour_name=").concat(tour_name, ",tour_id=").concat(tariff.tour_id, ",selection=").concat(selection);
    history.push("/".concat(locale, "/tour_details/").concat(route_query), [].concat((0,toConsumableArray/* default */.Z)(detailsList), [outline]));
  };

  return /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width > 1000 ? 'div_TourItemObj' : 'div_TourItemObjSmallScreen')
  }, /*#__PURE__*/react.createElement("div", {
    className: "availablePeriods"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      fontSize: '2vh',
      fontWeight: 'bold'
    }
  }, "Available dates : "), /*#__PURE__*/react.createElement("select", {
    value: selection,
    onChange: selectedPeriod,
    style: {
      fontSize: '2vh',
      color: '#001959'
    }
  }, /*#__PURE__*/react.createElement(react.Fragment, null, filtered_tour_dates && filtered_tour_dates.map(function (filter, index) {
    return /*#__PURE__*/react.createElement("option", {
      value: filter.date,
      key: (tariff.tour_id, '-', index)
    }, filter.date, " -- ", moment_default()(filter.date).add(tariff.duration, 'days').format('YYYY-MM-DD'), " (", tariff.duration, " days)");
  })))), /*#__PURE__*/react.createElement("div", {
    className: "minimumRate"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      fontSize: '10px',
      color: "grey",
      fontStyle: 'italic'
    }
  }, selection), /*#__PURE__*/react.createElement(MinRate, {
    selection: selection,
    datesArray: tariff.rate
  }), /*#__PURE__*/react.createElement("button", {
    type: "submmit",
    className: "availableButtonSecondPage",
    onClick: addToDetails
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 33) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      fontSize: '10px',
      color: "grey",
      fontStyle: 'italic'
    }
  }, tariff.tour_id)), /*#__PURE__*/react.createElement(react.Fragment, null));
};
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Tours/GuestItem.js

 // import {history} from '../../Front Page/History'






 // import {TourDetails} from './tourDetails';











 // import 'moment/locale/uk'

moment_default().locale('uk'); // import 'moment-timezone';

var GuestItem_GuestItem = function GuestItem(_ref) {
  var tour = _ref.tour,
      selector = _ref.selector,
      list = _ref.list;

  ///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом.
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();
  var search_data = ValidateQuery(location);
  console.log('GUEST ITEM LOCATION', location); // // const searchResults = search_data.query.replace(/_/g, " ")
  // console.log('[SEARCHRESULTS] : ' , searchResults , 'DATSENKO',search_data, search_data.title.replace(/_/g, " "))

  console.log('DATSENKO', search_data);
  var dispatch = (0,es/* useDispatch */.I0)();
  var test = (0,es/* useSelector */.v9)(function (state) {
    return state;
  });
  var data = (0,es/* useSelector */.v9)(function (state) {
    return state.posts.items;
  });
  var generalGeo = (0,es/* useSelector */.v9)(function (state) {
    return state.cities.gen_locs;
  });

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      rate = _useState2[0],
      setRate = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      filtered1 = _useState4[0],
      setFiltered1 = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      geoindex = _useState6[0],
      setGeoindex = _useState6[1];

  console.log('[TEST]', test); ///получаю из смарта тур имя, тур айди, сити имя, сити айди

  (0,react.useEffect)(function () {
    dispatch(cities_getGeneralGeo(locale));
  }, []);
  console.log('[GENERAL_GEO] , ', generalGeo); ///получаю из смарта тур имя, тур айди, сити имя, сити айди

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; ///используется непосредственно для вывода названий туров на странице.
  ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом,
  ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
  ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска


  var filtered = generalGeo.filter(function (item) {
    // if(item.city_id.indexOf(parseInt(search_data.id)) === -1){
    if (item.city_id === parseInt(search_data.id)) {
      // return parseInt(item.tour_id) === parseInt(search_data.id)
      return parseInt(item.city_id);
    } // return parseInt(item.city_id) === parseInt(search_data.id)
    // return parseInt(item.city_id)


    return parseInt(item.tour_id) === parseInt(search_data.id);
  });
  console.log('[FILTERED]', filtered); ///отфильтровала данные поиска, чтобы получить только тур айди поиска

  var filtered_tour_id = filtered.map(function (item1) {
    return item1.tour_id;
  }); // console.log('[FILTERED GEO] : ', filtered)

  console.log('[FILTERED TOUR_ID] : ', filtered_tour_id);
  var currentMonth = moment_default()().format('YYYY-MM');
  var today = moment_default()().format('YYYY-MM-DD');
  console.log('[TODAY MONTH]', currentMonth, '[TODAY DATE]', today, '[TEST_DATE] : ', search_data.date + '-01');

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": currentUser.user_id,
      "action": "GetPriceTourRQ",
      "data": {
        city_id: search_data.city_id,
        date: currentMonth === search_data.date ? today : search_data.date + '-01',
        window: 30,
        tour_id: filtered_tour_id.length === 1 ? filtered_tour_id[0] : null ///если в ответ при поиске пришёл массив из более 1 айди тура (что может быть при поиске клиентом по городу, а не по туру), то, так как Смарт не принимает массив, данный параметр при передаче данных игнорируется (равен null). Иначе этот параметр в одном экземпляре и он тогда передаётся в Смарт и участвует в фильтрации

      }
    }; // axios.post('https://hotels-ua.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))

    axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })) // axios.post('http://smartbooker/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    .then(function (res) {
      setRate(res.data);
      console.log('[SET_RATE]', res.data);
    })["catch"](function (error) {
      setRate(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);
  console.log('[search_data] : ', search_data);
  console.log('[SET_RATE] : ', rate);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("div", {
    "class": "TourSearchrendering_Wrapper"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", {
    style: {
      marginTop: '2vw',
      color: '#003057',
      fontFamily: 'Arial',
      fontSize: '30px',
      fontWeight: 'bold'
    }
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 25) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))), /*#__PURE__*/react.createElement("div", null, !rate || rate.length === 0 ? /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      left: '40%',
      transform: 'translate(0%, -50%)',
      margin: '0'
    }
  }, /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
    loadingMessageClass: "RateLoading"
  })) : /*#__PURE__*/react.createElement("ul", {
    className: "".concat(width > 1000 ? 'TourDescriptionUl' : 'TourDescriptionUlSmallScreen'),
    style: {
      width: "".concat(width > 1000 ? width * 0.65 : width * 0.9, "px")
    }
  }, /*#__PURE__*/react.createElement(react.Fragment, null, filtered.length > 0 && filtered ? filtered.map(function (tour) {
    return /*#__PURE__*/react.createElement("li", {
      key: tour.tour_id,
      className: "descriptionLi"
    }, rate ? rate.map(function (tariff) {
      if (parseInt(tour.tour_id) === parseInt(tariff.tour_id)) {
        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", {
          style: {
            fontSize: '27px',
            color: '#001959'
          }
        }, tour.tour_name), /*#__PURE__*/react.createElement("div", {
          "class": "".concat(width > 1000 ? 'TourDescriptionContent' : 'TourDescriptionContentSmallScreen')
        }, /*#__PURE__*/react.createElement(ItemContent, {
          tour: tour
        }), /*#__PURE__*/react.createElement(ItemObj, {
          key: parseInt(tariff.tour_id),
          tariff: tariff,
          searchResults: search_data,
          history: history,
          tour_name: tour.tour_name
        })));
      }
    }) : /*#__PURE__*/react.createElement("button", {
      className: "onrequestButton"
    }, "Sold out"));
  }) : /*#__PURE__*/react.createElement("div", {
    className: "noResultSearch"
  }, "Your Search returned no results. Please change your parameters and try once again."))))));
};
;// CONCATENATED MODULE: ./src/Redux/actions/toptours.js


var toptoursResponse = function toptoursResponse(res) {
  return {
    type: GET_TOPTOURS_RES,
    payload: res
  };
};
var getTopTours = function getTopTours() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_TOPTOURS_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/toptours"), {}).then(function (res) {
      console.log('[TOP TOURS] : ', res.data);
      dispatch(toptoursResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_TOPTOURS_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Components/Library/Localization/placeholders.js


var PlaceHolderStrings = function PlaceHolderStrings() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      messages = _useIntl.messages;

  var feature1;
  var feature2;
  var feature3;
  var feature4;
  var feature5;
  messages && messages.forEach(function (item) {
    if (item.sitepage_region_id === 8 && item.sitepage_type_id === 27) {
      item.title.forEach(function (item1) {
        feature1 = item1.text;
      });
    } else if (item.sitepage_region_id === 8 && item.sitepage_type_id === 28) {
      item.title.forEach(function (item1) {
        feature2 = item1.text;
      });
    } else if (item.sitepage_region_id === 8 && item.sitepage_type_id === 29) {
      item.title.forEach(function (item1) {
        feature3 = item1.text;
      });
    } else if (item.sitepage_region_id === 8 && item.sitepage_type_id === 41) {
      item.title.forEach(function (item1) {
        feature4 = item1.text;
      });
    } else if (item.sitepage_region_id === 8 && item.sitepage_type_id === 42) {
      item.title.forEach(function (item1) {
        feature5 = item1.text;
      });
    }
  });
  var object = {
    placeHolderString: feature1,
    placeHolderStartDate: feature2,
    placeHolderEndDate: feature3,
    placeHolderTour: feature4,
    placeHolderMonth: feature5
  };
  return object;
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/Search.css
var Search = __webpack_require__(43867);
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/Search.css

      
      
      
      
      
      
      
      
      

var Search_options = {};

Search_options.styleTagTransform = (styleTagTransform_default());
Search_options.setAttributes = (setAttributesWithoutAttributes_default());

      Search_options.insert = insertBySelector_default().bind(null, "head");
    
Search_options.domAPI = (styleDomAPI_default());
Search_options.insertStyleElement = (insertStyleElement_default());

var Search_update = injectStylesIntoStyleTag_default()(Search/* default */.Z, Search_options);




       /* harmony default export */ const SearchResizersAndSwitchers_Search = (Search/* default */.Z && Search/* default.locals */.Z.locals ? Search/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/ToursAutocompleteBlock/ToursAutocomplete.js






















moment_default().locale('uk');
var ToursAutocomplete = function ToursAutocomplete(_ref) {
  var formClass = _ref.formClass,
      datepickerClass = _ref.datepickerClass,
      onSubmit = _ref.onSubmit,
      props = _ref.props,
      GeneralListFunction = _ref.GeneralListFunction;

  // console.log('[PROPS] : ', props)
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages; //   const [date, setDate] = useState('');


  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      testDate = _useState2[0],
      setTestDate = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1]; //   const [isOpen, setIsOpen] = useState(false);
  //   const [align, setAlign] = useState('TOURS');  
  //   const [myID, setmyID] = useState('');
  //   const [loading,setLoading]=useState(false)


  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      pickedToursValue = _useState10[0],
      setPickedToursValue = _useState10[1];

  var history = (0,react_router/* useHistory */.k6)();
  var dispatch = (0,es/* useDispatch */.I0)();
  var geo = (0,es/* useSelector */.v9)(function (state) {
    return state.cities.locs;
  });
  var geoGeneral = (0,es/* useSelector */.v9)(function (state) {
    return state.cities.gen_locs;
  }); //   const topTours = useSelector(state => state.toptours.toptours)
  //   const [width, height] = useWindowWidthAndHeight();
  // const dateFormat = 'DD-MM-YYYY'

  var placeholder = PlaceHolderStrings();
  (0,react.useEffect)(function () {
    dispatch(cities_getGeo());
  }, []);
  console.log('[GEO] : ', geo);
  (0,react.useEffect)(function () {
    dispatch(cities_getGeneralGeo());
  }, []);
  console.log('[general_GEO] : ', geoGeneral); //   useEffect ( () => {
  //     dispatch (getTopTours ());
  //   }, []);
  //     console.log('[GetTopTours] : ' , topTours)
  //   const toggler = ( me ) => _ => {
  //     setAlign(me);
  //    }
  //   function dateFunc (e) {      
  //       return setDate (e.target.value)
  //       }

  function onChange(date, dateString) {
    setTestDate(dateString);
    console.log('[TEST_DATE] : ', dateString);
    console.log('[DATE_PICKER] : ', date, dateString);
  }

  var optionChecker = function optionChecker(e) {
    console.log('[VALUE] : ', e.target.value); //  console.log('[ETARGET]',e.target)

    setValue(e.target.value);

    if (value.length >= 0) {
      setOpen(true);
    } // else if (value === ''){
    // setOpen(false) 
    // }

  };

  var addToList = function addToList() {
    if (pickedToursValue === false) {
      alert("Please choose your destination");
    } else {
      var filtered = geo.filter(function (item) {
        return item.name === value;
      });
      var filtered_city_id = geoGeneral.filter(function (item) {
        if (item.tour_id === filtered[0].id) {
          return item.city_id;
        } else return item.city_id === filtered[0].id;
      });
      console.log('FILTERED_CITY_ID', filtered_city_id);
      var newList = {
        id: filtered[0].id,
        title: value,
        date: testDate
      };
      setList([].concat((0,toConsumableArray/* default */.Z)(list), [newList])); //   setDate('');

      setValue('');
      var route_query = "?title=".concat(value, ",date=").concat(testDate, ",id=").concat(filtered[0].id, ",city_id=").concat(filtered_city_id[0].city_id);
      console.log('[NewList] : ', newList);
      history.push("/".concat(locale, "/search_results_tours/").concat(route_query), [].concat((0,toConsumableArray/* default */.Z)(list), [newList]));
      console.log('[HISTORY : ] ', history);
      GeneralListFunction(list, value);
    }
  }; ///not to pick up old date. This dunction is for DatePicker


  var disabledDate = function disabledDate(current) {
    // Can not select days before today 
    return current && current < moment_default()().endOf('day');
  }; //   const onSubmit = (e) =>{
  // console.log('[event]:', e, '[e.target]:', e.target, '[e.target.value] :', e.target.value) 
  // e.preventDefault();
  // }


  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("form", {
    className: formClass,
    onSubmit: onSubmit
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement((Autocomplete_default()), (0,esm_extends/* default */.Z)({}, props, {
    value: value,
    inputProps: {
      style: {
        width: '30vw',
        height: '45px',
        fontFamily: 'Tahoma',
        fontSize: '16px',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        marginTop: '0.2vw',
        marginLeft: '2vw'
      },
      placeholder: placeholder.placeHolderTour
    },
    menuStyle: {
      fontFamily: 'Arial Narrow',
      fontWeight: 'bold',
      fontSize: '18px',
      color: 'darkslategrey',
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255)',
      padding: '3px',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '30%',
      zIndex: '1000',
      border: '2px solid grey'
    },
    items: geo,
    getItemValue: function getItemValue(item) {
      return item.name;
    },
    onChange: optionChecker,
    onSelect: function onSelect(value) {
      return setValue(value) + setOpen(false) + setPickedToursValue(true);
    },
    renderItem: function renderItem(item, highlighted) {
      return /*#__PURE__*/react.createElement("div", {
        key: item.id,
        style: {
          backgroundColor: highlighted ? 'lightblue' : 'transparent'
        }
      }, item.name);
    },
    shouldItemRender: function shouldItemRender(item, value) {
      return value !== "" ? item.name.toLowerCase().includes(value.toLowerCase()) : null;
    },
    open: open,
    onMenuVisibilityChange: function onMenuVisibilityChange(isOpen) {
      return setOpen(false);
    }
  }))), /*#__PURE__*/react.createElement("div", {
    "class": "MonthPicker"
  }, /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
    size: "small",
    onChange: onChange,
    picker: "month" //  format={dateFormat} 
    ,
    placeholder: placeholder.placeHolderMonth,
    bordered: false,
    className: datepickerClass,
    disabledDate: disabledDate
  }))), /*#__PURE__*/react.createElement("div", {
    "class": "borderInnerWrapper2"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    onClick: addToList
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 13) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })))));
};
;// CONCATENATED MODULE: ./src/Redux/actions/paxchoice.js
// import axios from '../helpers/public.axios';

 //action creator

var paxResponse = function paxResponse(res) {
  return {
    type: GET_PAX_RES,
    payload: res
  };
}; // console.log('[CONTENTRESPONCE]' , contentResponse)

var getPax = function getPax(adults, children, rooms) {
  return function (dispatch, getState) {
    console.log('GET_PAX1:', getState());
    dispatch({
      type: GET_PAX_REQ
    }); // const test = getState().paxchoice.pax

    var newObject = {
      adults: adults,
      children: children,
      // infants: infants,
      rooms: rooms
    };
    dispatch(paxResponse(newObject));
    console.log('GET_PAX4', newObject);
  };
}; //action creator

var paxResponseInnerSearch = function paxResponseInnerSearch(res) {
  return {
    type: GET_PAX_INNER_RES,
    payload: res
  };
}; // console.log('[CONTENTRESPONCE]' , contentResponse)

var getPaxInnerSearch = function getPaxInnerSearch(adults, children, rooms) {
  return function (dispatch, getState) {
    // console.log('GET_PAX1:', getState())
    dispatch({
      type: GET_PAX_INNER_REQ
    }); // const test = getState().paxchoice.pax

    var newObject = {
      adults: adults,
      children: children,
      // infants: infants,
      rooms: rooms
    };
    dispatch(paxResponseInnerSearch(newObject)); // console.log('GET_PAX4', newObject)
  };
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsAutocompleteCSS.css
var HotelsAutocompleteCSS = __webpack_require__(52857);
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsAutocompleteCSS.css

      
      
      
      
      
      
      
      
      

var HotelsAutocompleteCSS_options = {};

HotelsAutocompleteCSS_options.styleTagTransform = (styleTagTransform_default());
HotelsAutocompleteCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      HotelsAutocompleteCSS_options.insert = insertBySelector_default().bind(null, "head");
    
HotelsAutocompleteCSS_options.domAPI = (styleDomAPI_default());
HotelsAutocompleteCSS_options.insertStyleElement = (insertStyleElement_default());

var HotelsAutocompleteCSS_update = injectStylesIntoStyleTag_default()(HotelsAutocompleteCSS/* default */.Z, HotelsAutocompleteCSS_options);




       /* harmony default export */ const HotelsAutocompleteBlock_HotelsAutocompleteCSS = (HotelsAutocompleteCSS/* default */.Z && HotelsAutocompleteCSS/* default.locals */.Z.locals ? HotelsAutocompleteCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsPaxChoice.js

 // import axios from "axios"





 // import {RateChoiceBlock} from './RateChoiceBlock'



var HotelsPaxChoice = function HotelsPaxChoice(_ref) {
  var MakeVisible = _ref.MakeVisible,
      paxListOpen = _ref.paxListOpen;
  var totalPaxRedux = (0,es/* useSelector */.v9)(function (state) {
    return state.paxchoice.pax;
  });
  console.log('totalPaxRedux', totalPaxRedux); //   const [paxAmountNew, setPaxAmountNew] = useState([])

  var _useState = (0,react.useState)(2),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      counterAdults = _useState2[0],
      setCounterAdults = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      counterChild = _useState4[0],
      setCounterChild = _useState4[1]; // const [counterInfant, setCounterInfant] = useState(0)


  var _useState5 = (0,react.useState)(1),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      counterRooms = _useState6[0],
      setCounterRooms = _useState6[1]; //   const [total, setTotal] = useState({counterAdults,counterChild,counterInfant})


  var dispatch = (0,es/* useDispatch */.I0)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  (0,react.useEffect)(function () {
    dispatch(getPax(counterAdults, counterChild, counterRooms));
  }, [counterAdults, counterChild, counterRooms]); //   useEffect (() =>{
  //     axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
  //     .then(res => {
  //       let tour_capacity
  //       res.data[0].tariff.forEach((item)=>{
  //              item.rooms.forEach((item1)=>{
  //               tour_capacity = item1.rates.map((item2)=>{
  //                     let min = item2.rate_details.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
  //                     let max = item2.rate_details[0].max_adult
  //                            for(let i=0;i<item2.rate_details.length; i++){
  //                             if(item2.rate_details[i].max_adult>max){
  //                              max=item2.rate_details[i].max_adult
  //                            }
  //                          }
  //                          return (min+max)
  //               }).join('').split('').sort((a,b)=>(a-b))
  //              })       
  //        })
  //          setPaxAmountNew(tour_capacity)              
  //     })
  //     .catch(error =>{
  //       setPaxAmountNew(undefined)
  //       console.log('[axios error]: ', error)
  //     });
  //   },[]); 
  //   console.log('PAX AMOUNT NEW', paxAmountNew[0], paxAmountNew[paxAmountNew.length-1])
  //     if( !paxAmountNew ){
  //       return <div> Loading...</div>
  //   }
  // console.log('CHECKING' , pax)

  var TotalPax = function TotalPax() {
    dispatch(getPax(counterAdults, counterChild, counterRooms));
  };

  var add = function add() {
    setCounterAdults(counterAdults + 1);
  };

  var deduct = function deduct() {
    counterAdults > 0 ? setCounterAdults(counterAdults - 1) : setCounterAdults(0);
  };

  var addChild = function addChild() {
    // counterChild<2? setCounterChild(counterChild+1) : alert('This tour allows upto 2 Children')
    setCounterChild(counterChild + 1);
  };

  var deductChild = function deductChild() {
    counterChild > 0 ? setCounterChild(counterChild - 1) : setCounterChild(0);
  }; // const addInfant = () =>{
  //   // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
  //   setCounterInfant(counterInfant+1)
  // }
  // const deductInfant = () =>{
  //   counterInfant>0?setCounterInfant(counterInfant-1) : setCounterInfant(0)
  // }


  var addRooms = function addRooms() {
    // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
    setCounterRooms(counterRooms + 1);
  };

  var deductRooms = function deductRooms() {
    counterRooms > 0 ? setCounterRooms(counterRooms - 1) : setCounterRooms(1);
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    "class": "FrontHotelPaxChoiceWrapper",
    style: {
      width: "".concat(width >= 1000 ? null : width * 0.8, "px")
    }
  }, /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width >= 1000 ? 'FrontHotelPaxResult' : 'FrontHotelPaxResultSmallScreen'),
    onClick: MakeVisible
  }, /*#__PURE__*/react.createElement("h4", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    onClick: TotalPax
  }, /*#__PURE__*/react.createElement(Pax, null), /*#__PURE__*/react.createElement("div", {
    style: {
      paddingLeft: '1vw'
    }
  }, " ", counterAdults, " Adults"), ",", /*#__PURE__*/react.createElement("div", {
    style: {
      paddingLeft: '1vw'
    }
  }, " ", counterChild, " Children"), ",", /*#__PURE__*/react.createElement("div", {
    style: {
      paddingLeft: '1vw'
    }
  }, " ", counterRooms, " Rooms "), /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
    className: "DownOutlined"
  }))), /*#__PURE__*/react.createElement("div", {
    "class": paxListOpen === false ? 'PopUpNotActive' : 'PopUpActive',
    style: {
      width: "".concat(width >= 1000 ? null : width * 0.8, "px")
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 6vh)',
      rowGap: '10px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '25% 17% 16% 17% 25%'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Adults"), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    className: "Minus",
    onClick: deduct
  })), /*#__PURE__*/react.createElement("h4", null, counterAdults), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "Plus",
    onClick: add
  })), /*#__PURE__*/react.createElement("h4", null, "12+ y.o.")), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '25% 17% 16% 17% 25%'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Children"), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    className: "Minus",
    onClick: deductChild
  })), /*#__PURE__*/react.createElement("h4", null, counterChild), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "Plus",
    onClick: addChild
  })), /*#__PURE__*/react.createElement("h4", null, "2-11 y.o.")), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '25% 17% 16% 17% 25%'
    }
  }, /*#__PURE__*/react.createElement("h4", null, "Rooms"), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
    className: "Minus",
    onClick: deductRooms
  })), /*#__PURE__*/react.createElement("h4", null, counterRooms), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "Plus",
    onClick: addRooms
  })))), /*#__PURE__*/react.createElement("div", {
    onClick: TotalPax,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("button", {
    "class": "PopUpButton",
    onClick: MakeVisible
  }, "Confirm")))));
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
;// CONCATENATED MODULE: ./src/Components/Pages/Helpers/localizeRoutePath.js



function localizeRoutePath_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function localizeRoutePath_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? localizeRoutePath_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : localizeRoutePath_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var supportedLangs = config.supportedLangs.join('|');
var localizeRoutePath = function localizeRoutePath(path) {
  // if(!locale){
  // console.log('TESTETEST',`/:locale(${supportedLangs})${path}`)
  return "/:locale(".concat(supportedLangs, ")").concat(path); // }
};
var localizePath = function localizePath(path, locale) {
  console.log('path2', path, locale);

  switch ((0,esm_typeof/* default */.Z)(path)) {
    case 'undefined':
      return undefined;

    case 'string':
      return "/".concat(locale).concat(path);

    case 'object':
      return localizeRoutePath_objectSpread(localizeRoutePath_objectSpread({}, path), {}, {
        pathname: "/".concat(locale).concat(path.pathname)
      });

    default:
      return '/';
  }

  return path;
};
;// CONCATENATED MODULE: ./src/Components/Library/Localization/LocalizationRoute.js


var _excluded = ["path"];




var LocalizationRoute = function LocalizationRoute(props) {
  var path = props.path,
      rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  console.log('PROPS', props);
  return /*#__PURE__*/react.createElement(react_router/* Route */.AW, (0,esm_extends/* default */.Z)({
    path: localizeRoutePath(path)
  }, rest));
};
;// CONCATENATED MODULE: ./src/Components/Library/Localization/LocalizationSwitch.js


function LocalizationSwitch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LocalizationSwitch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LocalizationSwitch_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LocalizationSwitch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var LocalizationSwitch = function LocalizationSwitch(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, react.Children.map(children, function (children) {
    return /*#__PURE__*/react.cloneElement(children, LocalizationSwitch_objectSpread(LocalizationSwitch_objectSpread({}, children.props), {}, {
      path: localizeRoutePath(children.props.path)
    }));
  }));
};
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
;// CONCATENATED MODULE: ./src/Components/Library/Localization/LocalizationNavLink.js




var LocalizationNavLink = function LocalizationNavLink(_ref) {
  var to = _ref.to,
      onClick = _ref.onClick,
      children = _ref.children;
  console.log('children', children);

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  console.log('INTLlocale', locale);
  return /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: localizePath(to, locale),
    onClick: onClick
  }, children);
};
;// CONCATENATED MODULE: ./src/Redux/actions/pages.js







var pagesResponse = function pagesResponse(res) {
  return {
    type: GET_PAGES_RES,
    payload: res
  };
};
var getPages = function getPages(lang) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PAGES_REQ
    });
    console.log('REDUX_LOCALE:', lang);
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=sitepage&language=").concat(lang), {}).then(function (res) {
      console.log('[PAGES_INFO] : ', res.data);
      localStorage.setItem("".concat(lang, "_page_titles"), JSON.stringify(res.data));
      dispatch(pagesResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_PAGES_ERR,
        error: err
      });
    });
  };
};
var purePageResponse = function purePageResponse(res) {
  return {
    type: GET_PurePage_RES,
    payload: res
  };
};
var getPurePage = function getPurePage(id, lang) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PurePage_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/sitepagecontent?id=").concat(id, "&language=").concat(lang), {}).then(function (res) {
      console.log('[PURE_PAGE_INFO] : ', res.data);
      dispatch(purePageResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_PurePage_ERR,
        error: err
      });
    });
  };
};
var sitePageTypeResponse = function sitePageTypeResponse(res) {
  return {
    type: GET_PageTYPE_RES,
    payload: res
  };
};
var getSitePageType = function getSitePageType() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PageTYPE_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=sitepage&language=en"), {}).then(function (res) {
      var arraynew = res.data.filter(function (item, index, array) {
        if (item.sitepage_type_id !== null) {
          return array.findIndex(function (t) {
            return t.sitepage_type_id === item.sitepage_type_id;
          }) === index;
        }
      }).map(function (item1) {
        return {
          "sitepage_type_id": item1.sitepage_type_id,
          "sitepage_type_name": item1.sitepage_type_name,
          "sitepage_region_id": item1.sitepage_region_id,
          "sitepage_region_name": item1.sitepage_region_name
        };
      });
      dispatch(sitePageTypeResponse(arraynew));
      console.log('[TYPE_OF_SITEPAGE] : ', arraynew);
    })["catch"](function (err) {
      dispatch({
        type: GET_PageTYPE_ERR,
        error: err
      });
    });
  };
};
var sitePageRegionResponse = function sitePageRegionResponse(res) {
  return {
    type: GET_PageREGION_RES,
    payload: res
  };
};
var getSitePageRegion = function getSitePageRegion() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PageREGION_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=sitepage&language=en"), {}).then(function (res) {
      var arraynew2 = res.data.filter(function (item, index, array) {
        if (item.sitepage_region_id !== null) {
          return array.findIndex(function (t) {
            return t.sitepage_region_id === item.sitepage_region_id;
          }) === index;
        }
      }).map(function (item1) {
        return {
          "sitepage_region_id": item1.sitepage_region_id,
          "sitepage_region_name": item1.sitepage_region_name
        };
      });
      dispatch(sitePageRegionResponse(arraynew2));
      console.log('[REGION_OF_SITEPAGE] : ', arraynew2);
    })["catch"](function (err) {
      dispatch({
        type: GET_PageREGION_ERR,
        error: err
      });
    });
  };
};
var hotelPagesFooterResponse = function hotelPagesFooterResponse(res) {
  return {
    type: GET_hotelPAGESfooter_RES,
    payload: res
  };
};
var getHotelPagesFooter = function getHotelPagesFooter() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_hotelPAGESfooter_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=sitepage&language=en"), {}).then(function (res) {
      console.log('[PAGES_INFO_FOOTER] : ', res.data);
      var filtered = res.data.filter(function (item) {
        return item.name.includes("Hotels");
      });
      dispatch(hotelPagesFooterResponse(filtered));
    })["catch"](function (err) {
      dispatch({
        type: GET_hotelPAGESfooter_ERR,
        error: err
      });
    });
  };
};
var photoGalleryPageResponse = function photoGalleryPageResponse(res) {
  return {
    type: GET_PhotoGalleryPage_RES,
    payload: res
  };
};
var getPhotoGalleryPage = function getPhotoGalleryPage(id, lang) {
  return function (dispatch, getState) {
    // console.log('AAAaa',id)
    dispatch({
      type: GET_PhotoGalleryPage_REQ
    });
    axios.get("https://hotels-ua.biz/interface/sitepagecontent?id=".concat(id, "&language=").concat(lang), {}).then(function (res) {
      //  console.log('[AAA_GALLERY] : ' , res.data)
      dispatch(photoGalleryPageResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_PhotoGalleryPage_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/locale.js


var changeLangResponce = function changeLangResponce(res) {
  return {
    type: GET_LOCALE_RES,
    payload: res
  };
};
var changeLang = function changeLang(locale) {
  return function (dispatch) {
    dispatch({
      type: GET_LOCALE_REQ
    });
    dispatch(changeLangResponce(locale));
  };
};
var langRepsonse = function langRepsonse(res) {
  return {
    type: GET_LANG_RES,
    payload: res
  };
};
var getLangResponse = function getLangResponse(param) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_LANG_REQ
    });
    dispatch(langRepsonse(param));
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/promocode.js

var promocodeResponse = function promocodeResponse(res) {
  return {
    type: GET_PROMOCODE_RES,
    payload: res
  };
};
var getPromoCode = function getPromoCode(code) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PROMOCODE_REQ
    });
    dispatch(promocodeResponse(code));
  };
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/PromoCodeCSS.css
var PromoCodeCSS = __webpack_require__(86997);
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/PromoCodeCSS.css

      
      
      
      
      
      
      
      
      

var PromoCodeCSS_options = {};

PromoCodeCSS_options.styleTagTransform = (styleTagTransform_default());
PromoCodeCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      PromoCodeCSS_options.insert = insertBySelector_default().bind(null, "head");
    
PromoCodeCSS_options.domAPI = (styleDomAPI_default());
PromoCodeCSS_options.insertStyleElement = (insertStyleElement_default());

var PromoCodeCSS_update = injectStylesIntoStyleTag_default()(PromoCodeCSS/* default */.Z, PromoCodeCSS_options);




       /* harmony default export */ const HotelsAutocompleteBlock_PromoCodeCSS = (PromoCodeCSS/* default */.Z && PromoCodeCSS/* default.locals */.Z.locals ? PromoCodeCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/PromoCode.js

 // import axios from "axios"





 // import {RateChoiceBlock} from './RateChoiceBlock'



var PromoCode = function PromoCode(_ref) {
  var MakeCodeVisible = _ref.MakeCodeVisible,
      promoCodeOpen = _ref.promoCodeOpen;

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var PromoCode = (0,es/* useSelector */.v9)(function (state) {
    return state.promocode.promocode;
  });
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; //  useEffect ( () => {
  //     dispatch (getPromoCode ());
  //   }, [])


  var SetInput = function SetInput(e) {
    setCode(e.target.value);
    dispatch(getPromoCode(e.target.value));
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    onClick: MakeCodeVisible
  }, /*#__PURE__*/react.createElement("h4", {
    style: {
      color: 'rgb(136, 6, 6)',
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  }, "PROMO CODE")), /*#__PURE__*/react.createElement("input", {
    "class": promoCodeOpen === false ? 'PCPopUpNotActive' : 'PCPopUpActive',
    style: {
      width: "".concat(width >= 1000 ? null : width * 0.8, "px")
    },
    placeholder: "Partner ID/Promo Code",
    onInput: SetInput,
    value: !PromoCode ? '' : PromoCode
  }));
};
;// CONCATENATED MODULE: ./src/Redux/actions/hotels.js





var hotelsResponse = function hotelsResponse(res) {
  return {
    type: GET_HOTELS_RES,
    payload: res
  };
};
var getHotels = function getHotels() {
  return function (dispatch) {
    dispatch({
      type: GET_HOTELS_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=hotelaccommodation"), {}).then(function (res) {
      var hotelsArray1 = res.data.map(function (b) {
        return {
          id: b.hotel_id,
          name: b.hotel_name
        };
      });
      var hotelsArray2 = res.data.map(function (q) {
        return {
          id: q.city_id,
          name: q.city_name
        };
      });
      var hotelsArray3 = hotelsArray2.filter(function (item, index, array) {
        return array.findIndex(function (t) {
          return t.name === item.name && t.id === item.id;
        }) === index;
      });
      console.log('[NEW ARRAY3_htl] : ', hotelsArray3);
      dispatch(hotelsResponse([].concat((0,toConsumableArray/* default */.Z)(hotelsArray1), (0,toConsumableArray/* default */.Z)(hotelsArray3))));
    })["catch"](function (err) {
      dispatch({
        type: GET_HOTELS_ERR,
        error: err
      });
    });
  };
};
var generalHotelsResponse = function generalHotelsResponse(res) {
  return {
    type: GET_GENERAL_HOTELS_RES,
    payload: res
  };
};
var getGeneralHotels = function getGeneralHotels() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_GENERAL_HOTELS_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=hotelaccommodation"), {}).then(function (res) {
      console.log('[GeneralHotels] : ', res.data);
      dispatch(generalHotelsResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_GENERAL_HOTELS_ERR,
        error: err
      });
    });
  };
};
var hotelNameResponse = function hotelNameResponse(res) {
  return {
    type: GET_HOTEL_NAME_RES,
    payload: res
  };
};
var getHotelName = function getHotelName(name) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_HOTEL_NAME_REQ
    });
    dispatch(hotelNameResponse(name));
  };
};
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/ContentPages.js



var ContentPages = function ContentPages(lang) {
  var pages = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.pages;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(getPages(lang));
  }, [lang]);

  if (!pages) {
    return /*#__PURE__*/react.createElement("div", null, " Loading...");
  }

  return pages;
};
var SitePageType = function SitePageType() {
  var sitePageType = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.pageType;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(getSitePageType());
  }, []);

  if (!sitePageType) {
    return /*#__PURE__*/react.createElement("div", null, " Loading...");
  }

  return sitePageType;
};
var SitePageRegion = function SitePageRegion() {
  var sitePageRegion = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.pageRegion;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(getSitePageRegion());
  }, []);

  if (!sitePageRegion) {
    return /*#__PURE__*/react.createElement("div", null, " Loading...");
  }

  return sitePageRegion;
};
var HotelPagesFooter = function HotelPagesFooter() {
  var hotelPagesFooter = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.hotelPagesFooter;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(getHotelPagesFooter());
  }, []);

  if (!hotelPagesFooter) {
    return /*#__PURE__*/react.createElement("div", null, " Loading...");
  }

  return hotelPagesFooter;
};
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsAutocomplete.js

























moment_default().locale('uk');
var HotelsAutocomplete = function HotelsAutocomplete(_ref) {
  var formClass = _ref.formClass,
      datepickerClass = _ref.datepickerClass,
      onSubmit = _ref.onSubmit,
      props = _ref.props,
      GeneralListFunction = _ref.GeneralListFunction;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      stayDates = _useState2[0],
      setStayDates = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      hotelsvalue = _useState6[0],
      setHotelsValue = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      paxListOpen = _useState10[0],
      setPaxListOpen = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      promoCodeOpen = _useState12[0],
      setPromoCodeOpen = _useState12[1];

  var _useState13 = (0,react.useState)(),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      totalPax = _useState14[0],
      setTotalPax = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      pickedHotelValue = _useState16[0],
      setPickedHotelValue = _useState16[1];

  var _useState17 = (0,react.useState)(false),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      loaded = _useState18[0],
      setLoaded = _useState18[1];

  var _useState19 = (0,react.useState)(localStorage.getItem('page_titles') ? JSON.parse(localStorage.getItem('pages_titles')) : []),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      pagesFromLC = _useState20[0],
      setPagesFromLC = _useState20[1];

  var history = (0,react_router/* useHistory */.k6)(); // console.log('AAA',history)

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var dispatch = (0,es/* useDispatch */.I0)(); // const store = useStore();

  var smart_hotels = (0,es/* useSelector */.v9)(function (state) {
    return state.hotels.hotels;
  });
  var general_smart_hotels = (0,es/* useSelector */.v9)(function (state) {
    return state.hotels.general_hotels;
  });
  var totalPaxRedux = (0,es/* useSelector */.v9)(function (state) {
    return state.paxchoice.pax;
  });
  var lang = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locale;
  });
  var pages = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.pages;
  });
  var promoCode = (0,es/* useSelector */.v9)(function (state) {
    return state.promocode.promocode;
  }); // console.log('PLACEHOLDER', placeHolderString)

  console.log('TOTALPAXREDUX', totalPaxRedux);
  (0,react.useEffect)(function () {
    dispatch(changeLang());
  }, []); // const pages = ContentPages(lang);

  (0,react.useEffect)(function () {
    dispatch(getPages(lang));
  }, [lang]);
  var filledArray = new Array(10).fill(null).map(function () {
    return {
      'hello': 'goodbye'
    };
  });
  console.log(filledArray);
  var placeholder = PlaceHolderStrings(); // console.log('PLACEHOLDER',placeholder)

  console.log('TOTALPAX', totalPaxRedux);
  var RangePicker = date_picker/* default.RangePicker */.Z.RangePicker;
  (0,react.useEffect)(function () {
    dispatch(getHotels());
  }, []);
  console.log('[SMART_HOTELS] : ', smart_hotels);
  (0,react.useEffect)(function () {
    dispatch(getGeneralHotels());
  }, []);
  console.log('[SMART_GENERAL_HOTELS] : ', general_smart_hotels);

  function onChange(dates, dateStrings) {
    setStayDates(dateStrings);
    console.log('[DATES :]', 'From: ', dates[0], ', to: ', dates[1]);
    console.log('[STAYDATES :]', 'From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  var optionChecker = function optionChecker(e) {
    console.log('[VALUE] : ', e.target.value);
    setHotelsValue(e.target.value);

    if (hotelsvalue.length >= 0) {
      setOpen(true);
    }
  }; ////FOR DATEPICKER (RANGEDATEPICKER) TO DISABLE CHOICE OF DATES THAT ARE BEFORE TODAY


  var disabledDate = function disabledDate(current) {
    // Can not select days before today 
    // return current < moment().endOf('day');
    // console.log('CURRENT',current)
    return current < moment_default()().subtract(1, 'days');
  }; // const CryptoJS = require("crypto-js"); 
  // const key = 'kate'
  // // console.log('AES',process.env.REACT_APP_PRIVATE_KEY)
  // if (promoCode){
  //   const encodedRef = CryptoJS.AES.encrypt(('refpartner='+promoCode+','), key /*process.env.REACT_APP_PRIVATE_KEY*/); 
  //   localStorage.setItem('encodedRef', encodedRef); 
  //   console.log('encodedRef',encodedRef) 
  // }


  var addToList = function addToList() {
    if (pickedHotelValue === false) {
      alert("Please choose your hotel");
    } else {
      var filteredHotels = smart_hotels.filter(function (item) {
        return item.name === hotelsvalue;
      });
      var filtered_hotelcity_id = general_smart_hotels.filter(function (item) {
        if (item.hotel_id === filteredHotels[0].id) {
          return item.city_id;
        } else return item.city_id === filteredHotels[0].id;
      });
      console.log('FILTERED_HOTEL_ID', filtered_hotelcity_id);
      var hotelNewList = {
        id: filteredHotels[0].id,
        title: hotelsvalue,
        date: stayDates
      };
      setList([].concat((0,toConsumableArray/* default */.Z)(list), [hotelNewList]));
      setStayDates('');
      setHotelsValue('');
      console.log('[hotelNewList] : ', list, hotelsvalue);
      GeneralListFunction(list, hotelsvalue);
      var route_query = "?".concat(promoCode ? 'refpartner=' + promoCode + ',' : '', "title=").concat(hotelsvalue, ",start=").concat(stayDates[0], ",end=").concat(stayDates[1], ",id=").concat(filteredHotels[0].id, ",city_id=").concat(filtered_hotelcity_id[0].city_id, ",adults=").concat(totalPaxRedux.adults, ",children=").concat(totalPaxRedux.children, ",rooms=").concat(totalPaxRedux.rooms);
      history.push("/".concat(locale, "/search_results_hotels/").concat(route_query), [].concat((0,toConsumableArray/* default */.Z)(list), [hotelNewList]));
      console.log('[HISTORY : ] ', history);
    }
  };

  var MakeVisible = function MakeVisible() {
    setPaxListOpen(!paxListOpen);
  };

  var MakeCodeVisible = function MakeCodeVisible() {
    setPromoCodeOpen(!promoCodeOpen);
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("form", {
    className: formClass,
    onSubmit: onSubmit,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      gridColumn: '1'
    }
  }, /*#__PURE__*/react.createElement((Autocomplete_default()), (0,esm_extends/* default */.Z)({}, props, {
    value: hotelsvalue,
    inputProps: {
      style: {
        // width: `${width*0.8/4}px`,
        height: '45px',
        fontFamily: 'Tahoma',
        fontSize: '16px',
        border: 'none',
        marginTop: '0.2vw',
        textAlign: "center"
      },
      placeholder: placeholder.placeHolderString
    },
    menuStyle: {
      fontFamily: 'Arial Narrow',
      fontWeight: 'bold',
      fontSize: '18px',
      color: 'darkslategrey',
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255)',
      padding: '3px',
      position: 'absolute',
      overflow: 'scroll',
      maxHeight: '30vh',
      zIndex: '2000',
      border: '2px solid grey',
      left: '0',
      top: '5',
      marginTop: '3vw',
      width: "".concat(width / 5, "px")
    },
    items: smart_hotels,
    getItemValue: function getItemValue(item) {
      return item.name;
    },
    onChange: optionChecker,
    onSelect: function onSelect(value) {
      return setHotelsValue(value) + setOpen(false) + setPickedHotelValue(true);
    },
    renderItem: function renderItem(item, highlighted) {
      return /*#__PURE__*/react.createElement("div", {
        key: item.id,
        style: {
          backgroundColor: highlighted ? 'lightblue' : 'transparent'
        }
      }, item.name);
    },
    shouldItemRender: function shouldItemRender(item, value) {
      return value !== "" ? item.name.toLowerCase().includes(value.toLowerCase()) : null;
    },
    open: open,
    onMenuVisibilityChange: function onMenuVisibilityChange(isOpen) {
      return setOpen(false);
    }
  }))), /*#__PURE__*/react.createElement("div", {
    style: {
      gridColumn: '2',
      borderLeft: '0.5px solid grey',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(RangePicker, {
    size: 'middle',
    disabledDate: disabledDate,
    onChange: onChange,
    bordered: false,
    className: datepickerClass,
    placeholder: [placeholder.placeHolderStartDate, placeholder.placeHolderEndDate]
  }))), /*#__PURE__*/react.createElement("div", {
    style: {
      gridColumn: '3',
      borderLeft: '0.5px solid grey',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react.createElement(HotelsPaxChoice, {
    MakeVisible: MakeVisible,
    paxListOpen: paxListOpen
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      gridColumn: '4',
      borderLeft: '0.5px solid grey',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement(PromoCode, {
    MakeCodeVisible: MakeCodeVisible,
    promoCodeOpen: promoCodeOpen
  })), /*#__PURE__*/react.createElement("button", {
    style: {
      gridColumn: '5'
    },
    type: "submit",
    onClick: addToList
  }, messages && messages.map(function (item) {
    // if(item.id===76){
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 13) {
      console.log('BUTTON', item);
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/star.js

var Star = function Star() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "15",
    height: "15",
    color: "#005AEB",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "star",
    "class": "svg-inline--fa fa-star fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
  }));
};
;// CONCATENATED MODULE: ./src/Redux/actions/tour.js




var tourResponse = function tourResponse(res) {
  return {
    type: GET_TOUR_RES,
    payload: res
  };
};
var tour_getTour = function getTour() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_TOUR_REQ
    });
    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription', {}).then(function (res) {
      // console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
      dispatch(tourResponse(JSON.parse(res.data.substring(30, res.data.length - 1))));
    })["catch"](function (err) {
      dispatch({
        type: GET_TOUR_ERR,
        error: err
      });
    });
  };
};
var ENtourResponse = function ENtourResponse(res) {
  return {
    type: GET_EN_TOUR_RES,
    payload: res
  };
};
var tour_ENgetTour = function ENgetTour() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_EN_TOUR_REQ
    });
    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription', {}).then(function (res) {
      var obj = JSON.parse(res.data.substring(30, res.data.length - 1));

      for (var key in obj) {
        if (key === 'en') {
          console.log(obj[key]);
          dispatch(ENtourResponse(obj[key]));
        }
      }
    })["catch"](function (err) {
      dispatch({
        type: GET_EN_TOUR_ERR,
        error: err
      });
    });
  };
};
var IMGtourResponse = function IMGtourResponse(res) {
  return {
    type: GET_IMAGES_TOUR_RES,
    payload: res
  };
};
var tour_IMGgetTour = function IMGgetTour() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_IMAGES_TOUR_REQ
    });
    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription', {}).then(function (res) {
      var obj = JSON.parse(res.data.substring(30, res.data.length - 1));

      for (var key in obj) {
        if (key === 'photo_gallery') {
          // console.log(obj[key])
          var newArr = [];

          for (var item in obj[key]) {
            newArr.push(obj[key][item]);
          }

          dispatch(IMGtourResponse(newArr));
        }
      }
    })["catch"](function (err) {
      dispatch({
        type: GET_IMAGES_TOUR_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/payment.js

var setPaymenInfo = function setPaymenInfo(payload) {
  console.log("work_with_payment: action ");
  return {
    type: SET_PAYMENT_INFO,
    payload: payload
  };
};
var requestPaymenInfo = function requestPaymenInfo() {
  console.log("work_with_payment: action ");
  return {
    type: GET_PAYMENT_INFO
  };
};

var paymentDataLoaded = function paymentDataLoaded(paymentData) {
  console.log("work_with_payment: action ");
  return {
    type: 'FETCH_PAYMENT_DATA_SUCCESS',
    payload: paymentData
  };
};

var paymentDataError = function paymentDataError(error) {
  console.log("work_with_payment: action ");
  return {
    type: 'FETCH_PAYMENT_DATA_ERROR',
    payload: error
  };
};

var fetchPaymentInfo = function fetchPaymentInfo(paymentService, dispatch) {
  return function () {
    console.log("work_with_payment: action "); // dispatch(requestPaymenInfo);

    paymentService.getPaymentInfo().then(function (data) {
      return dispatch(paymentDataLoaded(data));
    })["catch"](function (err) {
      return dispatch(paymentDataError(err));
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/hotelcontent.js

 //action creator

var hotelContentResponse = function hotelContentResponse(res) {
  return {
    type: GET_HOTEL_CONTENT_RES,
    payload: res
  };
}; // console.log('[CONTENTRESPONCE]' , contentResponse)

var getHotelContent = function getHotelContent(id, lang) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_HOTEL_CONTENT_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/hotelcontent?id=").concat(id, "&language=").concat(lang)).then(function (res) {
      var filtered_res = res.data.filter(function (item, index, array) {
        return array.findIndex(function (t) {
          return t.content_name === item.content_name;
        }) === index;
      });
      dispatch(hotelContentResponse(filtered_res));
      console.log('[REDUX_HOTEL_CONTENT]:', res.data);
    })["catch"](function (err) {
      dispatch({
        type: GET_HOTEL_CONTENT_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/hotelrates.js
 // import {useSelector} from "react-redux";

 //action creator

var hotelRatesResponse = function hotelRatesResponse(res) {
  return {
    type: GET_HOTEL_RATES_RES,
    payload: res
  };
};
var getHotelRates = function getHotelRates(search_data, userId) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_HOTEL_RATES_REQ
    }); // const { user: currentUser } = useSelector((state) => state.auth);
    // const { user: currentUser } = getState((state) => state.auth);
    // console.log('getState:', getState);

    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": userId,
      "action": "GetPriceHotelRQ",
      "refpartner": search_data.refpartner ? search_data.refpartner : null,
      "data": {
        "start": search_data.start,
        // date of arrival  
        "end": search_data.end,
        // date of departure
        "city_id": search_data.city_id,
        // search_data.city_id,         // Id of city - can`t be equel to zero
        //   "hotel_id" : search_data.city_id === search_data.id? 0 : search_data.id ,
        "hotel_id": search_data.hotel_id,
        // search_data.city_id === search_data.id? 320 : search_data.id,       // Id of hotel: if hotel_id = 0, must return all hotels of the pointed city in response
        "numberofunits": search_data.rooms,
        // Quantity of rooms, 1 by default, NOT OBLIGATORY
        "calculation_data": {
          "adults": search_data.adults,
          "children": search_data.children,
          // "child_discount" : search_data.c !== 0? 0.5: null,
          "lower_cost_limit": 0.00,
          // lower cost limit of room in USD, NOT OBLIGATORY
          "upper_cost_limit": 200.00 // upper cost limit of room in USD, NOT OBLIGATORY

        }
      }
    };
    public_axios.post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })).then(function (response) {
      for (var key in response.data.data) {
        if (key === 'hotels') {
          dispatch(hotelRatesResponse(response.data.data[key]));
          console.log('[REDUX_HOTEL_RATES]:', response.data.data[key]);
        }
      }
    })["catch"](function (error) {
      dispatch({
        type: GET_HOTEL_RATES_ERR,
        error: error
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/hotelsearchdata.js

 //action creator

var hotelsearchResponse = function hotelsearchResponse(res) {
  return {
    type: GET_HTL_SEARCH_RES,
    payload: res
  };
};
var occupancyResponse = function occupancyResponse(res) {
  return {
    type: GET_SEARCH_OCCUPANCY_RES,
    payload: res
  };
};
var getHotelSearch = function getHotelSearch(param) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_HTL_SEARCH_REQ
    });
    dispatch(hotelsearchResponse(param));
  };
};
var getOccupancySearch = function getOccupancySearch(param) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_SEARCH_OCCUPANCY_REQ
    });
    dispatch(occupancyResponse(param));
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/hotelcities.js


var hotelCitiesResponse = function hotelCitiesResponse(res) {
  return {
    type: GET_HOTEL_CITIES_RES,
    payload: res
  };
};
var getHotelCities = function getHotelCities(lang) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_HOTEL_CITIES_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=hotelaccommodationdetails&language=").concat(lang), {}).then(function (res) {
      var newobj = res.data.map(function (item) {
        return {
          eng_city_name: item.city_name,
          city_id: item.city_id,
          localized_city_name: item.city.display.title,
          eng_hotel_name: item.hotel_name,
          hotel_id: item.hotel_id,
          localized_hotel_name: item.hotel.display.title
        };
      }); //  console.log('[HOTEL_CITIES] : ' , newobj)

      dispatch(hotelCitiesResponse(newobj));
    })["catch"](function (err) {
      dispatch({
        type: GET_HOTEL_CITIES_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/currency.js


var currencyResponse = function currencyResponse(res) {
  return {
    type: GET_CURRENCY_RES,
    payload: res
  };
};
var getCurrency = function getCurrency() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_CURRENCY_REQ
    });
    public_axios.get("".concat("http://smartbooker.biz/", "interface/classifier?classifier=currency"), {}).then(function (res) {
      dispatch(currencyResponse(res.data));
    })["catch"](function (err) {
      dispatch({
        type: GET_CURRENCY_ERR,
        error: err
      });
    });
  };
};
;// CONCATENATED MODULE: ./src/Redux/actions/index.js

















// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/SecondPageofSearchModule/Hotels/HotelItemsCSS.css
var HotelItemsCSS = __webpack_require__(96216);
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Hotels/HotelItemsCSS.css

      
      
      
      
      
      
      
      
      

var HotelItemsCSS_options = {};

HotelItemsCSS_options.styleTagTransform = (styleTagTransform_default());
HotelItemsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      HotelItemsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
HotelItemsCSS_options.domAPI = (styleDomAPI_default());
HotelItemsCSS_options.insertStyleElement = (insertStyleElement_default());

var HotelItemsCSS_update = injectStylesIntoStyleTag_default()(HotelItemsCSS/* default */.Z, HotelItemsCSS_options);




       /* harmony default export */ const Hotels_HotelItemsCSS = (HotelItemsCSS/* default */.Z && HotelItemsCSS/* default.locals */.Z.locals ? HotelItemsCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Hotels/HotelContent.js





 // import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";



 // import {MyMapComponent} from '../../../Library/PageDevices/GoogleMaps'







moment_default().locale('uk');
var HotelContent = function HotelContent(_ref) {
  var hotel = _ref.hotel,
      hotelTariff = _ref.hotelTariff,
      cityName = _ref.cityName;
  console.log('NEWDATADATE', hotel, hotelTariff, cityName);

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale; // console.log('[HOTEL_CONTENT]' , hotel)


  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      emptyContent = _useState4[0],
      setEmptyContent = _useState4[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; // const [id, setId] = useState([])
  // const result = useSelector(state => state.hotelcontent.hotelcontent)


  var dispatch = (0,es/* useDispatch */.I0)(); // useEffect (() =>{
  //   dispatch(getHotelContent(hotel.hotel_id,locale))
  // },[hotel.hotel_id])
  // console.log('[HOTEL_HOTEL_CONTENTS]', hotelcontents)

  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/hotelcontent?id=").concat(hotel.hotel_id, "&language=").concat(locale)).then(function (res) {
      console.log('RES_DATA', res.data);
      setResult(res.data);
    })["catch"](function (error) {
      setResult(undefined);
      console.log('[axios error] : ', error);
    });
  }, [hotel.hotel_id]); //  console.log('[HOTEL_RESULT] : ' , result)
  //   useEffect ( () => {
  //     dispatch (getContent (tour.tour_id));
  //   },[]);

  if (!result) {
    return /*#__PURE__*/react.createElement("div", null, "Loading...");
  }

  return /*#__PURE__*/react.createElement("div", {
    "class": "WrapperHotel_ItemContent"
  }, /*#__PURE__*/react.createElement("ul", {
    "class": "".concat(width > 1000 ? 'Hotel_ItemContent' : 'Hotel_ItemContentSmallScreen')
  }, /*#__PURE__*/react.createElement(react.Fragment, null, result.length > 0 ? result.map(function (trip) {
    if (trip.content_name === 'Title') {
      return /*#__PURE__*/react.createElement("li", {
        "class": "".concat(width > 1000 ? 'Li_HotelContent' : 'Li_HotelContentSmallScreen'),
        style: {
          gridRow: '1',
          gridColumn: '1'
        }
      }, /*#__PURE__*/react.createElement("div", {
        "class": "".concat(width > 1000 ? 'HotelNameStarRating' : 'HotelNameStarRatingSmallScreen')
      }, /*#__PURE__*/react.createElement("h3", {
        style: {
          fontSize: '27px',
          color: '#001959',
          fontWeight: 'bold',
          marginRight: '2vw'
        }
      }, hotel.localized_hotel_name.toUpperCase())));
    }

    {
      for (var key in trip) {
        if (key === "hotel_parameters") {
          for (var key1 in trip[key]) {
            console.log('KEY1', trip[key]);
            return /*#__PURE__*/react.createElement("li", {
              "class": "".concat(width > 1000 ? 'Li_HotelContent' : 'Li_HotelContentSmallScreen'),
              style: {
                gridRow: '1',
                gridColumn: '2/3'
              }
            }, /*#__PURE__*/react.createElement("div", {
              "class": "".concat(width > 1000 ? 'HotelNameStarRating' : 'HotelNameStarRatingSmallScreen')
            }, trip[key].category && Array.from(trip[key].category).includes('*') ? Array.from(trip[key].category).map(function (star) {
              return /*#__PURE__*/react.createElement("span", {
                style: {
                  marginLeft: '0.1vw',
                  marginRight: '0.1vw'
                }
              }, /*#__PURE__*/react.createElement(Star, null));
            }) : null), /*#__PURE__*/react.createElement("div", {
              "class": "".concat(width > 1000 ? null : 'HotelAddressSmallScreen')
            }, /*#__PURE__*/react.createElement("span", {
              style: {
                fontWeight: 'bold'
              }
            }, hotel.localized_city_name.toUpperCase()), " - ", trip[key].address));
          }
        }
      }
    }

    if (trip.content_name === 'Image') {
      return /*#__PURE__*/react.createElement("li", {
        "class": "".concat(width > 1000 ? 'Li_Image' : 'Li_ImageSmallScreen'),
        style: {
          gridRow: '2',
          gridColumn: '1'
        }
      }, /*#__PURE__*/react.createElement("img", {
        // class='imageSearchrender'
        style: {
          width: "".concat(width > 1000 ? '18vw' : '90%'),
          height: "".concat(width > 1000 ? '14vw' : '100%'),
          borderRadius: '5px'
        },
        src: 'http://' + trip.text[2]
      }));
    } // else {
    //   return (
    //     <li class='Li_HotelContent'>
    //       <div style={{display:'flex', 
    //                    flexDirect:'row'}}>
    //          <h3 style={{fontSize:'27px',
    //                     color: '#001959',
    //                     fontWeight: 'bold',
    //                     marginRight:'2vw'}}>
    //                        {hotel.hotel_name} 
    //          </h3>
    //       </div>
    //    </li>
    //   )
    // }

  }) :
  /*#__PURE__*/
  // <div>{tour.name}{tour.duration}</div> 
  // <LoadingMessage/>
  react.createElement("li", {
    "class": "Li_HotelContent"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirect: 'row'
    }
  }, /*#__PURE__*/react.createElement("h3", {
    style: {
      fontSize: '27px',
      color: '#001959',
      fontWeight: 'bold',
      marginRight: '2vw'
    }
  }, hotel.hotel_name))))));
};
/* <MyMapComponent
                         isMarkerShown
                         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                         loadingElement={<div style={{ height: `100%` }} />}
                         containerElement={<div style={{ height: `400px` }} />}
                         mapElement={<div style={{ height: `100%` }} />}
                   /> 
                  <ul> 
                  {  */

/* /* // Object.values(trip[key]).length>0&&Object.values(trip[key]).map((value)=>{ */

/*                   
                        /* // return( */

/* // <li class='HotelAddress'> */

/* {value&&Array.from(value).includes('*')?Array.from(value).map((star)=><Star/>):value} */

/* // </li> */

/* // ) */

/* // }) */

/* // } */

/* // </ul> */
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/HotelBookButton/HotelBookButton.js







var HotelBookButton = function HotelBookButton(_ref) {
  var innerText = _ref.innerText,
      hotel = _ref.hotel,
      hotelsearch = _ref.hotelsearch,
      cityName = _ref.cityName,
      hotelName = _ref.hotelName;

  // console.log('HOTEL_HOTEL',hotel)
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var search_data = ValidateQuery(hotelsearch);
  var promoCode = (0,es/* useSelector */.v9)(function (state) {
    return state.promocode.promocode;
  });
  console.log('HOTELSEARCH', search_data); // const location = useLocation()

  var history = (0,react_router/* useHistory */.k6)();
  var lang = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locale;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(changeLang());
  }, []);

  var addToHotelDetails = function addToHotelDetails(e) {
    // dispatch(getPaxInnerSearch(search_data.adults, search_data.children, search_data.rooms))
    e.preventDefault();
    var route_hotel_query = "?".concat(promoCode ? 'refpartner=' + promoCode + ',' : '').concat(hotel.eng_hotel_name ? 'title=' + hotel.eng_hotel_name + ',' : '').concat(hotel.eng_city_name ? 'cityName=' + hotel.eng_city_name + ',' : '').concat(search_data.start ? 'start=' + search_data.start + ',' : '').concat(search_data.end ? 'end=' + search_data.end + ',' : '', "id=").concat(hotel.hotel_id, ",").concat(search_data.city_id ? "city_id=".concat(search_data.city_id) : "city_id=".concat(hotel.city_id), ",").concat(search_data.adults ? "adults=".concat(search_data.adults) : "adults=2", ",").concat(search_data.children ? "children=".concat(search_data.children) : "children=0", ",").concat(search_data.rooms ? "rooms=".concat(search_data.rooms) : "rooms=1", ",").concat(hotel.eng_hotel_name ? 'hotel_name=' + hotel.eng_hotel_name + ',' : '', "hotel_id=").concat(hotel.hotel_id);
    history.push("/".concat(locale, "/hotel_details/").concat(route_hotel_query));
  };

  return /*#__PURE__*/react.createElement("button", {
    type: "submit",
    "class": "availableButtonHotel",
    onClick: addToHotelDetails
  }, innerText);
};
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Hotels/HotelRates.js

 // import axios from "axios"



 // import {SearchInner} from '../../../Library/SearchPannel/SearchPannel'

 // import ReactHtmlParser from 'react-html-parser'





moment_default().locale('uk');
var HotelRates = function HotelRates(_ref) {
  var key = _ref.key,
      hotelTariff = _ref.hotelTariff,
      hotelRooms = _ref.hotelRooms,
      searchResults = _ref.searchResults,
      hotelName = _ref.hotelName,
      cityName = _ref.cityName;
  console.log('PROPS_PROPS', key, hotelTariff, hotelRooms, searchResults, hotelName, cityName); // console.log('HOTEL_ROOMS_2',hotelTariff)

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var search_data = ValidateQuery(location);

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var min_rate = Number.MAX_VALUE; // console.log('[HOTELROOMS22]', hotelRooms)

  var newobj2 = {};
  hotelTariff.dates.forEach(function (item, index, array) {
    console.log('ONE', hotelName, item);

    if (item.date === searchResults.start) {
      // console.log('ONE1',item.date)
      item.rooms.forEach(function (item1) {
        item1.tariffs.forEach(function (item2) {
          item2.prices.forEach(function (item3) {
            if (item3.sum < min_rate) {
              min_rate = item3.sum;
              newobj2 = {
                min_rate: min_rate,
                room_id: item1.room_id
              };
            }
          }); // }
          // else 
          // message = "Not Available"
        });
      });
    }
  }); // console.log('[MIN_RATE at]', hotelName , min_rate ,newobj2)
  // const filtered_new = filtered_hotelRooms.sort((c,d)=>(parseInt(c.sum,10)-parseInt(d.sum,10)))[0]
  // const addToHotelDetails = (e) => {
  //     e.preventDefault()
  //     const route_hotel_query = `${location.search},hotel_name=${hotelName},hotel_id=${hotelTariff.hotel_id}`
  //     history.push(`/hotel_details/${route_hotel_query}`)
  //   }

  return /*#__PURE__*/react.createElement("div", {
    style: {
      gridColumn: '2',
      gridRow: '2'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridAutoRows: "".concat(width > 1000 ? 'minmax(40px, auto)' : 'minmax(15px, auto)')
    }
  }, /*#__PURE__*/react.createElement(react.Fragment, null, hotelRooms.length ? hotelRooms.map(function (item) {
    if (item.room_id === newobj2.room_id) {
      return /*#__PURE__*/react.createElement("h3", {
        style: {
          fontSize: '14px',
          color: '#001959',
          fontWeight: 'bold',
          gridColumn: '1',
          gridRow: '1'
        }
      }, item.room_name === '0' ? 'Regular' : item.room_name, " ", item.room_type_name);
    }
  }) : /*#__PURE__*/react.createElement("h3", null, "Your search returned no result")), /*#__PURE__*/react.createElement("div", {
    style: {
      fontSize: '10px',
      color: 'grey',
      fontStyle: 'italic',
      gridColumn: '1',
      gridRow: '2'
    }
  }, hotelTariff.hotel_id), /*#__PURE__*/react.createElement("h3", {
    style: {
      fontSize: '14px',
      color: 'blue',
      fontWeight: 'bold',
      gridColumn: '2',
      gridRow: '1',
      textAlign: 'end'
    }
  }, hotelTariff.currency, " ", newobj2.min_rate), /*#__PURE__*/react.createElement("h4", {
    style: {
      fontSize: '12px',
      color: 'grey',
      fontWeight: 'bold',
      gridColumn: '2',
      gridRow: '2',
      textAlign: 'end'
    }
  }, "Includes taxes and charges"), /*#__PURE__*/react.createElement("div", {
    style: {
      gridColumn: '2',
      gridRow: '3',
      textAlign: 'end'
    }
  }, /*#__PURE__*/react.createElement(HotelBookButton, {
    innerText: messages && messages.map(function (item) {
      if (item.sitepage_region_id === 7 && item.sitepage_type_id === 16) {
        return /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: item.title.map(function (item1) {
            return item1.text;
          })
        });
      }
    }),
    hotel: hotelTariff,
    hotelsearch: location,
    cityName: cityName,
    hotelName: hotelName
  }))));
};
;// CONCATENATED MODULE: ./src/Components/Pages/SecondPageofSearchModule/Hotels/HotelItems.js

 // import {history} from '../../Front Page/History'


 // import {getPosts} from "../../../../Redux/actions/list"
// import { connect } from 'react-redux';


 // import {TourDetails} from './tourDetails';



 // import ReactHtmlParser from 'react-html-parser'







 // import 'moment/locale/uk'


moment_default().locale('uk'); // import 'moment-timezone';

var HotelItems = function HotelItems(_ref) {
  var title = _ref.title;
  console.log('HOTEL_TITLE', title); ///получаю с помощью своиства истории (history) из компонента search результаты поиска - массив с одним объектом. 

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var search_data = ValidateQuery(location);
  console.log('HOTEL ITEM LOCATION', location); // // const searchResults = search_data.query.replace(/_/g, " ")
  // console.log('[SEARCHRESULTS] : ' , searchResults , 'DATSENKO',search_data, search_data.title.replace(/_/g, " "))

  console.log('DATSENKO', search_data);
  var dispatch = (0,es/* useDispatch */.I0)(); // const generalHotelItems = useSelector(state => state.hotels.general_hotels)

  var generalHotelItems = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelcities.hotel_cities;
  });

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      hotelRate = _useState2[0],
      setHotelRate = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      filtered1 = _useState4[0],
      setFiltered1 = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      geoindex = _useState6[0],
      setGeoindex = _useState6[1];

  var _useState7 = (0,react.useState)(),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      timing = _useState8[0],
      setTiming = _useState8[1];

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages; // console.log('[TEST]', test)
  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  // useEffect ( () => {
  //   dispatch (getGeneralHotels ());
  // }, [])


  (0,react.useEffect)(function () {
    dispatch(getHotelCities(locale));
  }, []);
  console.log('[GENERAL_HOTELS] , ', generalHotelItems); ///получаю из смарта имя отеля, айди отеля, сити имя, сити айди 
  ///используется непосредственно для вывода названий отелей на странице.
  ///если айди города, который мне приходит первоначально от Саши Ефица (классификатор contracts) не находится в данных, пришедших в результате поиска клиентом, 
  ///то в переменную filtered возвращается тур айди из классификатора contracts, равное айди, пришедшему от клиентского поиска
  ///иначе возвращается сити айди из классификатора contracts, равное айди из поиска

  var filtered_hotel_items = generalHotelItems.filter(function (item) {
    // if(item.city_id.indexOf(search_data.id) === -1){
    if (parseInt(item.city_id) !== parseInt(search_data.id)) {
      return parseInt(item.hotel_id) === parseInt(search_data.id); // return parseInt(item.hotel_id)
    }

    return parseInt(item.city_id) === parseInt(search_data.id); // return parseInt(item.city_id)
  });
  console.log('[FILTERED_GENERAL_HOTELS]', filtered_hotel_items); ///отфильтровала данные поиска, чтобы получить только айди отеля поиска

  var filtered_hotel_id = filtered_hotel_items.map(function (item1) {
    return item1.hotel_id;
  });
  var filtered_city_name;
  filtered_hotel_items.forEach(function (item1, index, array) {
    filtered_city_name = item1.localized_city_name;
  }); // console.log('[FILTERED GEO] : ', filtered)
  // console.log('[FILTERED_CITY_NAME] : ', filtered_city_name)

  var currentMonth = moment_default()().format('YYYY-MM');
  var today = moment_default()().format('YYYY-MM-DD');
  console.log('[TODAY MONTH]', currentMonth, '[TODAY DATE]', today, '[TEST_DATE] : ', search_data.date + '-01');

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": currentUser.user_id,
      "action": "GetPriceHotelRQ",
      "refpartner": search_data.refpartner ? search_data.refpartner : null,
      "data": {
        "start": search_data.start,
        // date of arrival  
        "end": search_data.end,
        // date of departure
        "city_id": search_data.city_id,
        // search_data.city_id,         // Id of city - can`t be equel to zero
        "hotel_id": search_data.city_id === search_data.id ? 0 : search_data.id,
        // search_data.city_id === search_data.id? 320 : search_data.id,       // Id of hotel: if hotel_id = 0, must return all hotels of the pointed city in response
        "numberofunits": search_data.rooms,
        // Quantity of rooms, 1 by default, NOT OBLIGATORY
        "calculation_data": {
          "adults": search_data.adults,
          "children": search_data.children,
          // "child_discount" : search_data.c !== 0? 0.5: null,
          "lower_cost_limit": 0.00,
          // lower cost limit of room in USD, NOT OBLIGATORY
          "upper_cost_limit": 200.00 // upper cost limit of room in USD, NOT OBLIGATORY

        }
      }
    }; // axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))

    axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })).then(function (response) {
      console.log('TESTTEST', response);

      for (var key in response.data.data) {
        if (key === 'hotels') {
          setHotelRate(response.data.data[key]);
        } // setHotelRate(response.data)

      }
    })["catch"](function (error) {
      setHotelRate(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);
  console.log('GEN_HOTEL_RATE', hotelRate);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("div", {
    "class": "searchrendering_Wrapper"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", {
    style: {
      marginTop: '2vw',
      color: '#003057',
      fontFamily: 'Arial',
      fontSize: '30px',
      fontWeight: 'bold'
    }
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 25) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))), /*#__PURE__*/react.createElement("div", null, !hotelRate || hotelRate.length === 0 ? /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      left: '40%',
      transform: 'translate(0%, -50%)',
      margin: '0'
    }
  }, /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
    loadingMessageClass: "RateLoading"
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", {
    style: {
      color: '#001959',
      backgroundColor: 'rgb(255, 239, 131)',
      // border:'2px solid #001959',
      borderRadius: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      paddingTop: '2vh',
      paddingBottom: '2vh'
    }
  }, filtered_city_name, " : ", filtered_hotel_items.length, " properties found"), /*#__PURE__*/react.createElement("ul", {
    className: "".concat(width > 1000 ? 'HotelDescriptionUl' : 'HotelDescriptionUlSmallScreen'),
    style: {
      width: "".concat(width > 1000 ? width * 0.65 : width * 0.9, "px")
    }
  }, /*#__PURE__*/react.createElement(react.Fragment, null, hotelRate && hotelRate.length > 0 ? hotelRate.map(function (hotelTariff) {
    if (hotelTariff) {
      return /*#__PURE__*/react.createElement("li", {
        key: hotelTariff.hotel_id,
        className: "".concat(width > 1000 ? 'HotelDescriptionLi' : 'HotelDescriptionLiSmallScreen')
      }, /*#__PURE__*/react.createElement(HotelRates, {
        key: hotelTariff.hotel_id,
        hotelTariff: hotelTariff,
        hotelRooms: hotelTariff.room_rates,
        searchResults: search_data,
        history: history,
        hotelName: hotelTariff.hotel_name,
        cityName: filtered_city_name
      }), filtered_hotel_items.length > 0 && filtered_hotel_items ? filtered_hotel_items.map(function (hotel) {
        if (parseInt(hotel.hotel_id) === parseInt(hotelTariff.hotel_id)) {
          if (hotel) {
            return /*#__PURE__*/react.createElement(HotelContent, {
              hotel: hotel,
              hotelTariff: hotelTariff,
              cityName: filtered_city_name
            });
          }
        }
      }) : null);
    }
  }) : null))))));
};
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/LargeScreenSearch.js

 // import { useHistory } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux';







 // import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"
// import {getTopTours} from "../../../Redux/actions/toptours"







moment_default().locale('uk');
var LargeScreenSearch = function LargeScreenSearch(_ref) {
  var wrapper = _ref.wrapper,
      innerWrapper = _ref.innerWrapper,
      formClass = _ref.formClass,
      autocompleteClass = _ref.autocompleteClass,
      datepickerClass = _ref.datepickerClass,
      props = _ref.props;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages; // const [list , setList] = useState([]);


  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      generalValue = _useState2[0],
      setGeneralValue = _useState2[1];

  var _useState3 = (0,react.useState)('HOTELS'),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      align = _useState4[0],
      setAlign = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      generalList = _useState6[0],
      setGeneralList = _useState6[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('WIDTH', width);

  var GeneralListFunction = function GeneralListFunction(mylist, myvalue) {
    setGeneralList(mylist);
    setGeneralValue(myvalue);
  };

  var toggler = function toggler(me) {
    return function (_) {
      setAlign(me);
    };
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/react.createElement("div", {
    "class": "largeScreenSearch"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Switcher_Switcher, {
    name: 'align',
    changeHandler: toggler,
    active: align,
    switcherWidth: "".concat(width * 0.2, "px")
  }, /*#__PURE__*/react.createElement(Switcher_SwitcherItem, {
    value: "HOTELS"
  }, /*#__PURE__*/react.createElement(hotels_Hotels, null), /*#__PURE__*/react.createElement("h4", null, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 5 && item.sitepage_type_id === 34) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))), /*#__PURE__*/react.createElement(Switcher_SwitcherItem, {
    value: "TOURS"
  }, /*#__PURE__*/react.createElement(tours_Tours, null), /*#__PURE__*/react.createElement("h4", null, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 5 && item.sitepage_type_id === 35) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))))), /*#__PURE__*/react.createElement(react.Fragment, null, align === "TOURS" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ToursAutocomplete, {
    formClass: formClass,
    onSubmit: onSubmit,
    datepickerClass: datepickerClass,
    GeneralListFunction: GeneralListFunction
  }), /*#__PURE__*/react.createElement(react.Fragment, null, generalList.length > 0 && /*#__PURE__*/react.createElement(GuestItem_GuestItem, {
    title: generalValue,
    list: generalList
  }))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(HotelsAutocomplete, {
    formClass: formClass,
    onSubmit: onSubmit,
    datepickerClass: datepickerClass,
    GeneralListFunction: GeneralListFunction
  }), /*#__PURE__*/react.createElement(react.Fragment, null, generalList.length > 0 && /*#__PURE__*/react.createElement(HotelItems, {
    title: generalValue,
    list: generalList
  })))));
};
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsAutocompleteSmallScreen.js


















moment_default().locale('uk');
var HotelsAutocompleteSmallScreen = function HotelsAutocompleteSmallScreen(_ref) {
  var wrapper = _ref.wrapper,
      formClass = _ref.formClass,
      datepickerClass = _ref.datepickerClass,
      onSubmit = _ref.onSubmit,
      props = _ref.props,
      GeneralListFunction = _ref.GeneralListFunction;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      stayDates = _useState2[0],
      setStayDates = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      hotelsvalue = _useState6[0],
      setHotelsValue = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      paxListOpen = _useState10[0],
      setPaxListOpen = _useState10[1];

  var _useState11 = (0,react.useState)(),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      totalPax = _useState12[0],
      setTotalPax = _useState12[1];

  var _useState13 = (0,react.useState)(false),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      pickedHotelValue = _useState14[0],
      setPickedHotelValue = _useState14[1];

  var _useState15 = (0,react.useState)(false),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      loaded = _useState16[0],
      setLoaded = _useState16[1];

  var history = (0,react_router/* useHistory */.k6)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var dispatch = (0,es/* useDispatch */.I0)(); // const store = useStore();

  var smart_hotels = (0,es/* useSelector */.v9)(function (state) {
    return state.hotels.hotels;
  });
  var general_smart_hotels = (0,es/* useSelector */.v9)(function (state) {
    return state.hotels.general_hotels;
  });
  var totalPaxRedux = (0,es/* useSelector */.v9)(function (state) {
    return state.paxchoice.pax;
  });
  var filledArray = new Array(10).fill(null).map(function () {
    return {
      'hello': 'goodbye'
    };
  });
  console.log(filledArray);
  var placeholder = PlaceHolderStrings();
  console.log('TOTALPAX', totalPaxRedux);
  var RangePicker = date_picker/* default.RangePicker */.Z.RangePicker;
  (0,react.useEffect)(function () {
    dispatch(getHotels());
  }, []);
  console.log('[SMART_HOTELS] : ', smart_hotels);
  (0,react.useEffect)(function () {
    dispatch(getGeneralHotels());
  }, []);
  console.log('[SMART_GENERAL_HOTELS] : ', general_smart_hotels);

  function onChange(dates, dateStrings) {
    setStayDates(dateStrings);
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  var optionChecker = function optionChecker(e) {
    console.log('[VALUE] : ', e.target.value);
    setHotelsValue(e.target.value);

    if (hotelsvalue.length >= 0) {
      setOpen(true);
    }
  };

  var disabledDate = function disabledDate(current) {
    // Can not select days before today 
    return current < moment_default()().subtract(1, 'days').endOf('day'); // return current < moment().endOf('day');
  };

  var addToList = function addToList() {
    if (pickedHotelValue === false) {
      alert("Please choose your hotel");
    } else {
      var filteredHotels = smart_hotels.filter(function (item) {
        return item.name === hotelsvalue;
      });
      var filtered_hotelcity_id = general_smart_hotels.filter(function (item) {
        if (item.hotel_id === filteredHotels[0].id) {
          return item.city_id;
        } else return item.city_id === filteredHotels[0].id;
      });
      console.log('FILTERED_HOTEL_ID', filtered_hotelcity_id);
      var hotelNewList = {
        id: filteredHotels[0].id,
        title: hotelsvalue,
        date: stayDates
      };
      setList([].concat((0,toConsumableArray/* default */.Z)(list), [hotelNewList]));
      setStayDates('');
      setHotelsValue('');
      var route_query = "?title=".concat(hotelsvalue, ",start=").concat(stayDates[0], ",end=").concat(stayDates[1], ",id=").concat(filteredHotels[0].id, ",city_id=").concat(filtered_hotelcity_id[0].city_id, ",adults=").concat(totalPaxRedux.adults, ",children=").concat(totalPaxRedux.children, ",rooms=").concat(totalPaxRedux.rooms);
      console.log('[hotelNewList] : ', list, hotelsvalue);
      history.push("/".concat(locale, "/search_results_hotels/").concat(route_query), [].concat((0,toConsumableArray/* default */.Z)(list), [hotelNewList]));
      console.log('[HISTORY : ] ', history);
      GeneralListFunction(list, hotelsvalue);
    }
  };

  var MakeVisible = function MakeVisible() {
    setPaxListOpen(!paxListOpen);
  };

  return /*#__PURE__*/react.createElement("div", {
    "class": wrapper
  }, /*#__PURE__*/react.createElement("form", {
    className: formClass,
    onSubmit: onSubmit
  }, /*#__PURE__*/react.createElement((Autocomplete_default()), (0,esm_extends/* default */.Z)({}, props, {
    value: hotelsvalue,
    inputProps: {
      style: {
        width: "".concat(width * 0.8, "px"),
        marginRight: 'auto',
        marginLeft: 'auto',
        height: '45px',
        fontFamily: 'Tahoma',
        fontSize: '16px',
        borderTop: 'none',
        borderBottom: '0.5px solid grey',
        borderLeft: 'none',
        borderRight: 'none',
        marginTop: '0.2vw',
        textAlign: 'center',
        position: 'relative'
      },
      placeholder: placeholder.placeHolderString
    },
    menuStyle: {
      width: "".concat(width * 0.8, "px"),
      marginRight: 'auto',
      marginLeft: 'auto',
      fontFamily: 'Arial Narrow',
      fontWeight: 'bold',
      fontSize: '18px',
      color: 'darkslategrey',
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255)',
      padding: '3px',
      position: 'absolute',
      overflow: 'scroll',
      maxHeight: '30vh',
      zIndex: '2000',
      border: '2px solid grey',
      left: '10',
      top: '5'
    },
    items: smart_hotels,
    getItemValue: function getItemValue(item) {
      return item.name;
    },
    onChange: optionChecker,
    onSelect: function onSelect(value) {
      return setHotelsValue(value) + setOpen(false) + setPickedHotelValue(true);
    },
    renderItem: function renderItem(item, highlighted) {
      return /*#__PURE__*/react.createElement("div", {
        key: item.id,
        style: {
          backgroundColor: highlighted ? 'lightblue' : 'transparent'
        }
      }, item.name);
    },
    shouldItemRender: function shouldItemRender(item, value) {
      return value !== "" ? item.name.toLowerCase().includes(value.toLowerCase()) : null;
    },
    open: open,
    onMenuVisibilityChange: function onMenuVisibilityChange(isOpen) {
      return setOpen(false);
    }
  })), /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(RangePicker, {
    size: 'middle',
    disabledDate: disabledDate,
    ranges: {
      Today: [moment_default()(), moment_default()()],
      'This Month': [moment_default()().startOf('month'), moment_default()().endOf('month')]
    },
    onChange: onChange,
    bordered: false,
    className: datepickerClass,
    placeholder: [placeholder.placeHolderStartDate, placeholder.placeHolderEndDate]
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      borderTop: '0.5px solid grey',
      borderBottom: '0.5px solid grey'
    }
  }, /*#__PURE__*/react.createElement(HotelsPaxChoice, {
    MakeVisible: MakeVisible,
    paxListOpen: paxListOpen
  })), /*#__PURE__*/react.createElement("div", {
    "class": "borderInnerWrapper2",
    style: {
      marginTop: '2vh'
    }
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    onClick: addToList
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 13) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })))));
};
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/ToursAutocompleteBlock/ToursAutocompleteSmallScreen.js



 // import './SearchPannelCSS.css';















var ToursAutocompleteSmallScreen = function ToursAutocompleteSmallScreen(_ref) {
  var wrapper = _ref.wrapper,
      innerWrapper = _ref.innerWrapper,
      formClass = _ref.formClass,
      autocompleteClass = _ref.autocompleteClass,
      datepickerClass = _ref.datepickerClass,
      props = _ref.props;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      testDate = _useState4[0],
      setTestDate = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = (0,react.useState)(''),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      open = _useState10[0],
      setOpen = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      isOpen = _useState12[0],
      setIsOpen = _useState12[1];

  var _useState13 = (0,react.useState)(''),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      align = _useState14[0],
      setAlign = _useState14[1];

  var history = (0,react_router/* useHistory */.k6)();
  var dispatch = (0,es/* useDispatch */.I0)();
  var geo = (0,es/* useSelector */.v9)(function (state) {
    return state.cities.locs;
  });
  var geoGeneral = (0,es/* useSelector */.v9)(function (state) {
    return state.cities.gen_locs;
  });

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var placeholder = PlaceHolderStrings(); // const dateFormat = 'DD-MM-YYYY'

  (0,react.useEffect)(function () {
    dispatch(cities_getGeo());
  }, []);
  console.log('[GEO] : ', geo);
  (0,react.useEffect)(function () {
    dispatch(cities_getGeneralGeo());
  }, []);
  console.log('[general_GEO] : ', geoGeneral);

  var toggler = function toggler(me) {
    return function (_) {
      setAlign(me);
    };
  };

  function dateFunc(e) {
    return setDate(e.target.value);
  }

  function onChange(date, dateString) {
    setTestDate(dateString);
    console.log('[TEST_DATE] : ', dateString);
    console.log('[DATE_PICKER] : ', date, dateString);
  }

  var optionChecker = function optionChecker(e) {
    console.log('[VALUE] : ', e.target.value);
    setValue(e.target.value);

    if (value.length >= 0) {
      setOpen(true);
    }
  }; // console.log('[TODAY DATE]' , moment().format('YYYY-MM') , '[TEST_DATE] : ' , testDate)


  var disabledDate = function disabledDate(current) {
    // Can not select days before today 
    return current && current < moment_default()().endOf('day');
  };

  var addToList = function addToList() {
    var filtered = geo.filter(function (item) {
      return item.name === value;
    });
    var filtered_city_id = geoGeneral.filter(function (item) {
      if (item.tour_id === filtered[0].id) {
        return item.city_id;
      } else return item.city_id === filtered[0].id;
    });
    console.log('FILTERED_CITY_ID', filtered_city_id);
    var newList = {
      id: filtered[0].id,
      title: value,
      date: testDate
    };
    setList([].concat((0,toConsumableArray/* default */.Z)(list), [newList]));
    setDate('');
    setValue('');
    var route_query = "?title=".concat(value, ",date=").concat(testDate, ",id=").concat(filtered[0].id, ",city_id=").concat(filtered_city_id[0].city_id);
    console.log('[NewList] : ', newList);
    history.push("/".concat(locale, "/search_results_tours/").concat(route_query), [].concat((0,toConsumableArray/* default */.Z)(list), [newList]));
    console.log('[HISTORY : ] ', history);
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/react.createElement("div", {
    "class": wrapper
  }, /*#__PURE__*/react.createElement("form", {
    className: formClass,
    onSubmit: onSubmit
  }, /*#__PURE__*/react.createElement((Autocomplete_default()), (0,esm_extends/* default */.Z)({}, props, {
    menuStyle: {
      width: "".concat(width * 0.8, "px"),
      marginRight: 'auto',
      marginLeft: 'auto',
      fontFamily: 'Tahoma',
      fontSize: '16px',
      background: '#d9e6f1',
      borderRadius: '5px',
      border: '2px solid #BCD7EE',
      color: 'darkslategrey',
      zIndex: '100',
      overflow: 'auto'
    },
    inputProps: {
      style: {
        width: "".concat(width * 0.8, "px"),
        height: '37px',
        fontFamily: 'Tahoma',
        fontSize: '16px',
        border: '1px solid lightgrey',
        marginTop: '1vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '1vh'
      },
      placeholder: placeholder.placeHolderTour
    },
    items: geo,
    shouldItemRender: function shouldItemRender(item, value) {
      return value !== "" ? item.name.toLowerCase().includes(value.toLowerCase()) : null;
    },
    getItemValue: function getItemValue(item) {
      return item.name;
    },
    open: open,
    onMenuVisibilityChange: function onMenuVisibilityChange(isOpen) {
      return setOpen(false);
    },
    renderItem: function renderItem(item, highlighted) {
      return /*#__PURE__*/react.createElement("div", {
        key: item.id,
        style: {
          backgroundColor: highlighted ? 'lightblue' : 'transparent'
        }
      }, item.name);
    },
    value: value,
    onChange: optionChecker,
    onSelect: function onSelect(value) {
      return setValue(value) + setOpen(false);
    }
  })), /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
    size: 'large',
    onChange: onChange,
    picker: "month",
    disabledDate: disabledDate //  format={dateFormat} 
    ,
    placeholder: placeholder.placeHolderMonth,
    bordered: true,
    className: datepickerClass,
    style: {
      width: "".concat(width * 0.8, "px"),
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  })), /*#__PURE__*/react.createElement("div", {
    "class": "borderInnerWrapper2_inner"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    onClick: addToList
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 13) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })))));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SmallScreenSearchCSS.css
var SmallScreenSearchCSS = __webpack_require__(71660);
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SmallScreenSearchCSS.css

      
      
      
      
      
      
      
      
      

var SmallScreenSearchCSS_options = {};

SmallScreenSearchCSS_options.styleTagTransform = (styleTagTransform_default());
SmallScreenSearchCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      SmallScreenSearchCSS_options.insert = insertBySelector_default().bind(null, "head");
    
SmallScreenSearchCSS_options.domAPI = (styleDomAPI_default());
SmallScreenSearchCSS_options.insertStyleElement = (insertStyleElement_default());

var SmallScreenSearchCSS_update = injectStylesIntoStyleTag_default()(SmallScreenSearchCSS/* default */.Z, SmallScreenSearchCSS_options);




       /* harmony default export */ const SearchResizersAndSwitchers_SmallScreenSearchCSS = (SmallScreenSearchCSS/* default */.Z && SmallScreenSearchCSS/* default.locals */.Z.locals ? SmallScreenSearchCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SmallScreenSearch.js













var SmallScreenSearch = function SmallScreenSearch(_ref) {
  var wrapper = _ref.wrapper,
      innerWrapper = _ref.innerWrapper,
      formClass = _ref.formClass,
      autocompleteClass = _ref.autocompleteClass,
      datepickerClass = _ref.datepickerClass,
      props = _ref.props;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      generalValue = _useState2[0],
      setGeneralValue = _useState2[1];

  var _useState3 = (0,react.useState)('HOTELS'),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      align = _useState4[0],
      setAlign = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      generalList = _useState6[0],
      setGeneralList = _useState6[1];

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var GeneralListFunction = function GeneralListFunction(mylist, myvalue) {
    setGeneralList(mylist);
    setGeneralValue(myvalue);
  };

  var toggler = function toggler(me) {
    return function (_) {
      setAlign(me);
    };
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: "".concat(width * 0.9, "px"),
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/react.createElement("div", {
    "class": "SwitcherSearchPannel"
  }, /*#__PURE__*/react.createElement(Switcher_Switcher, {
    name: 'align',
    changeHandler: toggler,
    active: align,
    switcherWidth: "".concat(width * 0.9, "px")
  }, /*#__PURE__*/react.createElement(Switcher_SwitcherItem, {
    value: "HOTELS"
  }, /*#__PURE__*/react.createElement(hotels_Hotels, null), /*#__PURE__*/react.createElement("h4", null, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 5 && item.sitepage_type_id === 34) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))), /*#__PURE__*/react.createElement(Switcher_SwitcherItem, {
    value: "TOURS"
  }, /*#__PURE__*/react.createElement(tours_Tours, null), /*#__PURE__*/react.createElement("h4", null, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 5 && item.sitepage_type_id === 35) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }))))), /*#__PURE__*/react.createElement(react.Fragment, null, align === "TOURS" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ToursAutocompleteSmallScreen, {
    formClass: formClass,
    onSubmit: onSubmit,
    datepickerClass: datepickerClass,
    wrapper: wrapper,
    innerWrapper: innerWrapper,
    GeneralListFunction: GeneralListFunction
  }), /*#__PURE__*/react.createElement(react.Fragment, null, generalList.length > 0 && /*#__PURE__*/react.createElement(GuestItem_GuestItem, {
    title: generalValue,
    list: generalList
  }))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(HotelsAutocompleteSmallScreen, {
    formClass: formClass,
    wrapper: wrapper,
    onSubmit: onSubmit,
    datepickerClass: datepickerClass,
    GeneralListFunction: GeneralListFunction
  }), /*#__PURE__*/react.createElement(react.Fragment, null, generalList.length > 0 && /*#__PURE__*/react.createElement(HotelItems, {
    title: generalValue,
    list: generalList
  })))));
};
;// CONCATENATED MODULE: ./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SearchFront.js




 // import {SearchInner} from '../../Library/SearchPannel/SearchPannel'





 // moment.locale('uk')

var SearchFront_Search = function Search(props) {
  // console.log('[PROPS] : ', props)
  var genProps = props;
  var history = (0,react_router/* useHistory */.k6)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  return /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '2vh'
    }
  }, width > 1000 ? /*#__PURE__*/react.createElement(LargeScreenSearch // wrapper='formOuterWrapper'
  // innerWrapper='formInnerWrapper'
  , {
    formClass: "mySearch",
    autocompleteClass: "Autocomplete",
    datepickerClass: "datePicker",
    props: genProps,
    width: width
  }) : /*#__PURE__*/react.createElement(SmallScreenSearch, {
    wrapper: "formOuterWrapper_inner",
    innerWrapper: "formInnerWrapper_inner",
    formClass: "mySearch_inner",
    autocompleteClass: null,
    datepickerClass: "datePicker_inner",
    props: genProps,
    width: width
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Images/ArkturCollection.jpg
/* harmony default export */ const ArkturCollection = (__webpack_require__.p + "c58b58e37c6060efe35b0157f15cc52b.jpg");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/PageComponents/TopToursCSS.css
var TopToursCSS = __webpack_require__(98517);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/TopToursCSS.css

      
      
      
      
      
      
      
      
      

var TopToursCSS_options = {};

TopToursCSS_options.styleTagTransform = (styleTagTransform_default());
TopToursCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      TopToursCSS_options.insert = insertBySelector_default().bind(null, "head");
    
TopToursCSS_options.domAPI = (styleDomAPI_default());
TopToursCSS_options.insertStyleElement = (insertStyleElement_default());

var TopToursCSS_update = injectStylesIntoStyleTag_default()(TopToursCSS/* default */.Z, TopToursCSS_options);




       /* harmony default export */ const PageComponents_TopToursCSS = (TopToursCSS/* default */.Z && TopToursCSS/* default.locals */.Z.locals ? TopToursCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/TopTours.js




 // import ReactHtmlParser from 'react-html-parser'










var TopTours = function TopTours() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var dispatch = (0,es/* useDispatch */.I0)();
  var toptours = (0,es/* useSelector */.v9)(function (state) {
    return state.cities.gen_locs;
  });
  var TopToursContents = (0,es/* useSelector */.v9)(function (state) {
    return state.toptours.toptours;
  });
  var history = (0,react_router/* useHistory */.k6)();

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      toptourdetails = _useState2[0],
      setTopTourDetails = _useState2[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('[TOURTOURS]', toptours); ///получаю из смарта тур имя, тур айди, сити имя, сити айди

  (0,react.useEffect)(function () {
    dispatch(cities_getGeneralGeo());
  }, []);
  (0,react.useEffect)(function () {
    dispatch(getTopTours());
  }, []);

  if (!TopToursContents) {
    return /*#__PURE__*/react.createElement("div", null, " ", /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null));
  }

  var TourTypesFiltered = TopToursContents.filter(function (item, index, array) {
    return array.findIndex(function (t) {
      return t.subservices.id === item.subservices.id;
    }) === index;
  }).map(function (item) {
    return item.subservices.name;
  });
  console.log('[TourTypesFiltered]', TourTypesFiltered);

  var GetTourDetails = function GetTourDetails(e) {
    var route_query;

    if (e.target.id) {
      route_query = "/".concat(locale, "/toptours/?tour_id=").concat(e.target.id);
    } else {
      route_query = '/';
      alert('Please choose another tour');
    } // history.push(`/toptours/${route_query}`)


    history.push(route_query); // console.log('[HISTORY : ] ', history)
  }; // console.log('[TopToursContents]',TopToursContents)


  return /*#__PURE__*/react.createElement("div", null, width > 1000 ? /*#__PURE__*/react.createElement(LargeScreenTopTours, {
    TopToursContents: TopToursContents,
    TourTypes: TourTypesFiltered,
    GetTourDetails: GetTourDetails //  width={width}

  }) : width > 768 ? /*#__PURE__*/react.createElement(MediumScreenTopTours, {
    TopToursContents: TopToursContents,
    TourTypes: TourTypesFiltered,
    GetTourDetails: GetTourDetails // width={width}

  }) : /*#__PURE__*/react.createElement(SmallScreenTopTours, {
    TopToursContents: TopToursContents,
    TourTypes: TourTypesFiltered,
    GetTourDetails: GetTourDetails // width={width}

  }));
};

var LargeScreenTopTours = function LargeScreenTopTours(_ref) {
  var TopToursContents = _ref.TopToursContents,
      GetTourDetails = _ref.GetTourDetails,
      TourTypes = _ref.TourTypes;

  var _useWindowWidthAndHei3 = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei4 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei3, 2),
      width = _useWindowWidthAndHei4[0],
      height = _useWindowWidthAndHei4[1];

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: ArkturCollection
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", null, TourTypes.length > 0 ? TourTypes.map(function (type) {
    return /*#__PURE__*/react.createElement("li", {
      "class": "TopToursWrapper"
    }, /*#__PURE__*/react.createElement("h3", {
      style: {
        fontFamily: 'Arial Narrow',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#005AEB',
        borderRadius: '5px',
        lineHeight: '6vh',
        width: "".concat(width * 0.65, "px")
      }
    }, type), /*#__PURE__*/react.createElement("ul", {
      style: {
        textAlign: 'center',
        display: 'grid',
        gridTemplateColumns: "repeat(3, ".concat(width * 0.65 / 3, "px)"),
        listStyle: 'none'
      }
    }, TopToursContents.length > 0 ? TopToursContents.map(function (tour, index) {
      console.log('PHOTO', tour.main_photo[0]);

      if (index < 12 && type === tour.subservices.name) {
        return /*#__PURE__*/react.createElement("li", {
          key: tour.tour_id,
          onClick: GetTourDetails
        }, /*#__PURE__*/react.createElement("div", {
          id: tour.tour_id
        }, tour.main_photo[0] ? /*#__PURE__*/react.createElement("img", {
          id: tour.tour_id,
          "class": "TopToursImage",
          width: "".concat(width * 0.6 / 3, "px"),
          src: 'http://' + tour.main_photo[0]
        }) : tour.main_photo[1] ? /*#__PURE__*/react.createElement("img", {
          id: tour.tour_id,
          "class": "TopToursImage",
          width: "".concat(width * 0.6 / 3, "px"),
          src: 'http://' + tour.main_photo[1]
        }) : null // (<LoadingMessage itemWidth={`${width*0.6/3}px`}/>)
        ), tour.main_photo[0] || tour.main_photo[1] ? /*#__PURE__*/react.createElement("div", {
          "class": "TopToursTitle",
          style: {
            width: "".concat(width * 0.6 / 3, "px")
          },
          id: tour.tour_id
        }, /*#__PURE__*/react.createElement("h4", {
          id: tour.tour_id,
          style: {
            width: "".concat(width * 0.6 / 3, "px")
          }
        }, tour.tour_name.toUpperCase())) : null);
      }
    }) : null));
  }) : /*#__PURE__*/react.createElement("div", null, null))));
};

var MediumScreenTopTours = function MediumScreenTopTours(_ref2) {
  var TopToursContents = _ref2.TopToursContents,
      GetTourDetails = _ref2.GetTourDetails,
      TourTypes = _ref2.TourTypes;

  var _useWindowWidthAndHei5 = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei6 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei5, 2),
      width = _useWindowWidthAndHei6[0],
      height = _useWindowWidthAndHei6[1];

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: ArkturCollection
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", null, TourTypes.length > 0 ? TourTypes.map(function (type) {
    return /*#__PURE__*/react.createElement("div", {
      "class": "TopToursWrapper"
    }, /*#__PURE__*/react.createElement("h3", {
      style: {
        fontFamily: 'Arial Narrow',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#005AEB',
        borderRadius: '5px',
        lineHeight: '6vh',
        width: "".concat(width * 0.65, "px")
      }
    }, type), /*#__PURE__*/react.createElement("ul", {
      style: {
        display: 'grid',
        gridTemplateColumns: "repeat(2, ".concat(width * 0.6 / 2, "px)"),
        listStyle: 'none',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, TopToursContents.length > 0 ? TopToursContents.map(function (tour, index) {
      if (index < 12) {
        return /*#__PURE__*/react.createElement("li", {
          key: tour.tour_id,
          onClick: GetTourDetails
        }, /*#__PURE__*/react.createElement("div", null, tour.main_photo[0] ? /*#__PURE__*/react.createElement("img", {
          id: tour.tour_id,
          "class": "TopToursImage",
          width: "".concat(width * 0.5 / 2, "px"),
          src: 'http://' + tour.main_photo[0]
        }) : null // (<LoadingMessage itemWidth={`${width*0.5/2}px`}/>)
        ), tour.main_photo[0] ? /*#__PURE__*/react.createElement("div", {
          "class": "TopToursTitle",
          style: {
            width: "".concat(width * 0.5 / 2, "px")
          }
        }, /*#__PURE__*/react.createElement("h4", {
          id: tour.tour_id,
          style: {
            width: "".concat(width * 0.5 / 2, "px")
          }
        }, tour.tour_name.toUpperCase())) : null);
      }
    }) : /*#__PURE__*/react.createElement("div", null, null)));
  }) : /*#__PURE__*/react.createElement("div", null, null))));
};

var SmallScreenTopTours = function SmallScreenTopTours(_ref3) {
  var TopToursContents = _ref3.TopToursContents,
      GetTourDetails = _ref3.GetTourDetails,
      TourTypes = _ref3.TourTypes;

  var _useWindowWidthAndHei7 = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei8 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei7, 2),
      width = _useWindowWidthAndHei8[0],
      height = _useWindowWidthAndHei8[1];

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: ArkturCollection,
    style: {
      width: width
    }
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", null, TourTypes.length > 0 ? TourTypes.map(function (type) {
    return /*#__PURE__*/react.createElement("div", {
      "class": "SmallerTopToursWrapper"
    }, /*#__PURE__*/react.createElement("h3", {
      style: {
        fontFamily: 'Arial Narrow',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#005AEB',
        borderRadius: '5px',
        lineHeight: '6vh',
        width: "".concat(width, "px")
      }
    }, type), /*#__PURE__*/react.createElement("ul", {
      style: {
        listStyle: 'none'
      }
    }, TopToursContents.length > 0 ? TopToursContents.map(function (tour, index) {
      if (index < 12) {
        return /*#__PURE__*/react.createElement("li", {
          key: tour.tour_id,
          onClick: GetTourDetails
        }, /*#__PURE__*/react.createElement("div", null, tour.main_photo[0] ? /*#__PURE__*/react.createElement("img", {
          id: tour.tour_id,
          "class": "SmallerTopToursImage",
          style: {
            width: width
          },
          src: 'http://' + tour.main_photo[0]
        }) : null // (<LoadingMessage itemWidth={`${width}px`}/>
        // )
        ), tour.main_photo[0] ? /*#__PURE__*/react.createElement("div", {
          "class": "SmallerTopToursTitle",
          style: {
            width: width
          }
        }, /*#__PURE__*/react.createElement("h4", {
          id: tour.tour_id
        }, tour.tour_name)) : null);
      }
    }) : /*#__PURE__*/react.createElement("div", null, null)));
  }) : /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
    itemWidth: "".concat(width, "px")
  }))));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/RotaryHeader_2.svg
/* harmony default export */ const RotaryHeader_2 = (__webpack_require__.p + "fee13ba575dd0ae50d63c6179a5dd518.svg");
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/HomePage.js






 // import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'




var HomePage = function HomePage() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  console.log('server_url: ', "http://localhost:3000");
  var promoCode = (0,es/* useSelector */.v9)(function (state) {
    return state.promocode.promocode;
  });
  var images = ["arktur.ua/sites/default/files/public/image/slider/Lavra_shutterstock_1545799133_small.jpg", "arktur.ua/sites/default/files/public/image/slider/Azov%20sea_small.jpg", "arktur.ua/sites/default/files/public/image/slider/carpathians_shutterstock_750654637_small.jpg", "arktur.ua/sites/default/files/public/image/slider/Odesa%20Opera%20House_shutterstock_179655773_small.jpg", "arktur.ua/sites/default/files/public/image/slider/KamenetsCastle_shutterstock_1621762234_small.jpg"];
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(es_Helmet/* Helmet */.q, null, /*#__PURE__*/react.createElement("title", null, "Arktur DMC"), /*#__PURE__*/react.createElement("link", {
    rel: "shortcut icon",
    href: "../../Library/Images/ArkturDMClogoICO.ico"
  })), /*#__PURE__*/react.createElement("h2", {
    style: {
      marginTop: '5vh',
      display: "".concat(promoCode === '1497' ? 'none' : 'block'),
      paddingBottom: '1vh',
      color: 'rgb(122,6,8)',
      fontSize: '25px',
      fontFamily: 'Arial',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 20) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }), "   "), promoCode === '1497' ? null : /*#__PURE__*/react.createElement(Slider_Slider, {
    slides: images
  }), /*#__PURE__*/react.createElement(SearchFront_Search, null), /*#__PURE__*/react.createElement(TopTours, null));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PageDevices/CartGallery/CartGalleryCSS.css
var CartGalleryCSS = __webpack_require__(59981);
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/CartGallery/CartGalleryCSS.css

      
      
      
      
      
      
      
      
      

var CartGalleryCSS_options = {};

CartGalleryCSS_options.styleTagTransform = (styleTagTransform_default());
CartGalleryCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      CartGalleryCSS_options.insert = insertBySelector_default().bind(null, "head");
    
CartGalleryCSS_options.domAPI = (styleDomAPI_default());
CartGalleryCSS_options.insertStyleElement = (insertStyleElement_default());

var CartGalleryCSS_update = injectStylesIntoStyleTag_default()(CartGalleryCSS/* default */.Z, CartGalleryCSS_options);




       /* harmony default export */ const CartGallery_CartGalleryCSS = (CartGalleryCSS/* default */.Z && CartGalleryCSS/* default.locals */.Z.locals ? CartGalleryCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/CartGallery/CartGallery.js




var CartGallery = function CartGallery(_ref) {
  var photos = _ref.photos,
      photoHeight = _ref.photoHeight,
      photoWidth = _ref.photoWidth,
      smallImageHeight = _ref.smallImageHeight;
  console.log('PHOTOS', photos);

  var _useState = (0,react.useState)("https://".concat(photos.text[0])),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      picked = _useState2[0],
      setPicked = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var pickAction = function pickAction(index) {
    return function (e) {
      setPicked(e.target.getAttribute('src'));
      setActiveIndex(index);
      console.log('[PICKED]:', e.target.getAttribute('src'));
    };
  };

  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: '96%',
      height: '55vh',
      display: 'flex',
      flexDirection: "".concat(width > 768 ? 'row' : 'column')
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: "".concat(width > 768 ? '60%' : '100%'),
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: picked,
    style: {
      padding: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      //   width:`${photoWidth?photoWidth:'100%'}`,
      maxHeight: '100%',
      objectFit: 'cover',
      //   height:`${photoHeight}`,
      borderRadius: '0.7vw'
    }
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      // display:'flex',
      //  flexDirection:'row',
      //  justifyContent:'space-evenly'
      display: 'grid',
      gridTemplateColumns: 'repeat(4,25%)',
      rowGap: '0',
      width: "".concat(width > 768 ? '40%' : '100%'),
      //  height:`${photoHeight}`,
      overflow: 'scroll' //  justifyContent:'space-evenly'

    }
  }, photos.text.map(function (image, index, array) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
      src: 'https://' + image,
      "class": activeIndex === index ? 'CartPickedImage' : 'CartNotPickedImage',
      style: {
        height: "".concat(smallImageHeight ? smallImageHeight : null)
      },
      onClick: pickAction(index)
    }));
  })));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PageDevices/Animation/AboutUsCSS.css
var AboutUsCSS = __webpack_require__(97793);
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/Animation/AboutUsCSS.css

      
      
      
      
      
      
      
      
      

var AboutUsCSS_options = {};

AboutUsCSS_options.styleTagTransform = (styleTagTransform_default());
AboutUsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      AboutUsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
AboutUsCSS_options.domAPI = (styleDomAPI_default());
AboutUsCSS_options.insertStyleElement = (insertStyleElement_default());

var AboutUsCSS_update = injectStylesIntoStyleTag_default()(AboutUsCSS/* default */.Z, AboutUsCSS_options);




       /* harmony default export */ const Animation_AboutUsCSS = (AboutUsCSS/* default */.Z && AboutUsCSS/* default.locals */.Z.locals ? AboutUsCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/Animation/AboutUs.js



var AboutUs = function AboutUs(_ref) {
  var text = _ref.text;
  // console.log('TEXT',text.text)
  return /*#__PURE__*/react.createElement("div", {
    "class": "WrapperAboutUs"
  }, (0,lib/* default */.ZP)(text));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PageDevices/Animation/yearanimationCSS.css
var yearanimationCSS = __webpack_require__(74255);
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/Animation/yearanimationCSS.css

      
      
      
      
      
      
      
      
      

var yearanimationCSS_options = {};

yearanimationCSS_options.styleTagTransform = (styleTagTransform_default());
yearanimationCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      yearanimationCSS_options.insert = insertBySelector_default().bind(null, "head");
    
yearanimationCSS_options.domAPI = (styleDomAPI_default());
yearanimationCSS_options.insertStyleElement = (insertStyleElement_default());

var yearanimationCSS_update = injectStylesIntoStyleTag_default()(yearanimationCSS/* default */.Z, yearanimationCSS_options);




       /* harmony default export */ const Animation_yearanimationCSS = (yearanimationCSS/* default */.Z && yearanimationCSS/* default.locals */.Z.locals ? yearanimationCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/Animation/yearanimation.js



var YearAnimation = function YearAnimation() {
  return /*#__PURE__*/react.createElement("div", {
    "class": "svgContainer"
  }, /*#__PURE__*/react.createElement("svg", {
    "class": "digit",
    height: "200",
    viewBox: "-30 -30 150 220",
    width: "100"
  }, " ", /*#__PURE__*/react.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    pathLength: "1",
    r: "50",
    stroke: "rgb(128, 115, 202)",
    "stroke-width": "20"
  }), " ", /*#__PURE__*/react.createElement("path", {
    "class": "path",
    d: "M0 50  C 0 0, 50 0, 50 0  C 100 0, 100 50, 100 50 L 0 200 L 200 200",
    fill: "none",
    pathlenght: "1",
    stroke: "rgb(128, 115, 202)",
    "stroke-width": "20"
  }, " "), " "), " ", /*#__PURE__*/react.createElement("svg", {
    "class": "digit",
    height: "200",
    viewBox: "-30 -30 150 220",
    width: "100"
  }, " ", /*#__PURE__*/react.createElement("circle", {
    cx: "50",
    cy: "150",
    fill: "none",
    pathLength: "1",
    r: "50",
    stroke: "rgb(89, 75, 172)",
    "stroke-dasharray": "1 1",
    "stroke-dashoffset": "0",
    "stroke-width": "20"
  }), " ", /*#__PURE__*/react.createElement("path", {
    "class": "path",
    d: "M 100 150 C 100 200, 50 200, 50 200 C 0 200, 0 150, 0 150 L 0 50 C 0 0, 50 0, 50 0 C 100 0, 100 50, 100 50 L 100 150",
    fill: "none",
    pathlenght: "1",
    stroke: "rgb(89, 75, 172)",
    "stroke-width": "20"
  }, " "), " "), /*#__PURE__*/react.createElement("svg", {
    "class": "digit",
    height: "200",
    viewBox: "-30 -30 150 220",
    width: "100"
  }, " ", /*#__PURE__*/react.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    pathLength: "1",
    r: "50",
    stroke: "rgb(57, 43, 139)",
    "stroke-dasharray": "1 1",
    "stroke-dashoffset": "0",
    "stroke-width": "20"
  }), " ", /*#__PURE__*/react.createElement("path", {
    "class": "path",
    d: "M0 50  C 0 0, 50 0, 50 0  C 100 0, 100 50, 100 50 L 0 200 L 200 200",
    fill: "none",
    pathlenght: "1",
    stroke: "rgb(57, 43, 139)",
    "stroke-width": "20"
  }, " "), " "), /*#__PURE__*/react.createElement("svg", {
    "class": "digit",
    height: "200",
    viewBox: "-30 -30 150 220",
    width: "100"
  }, " ", /*#__PURE__*/react.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    pathLength: "1",
    r: "50",
    stroke: "rgb(18, 9, 66)",
    "stroke-dasharray": "1 1",
    "stroke-dashoffset": "0",
    "stroke-width": "20"
  }), " ", /*#__PURE__*/react.createElement("path", {
    "class": "path",
    d: "M0 50 C 0 0 , 50 0, 50 0 C 100 0, 100 50, 100 50 L 0 200 L 200 200",
    fill: "none",
    pathlenght: "1",
    stroke: "rgb(18, 9, 66)",
    "stroke-width": "20"
  }, " "), " "));
};

/* harmony default export */ const yearanimation = (YearAnimation);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/PageComponents/MenuPageGeneratorCSS.css
var MenuPageGeneratorCSS = __webpack_require__(35179);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/MenuPageGeneratorCSS.css

      
      
      
      
      
      
      
      
      

var MenuPageGeneratorCSS_options = {};

MenuPageGeneratorCSS_options.styleTagTransform = (styleTagTransform_default());
MenuPageGeneratorCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      MenuPageGeneratorCSS_options.insert = insertBySelector_default().bind(null, "head");
    
MenuPageGeneratorCSS_options.domAPI = (styleDomAPI_default());
MenuPageGeneratorCSS_options.insertStyleElement = (insertStyleElement_default());

var MenuPageGeneratorCSS_update = injectStylesIntoStyleTag_default()(MenuPageGeneratorCSS/* default */.Z, MenuPageGeneratorCSS_options);




       /* harmony default export */ const PageComponents_MenuPageGeneratorCSS = (MenuPageGeneratorCSS/* default */.Z && MenuPageGeneratorCSS/* default.locals */.Z.locals ? MenuPageGeneratorCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/MenuPageGenerator.js










 // import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'











var PureContent = function PureContent() {
  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var search_data = ValidateQuery(location);

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; // console.log('LOCATION',location,search_data.id)
  // console.log('HISTORY',history)


  var purePage = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.purepage;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  var pages = ContentPages(locale);
  (0,react.useEffect)(function () {
    dispatch(getPurePage(search_data.id, locale));
  }, [search_data.id]);
  console.log('[PURE_PAGE]', purePage);

  if (!purePage) {
    return /*#__PURE__*/react.createElement("div", null, " Loading...");
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "purecontentPage"
  }, purePage && purePage.map(function (page) {
    if (page.content_name === "Title") {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_Helmet/* Helmet */.q, null, /*#__PURE__*/react.createElement("title", null, page.text), /*#__PURE__*/react.createElement("link", {
        rel: "shortcut icon",
        href: "../../Library/Images/ArkturDMClogoICO.ico"
      })), /*#__PURE__*/react.createElement("h2", null, page.text));
    }

    if (page.content_name === "Image") {
      if (search_data.id === '18') {
        return /*#__PURE__*/react.createElement(Slider_Slider, {
          slides: page.text
        });
      } else {
        return /*#__PURE__*/react.createElement(CartGallery, {
          photos: page,
          photoHeight: '55vh'
        });
      }
    }

    if (page.content_name === "Body") {
      if (search_data.id === '21') {
        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(yearanimation, null), messages && messages.map(function (item, index) {
          console.log("AAAAA", item);

          if (item.sitepage_region_id === 12) {
            return item.title.map(function (item1, index, array) {
              console.log('AAAA', item1);
              return /*#__PURE__*/react.createElement(ShowGallery, {
                innerText: item1.text,
                id: item.id
              });
            });
          }
        }));
      } else if (search_data.id === '1') {
        return /*#__PURE__*/react.createElement(AboutUs, {
          text: page.text
        });
      } else {
        return /*#__PURE__*/react.createElement("div", {
          style: {
            maxWidth: "".concat(width, "px"),
            overflow: 'hidden',
            order: '1',
            marginTop: '2vh'
          }
        }, (0,lib/* default */.ZP)(page.text));
      }
    }
  }));
};

var ShowGallery = function ShowGallery(_ref) {
  var innerText = _ref.innerText,
      id = _ref.id;
  // console.log('AAA', id)
  var location = (0,react_router/* useLocation */.TH)();

  var _useIntl2 = (0,useIntl/* default */.Z)(),
      locale = _useIntl2.locale;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useWindowWidthAndHei3 = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei4 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei3, 2),
      width = _useWindowWidthAndHei4[0],
      height = _useWindowWidthAndHei4[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      innerPage = _useState4[0],
      setInnerPage = _useState4[1];

  (0,react.useEffect)(function () {
    axios_default().get("https://hotels-ua.biz/interface/sitepagecontent?id=".concat(id, "&language=").concat(locale)).then(function (res) {
      setInnerPage(res.data);
    })["catch"](function (error) {
      setInnerPage(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);

  var MakeVisible = function MakeVisible() {
    setClicked(!clicked);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", {
    "class": clicked === false ? 'inner' : 'innerClicked',
    onClick: MakeVisible
  }, /*#__PURE__*/react.createElement(LocalizationNavLink, {
    to: {
      pathname: "/sitepages",
      search: "".concat(location.search)
    }
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: innerText
  }))), /*#__PURE__*/react.createElement("div", {
    "class": clicked === false ? 'galleryNotActive' : 'galleryActive'
  }, innerPage && innerPage.map(function (page) {
    if (page.content_name === "Image") {
      return /*#__PURE__*/react.createElement(CartGallery, {
        photos: page,
        photoHeight: '65vh'
      });
    }

    if (page.content_name === "Body") {
      return /*#__PURE__*/react.createElement("div", {
        style: {
          maxWidth: "".concat(width, "px"),
          overflow: 'hidden',
          order: '1'
        }
      }, (0,lib/* default */.ZP)(page.text));
    }
  })));
};

var MenuPageGenerator_NotFound = function NotFound() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", null, "Not Found"), /*#__PURE__*/react.createElement(yearanimation, null));
};
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/ResponsiveHeader/NavComponent.js

 // import { Link } from 'react-scroll';



 // import {icons} from '../../../Library/Icons/icons'








var NavComponent = function NavComponent(_ref) {
  var onClick = _ref.onClick,
      navClass = _ref.navClass,
      linkClassName = _ref.linkClassName,
      sitepage_type = _ref.sitepage_type;

  // console.log("NAV_sitepage_type",sitepage_type)
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var lang = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locale;
  });
  var pages = (0,es/* useSelector */.v9)(function (state) {
    return state.pages.pages;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(changeLang());
  }, []); // const pages = ContentPages(lang);

  (0,react.useEffect)(function () {
    dispatch(getPages(lang));
  }, [lang]);
  console.log('PAGES', pages);
  return /*#__PURE__*/react.createElement("div", {
    className: navClass
  }, /*#__PURE__*/react.createElement("ul", {
    "class": linkClassName
  }, messages.length > 0 ? messages.map(function (page) {
    if (sitepage_type.sitepage_type_id === page.sitepage_type_id && sitepage_type.sitepage_type_id !== '7') {
      return /*#__PURE__*/react.createElement("li", {
        key: page.id
      }, /*#__PURE__*/react.createElement("h2", null, /*#__PURE__*/react.createElement(LocalizationNavLink, {
        to: "/sitepages/?name=".concat(page.name, ",id=").concat(page.id),
        onClick: onClick
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: page.title.map(function (item1) {
          return item1.text;
        })
      }))));
    }
  }) : null));
}; // export const NavComponent = ({onClick, navClass, linkClassName,pages})=>{
//   return(
//   <nav className={navClass}>
//       <ul class={linkClassName}>
//           {
//           pages && pages.map((page)=>{
//             if(page.name.includes('MID')){	
//             return (
//             <li>
//                 <h2>
//                 <Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
//                                  state: {id: page.id}}}
//                                  onClick={onClick}>
//                                           {page.name.replace(/MID/g, " " )}
//                 </Link> 
//               </h2>
//              </li>
//              )
//             }
//           })
//           }
//       </ul>
//   </nav>
// )
// }
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/TopMenuComponents.js


 // import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'
//Call: +38 044 498 4880 / inquiry@arktur.ua / COVID-19 / ABOUT US / CONTACT US / SIGN IN / FOR GROUPS / LOGIN / TRANSLATE
///CITY HOTELS/ RESORT & HOTELIDAY DESTINATIONS / INFORMATION

var CONTACTUS = function CONTACTUS() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(es_Helmet/* Helmet */.q, null, /*#__PURE__*/react.createElement("title", null, "Contact Arktur DMC"), /*#__PURE__*/react.createElement("link", {
    rel: "shortcut icon",
    href: "../../Library/Images/ArkturDMClogoICO.ico"
  })), /*#__PURE__*/react.createElement("h2", null, " Our Contact details"));
};
var SIGNIN = function SIGNIN() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("title", null, "Arktur DMC Partners"), /*#__PURE__*/React.createElement("link", {
    rel: "shortcut icon",
    href: "../../Library/Images/ArkturDMClogoICO.ico"
  })), /*#__PURE__*/React.createElement("h2", null, "Sign In"));
};
var FORGROUPS = function FORGROUPS() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(es_Helmet/* Helmet */.q, null, /*#__PURE__*/react.createElement("title", null, "Arktur Groups"), /*#__PURE__*/react.createElement("link", {
    rel: "shortcut icon",
    href: ArkturDMClogoICO
  })), /*#__PURE__*/react.createElement("h2", null, "For Groups"));
};
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/MiddleMenuComponents.js


 // import Slider from '../../Front Page/slider/slider'
// import Search from './searchfront'

 // import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'

var HOTELS = function HOTELS() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(es_Helmet/* Helmet */.q, null, /*#__PURE__*/react.createElement("title", null, "Hotels in Ukraine"), /*#__PURE__*/react.createElement("link", {
    rel: "shortcut icon",
    href: "../../Library/Images/ArkturDMClogoICO.ico"
  })), /*#__PURE__*/react.createElement("h3", null, "Hotels"));
};
var SOCIAL = function SOCIAL() {
  return /*#__PURE__*/React.createElement("h2", null, " My Home Page");
};
var LOGO = function LOGO() {
  return /*#__PURE__*/React.createElement("h2", null, " My Home Page");
}; // export const NotFound = () => <h2>Not Found</h2>
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/Helmet/index.js







var Helmet_Helmet = function Helmet() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, "Helmet"), /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/",
    component: HomePage
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/about",
    component: PureContent
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/contact_us",
    component: CONTACTUS
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/hotels_in_ukraine",
    component: HOTELS
  })));
};

/* harmony default export */ const PageDevices_Helmet = (Helmet_Helmet);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/PageComponents/TopToursDetailsCSS.css
var TopToursDetailsCSS = __webpack_require__(67301);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/TopToursDetailsCSS.css

      
      
      
      
      
      
      
      
      

var TopToursDetailsCSS_options = {};

TopToursDetailsCSS_options.styleTagTransform = (styleTagTransform_default());
TopToursDetailsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      TopToursDetailsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
TopToursDetailsCSS_options.domAPI = (styleDomAPI_default());
TopToursDetailsCSS_options.insertStyleElement = (insertStyleElement_default());

var TopToursDetailsCSS_update = injectStylesIntoStyleTag_default()(TopToursDetailsCSS/* default */.Z, TopToursDetailsCSS_options);




       /* harmony default export */ const PageComponents_TopToursDetailsCSS = (TopToursDetailsCSS/* default */.Z && TopToursDetailsCSS/* default.locals */.Z.locals ? TopToursDetailsCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/TopToursDetails.js





 // import ReactHtmlParser from 'react-html-parser'











var TopToursDetails = function TopToursDetails(props) {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      ttDetails = _useState2[0],
      setTTDetails = _useState2[1];

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();
  var search_data = ValidateQuery(location);

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('Tour Details', location);
  console.log('Seach Details', search_data);
  (0,react.useEffect)(function () {
    axios_default().get("".concat("http://smartbooker.biz/", "interface/content?id=").concat(search_data.tour_id, "&language=").concat(locale)).then(function (res) {
      setTTDetails(res.data);
    })["catch"](function (error) {
      setTTDetails(undefined);
      console.log('[axios error] : ', error);
    });
  }, []);
  console.log('[ttDetails]', ttDetails);

  if (!ttDetails) {
    return /*#__PURE__*/react.createElement("div", null, " ", /*#__PURE__*/react.createElement(HomePage, null));
  }

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(SearchFront_Search, null), /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width > 1000 ? 'TopToursDetailsBlock' : 'TopToursDetailsBlockSmallScreen'),
    style: {
      width: "".concat(width * 0.9, "px")
    }
  }, ttDetails && ttDetails.map(function (item) {
    if (item.content_name === "Image") {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
        style: {
          color: '#102D69',
          fontFamily: "Arial",
          fontSize: '30px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '4vh'
        }
      }, item.contract_name), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(CartGallery, {
        photos: item,
        photoHeight: '60vh' // photoWidth={'80%'}
        ,
        smallImageHeight: '15vh'
      })));
    } else if (item.content_name === 'Body') {
      return /*#__PURE__*/react.createElement("div", null, (0,lib/* default */.ZP)(item.text));
    }
  })));
};
;// CONCATENATED MODULE: ./src/Components/Library/StaticJsonData/ClientTitles.js
var ClientTitles = ['Mr', 'Mrs', 'Ms', 'Dr'];
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/BookingForm/OfflineSummary.css
var OfflineSummary = __webpack_require__(56042);
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/OfflineSummary.css

      
      
      
      
      
      
      
      
      

var OfflineSummary_options = {};

OfflineSummary_options.styleTagTransform = (styleTagTransform_default());
OfflineSummary_options.setAttributes = (setAttributesWithoutAttributes_default());

      OfflineSummary_options.insert = insertBySelector_default().bind(null, "head");
    
OfflineSummary_options.domAPI = (styleDomAPI_default());
OfflineSummary_options.insertStyleElement = (insertStyleElement_default());

var OfflineSummary_update = injectStylesIntoStyleTag_default()(OfflineSummary/* default */.Z, OfflineSummary_options);




       /* harmony default export */ const BookingForm_OfflineSummary = (OfflineSummary/* default */.Z && OfflineSummary/* default.locals */.Z.locals ? OfflineSummary/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/OfflineSummary.js





var OfflineSummary_OfflineSummary = function OfflineSummary(_ref) {
  var wait = _ref.wait;

  var _useState = (0,react.useState)("Hidden"),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  (0,react.useEffect)(function () {
    setTimeout(Show, wait);
  }, []);

  var Show = function Show() {
    setHidden("");
  };

  return /*#__PURE__*/react.createElement("h2", {
    className: hidden
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 19) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  }));
};
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/OnlineSummary.js





var OnlineSummary = function OnlineSummary(_ref) {
  var name = _ref.name,
      surname = _ref.surname,
      phone = _ref.phone,
      email = _ref.email,
      app_service_id = _ref.app_service_id;

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      ModifyClientsRQ_Add = _useState2[0],
      setModifyClientsRQ_Add = _useState2[1];

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": currentUser.user_id,
      "action": "ModifyClientsRQ",
      "data": {
        "service_id": app_service_id,
        "service_number": 1,
        "clients": [{
          "operation": "add",
          "client_type": "buyer",
          "site_client_id": 1,
          "name": name,
          "surname": surname,
          "phone": phone,
          "email": email
        }, {
          "operation": "add",
          "client_type": "client",
          "site_client_id": 2,
          "name": name,
          "surname": surname,
          "phone": phone,
          "email": email
        }]
      }
    };
    axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })).then(function (response) {
      return setModifyClientsRQ_Add(response.data);
    });
  }, []);
  console.log('ModifyClientsRQ_Add', ModifyClientsRQ_Add);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, "All ok"), /*#__PURE__*/react.createElement("div", null, ModifyClientsRQ_Add.length > 0 ? ModifyClientsRQ_Add.map(function (item) {
    return /*#__PURE__*/react.createElement("h4", null, item.action);
  }) : /*#__PURE__*/react.createElement(OfflineSummary_OfflineSummary, {
    wait: 2000
  })));
};
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/IncompleteSendEmail.js


 // import {OfflineSummary} from './OfflineSummary'

var IncompleteSendEmail = function IncompleteSendEmail(_ref) {
  var name = _ref.name,
      surname = _ref.surname,
      phone = _ref.phone,
      email = _ref.email,
      app_service_id = _ref.app_service_id,
      cart = _ref.cart;
  // TODO: Передать сюда объект cart
  console.log('IncompleteSendEmail-cart: ', cart);

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user; // const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([]);


  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" :1426,
      "user_id": currentUser.user_id,
      "action": "ModifyClientsRQ",
      "data": {
        "service_id": app_service_id,
        "service_number": 1,
        "clients": [{
          "operation": "add",
          "client_type": "buyer",
          "site_client_id": 1,
          "name": name,
          "surname": surname,
          "phone": phone,
          "email": email
        } // {
        //     "operation" : "add",
        //     "client_type" : "client",
        //     "site_client_id" : 2,
        //     "name" : "Gogel",
        //     "surname" : "Mogel",
        //     "phone" : "+38 (044) 490 7114",
        //     "email" : "atest@arktur.ua"
        // },
        ],
        "cart": cart
      }
    };
    axios_default().post('http://arkturdmc.com.ua:8011/', JSON.stringify({
      ActionRQ: ActionRQ
    })).then(function (response) {
      /*console.log('RESPONSE', response)
      setSendCart(response.data[0])*/
    })["catch"](function (error) {
      // setSendCart(undefined)
      console.log('[axios error]: ', error);
    });
  }, []); // console.log('ModifyClientsRQ_Add',ModifyClientsRQ_Add)

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, "Email sent."));
};
// EXTERNAL MODULE: ./node_modules/react-liqpay/dist/index.es.js
var index_es = __webpack_require__(91322);
;// CONCATENATED MODULE: ./src/Components/Library/LiqPay/Pay.js






console.log('[file]', 'src/Components/Library/LiqPay/Example.js');
var Pay = function Pay(_ref) {
  var service_id = _ref.service_id,
      smart_order_id = _ref.smart_order_id,
      cart = _ref.cart,
      client = _ref.client,
      service_number = _ref.service_number;
  console.log('[file]:export const Pay', 'src/Components/Library/LiqPay/Pay.js');
  console.log('BUTTON_CART', cart); // console.log('server_url: ', process.env.REACT_APP_URL);
  //ВОТ ДОБАВИЛА ИНФО О ЛОКАЛИ . можешь включить параметр locale в запрос ниже

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  console.log('locale: ', locale);

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  var location = (0,react_router/* useLocation */.TH)();
  var search_data = ValidateQuery(location);

  var CryptoJS = __webpack_require__(81354); // TODO: Взять откуда-то site_order_id и site_service_id


  var orderData = {
    "username": "Serodynringa",
    "password": "%tmMJZbABm6cB@tY",
    // "user_id" :1426,
    "user_id": currentUser.user_id,
    "refpartner": search_data.refpartner ? search_data.refpartner : null,
    "language": locale,
    "action": "GetPaymentInfoRQ",
    "data": {
      "site_order_id": 1,
      // index of the order in the site (by default = 1) - в БД нет
      "smart_reference": smart_order_id,
      // twid_reference in Smart - for control
      "site_service_id": 1,
      // index of the service in the site
      "smart_service_id": service_id,
      // booking_entity.id in Smart
      "smart_service_number": service_number // На будущее, когда в заказе будет разрешено несколько сервисов - booking_entity.ref_serv_smart

    }
  }; // Хотел зашиврофать state и восстановить его позже в Redux

  /* const { state } = useSelector((state) => state);
     // console.log('state: ', state);
      const cipherstate = CryptoJS.AES.encrypt(JSON.stringify(state), process.env.REACT_APP_PRIVATE_KEY).toString();
     localStorage.setItem('state', cipherstate); */

  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(orderData), "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby").toString();
  localStorage.setItem('orderData', ciphertext);
  localStorage.setItem('service_id', service_id);
  localStorage.setItem('smart_order_id', smart_order_id);
  var payInfo = {
    // amount: 1,
    // currency: 'UAH',
    // title: 'PAY'
    client: client,
    start: cart.start,
    service: cart.htlName.replace('%20', ' '),
    adults: cart.adults,
    children: cart.children,
    amount: cart.amount,
    units: cart.numberofunits,
    currency: 'UAH'
  }; // Описание платежа, которое выводится на странице ввода деталей платёжной карты
  // const paymentDescription = () => `title: ${payInfo.title}
  // amount: ${payInfo.amount}
  // currency: ${payInfo.currency}`;

  var paymentDescription = function paymentDescription() {
    return "client: ".concat(payInfo.client, "\n    start: ").concat(payInfo.start, "\n    service: ").concat(payInfo.service, "\n    adults: ").concat(payInfo.adults, "\n    children: ").concat(payInfo.children, "\n    amount: ").concat(payInfo.amount, "\n    units:").concat(payInfo.units, "\n    currency: ").concat(payInfo.currency);
  };

  var ButtonComponent = function ButtonComponent() {
    return /*#__PURE__*/react.createElement("button", {
      style: {
        backgroundColor: '#337ab7',
        color: '#fff',
        borderColor: '#2e6da4',
        border: '1px solid transparent',
        borderRadius: '4px',
        padding: '6px 12px',
        cursor: 'pointer'
      }
    }, "Proceed to payment");
  };

  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react.createElement(index_es/* LiqPayPay */.w, {
    publicKey: "sandbox_i31894566253",
    privateKey: "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby" // TODO: create Component to load description dynamically
    ,
    description: paymentDescription()
    /*description={`${payInfo.title} ${payInfo.amount} ${payInfo.currency}`}*/

    /*description={`Payment for product
                  Payment for product
                  Payment for product`}*/
    // TODO: send booking_entity_id
    ,
    orderId: smart_order_id,
    result_url: "".concat("http://localhost:3000", "/").concat(locale, "/payment_result"),
    server_url: "http://smartbooker.biz/interface/masatable/",
    product_description: "Online courses",
    product_description_my: "Online courses my",
    style: {
      margin: "8px"
    },
    extra: [/*#__PURE__*/react.createElement(ButtonComponent, {
      key: "1"
    })],
    amount: payInfo.amount,
    currency: payInfo.currency,
    language: locale
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Notifications/SaveReference.js


var SaveReference = function SaveReference(_ref) {
  var customer_reference = _ref.customer_reference;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, "Hi there!"), /*#__PURE__*/react.createElement("div", null, "Please remember your Customer Reference: ", customer_reference));
};

/* harmony default export */ const Notifications_SaveReference = (SaveReference);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/BookingForm/ConfirmButton.css
var ConfirmButton = __webpack_require__(52009);
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/ConfirmButton.css

      
      
      
      
      
      
      
      
      

var ConfirmButton_options = {};

ConfirmButton_options.styleTagTransform = (styleTagTransform_default());
ConfirmButton_options.setAttributes = (setAttributesWithoutAttributes_default());

      ConfirmButton_options.insert = insertBySelector_default().bind(null, "head");
    
ConfirmButton_options.domAPI = (styleDomAPI_default());
ConfirmButton_options.insertStyleElement = (insertStyleElement_default());

var ConfirmButton_update = injectStylesIntoStyleTag_default()(ConfirmButton/* default */.Z, ConfirmButton_options);




       /* harmony default export */ const BookingForm_ConfirmButton = (ConfirmButton/* default */.Z && ConfirmButton/* default.locals */.Z.locals ? ConfirmButton/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/ConfirmButton.js










var ConfirmButton_ConfirmButton = function ConfirmButton(_ref) {
  var AddContacts = _ref.AddContacts,
      name = _ref.name,
      surname = _ref.surname,
      phone = _ref.phone,
      email = _ref.email,
      app_service_id = _ref.app_service_id,
      smart_order_id = _ref.smart_order_id,
      customer_reference = _ref.customer_reference,
      clicked = _ref.clicked,
      cart = _ref.cart,
      service_number = _ref.service_number;
  console.log('CONFIRMBUTTON_CART', cart);
  console.log('smart_order_id', smart_order_id);

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    "class": clicked === false ? 'SubmitButton' : 'NonActiveSubmit',
    onClick: AddContacts
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 17) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })), clicked === true && smart_order_id ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(OnlineSummary, {
    name: name,
    surname: surname,
    phone: phone,
    email: email,
    app_service_id: app_service_id
  }), /*#__PURE__*/react.createElement(Notifications_SaveReference, {
    customer_reference: customer_reference
  }), /*#__PURE__*/react.createElement(Pay, {
    service_id: app_service_id,
    smart_order_id: smart_order_id,
    service_number: service_number,
    cart: cart,
    client: name + ' ' + surname
  })) : clicked === true && !smart_order_id ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(OfflineSummary_OfflineSummary, {
    wait: 2000
  }), /*#__PURE__*/react.createElement(IncompleteSendEmail, {
    name: name,
    surname: surname,
    phone: phone,
    email: email,
    app_service_id: app_service_id,
    cart: cart
  })) : null);
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/BookingForm/BookingForm.css
var BookingForm = __webpack_require__(39477);
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/BookingForm.css

      
      
      
      
      
      
      
      
      

var BookingForm_options = {};

BookingForm_options.styleTagTransform = (styleTagTransform_default());
BookingForm_options.setAttributes = (setAttributesWithoutAttributes_default());

      BookingForm_options.insert = insertBySelector_default().bind(null, "head");
    
BookingForm_options.domAPI = (styleDomAPI_default());
BookingForm_options.insertStyleElement = (insertStyleElement_default());

var BookingForm_update = injectStylesIntoStyleTag_default()(BookingForm/* default */.Z, BookingForm_options);




       /* harmony default export */ const BookingForm_BookingForm = (BookingForm/* default */.Z && BookingForm/* default.locals */.Z.locals ? BookingForm/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/ClientDetails.js


 // import '../PageComponents/ResponsiveHeader/header.css'







 // import {SwitcherItem} from './Switcher'
// import {Switcher} from './Switcher'

var ClientDetails = function ClientDetails(_ref) {
  var cart = _ref.cart;

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  console.log('currentUser: ClientDetails.js', currentUser);

  var _useSelector2 = (0,es/* useSelector */.v9)(function (state) {
    return state.promocode;
  }),
      promocode = _useSelector2.promocode;

  console.log('promocode:', promocode);

  var _useState = (0,react.useState)([{}]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      sendCart = _useState2[0],
      setSendCart = _useState2[1]; // const [userData, setUserData] = useState(null);


  var _useState3 = (0,react.useState)(''),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      nameInput = _useState4[0],
      setNameInput = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      surnameInput = _useState6[0],
      setSurnameInput = _useState6[1];

  var _useState7 = (0,react.useState)(''),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      phoneInput = _useState8[0],
      setPhoneInput = _useState8[1];

  var _useState9 = (0,react.useState)(''),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      emailInput = _useState10[0],
      setEmailInput = _useState10[1];

  var _useState11 = (0,react.useState)(''),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      bookingId = _useState12[0],
      setBookingId = _useState12[1]; // const [options, setMyOption] = useState('');


  var _useState13 = (0,react.useState)(''),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      align = _useState14[0],
      setAlign = _useState14[1];

  var _useState15 = (0,react.useState)({}),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      list = _useState16[0],
      setList = _useState16[1];

  var _useState17 = (0,react.useState)(false),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      clicked = _useState18[0],
      setClicked = _useState18[1];

  var _useState19 = (0,react.useState)(0),
      _useState20 = (0,slicedToArray/* default */.Z)(_useState19, 2),
      bookerTravels = _useState20[0],
      setbookerTravels = _useState20[1];

  var responseErrorIndex = (0,react.useRef)(0);

  var _useState21 = (0,react.useState)(responseErrorIndex),
      _useState22 = (0,slicedToArray/* default */.Z)(_useState21, 2),
      responseError = _useState22[0],
      setResponseError = _useState22[1]; // const [testHook, setTestHook] = useState([{}])
  // const [ModifyClientsRQ_Add, setModifyClientsRQ_Add] = useState([{}]);
  // console.log('KATE',cart.service_type_id, cart.start,cart.end,cart.contract_id,cart.tariff_id,cart.room_id,cart.service_type_id,cart.hotel_id,cart.adults,cart.children,cart.amount)


  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  (0,react.useEffect)(function () {
    var ActionRQ = {
      "username": "Serodynringa",
      "password": "%tmMJZbABm6cB@tY",
      // "user_id" : currentUser ? currentUser.user_id : 1426,
      // "user_id" : 1426,
      "user_id": currentUser.user_id,
      "action": "AddToCartRQ",
      "data": {
        "bookings": [{
          "service_type_id": cart.service_type_id,
          "start": cart.start,
          "end": cart.end ? cart.end : null,
          "contract_id": cart.contract_id,
          //former tour_id
          "tariff_id": cart.tariff_id,
          //former tour_tariff_id
          "room_id": cart.room_id,
          //former tour_room_id
          "numberofunits": cart.service_type_id === parseInt(1) ? cart.numberofunits : parseInt(1),
          "hotel_id": cart.hotel_id,
          "hotel_room_id": cart.service_type_id === parseInt(1) ? cart.hotel_room_id : null,
          //only for package tour
          "hotel_rate_id": cart.service_type_id === parseInt(1) ? cart.hotel_rate_id : null,
          // only for package tours
          "calculation_data": {
            "adults": cart.adults,
            "children": cart.children,
            "amount": cart.amount
          }
        }]
      }
    };
    axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })).then(function (response) {
      console.log('RESPONSE ClientDetails.js', response);

      if (response.data[0].errors[0] === 'Duplicate entry') {
        responseErrorIndex.current += 1;
        setResponseError(responseErrorIndex.current);
        console.log('RESPONSE responseErrorIndex', responseError);
      }

      setSendCart(response.data[0]);
    })["catch"](function (error) {
      setSendCart(undefined);
      console.log('[axios error]: ', error);
    });
  }, [responseError]); // (Долбим) Посылаем запросы, пока Твид не выдаст twid_reference

  var app_service_id = new Object();

  if (sendCart) {
    for (var key in sendCart.data) {
      app_service_id = sendCart.data[key];
    }
  }
  /* useEffect(() => {
      const ActionRQ = {
          "username":"Serodynringa",
          "password":"%tmMJZbABm6cB@tY",
          "user_id" : currentUser.user_id,
          "refpartner": promocode !== "" ? promocode : 0,
          "action":"GetUserInfoRQ"
      };
      if (currentUser.user_id !== 1426){
          axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
              .then(response => {
                  console.log('RESPONSE', response)
                  setUserData(response.data[0].data)
                  setNameInput(response.data[0].data['name'])
                  setSurnameInput(response.data[0].data['surname'])
                  setEmailInput(response.data[0].data['email'])
              })
              .catch(error =>{
                  setUserData(undefined)
                  console.log('[axios error]: ', error)
              });
      }
  }, []);
   console.log('userData', userData); */
  // TODO: Пока нету поля currentUser.phone


  (0,react.useEffect)(function () {
    if (currentUser.user_id !== 1426) {
      setNameInput(currentUser.name);
      setSurnameInput(currentUser.surname);
      setEmailInput(currentUser.email);
    }
  }, []); // if( !sendCart){
  //     return <div> Loading...</div>
  // }

  console.log('SENDCART', sendCart);
  console.log('app_service_id', app_service_id); // console.log('NEWARRAY', app_service_id.service_id)

  var bookerTravelsChoice = function bookerTravelsChoice(e) {
    console.log('radio checked', e.target.value);
    setbookerTravels(e.target.value);
  }; // const changeHandler = ( me ) => _ => {
  //      setAlign(me);
  //     }


  function NameInputFunc(e) {
    console.log(e.target.value);
    return setNameInput(e.target.value);
  }

  function SurnameInputFunc(e) {
    console.log(e.target.value);
    return setSurnameInput(e.target.value);
  }

  function PhoneInputFunc(e) {
    console.log(e.target.value);
    return setPhoneInput(e.target.value);
  }

  function EmailInputFunc(e) {
    console.log(e.target.value);
    return setEmailInput(e.target.value);
  } // function changeOption(e){
  //   console.log(e.target.value)
  //   return setMyOption(e.target.value)
  // }


  var onSubmit = function onSubmit(e) {
    list ? setClicked(true) : setClicked(false);
    e.preventDefault();
  };

  var AddContacts = function AddContacts() {
    var newList = {
      ready: true,
      name: nameInput,
      surname: surnameInput,
      phone: phoneInput,
      email: emailInput
    };
    setList(newList); // if(!ModifyClientsRQ_Add){
    //     history.push('\offlineSummary')
    // }
  };

  return /*#__PURE__*/react.createElement("form", {
    className: "".concat(width > 1000 ? 'myForm' : 'myFormSmallScreen'),
    onSubmit: onSubmit
  }, /*#__PURE__*/react.createElement("div", {
    "class": "InputBlock"
  }, /*#__PURE__*/react.createElement("label", {
    "class": "FormLabel"
  }, 'Lead Client Details'), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("select", {
    style: {
      marginRight: '0.5vw',
      width: '10%'
    }
  }, ClientTitles && ClientTitles.map(function (item) {
    return /*#__PURE__*/react.createElement("option", null, item);
  })), /*#__PURE__*/react.createElement("input", {
    type: 'text',
    value: nameInput,
    onChange: NameInputFunc,
    placeholder: "Name",
    maxLength: "50",
    style: {
      width: '45%',
      marginRight: '0.5vw'
    },
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: 'text',
    value: surnameInput,
    onChange: SurnameInputFunc,
    placeholder: "Surname",
    maxLength: "50",
    style: {
      width: '45%'
    },
    required: true
  }))), /*#__PURE__*/react.createElement("div", {
    "class": "InputBlock"
  }, /*#__PURE__*/react.createElement("label", {
    "class": "FormLabel",
    "for": "phone"
  }, 'Telephone Number:'), /*#__PURE__*/react.createElement("input", {
    type: "tel",
    value: phoneInput,
    onChange: PhoneInputFunc,
    placeholder: "+380444907137",
    required: true,
    pattern: "^(\\+[0-9]{10}|\\+[0-9]{12})$"
  })), /*#__PURE__*/react.createElement("div", {
    "class": "InputBlock"
  }, /*#__PURE__*/react.createElement("label", {
    "class": "FormLabel"
  }, 'E-mail Address:'), /*#__PURE__*/react.createElement("input", {
    type: 'email',
    value: emailInput,
    onChange: EmailInputFunc,
    placeholder: "Enter your ".concat('Email Address'),
    required: true
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: '3vh',
      width: '80%'
    }
  }, /*#__PURE__*/react.createElement("label", {
    "class": "FormLabel"
  }, "Do you book for somebody else?"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(es_radio/* default.Group */.ZP.Group, {
    onChange: bookerTravelsChoice,
    value: bookerTravels,
    className: "RadioForm"
  }, /*#__PURE__*/react.createElement(es_radio/* default */.ZP, {
    style: {
      color: '#102D69',
      fontWeight: 'bold'
    },
    value: 1,
    key: 1
  }, "Yes"), /*#__PURE__*/react.createElement(es_radio/* default */.ZP, {
    style: {
      color: '#102D69',
      fontWeight: 'bold'
    },
    value: 0,
    key: 0
  }, "No")))), /*#__PURE__*/react.createElement(react.Fragment, null, bookerTravels === 1 ? /*#__PURE__*/react.createElement("div", {
    "class": "InputBlock"
  }, /*#__PURE__*/react.createElement("label", {
    "class": "FormLabel"
  }, 'Traveller Name Details'), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("select", {
    style: {
      marginRight: '0.5vw',
      width: '10%'
    }
  }, ClientTitles && ClientTitles.map(function (item) {
    return /*#__PURE__*/react.createElement("option", null, item);
  })), /*#__PURE__*/react.createElement("input", {
    type: 'text',
    value: nameInput,
    onChange: NameInputFunc,
    placeholder: "Name",
    maxLength: "50",
    style: {
      width: "45%",
      marginRight: '0.5vw'
    },
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: 'text',
    value: surnameInput,
    onChange: SurnameInputFunc,
    placeholder: "Surname",
    maxLength: "50",
    style: {
      width: "45%"
    },
    required: true
  }))) : null), /*#__PURE__*/react.createElement(ConfirmButton_ConfirmButton, {
    name: nameInput,
    surname: surnameInput,
    phone: phoneInput,
    email: emailInput,
    AddContacts: AddContacts,
    app_service_id: app_service_id.service_id // smart_order_id ={app_service_id.booking_id}
    ,
    smart_order_id: app_service_id.smart_reference,
    customer_reference: app_service_id.customer_reference,
    clicked: clicked,
    cart: cart,
    service_number: app_service_id.service_number
  }));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PageDevices/CartGallery/CartGalleryShortVersionCSS.css
var CartGalleryShortVersionCSS = __webpack_require__(86930);
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/CartGallery/CartGalleryShortVersionCSS.css

      
      
      
      
      
      
      
      
      

var CartGalleryShortVersionCSS_options = {};

CartGalleryShortVersionCSS_options.styleTagTransform = (styleTagTransform_default());
CartGalleryShortVersionCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      CartGalleryShortVersionCSS_options.insert = insertBySelector_default().bind(null, "head");
    
CartGalleryShortVersionCSS_options.domAPI = (styleDomAPI_default());
CartGalleryShortVersionCSS_options.insertStyleElement = (insertStyleElement_default());

var CartGalleryShortVersionCSS_update = injectStylesIntoStyleTag_default()(CartGalleryShortVersionCSS/* default */.Z, CartGalleryShortVersionCSS_options);




       /* harmony default export */ const CartGallery_CartGalleryShortVersionCSS = (CartGalleryShortVersionCSS/* default */.Z && CartGalleryShortVersionCSS/* default.locals */.Z.locals ? CartGalleryShortVersionCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/CartGallery/CartGalleryShortVersion.js

 // import axios from "axios"



 // import ReactHtmlParser from 'react-html-parser'


var CartGalleryShortVersion = function CartGalleryShortVersion(_ref) {
  var photos = _ref.photos;

  var _useState = (0,react.useState)("https://".concat(photos.text[0])),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      picked = _useState2[0],
      setPicked = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var pickAction = function pickAction(index) {
    return function (e) {
      setPicked(e.target.getAttribute('src'));
      setActiveIndex(index);
      console.log('[PICKED]:', e.target.getAttribute('src'));
    };
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: picked,
    style: {
      padding: '5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      height: '45vh',
      borderRadius: '0.7vw'
    }
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row' //  justifyContent:'space-evenly'
      // display:'grid',
      // gridTemplateColumns:'repeat(4,25%)'

    }
  }, photos.text.map(function (image, index, array) {
    return /*#__PURE__*/react.createElement("div", null, index > 1 && index <= 5 ? /*#__PURE__*/react.createElement("img", {
      src: 'https://' + image,
      "class": activeIndex === index ? 'PickedImage' : 'NotPickedImage',
      onClick: pickAction(index)
    }) : null);
  })));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/BookingForm/CartDetails.css
var CartDetails = __webpack_require__(37897);
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/CartDetails.css

      
      
      
      
      
      
      
      
      

var CartDetails_options = {};

CartDetails_options.styleTagTransform = (styleTagTransform_default());
CartDetails_options.setAttributes = (setAttributesWithoutAttributes_default());

      CartDetails_options.insert = insertBySelector_default().bind(null, "head");
    
CartDetails_options.domAPI = (styleDomAPI_default());
CartDetails_options.insertStyleElement = (insertStyleElement_default());

var CartDetails_update = injectStylesIntoStyleTag_default()(CartDetails/* default */.Z, CartDetails_options);




       /* harmony default export */ const BookingForm_CartDetails = (CartDetails/* default */.Z && CartDetails/* default.locals */.Z.locals ? CartDetails/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/CartDetails.js












var CartDetails_CartDetails = function CartDetails(_ref) {
  var cart = _ref.cart,
      cartClass = _ref.cartClass;
  console.log('CART', cart);
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages; // const [sendCart, setSendCart] = useState([]);
  // const [tourContent, setTourContent] = useState([]);
  // const dispatch = useDispatch();
  // const cartContent = useSelector(state => state.content.content)
  //     useEffect ( () => {
  //     dispatch (getContent (cart.tour_id));
  //   }, [])
  // console.log('[CARTCONTENT]',cartContent)


  (0,react.useEffect)(function () {
    dispatch(getHotelContent(cart.hotel_id, locale));
  }, []);
  (0,react.useEffect)(function () {
    dispatch(getContent(cart.contract_id, locale));
  }, []);
  var hotelcontents = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelcontent.hotelcontent;
  });
  var tourcontents = (0,es/* useSelector */.v9)(function (state) {
    return state.content.content;
  });

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('CARTSERVICE', cart.service_type_id);
  var content = cart.service_type_id === 11 ? tourcontents : hotelcontents;
  console.log('CONTENT', content); // useEffect ( () => {
  //     axios.get(`${process.env.REACT_APP_SMART_URL}interface/content?id=${cart.contract_id}&language=en`) //former cart.tour_id
  //       .then( res => {
  //         setTourContent(res.data)
  //         })
  //     .catch( error => {
  //         setTourContent(undefined)
  //       console.log( '[axios error] : ' , error)
  //        });
  //    }, []);
  //    console.log('[BRIEFCONTENT]',tourContent)

  return /*#__PURE__*/react.createElement("div", {
    "class": "".concat(cartClass ? cartClass : width > 1000 ? 'CartDetails' : 'CartDetailsSmallScreen')
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react.createElement("h2", {
    style: {
      color: '#003057',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      order: '-2'
    }
  }, "Your Booking Details"), content.length > 0 ? content.map(function (item) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", {
      style: {
        color: '#003057',
        fontSize: '22px',
        textAlign: 'center',
        order: '-1'
      }
    }, item.content_name === "Title" ? item.text : null), /*#__PURE__*/react.createElement("div", {
      style: {
        order: '0'
      }
    }, item.content_name === "Image" ? /*#__PURE__*/react.createElement(CartGalleryShortVersion, {
      photos: item
    }) : null), /*#__PURE__*/react.createElement("div", {
      style: {
        order: '1',
        display: 'flex',
        flexDirection: 'column'
      }
    }, item.content_name === "Summary" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h4", null, "Tour Summary"), /*#__PURE__*/react.createElement("div", {
      style: {
        textAlign: 'justify',
        padding: '0.5vh'
      }
    }, (0,lib/* default */.ZP)(item.text))) : null), /*#__PURE__*/react.createElement("div", {
      style: {
        order: '2',
        display: 'flex',
        flexDirection: 'column'
      }
    }, item.content_name === "Inclusion" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h4", null, "Tour Inclusions"), /*#__PURE__*/react.createElement("div", {
      style: {
        textAlign: 'justify',
        padding: '0.5vh'
      }
    }, (0,lib/* default */.ZP)(item.text))) : null));
  }) : /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      left: '40%',
      transform: 'translate(0%, -50%)',
      margin: '0'
    }
  }, /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
    loadingMessageClass: "RateLoading"
  }))), /*#__PURE__*/react.createElement("h4", null, "Rate Details"), /*#__PURE__*/react.createElement("div", {
    "class": "MainRateDetails"
  }, /*#__PURE__*/react.createElement("h5", null, "Tour Start Date"), /*#__PURE__*/react.createElement("div", null, cart.start), /*#__PURE__*/react.createElement("h5", null, "Accommodation at Hotel"), /*#__PURE__*/react.createElement("div", null, cart.htlName.replace('%20', ' ')), /*#__PURE__*/react.createElement("h5", null, "Booked for"), /*#__PURE__*/react.createElement("div", null), /*#__PURE__*/react.createElement("h5", null, "Adults"), /*#__PURE__*/react.createElement("div", null, cart.adults), /*#__PURE__*/react.createElement("h5", null, "Children"), /*#__PURE__*/react.createElement("div", null, cart.children), /*#__PURE__*/react.createElement("h5", null, "Infants"), /*#__PURE__*/react.createElement("div", null, cart.infants > 0 ? cart.infants : 0), /*#__PURE__*/react.createElement("h5", null, "Total Cost of the Booking"), /*#__PURE__*/react.createElement("div", null, cart.amount), /*#__PURE__*/react.createElement("h5", null, "Additional details"), /*#__PURE__*/react.createElement("div", {
    "class": "TaxDetails"
  }, "VAT is included. Hotel City Tax , if applicable, is NOT included and must be paid at the hotel directly")));
};
;// CONCATENATED MODULE: ./src/Components/Pages/BookingForm/BookingForm.js

// import { Divider } from 'antd'









moment_default().locale('en');
var BookingForm_BookingForm_BookingForm = function BookingForm(props) {
  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)(); // console.log('HISTORY',history)
  // console.log('LOCATION', location.state)

  var search_data = ValidateQuery(location);
  console.log('GUEST ITEM LOCATION', "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby");
  console.log('location: ', location);
  var lastLocation = location.pathname + location.search;
  localStorage.setItem('lastLocation', lastLocation);
  console.log('lastLocation: ', lastLocation);

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var CryptoJS = __webpack_require__(81354);

  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(search_data), "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby").toString();
  localStorage.setItem('search_data', ciphertext);
  console.log('ciphertext', ciphertext);
  var date_difference = moment_default()(search_data.start).diff(moment_default()(moment_default()().format('YYYY-MM-DD')), 'days');
  var canx_deadline_date = moment_default()(search_data.start).subtract(7, 'days').calendar();
  console.log('DATE_DIFFERENCE', date_difference);
  return /*#__PURE__*/react.createElement("div", {
    "class": "FormWrapper"
  }, /*#__PURE__*/react.createElement("h2", null, messages.map(function (item) {
    if (item.sitepage_region_id === 6 && item.sitepage_type_id === 21) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })), /*#__PURE__*/react.createElement("h3", {
    "class": "HeadPolicies"
  }, /*#__PURE__*/react.createElement("span", null, date_difference < 7 ? "Your booking is for arrivals in less then 7 days. In case of cancellation, the fee will amount to 100% of the reservaton cost" : "Free cancellation before 12:00 pm on ".concat(moment_default()(canx_deadline_date).format('YYYY-MM-DD'), " (E. Europe Standard Time).You can change or cancel this stay for a full refund if plans change. Because flexibility matters."))), /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width > 1000 ? 'RegWrapper' : 'RegWrapperSmallScreen')
  }, /*#__PURE__*/react.createElement(ClientDetails, {
    cart: search_data
  }), /*#__PURE__*/react.createElement(CartDetails_CartDetails, {
    cart: search_data
  })));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/HotelsUkraineTestComponents/hotels.css
var hotels = __webpack_require__(47620);
;// CONCATENATED MODULE: ./src/Components/Library/HotelsUkraineTestComponents/hotels.css

      
      
      
      
      
      
      
      
      

var hotels_options = {};

hotels_options.styleTagTransform = (styleTagTransform_default());
hotels_options.setAttributes = (setAttributesWithoutAttributes_default());

      hotels_options.insert = insertBySelector_default().bind(null, "head");
    
hotels_options.domAPI = (styleDomAPI_default());
hotels_options.insertStyleElement = (insertStyleElement_default());

var hotels_update = injectStylesIntoStyleTag_default()(hotels/* default */.Z, hotels_options);




       /* harmony default export */ const HotelsUkraineTestComponents_hotels = (hotels/* default */.Z && hotels/* default.locals */.Z.locals ? hotels/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/HotelPhotoGallery/HotelPhotosContent.js


var HotelPhotosContent_templateObject;



var HotelPhotosContent_GalleryContent = emotion_styled_browser_esm/* default.div */.Z.div(HotelPhotosContent_templateObject || (HotelPhotosContent_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n    transform: translateX(-", "px); \n    height: 100%; \n    width: ", "px; \n    display: flex; \n"])), function (props) {
  return props.translate;
}, function (props) {
  return props.width;
}); //transition: transform ease-out ${props => props.transition}s; 

console.log(HotelPhotosContent_GalleryContent);
/* harmony default export */ const HotelPhotosContent = ((/* unused pure expression or super */ null && (HotelPhotosContent_GalleryContent)));
;// CONCATENATED MODULE: ./src/Components/Library/HotelPhotoGallery/Photo.js



var HotelPhotoGallery_Photo_Photo = function Photo(_ref) {
  var content = _ref.content;
  console.log('[PHOTO] : ', content);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingTop: '2vw',
      //     textAlign: 'left',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      width: '50%'
    },
    src: content
  }));
};

/* harmony default export */ const HotelPhotoGallery_Photo = ((/* unused pure expression or super */ null && (HotelPhotoGallery_Photo_Photo)));
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/HotelPhotoGallery/GalleryCss.css
var GalleryCss = __webpack_require__(47506);
;// CONCATENATED MODULE: ./src/Components/Library/HotelPhotoGallery/GalleryCss.css

      
      
      
      
      
      
      
      
      

var GalleryCss_options = {};

GalleryCss_options.styleTagTransform = (styleTagTransform_default());
GalleryCss_options.setAttributes = (setAttributesWithoutAttributes_default());

      GalleryCss_options.insert = insertBySelector_default().bind(null, "head");
    
GalleryCss_options.domAPI = (styleDomAPI_default());
GalleryCss_options.insertStyleElement = (insertStyleElement_default());

var GalleryCss_update = injectStylesIntoStyleTag_default()(GalleryCss/* default */.Z, GalleryCss_options);




       /* harmony default export */ const HotelPhotoGallery_GalleryCss = (GalleryCss/* default */.Z && GalleryCss/* default.locals */.Z.locals ? GalleryCss/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/HotelPhotoGallery/Arrow.js


var HotelPhotoGallery_Arrow_ArrowGallery = function ArrowGallery(_ref) {
  var direction = _ref.direction,
      photoClick = _ref.photoClick;
  return (
    /*#__PURE__*/
    // console.log(direction),
    React.createElement("div", {
      onClick: photoClick
    }, direction === 'right' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      className: "prevGallery"
    }, "\u276E")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      className: "nextGallery"
    }, "\u276F")))
  );
};
;// CONCATENATED MODULE: ./src/Components/Library/HotelPhotoGallery/HotelPhotoGallery.js



function HotelPhotoGallery_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HotelPhotoGallery_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HotelPhotoGallery_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HotelPhotoGallery_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // import { css ,jsx } from '@emotion/react'




 // import Dots from './dots'

var HotelPhotoGallery_HotelGallery = function HotelGallery(_ref) {
  var galleryImages = _ref.galleryImages;

  var getWidth = function getWidth() {
    return window.innerWidth;
  };

  console.log('[GALLERY IMAGES] : ', galleryImages);

  var _useState = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var translate = state.translate,
      transition = state.transition,
      activeIndex = state.activeIndex;

  var nextPhoto = function nextPhoto() {
    if (activeIndex === galleryImages.length - 1) {
      return setState(HotelPhotoGallery_objectSpread(HotelPhotoGallery_objectSpread({}, state), {}, {
        translate: 0,
        activeIndex: 0
      }));
    } else {
      return setState(HotelPhotoGallery_objectSpread(HotelPhotoGallery_objectSpread({}, state), {}, {
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * getWidth()
      }));
    }
  };

  var prevPhoto = function prevPhoto() {
    if (activeIndex === 0) {
      return setState(HotelPhotoGallery_objectSpread(HotelPhotoGallery_objectSpread({}, state), {}, {
        translate: (galleryImages.length - 1) * getWidth(),
        activeIndex: galleryImages.length - 1
      }));
    }

    setState(HotelPhotoGallery_objectSpread(HotelPhotoGallery_objectSpread({}, state), {}, {
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    }));
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "galleryCSS"
  }, /*#__PURE__*/React.createElement(GalleryContent, {
    translate: translate,
    transition: transition,
    width: getWidth() * galleryImages.length
  }, galleryImages.map(function (slide, index) {
    return /*#__PURE__*/React.createElement(Photo, {
      key: index,
      content: 'https://hotelsukraine.travel/upload/' + slide.subdir + '/' + slide.file_name
    });
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ArrowGallery, {
    direction: "left",
    photoClick: nextPhoto
  }), /*#__PURE__*/React.createElement(ArrowGallery, {
    direction: "right",
    photoClick: prevPhoto
  }))));
};
;// CONCATENATED MODULE: ./src/Components/Library/HotelsUkraineTestComponents/single_hotel.js





var SingleHotel = function SingleHotel(_ref) {
  var option = _ref.option,
      selector = _ref.selector,
      location = _ref.location,
      history = _ref.history,
      list = _ref.list;
  var dispatch = useDispatch();
  var descrip = useSelector(function (state) {
    return state.hotels.parts;
  });
  var enDescrip = useSelector(function (state) {
    return state.hotels.en_parts;
  });
  var images = useSelector(function (state) {
    return state.hotels.images;
  });
  useEffect(function () {
    dispatch(getDescription());
  }, []);
  useEffect(function () {
    dispatch(getENdescription());
  }, []);
  useEffect(function () {
    dispatch(getImages());
  }, []);
  console.log('[general descrip] : ', descrip);
  console.log('[enDescrip] : ', enDescrip);
  console.log('[images] : ', images); // const cleanAnons = enDescrip.anons.replace(/<\/?[^>]+(>|$)/g, "");
  // console.log(cleanAnons)

  return /*#__PURE__*/React.createElement("div", {
    "class": "hotelWrapper"
  }, /*#__PURE__*/React.createElement("h2", null, enDescrip.name, " hotel in ", enDescrip.city), images && /*#__PURE__*/React.createElement(HotelGallery, {
    galleryImages: images
  }), /*#__PURE__*/React.createElement("h3", null, "Hotel Properties"), /*#__PURE__*/React.createElement("div", {
    "class": "htlOutline"
  }, /*#__PURE__*/React.createElement("span", null, "Hotel star rating"), " ", /*#__PURE__*/React.createElement("span", null, descrip.star_rating), /*#__PURE__*/React.createElement("span", null, "Amount of rooms"), " ", /*#__PURE__*/React.createElement("span", null, descrip.count_rooms), /*#__PURE__*/React.createElement("span", null, "Constructed"), " ", /*#__PURE__*/React.createElement("span", null, descrip.date_build), /*#__PURE__*/React.createElement("span", null, "Renovated"), /*#__PURE__*/React.createElement("span", null, " ", descrip.date_renovation), /*#__PURE__*/React.createElement("span", null, "Amount of floors"), /*#__PURE__*/React.createElement("span", null, descrip.floors), /*#__PURE__*/React.createElement("span", null, "Checkin time"), /*#__PURE__*/React.createElement("span", null, descrip.check_in_time), /*#__PURE__*/React.createElement("span", null, "Checkout time"), /*#__PURE__*/React.createElement("span", null, descrip.check_out_time)), /*#__PURE__*/React.createElement("h3", null, "Hotel Location"), /*#__PURE__*/React.createElement("div", {
    "class": "htlAddress"
  }, /*#__PURE__*/React.createElement("span", null, "Hotel address"), " ", /*#__PURE__*/React.createElement("span", null, enDescrip.address, ", ", enDescrip.city, " - ", descrip.postcode), /*#__PURE__*/React.createElement("span", null, "Distance to ", enDescrip.airport), " ", /*#__PURE__*/React.createElement("span", null, " ", descrip.to_airport, " meters "), /*#__PURE__*/React.createElement("span", null, "Distance to ", enDescrip.train_station, " "), " ", /*#__PURE__*/React.createElement("span", null, " ", descrip.to_train_station, " meters "), /*#__PURE__*/React.createElement("span", null, "Distance to the city center of ", enDescrip.city), /*#__PURE__*/React.createElement("span", null, " ", descrip.to_city_center)), /*#__PURE__*/React.createElement("h3", null, "Hotel Overview"), /*#__PURE__*/React.createElement("div", {
    "class": "anons"
  },
  /*ReactHtmlParser(*/
  enDescrip.anons), /*#__PURE__*/React.createElement("h3", null, "Hotel Detailed Description"), /*#__PURE__*/React.createElement("div", {
    "class": "description"
  },
  /*ReactHtmlParser(*/
  enDescrip.description));
}; // const [rate, setRate] = useState([{}]);
// const [descEn, setDescEn] = useState([]);
// const [descRu, setDescRu] = useState([]);
// const [descUa, setDescUa] = useState([]);
// const [images, setImages] = useState3();
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     setRate(JSON.parse(res.data.substring(30, res.data.length-1)))
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setRate(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
// const obj = JSON.parse(res.data.substring(30, res.data.length-1));
// for(let key in obj){
//   if(key === 'en'){
//     setDescEn(obj[key])
//   }
// }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescEn(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'ru'){
//         setDescRu(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescRu(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'ua'){
//         setDescUa(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescUa(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'photo_gallery'){
//         setImages(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setImages(undefined)
//   });
// }, []);
// console.log(rate)
// console.log(descEn)
// console.log(descRu)
// console.log(descUa)
// console.log(images)
//    useEffect ( () => {
//       dispatch (getPosts ());
// }, []);
// useEffect (() => {          
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels',{
//                 params: { type: 'full', hotels: 1401858, json: 1 },
//                 headers: {
// accept: "*/*",
// referrerPolicy: "strict-origin-when-cross-origin",
// referrer: "http://hotelsukraine/"
// accept-language: "en,ru-RU;q=0.9,ru;q=0.8,uk;q=0.7,en-US;q=0.6"
// },
// referrer: "http://hotelsukraine/",
// referrerPolicy: "strict-origin-when-cross-origin",
// body: null,
// method: "GET",
// mode: "no-cors",
// callbackKey: 'getDescription',
// callbackName: 'getDescription'
//         })
//     .then( res => {
//       console.log(res)
//       // setRate([...newArray])
//   })
// .catch( error => {
//    console.log( '[axios error] : ' , error)
//   //  setRate(undefined)
//     });
// }, []);
// useEffect (() => {
//    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1')
//    .then( res => {
//       console.log(res)
//       console.log(res.data)
//       // setRate([...newArray])
//   })
// .catch( error => {
//    console.log( '[axios error] : ' , error)
//   //  setRate(undefined)
//     });
// }, []);
// console.log(data);
// useEffect ( () => {
//   fetch("https://hotelsukraine/ua/my_list_hotels", {
//     headers: {
//     accept: "*/*",
//     // accept-language: "en,ru-RU;q=0.9,ru;q=0.8,uk;q=0.7,en-US;q=0.6"
//   },
//   referrer: "http://hotelsukraine/",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: null,
//   method: "GET",
//     mode: "no-cors"
//   })
// .then( res => {
//       console.log(res)
//       // setRate([...newArray])
//   })
// .catch( error => {
//    console.log( '[axios error] : ' , error)
//    setRate(undefined)
//     });
// }, []);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/HotelsUkraineTestComponents/tour.css
var tour = __webpack_require__(16451);
;// CONCATENATED MODULE: ./src/Components/Library/HotelsUkraineTestComponents/tour.css

      
      
      
      
      
      
      
      
      

var tour_options = {};

tour_options.styleTagTransform = (styleTagTransform_default());
tour_options.setAttributes = (setAttributesWithoutAttributes_default());

      tour_options.insert = insertBySelector_default().bind(null, "head");
    
tour_options.domAPI = (styleDomAPI_default());
tour_options.insertStyleElement = (insertStyleElement_default());

var tour_update = injectStylesIntoStyleTag_default()(tour/* default */.Z, tour_options);




       /* harmony default export */ const HotelsUkraineTestComponents_tour = (tour/* default */.Z && tour/* default.locals */.Z.locals ? tour/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/HotelsUkraineTestComponents/single_tour.js




 // import {SearchInner} from '../Library/search_block/search'
// import {getContent} from "../../Redux/actions/content"
// import {TourDetails} from './tourDetails';


 // import 'moment/locale/uk'
// import ReactHtmlParser from 'react-html-parser'

var single_tour_SingleTour = function SingleTour(_ref) {
  var option = _ref.option,
      selector = _ref.selector,
      location = _ref.location,
      history = _ref.history,
      list = _ref.list;
  var dispatch = useDispatch();
  var tourdescription = useSelector(function (state) {
    return state.tours.touritems;
  });
  var en_tourdescription = useSelector(function (state) {
    return state.tours.en_touritems;
  });
  var images_tourdescription = useSelector(function (state) {
    return state.tours.images;
  });
  useEffect(function () {
    dispatch(getTour());
  }, []);
  useEffect(function () {
    dispatch(ENgetTour());
  }, []);
  useEffect(function () {
    dispatch(IMGgetTour());
  }, []);
  console.log('[GETOUR] : ', tourdescription);
  console.log('[ENgetTour] : ', en_tourdescription);
  console.log('[IMGgetTour] : ', images_tourdescription); // const cleanAnons = enDescrip.anons.replace(/<\/?[^>]+(>|$)/g, "");
  // console.log(cleanAnons)

  return /*#__PURE__*/React.createElement("div", {
    "class": "hotelWrapper"
  }, /*#__PURE__*/React.createElement("h2", null, en_tourdescription.name, " hotel in ", en_tourdescription.name), images_tourdescription && /*#__PURE__*/React.createElement(HotelGallery, {
    galleryImages: images_tourdescription
  }), /*#__PURE__*/React.createElement("h3", null, "Hotel Location"), /*#__PURE__*/React.createElement("div", {
    "class": "htlAddress"
  }, /*#__PURE__*/React.createElement("span", null, "Hotel address"), " ", /*#__PURE__*/React.createElement("span", null, en_tourdescription.address, " ")), /*#__PURE__*/React.createElement("h3", null, "Hotel Overview"), /*#__PURE__*/React.createElement("div", {
    "class": "anons"
  },
  /*ReactHtmlParser(*/
  en_tourdescription.anons), /*#__PURE__*/React.createElement("h3", null, "Hotel Detailed Description"), /*#__PURE__*/React.createElement("div", {
    "class": "description"
  },
  /*ReactHtmlParser(*/
  en_tourdescription.description));
}; // const [rate, setRate] = useState([{}]);
// const [descEn, setDescEn] = useState([]);
// const [descRu, setDescRu] = useState([]);
// const [descUa, setDescUa] = useState([]);
// const [images, setImages] = useState3();
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     setRate(JSON.parse(res.data.substring(30, res.data.length-1)))
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setRate(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
// const obj = JSON.parse(res.data.substring(30, res.data.length-1));
// for(let key in obj){
//   if(key === 'en'){
//     setDescEn(obj[key])
//   }
// }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescEn(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'ru'){
//         setDescRu(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescRu(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'ua'){
//         setDescUa(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setDescUa(undefined)
//   });
// }, []);
// useEffect (() => {
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription')
//   .then( res => {
//     const obj = JSON.parse(res.data.substring(30, res.data.length-1));
//     for(let key in obj){
//       if(key === 'photo_gallery'){
//         setImages(obj[key])
//       }
//     }
// })
// .catch( error => {
//  console.log( '[axios error] : ' , error)
//  setImages(undefined)
//   });
// }, []);
// console.log(rate)
// console.log(descEn)
// console.log(descRu)
// console.log(descUa)
// console.log(images)
//    useEffect ( () => {
//       dispatch (getPosts ());
// }, []);
// useEffect (() => {          
//   axios.get('https://hotelsukraine.travel/ua/my_list_hotels',{
//                 params: { type: 'full', hotels: 1401858, json: 1 },
//                 headers: {
// accept: "*/*",
// referrerPolicy: "strict-origin-when-cross-origin",
// referrer: "http://hotelsukraine/"
// accept-language: "en,ru-RU;q=0.9,ru;q=0.8,uk;q=0.7,en-US;q=0.6"
// },
// referrer: "http://hotelsukraine/",
// referrerPolicy: "strict-origin-when-cross-origin",
// body: null,
// method: "GET",
// mode: "no-cors",
// callbackKey: 'getDescription',
// callbackName: 'getDescription'
//         })
//     .then( res => {
//       console.log(res)
//       // setRate([...newArray])
//   })
// .catch( error => {
//    console.log( '[axios error] : ' , error)
//   //  setRate(undefined)
//     });
// }, []);
// useEffect (() => {
//    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=10849&json=1')
//    .then( res => {
//       console.log(res)
//       console.log(res.data)
//       // setRate([...newArray])
//   })
// .catch( error => {
//    console.log( '[axios error] : ' , error)
//   //  setRate(undefined)
//     });
// }, []);
// console.log(data);
// useEffect ( () => {
//   fetch("https://hotelsukraine/ua/my_list_hotels", {
//     headers: {
//     accept: "*/*",
//     // accept-language: "en,ru-RU;q=0.9,ru;q=0.8,uk;q=0.7,en-US;q=0.6"
//   },
//   referrer: "http://hotelsukraine/",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: null,
//   method: "GET",
//     mode: "no-cors"
//   })
// .then( res => {
//       console.log(res)
//       // setRate([...newArray])
//   })
// .catch( error => {
//    console.log( '[axios error] : ' , error)
//    setRate(undefined)
//     });
// }, []);
//     export const TestingContent = ({tour})=>{    
//     const dispatch = useDispatch();
//     const contents = useSelector(state => state.content.content)
//     console.log('[CONTENTS] : ', contents)
//         useEffect ( () => {
//           dispatch (getContent (tour.tour_id));
//         },[]);
//        return(
// <div style={{paddingRight: '2vw'}}>
// <ul class='Ul_ItemContent'>
//      <>
//    {
//    contents ? (contents.map((trip) =>{
//     if(trip.content_name === 'Summary'){
//       return (
//           <li class='Li_ItemContent'>
//                {ReactHtmlParser(trip.text)}
//            </li>
//          )
//        }
//        else if(trip.content_name === 'Image'){
//          return (
//          <li
//         style={{listStyleType:'none',
//         textAlign: 'left'}}
//         >
//               <img 
//                   // class='imageSearchrender'
//                  style = {{
//                   width: '18vw',
//                   height: '14vw',
//                   borderRadius: '5px'  
//                   }}
//                   src={'http://' + trip.text[2]}/> 
//           </li>
//         )
//       }
//      }
//    )) : (
//     <div>HI CONTENT</div> 
//    )
//  }
//   </>
//  </ul>
// </div>
//  )
// }
;// CONCATENATED MODULE: ./src/Components/Library/HotelsUkraineTestComponents/test_cities.js


 // import {getDescription, getENdescription , getImages} from "../../Redux/actions/list"


 // import {HotelGallery} from '../Library/Hotel Photo Gallery/photoGallery'



var TestCities = function TestCities(props) {
  //   const dispatch = useDispatch();
  //   const descrip = useSelector(state => state.hotels.parts)
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      city = _useState2[0],
      setCity = _useState2[1]; // useEffect ( () => {
  //   dispatch (getDescription ());
  // }, []);


  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=city' // ,  {
    //  params: {
    //     classifier: "city"
    //   }
    //  })
    ).then(function (res) {
      //         // const newArray = res.data.hotels.hotel.dates.date[0].price.map(function(item){
      //         //   for (let key in item){
      //             // return item[key]
      //         //   }
      console.log('[CITIES] : ', res); //         // })
      //         // setCity([...newArray])
    })["catch"](function (error) {
      console.log('[axios error] : ', error); //     //  setCity(undefined)
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=countries').then(function (res) {
      console.log('[COUNTRIES] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=contract').then(function (res) {
      console.log('[CONTRACTS] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=language').then(function (res) {
      console.log('[LANG] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=hotel').then(function (res) {
      console.log('[HOTEL] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=service_type').then(function (res) {
      console.log('[SERVICE_TYPE] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=service_type').then(function (res) {
      console.log('[SUBSERVICES] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=room').then(function (res) {
      console.log('[ROOM] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=tariff').then(function (res) {
      console.log('[TARIFF] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=room_type').then(function (res) {
      console.log('[ROOM_TYPE] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=room_category').then(function (res) {
      console.log('[ROOM_CATEGORY] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=contract_theme').then(function (res) {
      console.log('[CONTRACT_THEME] : ', res);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  useEffect(function () {
    axios.get('http://smartbooker.biz/interface/classifier?classifier=contract').then(function (data) {
      console.log('[hotelsDATA] : ', data);
    })["catch"](function (error) {
      console.log('[axios error] : ', error);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "HI CITIES"), /*#__PURE__*/React.createElement(MyInput, null), /*#__PURE__*/React.createElement(SingleTour, null));
};
var MyInput = function MyInput(_ref) {
  var array = _ref.array;
  console.log('[ARRAY] :', array);

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1]; // const [city, setCity] = useState('');
  // const [tour, setTour] = useState('');
  // useEffect ( () => {
  //   axios.get('http://smartbooker.biz/interface/classifier?classifier=city')
  //    .then( res => {
  //       console.log('[CITY] : ' , res.data)
  //       setCity(res.data)
  //      })
  // .catch( error => {
  //    console.log( '[axios error] : ' , error)
  //    setCity (undefined)
  //     });
  // }, []);
  // console.log(city)
  // useEffect ( () => {
  //   axios.get('http://smartbooker.biz/interface/classifier?classifier=contract')
  //    .then( res => {
  //       const newArray = res.data.map(function(item){
  //         return {
  //           id: item.tour_id,
  //           name: item.tour_name
  //         } 
  //       })
  //        setTour(newArray)
  //   })
  // .catch( error => {
  //    console.log( '[axios error] : ' , error)
  //    setTour (undefined)
  //     });
  // }, []);
  // console.log('[TOUR] : ' , tour)


  return /*#__PURE__*/React.createElement(Autocomplete, {
    items: array,
    shouldItemRender: function shouldItemRender(item, value) {
      return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    },
    getItemValue: function getItemValue(item) {
      return item.name;
    },
    renderItem: function renderItem(item, highlighted) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        style: {
          backgroundColor: highlighted ? '#eee' : 'transparent'
        }
      }, item.name);
    },
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    onSelect: function onSelect(value) {
      return setValue(value);
    }
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/PageComponents/Footer/CityHotelsCSS.css
var CityHotelsCSS = __webpack_require__(73674);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/Footer/CityHotelsCSS.css

      
      
      
      
      
      
      
      
      

var CityHotelsCSS_options = {};

CityHotelsCSS_options.styleTagTransform = (styleTagTransform_default());
CityHotelsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      CityHotelsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
CityHotelsCSS_options.domAPI = (styleDomAPI_default());
CityHotelsCSS_options.insertStyleElement = (insertStyleElement_default());

var CityHotelsCSS_update = injectStylesIntoStyleTag_default()(CityHotelsCSS/* default */.Z, CityHotelsCSS_options);




       /* harmony default export */ const Footer_CityHotelsCSS = (CityHotelsCSS/* default */.Z && CityHotelsCSS/* default.locals */.Z.locals ? CityHotelsCSS/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js + 8 modules
var dom_esm = __webpack_require__(1898);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/Footer/CityHotels.js










 // import ReactHtmlParser from 'react-html-parser'










var CityHotels = function CityHotels() {
  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1]; // const [loaded,setLoaded] = useState(false)


  var search_details = ValidateQuery(location);
  console.log('LOCATION_SEARCH', search_details);
  var filteredLinkCityName = search_details.name.substring(0, search_details.name.indexOf("-Hotels".toLowerCase())).replace(/\//g, '');
  console.log('TESTPATH', filteredLinkCityName);
  var dispatch = (0,es/* useDispatch */.I0)();
  var citiesList = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelcities.hotel_cities;
  });
  var general_smart_hotels = (0,es/* useSelector */.v9)(function (state) {
    return state.hotels.general_hotels;
  });
  (0,react.useEffect)(function () {
    dispatch(getGeneralHotels());
  }, []);
  console.log('HOTELLIST', general_smart_hotels);
  (0,react.useEffect)(function () {
    dispatch(getHotelCities(locale));
  });
  console.log('CITIES', citiesList);
  var filteredCities = citiesList.filter(function (hotel) {
    return hotel.eng_city_name.toLowerCase().includes(filteredLinkCityName.toLowerCase()) === true;
  }); // console.log('filteredHotels',filteredCities)

  var filtered_city_name;
  filteredCities.forEach(function (item1) {
    filtered_city_name = item1.localized_city_name;
  }); // console.log('LOCALIZED_CITY_NAME',filtered_city_name)

  return /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width > 1000 ? "HotelFooterPages" : "HotelFooterPagesSmallScreen")
  }, !filteredCities || filteredCities.length === 0 ? /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'absolute',
      left: '40%',
      transform: 'translate(0%, -50%)',
      margin: '0'
    }
  }, /*#__PURE__*/react.createElement(LoadingMessage_LoadingMessage, {
    loadingMessageClass: "RateLoading"
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, /*#__PURE__*/react.createElement(WhiteHotels, null), " ", filtered_city_name.toUpperCase()), /*#__PURE__*/react.createElement(react.Fragment, null, filteredCities ? filteredCities.map(function (filtered_hotel) {
    return /*#__PURE__*/react.createElement("div", {
      "class": "".concat(width > 1000 ? 'HotelContentWrapper' : 'HotelContentWrapperSmallScreen')
    }, /*#__PURE__*/react.createElement(HotelContent, {
      hotel: filtered_hotel
    }), /*#__PURE__*/react.createElement(HotelBookButton, {
      innerText: messages && messages.map(function (item) {
        if (item.sitepage_region_id === 7 && item.sitepage_type_id === 16) {
          return /*#__PURE__*/react.createElement(message/* default */.Z, {
            id: item.title.map(function (item1) {
              return item1.text;
            })
          });
        }
      }),
      hotel: filtered_hotel,
      hotelsearch: location
    }));
  }) : /*#__PURE__*/react.createElement("h3", null, "Sorry, we do not have hotels available in ", filteredLinkCityName.toUpperCase(), " at the moment"))));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/ThirdPageofSearchModule/Hotels/HotelDetailsCSS.css
var HotelDetailsCSS = __webpack_require__(35201);
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/HotelDetailsCSS.css

      
      
      
      
      
      
      
      
      

var HotelDetailsCSS_options = {};

HotelDetailsCSS_options.styleTagTransform = (styleTagTransform_default());
HotelDetailsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      HotelDetailsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
HotelDetailsCSS_options.domAPI = (styleDomAPI_default());
HotelDetailsCSS_options.insertStyleElement = (insertStyleElement_default());

var HotelDetailsCSS_update = injectStylesIntoStyleTag_default()(HotelDetailsCSS/* default */.Z, HotelDetailsCSS_options);




       /* harmony default export */ const Hotels_HotelDetailsCSS = (HotelDetailsCSS/* default */.Z && HotelDetailsCSS/* default.locals */.Z.locals ? HotelDetailsCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/ContentBlock.js








var ContentBlock = function ContentBlock(_ref) {
  var hotelcontents = _ref.hotelcontents,
      search_data = _ref.search_data,
      localized_hotel_name = _ref.localized_hotel_name,
      localized_city_name = _ref.localized_city_name;
  console.log('[HOTELCONTENTS]', hotelcontents);

  var _useState = (0,react.useState)('55vh'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      photoHeight = _useState2[0],
      setPhotoHeight = _useState2[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  console.log('WIDTH', width);
  return /*#__PURE__*/react.createElement("div", {
    "class": "".concat(width > 768 ? "ContentDetails" : "ContentDetailsSmallScreen")
  }, /*#__PURE__*/react.createElement(react.Fragment, null, hotelcontents.length > 0 ? hotelcontents.map(function (trip) {
    for (var key in trip) {
      if (key === "hotel_parameters") {
        for (var key1 in trip[key]) {
          return /*#__PURE__*/react.createElement("div", {
            style: {
              gridColumn: '1 / 3'
            }
          }, trip[key].category && Array.from(trip[key].category).includes('*') ? Array.from(trip[key].category).map(function (star) {
            return /*#__PURE__*/react.createElement("span", {
              style: {
                marginLeft: '0.1vw',
                marginRight: '0.1vw'
              }
            }, /*#__PURE__*/react.createElement(Star, null));
          }) : null, /*#__PURE__*/react.createElement("div", {
            style: {
              fontFamily: 'Arial',
              color: 'blue'
            }
          }, /*#__PURE__*/react.createElement("span", {
            style: {
              fontWeight: 'bold'
            }
          }, "Hotel Address :"), " ", trip[key].address));
        }
      }
    }

    if (trip.content_name === 'Body') {
      return (
        /*#__PURE__*/
        // <div class='Li_HotelContent'>
        react.createElement("div", {
          style: {
            gridColumn: '2',
            gridRow: '2',
            color: '#102D69',
            fontSize: '14px',
            height: "".concat(photoHeight),
            overflow: 'scroll',
            padding: '0.5vw',
            marginLeft: '2vw'
          }
        }, (0,lib/* default */.ZP)(trip.text))
      );
    }

    if (trip.content_name === "Image") {
      return (
        /*#__PURE__*/
        // <div class='GalleryTourDetails'>
        react.createElement("div", {
          style: {
            gridColumn: '1',
            gridRow: '2'
          }
        }, /*#__PURE__*/react.createElement(CartGallery, {
          photos: trip,
          photoHeight: photoHeight
        }))
      );
    }
  }) : null));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/ThirdPageofSearchModule/Hotels/BookButtonHotelCSS.css
var BookButtonHotelCSS = __webpack_require__(89055);
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/BookButtonHotelCSS.css

      
      
      
      
      
      
      
      
      

var BookButtonHotelCSS_options = {};

BookButtonHotelCSS_options.styleTagTransform = (styleTagTransform_default());
BookButtonHotelCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      BookButtonHotelCSS_options.insert = insertBySelector_default().bind(null, "head");
    
BookButtonHotelCSS_options.domAPI = (styleDomAPI_default());
BookButtonHotelCSS_options.insertStyleElement = (insertStyleElement_default());

var BookButtonHotelCSS_update = injectStylesIntoStyleTag_default()(BookButtonHotelCSS/* default */.Z, BookButtonHotelCSS_options);




       /* harmony default export */ const Hotels_BookButtonHotelCSS = (BookButtonHotelCSS/* default */.Z && BookButtonHotelCSS/* default.locals */.Z.locals ? BookButtonHotelCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/BookButtonHotel.js







 // import {getPax} from "../../../Redux/actions/paxchoice"
// import axios from "axios"
// import {CartDemo} from '../Cart/Cart'


var BookButtonHotel = function BookButtonHotel(props) {
  var selectedAvailability = props.selectedAvailability,
      room_id = props.room_id,
      room_name = props.room_name,
      totalsum = props.totalsum,
      tariff_id = props.tariff_id,
      contract_id = props.contract_id,
      occupancy = props.occupancy;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      booking = _useState2[0],
      setBooking = _useState2[1];

  var location = (0,react_router/* useLocation */.TH)();
  var history = (0,react_router/* useHistory */.k6)();
  var search_data = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelsearchdata.hotel_search_data;
  });
  var hotelcontents = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelcontent.hotelcontent;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(getHotelContent(search_data.hotel_id, locale));
  }, []);
  var hotel_name;
  hotelcontents.forEach(function (item) {
    if (item.content_name === 'Title') hotel_name = item.text;
  });
  console.log('BOOKBUTTON', search_data);

  var AddToBasket = function AddToBasket(e) {
    var newBooking = {
      tariff_id: tariff_id,
      room_id: room_id,
      amount: totalsum,
      rooms: selectedAvailability
    };
    setBooking([newBooking]);
    var route_hotel_query_form = "?service_type_id=".concat(parseInt(1), ",start=").concat(search_data.start, ",end=").concat(search_data.end, ",contract_id=").concat(contract_id, ",tariff_id=").concat(tariff_id, ",room_id=").concat(room_id, ",numberofunits=").concat(selectedAvailability, ",hotel_id=").concat(search_data.hotel_id, ",adults=").concat(occupancy, ",children=").concat(search_data.children, ",htlName=").concat(hotel_name, ",amount=").concat(totalsum);
    history.push("/".concat(locale, "/booking_form/").concat(route_hotel_query_form), [].concat((0,toConsumableArray/* default */.Z)(booking), [newBooking]));
  };

  return (
    /*#__PURE__*/

    /* style={{display: 'flex', */

    /* justifyContent: 'flex-end', */

    /* alignItems: 'center'}}> */
    react.createElement("button", {
      "class": width >= 768 ? "AddToBasketButton" : "AddToBasketButtonSmallScreen",
      onClick: AddToBasket
    }, messages && messages.map(function (item) {
      if (item.sitepage_region_id === 7 && item.sitepage_type_id === 14) {
        return /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: item.title.map(function (item1) {
            return item1.text;
          })
        });
      }
    }))
  );
};
;// CONCATENATED MODULE: ./src/Components/Library/StaticJsonData/HotelRateGridTitles.js
var HotelRateGridTitles = ['Room Type', 'Pax', 'Tariff', 'Total Rate', 'Availablity', 'Book'];
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/RatesBlockCSS.css
var RatesBlockCSS = __webpack_require__(81634);
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/RatesBlockCSS.css

      
      
      
      
      
      
      
      
      

var RatesBlockCSS_options = {};

RatesBlockCSS_options.styleTagTransform = (styleTagTransform_default());
RatesBlockCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      RatesBlockCSS_options.insert = insertBySelector_default().bind(null, "head");
    
RatesBlockCSS_options.domAPI = (styleDomAPI_default());
RatesBlockCSS_options.insertStyleElement = (insertStyleElement_default());

var RatesBlockCSS_update = injectStylesIntoStyleTag_default()(RatesBlockCSS/* default */.Z, RatesBlockCSS_options);




       /* harmony default export */ const RatesBlock_RatesBlockCSS = (RatesBlockCSS/* default */.Z && RatesBlockCSS/* default.locals */.Z.locals ? RatesBlockCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/AvailableOptions.js








var AvailableOptions = function AvailableOptions(props) {
  var currency = props.currency,
      index = props.index,
      rooms = props.rooms,
      room_id = props.room_id,
      room_name = props.room_name,
      sum = props.sum,
      tariff_id = props.tariff_id,
      availability = props.availability,
      occupancy = props.occupancy,
      contract_id = props.contract_id;
  console.log('PROPS', props);

  var _useState = (0,react.useState)(parseInt(rooms, 10)),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      selectedAvailability = _useState2[0],
      setSelectedAvailability = _useState2[1];

  var _useState3 = (0,react.useState)(selectedAvailability * sum),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      totalsum = _useState4[0],
      setTotalSum = _useState4[1];

  var Option = es_select/* default.Option */.Z.Option;
  var dispatch = (0,es/* useDispatch */.I0)();

  var SelectRooms = function SelectRooms(value) {
    setSelectedAvailability(value);
    setTotalSum(value * sum); // setPicked(true)
    // dispatch(getAvail(value,index))
  };

  (0,react.useEffect)(function () {
    dispatch(getOccupancySearch(selectedAvailability, occupancy));
  }, []);
  var empty_array = [];

  for (var i = 1; empty_array.length < availability; i++) {
    empty_array.push(i);
  }

  console.log('AVAILABILITY', selectedAvailability, empty_array);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", {
    style: {
      fontSize: '17px',
      color: '#102D69',
      fontFamily: 'Arial',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }
  }, currency, " ", sum * selectedAvailability), /*#__PURE__*/react.createElement("h5", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    defaultValue: selectedAvailability,
    onChange: SelectRooms,
    bordered: true,
    size: "middle"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, empty_array && empty_array.map(function (item) {
    return /*#__PURE__*/react.createElement(Option, {
      className: "AvailableOptions",
      value: item,
      key: item
    }, item);
  })))), /*#__PURE__*/react.createElement("h5", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'middle',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react.createElement(BookButtonHotel, {
    selectedAvailability: selectedAvailability,
    room_id: room_id,
    room_name: room_name,
    totalsum: totalsum,
    tariff_id: tariff_id,
    contract_id: contract_id,
    occupancy: occupancy
  })));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/LargeScreenRatesBlock.js




 // import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'
// import {getAvail} from '../../../../../Redux/actions/availabilitychoice'





var LargeScreenRatesBlock = function LargeScreenRatesBlock(_ref) {
  var hotelratesRatesBlock = _ref.hotelratesRatesBlock,
      search_data = _ref.search_data;
  var dispatch = (0,es/* useDispatch */.I0)(); // const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)

  var pickedHotelRooms = (0,es/* useSelector */.v9)(function (state) {
    return state.availabilitychoice.avail_rooms;
  });
  console.log('PICKEDHOTELROOMS', pickedHotelRooms);

  for (var key in OccupancyTypes) {
    console.log('KEY_TEST', key);
  }

  var empty_array = []; // useEffect ( () => {
  //   dispatch (getHotelRates(search_data));
  // }, [search_data])
  // console.log('SEARCH_DATA',search_data)
  // console.log('RATESBLOCK',hotelratesRatesBlock)

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", {
    className: "RatesGridWrapper Header"
  }, HotelRateGridTitles && HotelRateGridTitles.map(function (title) {
    return /*#__PURE__*/react.createElement("li", {
      className: "RatesGridHeader"
    }, title);
  })), /*#__PURE__*/react.createElement("ul", {
    className: "GridUlDetails"
  }, hotelratesRatesBlock ? hotelratesRatesBlock.map(function (hotelrate) {
    return hotelrate.room_rates.map(function (item) {
      return hotelrate.dates.map(function (item1, indexRoomType) {
        if (item1.date === search_data.start) {
          return item1.rooms.map(function (item2) {
            if (item2.room_id === item.room_id) {
              return /*#__PURE__*/react.createElement("li", {
                className: "Details"
              }, /*#__PURE__*/react.createElement("h5", {
                className: "RoomTypeColumn"
              }, item.room_name === '0' ? 'Regular' : item.room_name, " ", item.room_type_name), /*#__PURE__*/react.createElement(react.Fragment, null, item2.tariffs.map(function (item3) {
                return item3.prices.map(function (item4, indexPrices) {
                  empty_array.length = item4.pax;
                  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", {
                    style: {
                      gridColumn: '2',
                      borderBottom: '2px solid rgb(109, 109, 196)',
                      borderRight: '2px solid rgb(109, 109, 196)',
                      borderLeft: '2px solid rgb(109, 109, 196)',
                      fontSize: '17px',
                      color: '#102D69',
                      fontFamily: 'Arial',
                      fontWeight: 'bold',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }
                  }, empty_array.fill(null).map(function (pax, index, array) {
                    index++;
                    return /*#__PURE__*/react.createElement(Pax, null);
                  })), /*#__PURE__*/react.createElement("h5", {
                    style: {
                      gridColumn: '3',
                      borderBottom: '2px solid rgb(109, 109, 196)',
                      borderRight: '2px solid rgb(109, 109, 196)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }
                  }, item.tariffs && item.tariffs.map(function (tariff) {
                    if (tariff.tariff_id === item3.tariff_id) {
                      return /*#__PURE__*/react.createElement("h5", {
                        style: {
                          fontSize: '17px',
                          color: 'blue',
                          fontFamily: 'Arial',
                          fontWeight: 'bold'
                        }
                      }, tariff.tariff_type_name);
                    }
                  })), /*#__PURE__*/react.createElement("h5", {
                    "class": "WrapperAvailableOptions"
                  }, /*#__PURE__*/react.createElement(AvailableOptions, {
                    index: [indexRoomType, indexPrices].join(''),
                    currency: hotelrate.currency,
                    contract_id: hotelrate.contract_id,
                    rooms: search_data.rooms,
                    room_id: item.room_id,
                    room_name: item.room_name,
                    room_type_id: item.room_type_id,
                    room_type_name: item.room_type_name // room_subcategory_id={item.room_subcategory_id}
                    // room_subcategory_name={item.room_subcategory_name}
                    ,
                    occupancy: item4.pax,
                    sum: item4.sum,
                    tariff_id: item3.tariff_id,
                    availability: item3.availability
                  })));
                });
              })));
            }
          });
        }
      });
    });
  }) : null));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/SmallScreenRatesBlock.js




 // import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'
// import {getAvail} from '../../../../../Redux/actions/availabilitychoice'





var SmallScreenRatesBlock = function SmallScreenRatesBlock(_ref) {
  var hotelratesRatesBlock = _ref.hotelratesRatesBlock,
      search_data = _ref.search_data;
  var dispatch = (0,es/* useDispatch */.I0)(); // const hotelratesRatesBlock = useSelector(state => state.hotelrates.hotelrates)

  var pickedHotelRooms = (0,es/* useSelector */.v9)(function (state) {
    return state.availabilitychoice.avail_rooms;
  });
  console.log('PICKEDHOTELROOMS', pickedHotelRooms);

  for (var key in OccupancyTypes) {
    console.log('KEY_TEST', key);
  }

  var empty_array = []; // useEffect ( () => {
  //   dispatch (getHotelRates(search_data));
  // }, [search_data])
  // console.log('SEARCH_DATA',search_data)
  // console.log('RATESBLOCK',hotelratesRatesBlock)

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("ul", null, hotelratesRatesBlock ? hotelratesRatesBlock.map(function (hotelrate) {
    return hotelrate.room_rates.map(function (item) {
      return hotelrate.dates.map(function (item1, indexRoomType) {
        if (item1.date === search_data.start) {
          return item1.rooms.map(function (item2) {
            if (item2.room_id === item.room_id) {
              return /*#__PURE__*/react.createElement("li", {
                "class": "DetailsSmallScreen"
              }, /*#__PURE__*/react.createElement("h5", {
                className: "RoomTypeColumnSmallScreen"
              }, item.room_name === '0' ? 'Regular' : item.room_name, " ", item.room_type_name), /*#__PURE__*/react.createElement(react.Fragment, null, item2.tariffs.map(function (item3) {
                return item3.prices.map(function (item4, indexPrices) {
                  empty_array.length = item4.pax;
                  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h5", null, empty_array.fill(null).map(function (pax, index, array) {
                    index++;
                    return /*#__PURE__*/react.createElement(Pax, null);
                  })), /*#__PURE__*/react.createElement("h5", null, item.tariffs && item.tariffs.map(function (tariff) {
                    if (tariff.tariff_id === item3.tariff_id) {
                      return /*#__PURE__*/react.createElement("h5", {
                        style: {
                          fontSize: '17px',
                          color: 'blue',
                          fontFamily: 'Arial',
                          fontWeight: 'bold'
                        }
                      }, tariff.tariff_type_name);
                    }
                  })), /*#__PURE__*/react.createElement("h5", {
                    "class": "WrapperAvailableOptionsSmallScreen"
                  }, /*#__PURE__*/react.createElement(AvailableOptions, {
                    index: [indexRoomType, indexPrices].join(''),
                    currency: hotelrate.currency,
                    contract_id: hotelrate.contract_id,
                    rooms: search_data.rooms,
                    room_id: item.room_id,
                    room_name: item.room_name,
                    room_type_id: item.room_type_id,
                    room_type_name: item.room_type_name // room_subcategory_id={item.room_subcategory_id}
                    // room_subcategory_name={item.room_subcategory_name}
                    ,
                    occupancy: item4.pax,
                    sum: item4.sum,
                    tariff_id: item3.tariff_id,
                    availability: item3.availability
                  })));
                });
              })));
            }
          });
        }
      });
    });
  }) : null));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/RatesBlock.js







 // import {getRoomsChoice} from '../../../../Redux/actions/hotelroomschoice'
// import {getAvail} from '../../../../../Redux/actions/availabilitychoice'






var RatesBlock = function RatesBlock(_ref) {
  var search_data = _ref.search_data;
  var dispatch = (0,es/* useDispatch */.I0)();
  var hotelratesRatesBlock = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelrates.hotelrates;
  }); // const pickedHotelRooms = useSelector(state=>state.availabilitychoice.avail_rooms)

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  var userId = currentUser.user_id; // console.log('PICKEDHOTELROOMS',pickedHotelRooms)
  // for (let key in OccupancyTypes){
  //   console.log('KEY_TEST', key)
  // }
  // let empty_array = [];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  (0,react.useEffect)(function () {
    dispatch(getHotelRates(search_data, userId));
  }, [search_data]);
  return /*#__PURE__*/react.createElement("div", null, width > 1000 ? /*#__PURE__*/react.createElement(LargeScreenRatesBlock, {
    hotelratesRatesBlock: hotelratesRatesBlock,
    search_data: search_data
  }) : /*#__PURE__*/react.createElement(SmallScreenRatesBlock, {
    hotelratesRatesBlock: hotelratesRatesBlock,
    search_data: search_data
  }));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/PageDevices/HotelsPaxChoiceCSS.css
var HotelsPaxChoiceCSS = __webpack_require__(61844);
;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/HotelsPaxChoiceCSS.css

      
      
      
      
      
      
      
      
      

var HotelsPaxChoiceCSS_options = {};

HotelsPaxChoiceCSS_options.styleTagTransform = (styleTagTransform_default());
HotelsPaxChoiceCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      HotelsPaxChoiceCSS_options.insert = insertBySelector_default().bind(null, "head");
    
HotelsPaxChoiceCSS_options.domAPI = (styleDomAPI_default());
HotelsPaxChoiceCSS_options.insertStyleElement = (insertStyleElement_default());

var HotelsPaxChoiceCSS_update = injectStylesIntoStyleTag_default()(HotelsPaxChoiceCSS/* default */.Z, HotelsPaxChoiceCSS_options);




       /* harmony default export */ const PageDevices_HotelsPaxChoiceCSS = (HotelsPaxChoiceCSS/* default */.Z && HotelsPaxChoiceCSS/* default.locals */.Z.locals ? HotelsPaxChoiceCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/HotelsPaxChoice.js

 // import axios from "axios"





 // import {RateChoiceBlock} from './RateChoiceBlock'



var HotelsPaxChoice_HotelsPaxChoice = function HotelsPaxChoice(_ref) {
  var MakeVisible = _ref.MakeVisible,
      paxListOpen = _ref.paxListOpen,
      rooms = _ref.rooms,
      adults = _ref.adults,
      children = _ref.children;
  var totalPaxRedux = (0,es/* useSelector */.v9)(function (state) {
    return state.paxchoice.pax_inner_search;
  });
  console.log('totalPaxRedux', totalPaxRedux); //   const [paxAmountNew, setPaxAmountNew] = useState([])

  var _useState = (0,react.useState)(parseInt(adults)),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      counterAdults = _useState2[0],
      setCounterAdults = _useState2[1];

  var _useState3 = (0,react.useState)(parseInt(children)),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      counterChild = _useState4[0],
      setCounterChild = _useState4[1]; // const [counterInfant, setCounterInfant] = useState(0)


  var _useState5 = (0,react.useState)(parseInt(rooms)),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      counterRooms = _useState6[0],
      setCounterRooms = _useState6[1]; //   const [total, setTotal] = useState({counterAdults,counterChild,counterInfant})


  var dispatch = (0,es/* useDispatch */.I0)();

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  (0,react.useEffect)(function () {
    dispatch(getPax(counterAdults, counterChild, counterRooms));
  }, [counterAdults, counterChild, counterRooms]); //   useEffect (() =>{
  //     axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`)
  //     .then(res => {
  //       let tour_capacity
  //       res.data[0].tariff.forEach((item)=>{
  //              item.rooms.forEach((item1)=>{
  //               tour_capacity = item1.rates.map((item2)=>{
  //                     let min = item2.rate_details.sort((a,b)=>(a.min_adult-b.min_adult))[0].min_adult
  //                     let max = item2.rate_details[0].max_adult
  //                            for(let i=0;i<item2.rate_details.length; i++){
  //                             if(item2.rate_details[i].max_adult>max){
  //                              max=item2.rate_details[i].max_adult
  //                            }
  //                          }
  //                          return (min+max)
  //               }).join('').split('').sort((a,b)=>(a-b))
  //              })       
  //        })
  //          setPaxAmountNew(tour_capacity)              
  //     })
  //     .catch(error =>{
  //       setPaxAmountNew(undefined)
  //       console.log('[axios error]: ', error)
  //     });
  //   },[]); 
  //   console.log('PAX AMOUNT NEW', paxAmountNew[0], paxAmountNew[paxAmountNew.length-1])
  //     if( !paxAmountNew ){
  //       return <div> Loading...</div>
  //   }
  // console.log('CHECKING' , pax)

  var TotalPax = function TotalPax() {
    dispatch(getPax(counterAdults, counterChild, counterRooms));
  };

  var add = function add() {
    setCounterAdults(counterAdults + 1);
  };

  var deduct = function deduct() {
    counterAdults > 0 ? setCounterAdults(counterAdults - 1) : setCounterAdults(0);
  };

  var addChild = function addChild() {
    // counterChild<2? setCounterChild(counterChild+1) : alert('This tour allows upto 2 Children')
    setCounterChild(counterChild + 1);
  };

  var deductChild = function deductChild() {
    counterChild > 0 ? setCounterChild(counterChild - 1) : setCounterChild(0);
  }; // const addInfant = () =>{
  //   // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
  //   setCounterInfant(counterInfant+1)
  // }
  // const deductInfant = () =>{
  //   counterInfant>0?setCounterInfant(counterInfant-1) : setCounterInfant(0)
  // }


  var addRooms = function addRooms() {
    // counterInfant<1? setCounterInfant(counterInfant+1) : alert('This tour allows upto 1 Infant')
    setCounterRooms(counterRooms + 1);
  };

  var deductRooms = function deductRooms() {
    counterRooms > 0 ? setCounterRooms(counterRooms - 1) : setCounterRooms(1);
  };

  return (
    /*#__PURE__*/
    // <div style={{marginTop:'0.8vw'}}>
    react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
      "class": "HotelPaxChoiceWrapper",
      style: {
        width: "".concat(width >= 1000 ? null : '100%')
      }
    }, /*#__PURE__*/react.createElement("div", {
      "class": "".concat(width >= 1000 ? 'HotelPaxResult' : 'HotelPaxResultSmallScreen'),
      style: {
        width: "".concat(width >= 1000 ? null : '100%')
      },
      onClick: MakeVisible
    }, /*#__PURE__*/react.createElement("h4", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      onClick: TotalPax
    }, /*#__PURE__*/react.createElement(Pax, null), /*#__PURE__*/react.createElement("div", {
      style: {
        paddingLeft: '1vw'
      }
    }, " ", counterAdults, " Adults"), ",", /*#__PURE__*/react.createElement("div", {
      style: {
        paddingLeft: '1vw'
      }
    }, " ", counterChild, " Children"), ",", /*#__PURE__*/react.createElement("div", {
      style: {
        paddingLeft: '1vw'
      }
    }, " ", counterRooms, " Rooms "), /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
      className: "DownOutlined"
    }))), /*#__PURE__*/react.createElement("div", {
      "class": paxListOpen === false ? 'PopUpNotActive' : 'PopUpActive',
      style: {
        width: "".concat(width >= 1000 ? '23vw' : '45%')
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'repeat(3, 6vh)',
        rowGap: '10px'
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '25% 17% 16% 17% 25%'
      }
    }, /*#__PURE__*/react.createElement("h4", null, "Adults"), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
      className: "Minus",
      onClick: deduct
    })), /*#__PURE__*/react.createElement("h4", null, counterAdults), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
      className: "Plus",
      onClick: add
    })), /*#__PURE__*/react.createElement("h4", null, "12+ y.o.")), /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '25% 17% 16% 17% 25%'
      }
    }, /*#__PURE__*/react.createElement("h4", null, "Children"), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
      className: "Minus",
      onClick: deductChild
    })), /*#__PURE__*/react.createElement("h4", null, counterChild), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
      className: "Plus",
      onClick: addChild
    })), /*#__PURE__*/react.createElement("h4", null, "2-11 y.o.")), /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '25% 17% 16% 17% 25%'
      }
    }, /*#__PURE__*/react.createElement("h4", null, "Rooms"), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(MinusOutlined/* default */.Z, {
      className: "Minus",
      onClick: deductRooms
    })), /*#__PURE__*/react.createElement("h4", null, counterRooms), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
      className: "Plus",
      onClick: addRooms
    })))), /*#__PURE__*/react.createElement("div", {
      onClick: TotalPax,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react.createElement("button", {
      "class": "PopUpButton",
      onClick: MakeVisible
    }, "Confirm")))))
  );
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/InnerSearchBlock.js













var InnerSearchBlock = function InnerSearchBlock(_ref) {
  var search_data = _ref.search_data,
      hotelName = _ref.hotelName;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)(search_data.start),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0,react.useState)(search_data.end),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      endDate = _useState4[0],
      setEndDate = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      paxListOpen = _useState6[0],
      setPaxListOpen = _useState6[1];

  var _useState7 = (0,react.useState)(search_data),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      newList = _useState8[0],
      setNewList = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      clicked = _useState10[0],
      setClicked = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      pickedStartValue = _useState12[0],
      setPickedStartValue = _useState12[1];

  var _useState13 = (0,react.useState)(false),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      pickedEndValue = _useState14[0],
      setPickedEndValue = _useState14[1];

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var totalPaxRedux = (0,es/* useSelector */.v9)(function (state) {
    return state.paxchoice.pax;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  var dateFormat = 'YYYY-MM-DD';
  console.log('SEARCH_DATA', search_data);
  (0,react.useEffect)(function () {
    dispatch(getPaxInnerSearch(search_data.adults, search_data.children, search_data.rooms));
  }, []);

  function StartDateChange(date, dateString) {
    setStartDate(dateString);
    setPickedStartValue(true);
  }

  function EndDateChange(date, dateString) {
    setEndDate(dateString);
    setPickedEndValue(true);
  }

  var MakeVisible = function MakeVisible() {
    setPaxListOpen(!paxListOpen);
  };

  var disabledDate = function disabledDate(current) {
    return current < moment_default()().subtract(1, 'days');
  };

  var changeSearchDetails = function changeSearchDetails() {
    if (pickedStartValue === false) {
      alert("Arrival Date is missing");
    } else if (pickedEndValue === false) {
      alert("Departure Date is missing");
    } else if (pickedStartValue === true && pickedEndValue === true) {
      var List = {
        start: startDate,
        end: endDate,
        city_id: search_data.city_id,
        hotel_id: search_data.hotel_id,
        adults: String(totalPaxRedux.adults),
        children: String(totalPaxRedux.children),
        rooms: String(totalPaxRedux.rooms)
      };
      setNewList(List);
      setClicked(true); //   dispatch(getHotelRates(newList))
    } //     return <RatesBlock
    //     search_data={newList}
    //  /> 

  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h3", {
    "class": "".concat(width > 768 ? "SearchDetails" : "SearchDetailsSmallScreen")
  }, /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement("span", null, "Check-in date : "), !search_data.start ? /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
    disabledDate: disabledDate,
    placeholder: 'Start date',
    onChange: StartDateChange
  })) : /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
    disabledDate: disabledDate,
    defaultValue: moment_default()(search_data.start, dateFormat),
    format: dateFormat,
    onChange: StartDateChange
  }))), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement("span", null, "Check-out date :"), !search_data.end ? /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
    disabledDate: disabledDate,
    placeholder: 'End date',
    onChange: EndDateChange
  })) : /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
    disabledDate: disabledDate,
    defaultValue: moment_default()(search_data.end, dateFormat),
    format: dateFormat,
    onChange: EndDateChange
  }))), /*#__PURE__*/react.createElement("h4", null, " ", /*#__PURE__*/react.createElement("span", null, "Details of your stay :"), /*#__PURE__*/react.createElement(HotelsPaxChoice_HotelsPaxChoice, {
    MakeVisible: MakeVisible,
    paxListOpen: paxListOpen,
    rooms: search_data.rooms,
    adults: search_data.adults,
    children: search_data.children
  })), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement("button", {
    type: "submmit",
    "class": "".concat(width > 768 ? "availableButton" : "availableButtonSmallScreen"),
    onClick: changeSearchDetails
  }, messages && messages.map(function (item) {
    if (item.sitepage_region_id === 7 && item.sitepage_type_id === 15) {
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: item.title.map(function (item1) {
          return item1.text;
        })
      });
    }
  })))), clicked === true ? /*#__PURE__*/react.createElement(RatesBlock, {
    search_data: newList
  }) : /*#__PURE__*/react.createElement(RatesBlock, {
    search_data: search_data
  }));
};
;// CONCATENATED MODULE: ./src/Components/Pages/ThirdPageofSearchModule/Hotels/HotelDetails.js













var HotelDetails = function HotelDetails() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var history = (0,react_router/* useHistory */.k6)();
  var location = (0,react_router/* useLocation */.TH)();
  var search_data = ValidateQuery(location);
  console.log('[HOTEL_DETAILS_SEARCH]', search_data);
  var dispatch = (0,es/* useDispatch */.I0)();
  var hotelcontents = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelcontent.hotelcontent;
  });
  var searchUpdate = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelsearchdata.occupancy_search_data;
  });
  var citiesList = (0,es/* useSelector */.v9)(function (state) {
    return state.hotelcities.hotel_cities;
  });
  console.log('[OCCUPANCY]', searchUpdate);
  (0,react.useEffect)(function () {
    dispatch(getHotelContent(search_data.hotel_id, locale));
  }, []);
  (0,react.useEffect)(function () {
    dispatch(getHotelSearch(search_data));
  }, [search_data]);
  (0,react.useEffect)(function () {
    dispatch(getHotelCities(locale));
  }, [locale]); // console.log('[HOTEL_HOTEL_CONTENTS]', hotelcontents)
  // console.log('CITIES', citiesList)

  var filtered_hotel_name;
  var filtered_city_name;
  citiesList.forEach(function (hotel) {
    if (parseInt(hotel.hotel_id) === parseInt(search_data.hotel_id)) {
      filtered_hotel_name = hotel.localized_hotel_name;
      filtered_city_name = hotel.localized_city_name;
    }
  });
  console.log('NEWDATA', filtered_hotel_name, filtered_city_name);
  return /*#__PURE__*/react.createElement("div", {
    className: "HotelDetailsWrapper"
  }, /*#__PURE__*/react.createElement("h2", null, filtered_hotel_name, " , ", filtered_city_name), /*#__PURE__*/react.createElement(ContentBlock, {
    hotelcontents: hotelcontents,
    search_data: search_data // localized_hotel_name={filtered_hotel_name}
    // localized_city_name={filtered_city_name}

  }), /*#__PURE__*/react.createElement("h3", {
    style: {
      fontFamily: 'Arial',
      color: '#102D69',
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '3vh'
    }
  }, "Availability"), /*#__PURE__*/react.createElement(InnerSearchBlock, {
    search_data: search_data,
    hotelName: filtered_hotel_name
  }));
};
// EXTERNAL MODULE: ./node_modules/reactjs-captcha/index.js
var reactjs_captcha = __webpack_require__(21617);
// EXTERNAL MODULE: ./node_modules/react-validation/build/form.js
var build_form = __webpack_require__(98583);
var form_default = /*#__PURE__*/__webpack_require__.n(build_form);
// EXTERNAL MODULE: ./node_modules/react-validation/build/input.js
var input = __webpack_require__(84113);
var input_default = /*#__PURE__*/__webpack_require__.n(input);
// EXTERNAL MODULE: ./node_modules/react-validation/build/button.js
var build_button = __webpack_require__(82171);
var button_default = /*#__PURE__*/__webpack_require__.n(build_button);
;// CONCATENATED MODULE: ./src/Redux/actions/types.js
var REGISTER_SUCCESS = "REGISTER_SUCCESS";
var REGISTER_FAIL = "REGISTER_FAIL";
var LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOGIN_FAIL = "LOGIN_FAIL";
var LOGOUT = "LOGOUT";
var SET_MESSAGE = "SET_MESSAGE";
var CLEAR_MESSAGE = "CLEAR_MESSAGE";
var SET_ORDER_ID = "SET_ORDER_ID";
var types_SET_PAYMENT_INFO = "SET_PAYMENT_INFO";
var types_GET_PAYMENT_INFO = "GET_PAYMENT_INFO";
var FETCH_PAYMENT_INFO_REQUEST = "FETCH_PAYMENT_INFO_REQUEST";
var FETCH_SET_PAYMENT_INFO_SUCCESS = "FETCH_SET_PAYMENT_INFO_SUCCESS";
var FETCH_SET_PAYMENT_INFO_ERROR = "FETCH_SET_PAYMENT_INFO_ERROR";
var FETCH_PAYMENT_DATA_SUCCESS = "FETCH_PAYMENT_DATA_SUCCESS";
var FETCH_PAYMENT_DATA_ERROR = "FETCH_PAYMENT_DATA_ERROR";
var FETCH_PAYMENT_VOUCHER_SUCCESS = "FETCH_PAYMENT_VOUCHER_SUCCESS";
var FETCH_PAYMENT_VOUCHER_ERROR = "FETCH_PAYMENT_VOUCHER_ERROR";
;// CONCATENATED MODULE: ./src/Redux/services/auth.service.js

/* My new server */
// const API_URL = "http://authentication-jwt/api/";
// const API_URL = "http://content-server/interface/remote/";
// const API_URL = "http://smartbooker.biz/interface/remote/";

var API_URL = "".concat("http://smartbooker.biz/", "interface/remote/");

var register = function register(firstName, lastName, username, email, password) {
  return axios_default().post(API_URL + "create_user", JSON.stringify({
    "firstname": firstName,
    "lastname": lastName,
    "username": username,
    "email": email,
    "password": password
  }));
};

var login = function login(username, password) {
  return axios_default().post(API_URL + "login", JSON.stringify({
    "username": username,
    "password": password
  })).then(function (response) {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

var logout = function logout() {
  localStorage.removeItem("user");
};

var authService = {
  register: register,
  login: login,
  logout: logout
};
/* harmony default export */ const auth_service = (authService);
;// CONCATENATED MODULE: ./src/Redux/actions/auth.js


var auth_register = function register(firstName, lastName, username, email, password) {
  return function (dispatch) {
    return auth_service.register(firstName, lastName, username, email, password).then(function (response) {
      dispatch({
        type: REGISTER_SUCCESS
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message
      });
      return Promise.resolve();
    }, function (error) {
      var message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
      dispatch({
        type: REGISTER_FAIL
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message
      });
      return Promise.reject();
    });
  };
};
var auth_login = function login(username, password) {
  return function (dispatch) {
    return auth_service.login(username, password).then(function (data) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: data
        }
      });
      return Promise.resolve();
    }, function (error) {
      var message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
      dispatch({
        type: LOGIN_FAIL
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message
      });
      return Promise.reject();
    });
  };
};
var auth_logout = function logout() {
  return function (dispatch) {
    auth_service.logout();
    dispatch({
      type: LOGOUT
    });
  };
};
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
;// CONCATENATED MODULE: ./src/Components/Library/Authorization/Register.js














var required = function required(value) {
  if (!value) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "This field is required!");
  }
};

var displayErrorMessage = function displayErrorMessage(value) {
  if (!value) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, /*#__PURE__*/react.createElement("div", null, "Your input is wrong."), /*#__PURE__*/react.createElement("div", null, "Retype the characters from the picture"));
  }
};

reactjs_captcha.captchaSettings.set({
  captchaEndpoint: // 'http://smartbooker/botdetect-captcha-lib/simple-botdetect.php'
  // 'http://smartbooker.biz/botdetect-captcha-lib/simple-botdetect.php'
  "".concat("http://smartbooker.biz/", "botdetect-captcha-lib/simple-botdetect.php")
});

var validEmail = function validEmail(value) {
  if (!(0,validator.isEmail)(value)) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "This is not a valid email.");
  }
};

var vusername = function vusername(value) {
  if (value.length < 3 || value.length > 20) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "The username must be between 3 and 20 characters.");
  }
};

var validFirstName = function validFirstName(value) {
  if (value.length < 3 || value.length > 20) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "The first name must be between 3 and 20 characters.");
  }
};

var validLastName = function validLastName(value) {
  if (value.length < 3 || value.length > 20) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "The last name must be between 3 and 20 characters.");
  }
};

var vpassword = function vpassword(value) {
  if (value.length < 6 || value.length > 40) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "The password must be between 6 and 40 characters.");
  }
};

var Register = function Register() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var form = (0,react.useRef)();
  var checkBtn = (0,react.useRef)();

  var _useState = (0,react.useState)(""),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      lastName = _useState4[0],
      setLastName = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      username = _useState6[0],
      setUsername = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      email = _useState8[0],
      setEmail = _useState8[1];

  var _useState9 = (0,react.useState)(""),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      password = _useState10[0],
      setPassword = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      successful = _useState12[0],
      setSuccessful = _useState12[1];

  var _useState13 = (0,react.useState)(""),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      captcha = _useState14[0],
      setCaptcha = _useState14[1];

  var _useState15 = (0,react.useState)(true),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      captchaInputSuccess = _useState16[0],
      setCaptchaInputSuccess = _useState16[1];

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.message;
  }),
      message = _useSelector.message;

  var dispatch = (0,es/* useDispatch */.I0)();

  var onChangeFirstName = function onChangeFirstName(e) {
    var firstName = e.target.value;
    setFirstName(firstName);
  };

  var onChangeLastName = function onChangeLastName(e) {
    var lastName = e.target.value;
    setLastName(lastName);
  };

  var onChangeUsername = function onChangeUsername(e) {
    var username = e.target.value;
    setUsername(username);
  };

  var onChangeEmail = function onChangeEmail(e) {
    var email = e.target.value;
    setEmail(email);
  };

  var onChangePassword = function onChangePassword(e) {
    var password = e.target.value;
    setPassword(password);
  };

  var handleRegister = function handleRegister(e) {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll(); // the user-entered captcha code value to be validated at the backend side

    var userEnteredCaptchaCode = captcha.getUserEnteredCaptchaCode(); // the id of a captcha instance that the user tried to solve

    var captchaId = captcha.getCaptchaId();
    var postData = {
      userEnteredCaptchaCode: userEnteredCaptchaCode,
      captchaId: captchaId
    }; // post the captcha data to the /your-app-backend-path on your backend.
    // make sure you import the axios in this view with: import axios from 'axios';

    axios_default().post( // 'http://smartbooker/botdetect-captcha-lib/basic.php',
    // 'http://smartbooker.biz/botdetect-captcha-lib/basic.php',
    "".concat("http://smartbooker.biz/", "botdetect-captcha-lib/basic.php"), postData, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function (response) {
      console.log('response.data: ', response.data);

      if (response.data.success === false) {
        // captcha validation failed; reload image
        captcha.reloadImage(); // TODO: maybe display an error message, too

        setCaptchaInputSuccess(false);
      } else {
        // TODO: captcha validation succeeded; proceed with your workflow
        if (checkBtn.current.context._errors.length === 0) {
          dispatch(auth_register(firstName, lastName, username, email, password)).then(function () {
            setSuccessful(true);
          })["catch"](function () {
            setSuccessful(false);
          });
        }
      }
    });
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card card-container",
    style: {
      backgroundColor: '#f7f7f7'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
    alt: "profile-img",
    className: "profile-img-card"
  }), /*#__PURE__*/react.createElement((form_default()), {
    id: "yourFormWithCaptchaForm",
    method: "POST",
    onSubmit: handleRegister,
    ref: form
  }, !successful && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "firstName"
  }, "First name ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "text",
    className: "form-control",
    name: "firstName",
    value: firstName,
    onChange: onChangeFirstName,
    validations: [required, validFirstName]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "lastName"
  }, "Last name ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "text",
    className: "form-control",
    name: "lastName",
    value: lastName,
    onChange: onChangeLastName,
    validations: [required, validLastName]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "username"
  }, "Username ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "text",
    className: "form-control",
    name: "username",
    value: username,
    onChange: onChangeUsername,
    validations: [required, vusername]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "email"
  }, "Email ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "text",
    className: "form-control",
    name: "email",
    value: email,
    onChange: onChangeEmail,
    validations: [required, validEmail]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "password"
  }, "Password ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "password",
    className: "form-control",
    name: "password",
    value: password,
    onChange: onChangePassword,
    validations: [required, vpassword]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement(reactjs_captcha.Captcha, {
    captchaStyleName: "yourFirstCaptchaStyle",
    ref: function ref(captcha) {
      setCaptcha(captcha);
    }
  }), /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("span", null, "Retype the characters from the picture: ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement("input", {
    id: "yourFirstCaptchaUserInput",
    type: "text"
  })), displayErrorMessage(captchaInputSuccess)), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-primary btn-block"
  }, "Sign Up")), /*#__PURE__*/react.createElement("div", {
    className: "form-group text-center"
  }, "Have an account already?"), /*#__PURE__*/react.createElement("div", {
    className: "form-group text-center"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/".concat(locale, "/sign_in")
  }, "Login"))), message && /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("div", {
    className: successful ? "alert alert-success" : "alert alert-danger",
    role: "alert"
  }, message)), /*#__PURE__*/react.createElement((button_default()), {
    style: {
      display: "none"
    },
    ref: checkBtn
  }))));
};

/* harmony default export */ const Authorization_Register = (Register);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/Authorization/Login.css
var Login = __webpack_require__(69045);
;// CONCATENATED MODULE: ./src/Components/Library/Authorization/Login.css

      
      
      
      
      
      
      
      
      

var Login_options = {};

Login_options.styleTagTransform = (styleTagTransform_default());
Login_options.setAttributes = (setAttributesWithoutAttributes_default());

      Login_options.insert = insertBySelector_default().bind(null, "head");
    
Login_options.domAPI = (styleDomAPI_default());
Login_options.insertStyleElement = (insertStyleElement_default());

var Login_update = injectStylesIntoStyleTag_default()(Login/* default */.Z, Login_options);




       /* harmony default export */ const Authorization_Login = (Login/* default */.Z && Login/* default.locals */.Z.locals ? Login/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/Authorization/Login.js














var Login_required = function required(value) {
  if (!value) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "This field is required!");
  }
};

var Login_displayErrorMessage = function displayErrorMessage(value) {
  if (!value) {
    return /*#__PURE__*/react.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, /*#__PURE__*/react.createElement("div", null, "Your input is wrong."), /*#__PURE__*/react.createElement("div", null, "Retype the characters from the picture"));
  }
};

reactjs_captcha.captchaSettings.set({
  captchaEndpoint: // 'http://smartbooker/botdetect-captcha-lib/simple-botdetect.php'
  // 'http://smartbooker.biz/botdetect-captcha-lib/simple-botdetect.php'
  "".concat("http://smartbooker.biz/", "botdetect-captcha-lib/simple-botdetect.php")
});

var Login_Login = function Login(props) {
  var form = (0,react.useRef)();
  var checkBtn = (0,react.useRef)();

  var _useState = (0,react.useState)(""),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      captcha = _useState6[0],
      setCaptcha = _useState6[1];

  var _useState7 = (0,react.useState)(true),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      captchaInputSuccess = _useState8[0],
      setCaptchaInputSuccess = _useState8[1];

  var _useState9 = (0,react.useState)(false),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = (0,es/* useSelector */.v9)(function (state) {
    return state.message;
  }),
      message = _useSelector2.message;

  var dispatch = (0,es/* useDispatch */.I0)();

  var onChangeUsername = function onChangeUsername(e) {
    var username = e.target.value;
    setUsername(username);
  };

  var onChangePassword = function onChangePassword(e) {
    var password = e.target.value;
    setPassword(password);
  };

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var handleLogin = function handleLogin(e) {
    e.preventDefault(); // setLoading(true);

    form.current.validateAll(); // the user-entered captcha code value to be validated at the backend side

    var userEnteredCaptchaCode = captcha.getUserEnteredCaptchaCode(); // the id of a captcha instance that the user tried to solve

    var captchaId = captcha.getCaptchaId();
    var postData = {
      userEnteredCaptchaCode: userEnteredCaptchaCode,
      captchaId: captchaId
    }; // post the captcha data to the /your-app-backend-path on your backend.
    // make sure you import the axios in this view with: import axios from 'axios';

    axios_default().post( // 'http://smartbooker/botdetect-captcha-lib/basic.php',
    // 'http://smartbooker.biz/botdetect-captcha-lib/basic.php',
    "".concat("http://smartbooker.biz/", "botdetect-captcha-lib/basic.php"), postData, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function (response) {
      console.log('response.data: ', response.data);

      if (response.data.success === false) {
        // captcha validation failed; reload image
        captcha.reloadImage(); // TODO: maybe display an error message, too

        setCaptchaInputSuccess(false);
      } else {
        // TODO: captcha validation succeeded; proceed with your workflow
        if (checkBtn.current.context._errors.length === 0) {
          dispatch(auth_login(username, password)).then(function () {
            // props.history.push("/profile");
            props.history.push("/"); // window.location.reload(); // может, не нужно перезагружать страницу, если мы и так на главной?
          })["catch"](function () {// setLoading(false);
          });
        } else {// setLoading(false);
        }
      }
    });
  };

  if (isLoggedIn) {
    // return <Redirect to="/profile" />;
    return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
      to: "/".concat(locale, "/")
    });
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "container mt-3"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card card-container",
    style: {
      backgroundColor: '#f7f7f7'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
    alt: "profile-img",
    className: "profile-img-card"
  }), /*#__PURE__*/react.createElement((form_default()), {
    id: "yourFormWithCaptchaForm",
    method: "POST",
    onSubmit: handleLogin,
    ref: form
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "username"
  }, "Username ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "text",
    className: "form-control",
    name: "username",
    value: username,
    onChange: onChangeUsername,
    validations: [Login_required]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "password"
  }, "Password ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement((input_default()), {
    type: "password",
    className: "form-control",
    name: "password",
    value: password,
    onChange: onChangePassword,
    validations: [Login_required]
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement(reactjs_captcha.Captcha, {
    captchaStyleName: "yourFirstCaptchaStyle",
    ref: function ref(captcha) {
      setCaptcha(captcha);
    }
  }), /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("span", null, "Retype the characters from the picture: ", /*#__PURE__*/react.createElement("sup", null, "*")), /*#__PURE__*/react.createElement("input", {
    id: "yourFirstCaptchaUserInput",
    type: "text"
  })), Login_displayErrorMessage(captchaInputSuccess)), /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn btn-primary btn-block",
    disabled: loading
  }, loading && /*#__PURE__*/react.createElement("span", {
    className: "spinner-border spinner-border-sm"
  }), /*#__PURE__*/react.createElement("span", null, "Login"))), /*#__PURE__*/react.createElement("div", {
    className: "form-group text-center"
  }, "Don`t have an account yet?"), /*#__PURE__*/react.createElement("div", {
    className: "form-group text-center"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/".concat(locale, "/sign_up")
  }, "Sign Up")), message && /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, message)), /*#__PURE__*/react.createElement((button_default()), {
    style: {
      display: "none"
    },
    ref: checkBtn
  })))));
};

/* harmony default export */ const Library_Authorization_Login = (Login_Login);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(82963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
;// CONCATENATED MODULE: ./src/Components/Context/PaymentServiceContext/paymentServiceContext.js


var _React$createContext = /*#__PURE__*/react.createContext(),
    PaymentServiceProvider = _React$createContext.Provider,
    PaymentServiceConsumer = _React$createContext.Consumer;


;// CONCATENATED MODULE: ./src/Components/Context/PaymentServiceContext/index.js


;// CONCATENATED MODULE: ./src/Components/HOC/withPaymentService.js


 // Это функция, которая возвращает функцию, которая принимает компонент, который мы будем оборачивать

var withPaymentService = function withPaymentService() {
  return function (Wrapped) {
    return function (props) {
      return /*#__PURE__*/react.createElement(PaymentServiceConsumer, null, function (paymentService) {
        return /*#__PURE__*/react.createElement(Wrapped, (0,esm_extends/* default */.Z)({}, props, {
          paymentService: paymentService
        }));
      });
    };
  };
};

/* harmony default export */ const HOC_withPaymentService = (withPaymentService);
;// CONCATENATED MODULE: ./src/Components/HOC/index.js


;// CONCATENATED MODULE: ./src/Redux/helpers/compose.js
// Делаем функцональную композицию из компонентов высшего пороядка
var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (comp) {
    return funcs.reduceRight(function (wrapped, f) {
      return f(wrapped);
    }, comp);
  };
};

/* harmony default export */ const helpers_compose = (compose);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/LiqPay/CartDetailsSummary.css
var CartDetailsSummary = __webpack_require__(51579);
;// CONCATENATED MODULE: ./src/Components/Pages/LiqPay/CartDetailsSummary.css

      
      
      
      
      
      
      
      
      

var CartDetailsSummary_options = {};

CartDetailsSummary_options.styleTagTransform = (styleTagTransform_default());
CartDetailsSummary_options.setAttributes = (setAttributesWithoutAttributes_default());

      CartDetailsSummary_options.insert = insertBySelector_default().bind(null, "head");
    
CartDetailsSummary_options.domAPI = (styleDomAPI_default());
CartDetailsSummary_options.insertStyleElement = (insertStyleElement_default());

var CartDetailsSummary_update = injectStylesIntoStyleTag_default()(CartDetailsSummary/* default */.Z, CartDetailsSummary_options);




       /* harmony default export */ const LiqPay_CartDetailsSummary = (CartDetailsSummary/* default */.Z && CartDetailsSummary/* default.locals */.Z.locals ? CartDetailsSummary/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/LiqPay/PaymentResult.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var PaymentResult = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(PaymentResult, _Component);

  var _super = _createSuper(PaymentResult);

  function PaymentResult() {
    (0,classCallCheck/* default */.Z)(this, PaymentResult);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(PaymentResult, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchPaymentInfo();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log("work_with_payment: ");

      if (this.props.paymentInfo === null) {
        return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, "Please wait..."));
      } else {
        console.log("work_with_payment, paymentInfo: ", this.props.paymentInfo); // const orderId = this.props.paymentInfo[0].data.smart_service_id;
        // const orderId = this.props.paymentInfo[0].data.smart_order_id;
        // const orderId = this.props.paymentInfo[0].data.booking_reference;

        var orderId = this.props.paymentInfo[0].data.smart_reference;
        var warnings = this.props.paymentInfo[0].warnings;
        var isPaymentAbsent = this.props.paymentInfo[0].warnings[0].payment;
        console.log("work_with_payment, paymentInfo: isPaymentAbsent ", isPaymentAbsent);
        var isSuccess = this.props.paymentInfo[0].success ? "Your reservation is confirmed and prepaid" : "Please wait..";

        var openInNewTab = function openInNewTab(url) {
          var newWindow = window.open(url, '_blank', 'noopener,noreferrer');
          if (newWindow) newWindow.opener = null;
        };

        var CryptoJS = __webpack_require__(81354);

        var searchDataEncrypted = localStorage.getItem('search_data');
        var bytes = CryptoJS.AES.decrypt(searchDataEncrypted, "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby");
        var searchData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)); // Хотел расшиврофать state и восстановить его в Redux

        /* const stateEncrypted = localStorage.getItem('state');
        const stateEncryptedBytes  = CryptoJS.AES.decrypt(stateEncrypted, process.env.REACT_APP_PRIVATE_KEY);
        const state = JSON.parse(stateEncryptedBytes.toString(CryptoJS.enc.Utf8));
        console.log('state: ', state); */

        if (isPaymentAbsent === "absent") {
          var lastLocation = localStorage.getItem('lastLocation');
          return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
            to: lastLocation
          });
        } else {
          return /*#__PURE__*/react.createElement("div", {
            style: {
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '2vh',
              marginBottom: '3vh'
            }
          }, /*#__PURE__*/react.createElement("div", {
            "class": "VoucherText"
          }, /*#__PURE__*/react.createElement("h4", {
            style: {
              marginRight: '5px'
            }
          }, "Thank you."), /*#__PURE__*/react.createElement("h4", {
            style: {
              marginRight: '5px'
            }
          }, isSuccess, "."), /*#__PURE__*/react.createElement("h4", {
            style: {
              marginRight: '5px'
            }
          }, " Your booking ID is ", orderId, "."), /*#__PURE__*/react.createElement("h4", {
            style: {
              marginRight: '5px'
            }
          }, "Click here to "), /*#__PURE__*/react.createElement("button", {
            style: {
              backgroundColor: '#337ab7',
              color: '#fff',
              borderColor: '#2e6da4',
              border: '1px solid transparent',
              borderRadius: '4px',
              padding: '6px 12px',
              cursor: 'pointer'
            },
            onClick: function onClick() {
              // this.props.fetchPaymentVoucher(orderId);
              // openInNewTab(this.props.voucherData.data.voucherUrl);
              openInNewTab(_this.props.paymentInfo[0].data.voucherUrl);
            }
          }, "Get voucher")), /*#__PURE__*/react.createElement(CartDetails_CartDetails, {
            cart: searchData,
            cartClass: 'CartDetailsSummary'
          }));
        }
        /*if (this.props.voucherData !== null) {
            return (
                <div>
                    <div>Hi!</div>
                    <div>{orderId}</div>
                    <div>{isSuccess}</div>
                    <button
                        onClick={() => {
                            this.props.fetchPaymentVoucher(orderId);
                            openInNewTab(this.props.voucherData.data.voucherUrl);
                        }}
                    >Get voucher</button>
                    {/!*<div>{this.props.voucherData.data.voucherUrl}</div>*!/}
                </div>
            );
        } else {
            return (
                <div>
                    <div>Hi!</div>
                    <div>{orderId}</div>
                    <div>{isSuccess}</div>
                    <button
                        onClick={this.props.fetchPaymentVoucher(orderId)}
                    >Get voucher</button>
                </div>
            );
        }*/

      }
    }
  }]);

  return PaymentResult;
}(react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var payment = _ref.payment,
      voucher = _ref.voucher;
  console.log("work_with_payment: mapStateToProps ");
  var paymentInfo = payment.paymentInfo,
      loading = payment.loading;
  var voucherData = voucher.voucherData;

  if (paymentInfo !== null) {
    console.log("work_with_payment: paymentInfo: ", paymentInfo);
    console.log("work_with_payment: loading", loading);
  }

  if (voucher !== null) {
    console.log("work_with_payment: voucherDoc: ", voucher);
    console.log("work_with_payment: loading", loading);
  }

  return {
    paymentInfo: paymentInfo,
    voucherData: voucherData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  console.log("work_with_payment: mapDispatchToProps ");
  var paymentService = ownProps.paymentService;
  return {
    fetchPaymentInfo: fetchPaymentInfo(paymentService, dispatch) // fetchPaymentVoucher: (orderId) => fetchPaymentVoucher(paymentService, dispatch, orderId)

  };
};

/* harmony default export */ const LiqPay_PaymentResult = (helpers_compose(HOC_withPaymentService(), (0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps))(PaymentResult));
;// CONCATENATED MODULE: ./src/Components/Pages/RoutesAndLinks/RouteSwitcher.js


 // import {Router} from 'react-router'
// import {UserOutlined} from '@ant-design/icons'



 // import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from '../PageComponents/MiddleMenuComponents'

 // import {TOURS} from '../PageComponents/DropDownTours'

 // import { Search } from '../FirstPageofSearchModule/SearchFront'















 // import { findByLabelText } from '@testing-library/react'







var RouteSwitcher_supportedLangs = config.supportedLangs.join('|');
var RouteSwitcher = function RouteSwitcher(props) {
  // console.log('ROUTESWITCHER_PROPS',props)
  // const {locale} = useIntl();
  var dispatch = (0,es/* useDispatch */.I0)();
  var lang = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locale;
  });
  (0,react.useEffect)(function () {
    dispatch(changeLang());
  }, []);
  var sitePageType = SitePageType();
  var sitePageRegion = SitePageRegion();
  var pages = ContentPages(lang);
  var htlpages = HotelPagesFooter();
  console.log(localizeRoutePath('/')); // console.log(localizeRoutePath('/'))

  console.log('SITEPAGES', pages); // console.log('LOCALE', locale)

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(LocalizationSwitch, null, /*#__PURE__*/react.createElement(LocalizationRoute, {
    path: "/helmet",
    component: PageDevices_Helmet
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/sign_in",
    component: Library_Authorization_Login
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/sign_up",
    component: Authorization_Register
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/payment_result",
    component: LiqPay_PaymentResult
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/forgroups",
    component: FORGROUPS
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/",
    component: HomePage
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/search_results_tours",
    component: GuestItem_GuestItem
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/search_results_hotels",
    component: HotelItems
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/hotel_details",
    component: HotelDetails
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/tour_details",
    component: TourDetails
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/booking_form",
    component: BookingForm_BookingForm_BookingForm
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/toptours",
    component: TopToursDetails
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/offlineSummary",
    component: OfflineSummary_OfflineSummary
  }), /*#__PURE__*/react.createElement(LocalizationRoute, {
    exact: true,
    path: "/test",
    component: MenuPageGenerator_NotFound
  }), pages && pages.map(function (page) {
    if (page.name.includes('Hotels') === true) {
      return /*#__PURE__*/react.createElement(LocalizationRoute, {
        exact: true,
        path: "/sitepages_hotels",
        component: CityHotels
      });
    } else {
      return /*#__PURE__*/react.createElement(LocalizationRoute, {
        exact: true,
        path: "/sitepages",
        component: PureContent
      });
    }
  })));
};
;// CONCATENATED MODULE: ./src/Components/Pages/RoutesAndLinks/SitePagesList.js














var SitePagesList = function SitePagesList(_ref) {
  var sitepage_type = _ref.sitepage_type;

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var dispatch = (0,es/* useDispatch */.I0)();
  var lang = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locale;
  });
  (0,react.useEffect)(function () {
    dispatch(changeLang());
  }, []);
  var pages = ContentPages(locale);
  console.log('LOCALE', locale);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("ul", null, messages.length > 0 ? messages.map(function (page) {
    console.log('PAGE', page);

    if (sitepage_type.sitepage_type_id === page.sitepage_type_id && sitepage_type.sitepage_type_id !== 7) {
      if (page.name.includes('Hotels') === true) {
        return /*#__PURE__*/react.createElement("li", {
          key: page.id
        }, /*#__PURE__*/react.createElement("h2", null, /*#__PURE__*/react.createElement(LocalizationNavLink, {
          to: "/sitepages_hotels/?name=".concat(page.name.replace(/\s/g, '-').toLowerCase(), ",id=").concat(page.id)
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: page.title.map(function (item1) {
            return item1.text;
          })
        }))));
      } else {
        return /*#__PURE__*/react.createElement("li", {
          key: page.id
        }, /*#__PURE__*/react.createElement("h2", null, /*#__PURE__*/react.createElement(LocalizationNavLink, {
          to: "/sitepages/?name=".concat(page.name.replace(/\s/g, '-').toLowerCase(), ",id=").concat(page.id)
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: page.title.map(function (item1) {
            return item1.text;
          })
        }))));
      }
    }
  }) : null));
};
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/DropDownTours.js





var TOURS = function TOURS(props) {
  console.log('[TOURS PROPS] : ', props);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/users/').then(function (res) {
      if (res.status === 404) {
        throw 'Page error';
      }

      return res.json();
    }).then(function (user) {
      console.log(user);
      setUser(user);
    })["catch"](function (error) {
      console.log('error', error);
      setUser(undefined);
    }); // return () => {
    // 	setUser (null);
    // }
  }, []);

  if (user === null) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Loading");
  }

  if (user === undefined) {
    return /*#__PURE__*/React.createElement(NotFound, null);
  } // const unMount = () => {
  // 	return setUser(null);
  // }


  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, user && user.map(function (pax) {
    return /*#__PURE__*/React.createElement("li", {
      className: "toursListLi",
      key: pax.id
    }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: "/list/:".concat(pax.id),
      render: function render(props) {
        return /*#__PURE__*/React.createElement(ListItem, {
          oneuser: pax,
          location: props.location
        });
      }
    }), /*#__PURE__*/React.createElement(Link, {
      to: "/list/:".concat(pax.id)
    }, pax.name)));
  }))));
};
var ListItem = function ListItem(props) {
  var oneuser = props.oneuser,
      location = props.location,
      match = props.match;
  console.log(props, "/list/:".concat(oneuser.id) === location.pathname, match, location);

  if ("/list/:".concat(oneuser.id) === location.pathname) {
    return /*#__PURE__*/React.createElement("div", {
      className: "list_2"
    }, /*#__PURE__*/React.createElement("p", null, oneuser.id, " "), /*#__PURE__*/React.createElement("p", null, oneuser.name), /*#__PURE__*/React.createElement("p", null, oneuser.username), /*#__PURE__*/React.createElement(React.Fragment, null, Object.keys(oneuser.company).map(function (key) {
      return /*#__PURE__*/React.createElement("p", {
        key: key
      }, oneuser.company[key]);
    })));
  }

  return null;
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/HomeOutlined.js + 1 modules
var HomeOutlined = __webpack_require__(59271);
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/ResponsiveHeader/LargeScreensNavBar.js



var LargeScreensNavBar = function LargeScreensNavBar(_ref) {
  var sitepage_type = _ref.sitepage_type;
  return /*#__PURE__*/react.createElement("div", {
    "class": "nav_big"
  }, /*#__PURE__*/react.createElement(NavComponent, {
    linkClassName: "nav_big_link",
    sitepage_type: sitepage_type,
    navClass: "wrapper_nav_big_link"
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/menubar.js

var MenuBar = function MenuBar() {
  return /*#__PURE__*/react.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "bars",
    "class": "svg-inline--fa fa-bars fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }));
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/menuclose.js

var MenuClose = function MenuClose() {
  return /*#__PURE__*/react.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "times-circle",
    "class": "svg-inline--fa fa-times-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
  }));
};
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/ResponsiveHeader/SmallScreensNavBar.js


 // import {CloseOutlined , MenuOutlined } from '@ant-design/icons'




var SmallScreensNavBar = function SmallScreensNavBar(_ref) {
  var width = _ref.width,
      sitepage_type = _ref.sitepage_type;
  console.log("SMALL", sitepage_type); // declare 'translate' as a state variable
  // console.log('PAGES', pages)

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      translate = _useState2[0],
      setTranslate = _useState2[1];

  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react.createElement("button", {
    className: "hamburger-btn",
    onClick: function onClick() {
      return setTranslate(!translate);
    }
  }, "  ", translate ? /*#__PURE__*/react.createElement("span", {
    "class": "CloseMenuIcon"
  }, /*#__PURE__*/react.createElement(MenuClose, null)) : /*#__PURE__*/react.createElement("span", {
    "class": "MenuButtonIcon"
  }, /*#__PURE__*/react.createElement(MenuBar, null))), /*#__PURE__*/react.createElement("div", {
    id: "sidebar-list" //   style={{width:width*0.8}}
    ,
    className: "".concat(translate ? "addTransition" : "removeTransition")
  }, /*#__PURE__*/react.createElement(NavComponent // navClass="nav-small"
  , {
    linkClassName: "nav-small-link" // pages={pages}
    ,
    sitepage_type: sitepage_type,
    width: width,
    onClick: function onClick() {
      return setTranslate(true);
    } //set translate to true to hide the sidebar list

  })));
};

/* harmony default export */ const ResponsiveHeader_SmallScreensNavBar = (SmallScreensNavBar);
;// CONCATENATED MODULE: ./src/Components/Library/Localization/LangSelectionTool.js









var LangSelectionTool = function LangSelectionTool() {
  // const {pathname} = useLocation();
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var history = (0,react_router/* useHistory */.k6)();
  var Option = es_select/* default.Option */.Z.Option;
  var supportedLangs = config.supportedLangs;
  var dispatch = (0,es/* useDispatch */.I0)();

  var SelectRooms = function SelectRooms(value) {
    // setSelectedLang(value)
    history.push("/".concat(value));
    dispatch(getLangResponse(value)); // dispatch(changeLang(value))
  }; // const getMatchingRoute = (language) =>{
  //Get hte key of the route the user is currently on
  // const[,route] = pathname.split(locale);
  // const routeKey = Object.keys(messages).find(key=>messages[key] === route);
  //Find the matching route for the new language
  // console.log('TEST',routeKey)
  // const matchingRoute = supportedLangs[language][routeKey];
  //Return localized route
  // console.log('TEST:', `/${language}` + matchingRoute)
  // return `/${language}` + matchingRoute;
  // }


  return /*#__PURE__*/react.createElement(es_select/* default */.Z, {
    defaultValue: locale,
    onChange: SelectRooms,
    bordered: true,
    size: "small"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, supportedLangs && supportedLangs.map(function (item) {
    return /*#__PURE__*/react.createElement(Option // className='AvailableOptions'  
    , {
      value: item,
      key: item
    }, item);
  })));
};
;// CONCATENATED MODULE: ./src/Components/Library/Images/Rotary/engflag_Images/engflag_ImgID1.gif
/* harmony default export */ const engflag_ImgID1 = (__webpack_require__.p + "6de9c5599be23a534291196d6eb719ec.gif");
;// CONCATENATED MODULE: ./src/Components/Library/Images/Rotary/frflag.svg
/* harmony default export */ const frflag = (__webpack_require__.p + "8956e1ce55252f03dd18aaeb8feb6e89.svg");
;// CONCATENATED MODULE: ./src/Components/Library/Images/Rotary/ukrflag.svg
/* harmony default export */ const ukrflag = (__webpack_require__.p + "43f1f960e34e421b14e835a8bd0084a6.svg");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Library/Localization/LangSelectionFlagsCSS.css
var LangSelectionFlagsCSS = __webpack_require__(3004);
;// CONCATENATED MODULE: ./src/Components/Library/Localization/LangSelectionFlagsCSS.css

      
      
      
      
      
      
      
      
      

var LangSelectionFlagsCSS_options = {};

LangSelectionFlagsCSS_options.styleTagTransform = (styleTagTransform_default());
LangSelectionFlagsCSS_options.setAttributes = (setAttributesWithoutAttributes_default());

      LangSelectionFlagsCSS_options.insert = insertBySelector_default().bind(null, "head");
    
LangSelectionFlagsCSS_options.domAPI = (styleDomAPI_default());
LangSelectionFlagsCSS_options.insertStyleElement = (insertStyleElement_default());

var LangSelectionFlagsCSS_update = injectStylesIntoStyleTag_default()(LangSelectionFlagsCSS/* default */.Z, LangSelectionFlagsCSS_options);




       /* harmony default export */ const Localization_LangSelectionFlagsCSS = (LangSelectionFlagsCSS/* default */.Z && LangSelectionFlagsCSS/* default.locals */.Z.locals ? LangSelectionFlagsCSS/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/Localization/LangSelectionFlags.js














var LangSelectionFlags = function LangSelectionFlags() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var _useState = (0,react.useState)(locale),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      align = _useState2[0],
      setAlign = _useState2[1];

  var history = (0,react_router/* useHistory */.k6)();
  var Option = es_select/* default.Option */.Z.Option;
  var supportedLangs = config.supportedLangs;
  var dispatch = (0,es/* useDispatch */.I0)();

  var toggler = function toggler(value) {
    return function (_) {
      setAlign(value);
      history.push("/".concat(value));
      dispatch(getLangResponse(value));
    };
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(LangSwitcher, {
    name: 'align',
    changeHandler: toggler,
    active: align
    /*switcherWidth={`${width*0.2}px`}*/

  }, /*#__PURE__*/react.createElement(LangSwitcherItem, {
    value: "uk"
  }, /*#__PURE__*/react.createElement("img", {
    width: "50px",
    height: "40px",
    style: {
      marginBottom: '-4px',
      marginTop: '-2px'
    },
    src: ukrflag
  })), /*#__PURE__*/react.createElement(LangSwitcherItem, {
    value: "en"
  }, /*#__PURE__*/react.createElement("img", {
    width: "50px",
    height: "34px",
    src: engflag_ImgID1
  })), /*#__PURE__*/react.createElement(LangSwitcherItem, {
    value: "fr"
  }, /*#__PURE__*/react.createElement("img", {
    width: "50px",
    height: "40px",
    style: {
      marginBottom: '-4px',
      marginTop: '-2px'
    },
    src: frflag
  }))));
};

var LangSwitcher = function LangSwitcher(props) {
  var children = props.children,
      active = props.active,
      name = props.name,
      changeHandler = props.changeHandler,
      switcherWidth = props.switcherWidth; // const [width, height] = useWindowWidthAndHeight();

  return /*#__PURE__*/react.createElement("div", {
    className: "LangSwitcher"
  }, "  ", react.Children.count(children) > 0 && /*#__PURE__*/react.createElement(react.Fragment, null, react.Children.map(children, function (child) {
    if ( /*#__PURE__*/react.isValidElement(child)) {
      return /*#__PURE__*/react.cloneElement(child, {
        active: child.props.value === active,
        changeHandler: changeHandler(child.props.value)
      });
    }
  })));
};

var LangSwitcherItem = function LangSwitcherItem(props) {
  var children = props.children,
      active = props.active,
      changeHandler = props.changeHandler,
      value = props.value;
  console.log(props);
  return /*#__PURE__*/react.createElement("button", {
    className: active ? 'LangSwitcher_item active' : "LangSwitcher_item",
    onClick: changeHandler
  }, children);
};
;// CONCATENATED MODULE: ./src/Components/Library/Icons/logoRotary.svg
/* harmony default export */ const logoRotary = (__webpack_require__.p + "a9c5e1e6406cdf186593741e55e8a105.svg");
;// CONCATENATED MODULE: ./src/Components/Pages/PageComponents/ResponsiveHeader/Header.js















 // import Helmet from '../../Helmet'









 // import { findByLabelText } from '@testing-library/react'









 // import './ResponsiveCSS.css'

var TopMenu = function TopMenu() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  var dispatch = (0,es/* useDispatch */.I0)();

  var logOut = function logOut() {
    dispatch(auth_logout());
  };

  var _useWindowWidthAndHei = WindowResizeHook_useWindowWidthAndHeight(),
      _useWindowWidthAndHei2 = (0,slicedToArray/* default */.Z)(_useWindowWidthAndHei, 2),
      width = _useWindowWidthAndHei2[0],
      height = _useWindowWidthAndHei2[1];

  var lang = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locale;
  });
  var currency = (0,es/* useSelector */.v9)(function (state) {
    return state.currency.currencies;
  });
  var promoCode = (0,es/* useSelector */.v9)(function (state) {
    return state.promocode.promocode;
  });
  (0,react.useEffect)(function () {
    dispatch(changeLang());
  }, []);
  (0,react.useEffect)(function () {
    dispatch(getCurrency());
  }, []);
  var pages = ContentPages(lang); // const pages = ContentPages('uk');

  console.log('[PAGES HEADER]', pages); //////////////////////////////////////////////////////
  // const current_locale = useSelector(state => state.localization.current_locale);
  // const locales = useSelector(state => state.localization.locales);

  var sitePageType = SitePageType();
  var sitePageRegion = SitePageRegion();
  var headerClass = promoCode === '1497' ? 'WhiteLableTopMenu' : 'topMenu';
  var backGroundImg = promoCode === '1497' ? "url(".concat(RotaryHeader_2) : null;
  var rotaryLogo = promoCode === '1497' ? "url(".concat(logoRotary) : null;
  var topMenuRight = promoCode === '1497' ? 'NotVisibleMenu' : 'topMenu_right';
  var middleMenu = promoCode === '1497' ? 'NotVisibleMenu' : "".concat(width > 1000 ? 'middleMenu' : 'middleMenuSmallScreen');
  return /*#__PURE__*/react.createElement("header", {
    "class": "wrapperMain"
  }, /*#__PURE__*/react.createElement("div", {
    className: headerClass,
    style: {
      backgroundImage: backGroundImg
    }
  }, promoCode === '1497' ? /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      maxWidth: '80%'
    }
  }, /*#__PURE__*/react.createElement(LocalizationNavLink, {
    exact: true,
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '75%',
      marginTop: '2vh'
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: logoRotary
  }))), /*#__PURE__*/react.createElement("div", {
    style: {
      marginLeft: '4vw',
      marginTop: '3vh'
    }
  }, /*#__PURE__*/react.createElement(LangSelectionFlags, null))) : null, /*#__PURE__*/react.createElement("div", {
    className: topMenuRight
  }, /*#__PURE__*/react.createElement("a", {
    href: "mailto:inquiry@arktur.ua"
  }, "inquiry@arktur.ua"), currentUser.user_id !== 1426 ? /*#__PURE__*/react.createElement(LocalizationNavLink, {
    exact: true,
    to: "/".concat(lang, "/testcities"),
    activeClassName: "active"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/react.createElement(UserOutlined/* default */.Z, {
    className: "UserOutlinedIcon"
  }), /*#__PURE__*/react.createElement("div", null, "MY ACCOUNT"))) : true, /*#__PURE__*/react.createElement(react.Fragment, null, sitePageType && sitePageType.map(function (item) {
    return sitePageRegion && sitePageRegion.map(function (item1) {
      if (item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header") === true && item.sitepage_type_name.includes("UPPER") === true) {
        return (
          /*#__PURE__*/
          // <div>

          /* <h3>{item.sitepage_type_name}</h3> */
          react.createElement(NavComponent, {
            sitepage_type: item,
            linkClassName: "Upper"
          }) // </div> 

        );
      }
    });
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  }, currentUser.user_id !== 1426 ? /*#__PURE__*/react.createElement(LocalizationNavLink, {
    exact: true,
    to: "/",
    activeClassName: "active",
    onClick: logOut
  }, "LOG OUT") : /*#__PURE__*/react.createElement(LocalizationNavLink, {
    exact: true,
    to: "/sign_in",
    activeClassName: "active"
  }, "SIGN In")), /*#__PURE__*/react.createElement(LocalizationNavLink, {
    exact: true,
    to: "/"
  }, /*#__PURE__*/react.createElement(HomeOutlined/* default */.Z, {
    className: "HomeIcon"
  })))), /*#__PURE__*/react.createElement("div", {
    className: middleMenu
  }, /*#__PURE__*/react.createElement(LocalizationNavLink, {
    exact: true,
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    "class": "ArkturDMClogo",
    src: ArkturDMClogo,
    alt: "Arktur DMC logo"
  })), /*#__PURE__*/react.createElement(react.Fragment, null, sitePageType && sitePageType.map(function (item) {
    return sitePageRegion && sitePageRegion.map(function (item1) {
      if (item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Header") === true && item.sitepage_type_name.includes("MIDDLE") === true) {
        return /*#__PURE__*/react.createElement(react.Fragment, null, width > 1000 ? /*#__PURE__*/react.createElement(LargeScreensNavBar // pages={pages}/>
        , {
          sitepage_type: item
        }) : /*#__PURE__*/react.createElement(ResponsiveHeader_SmallScreensNavBar, {
          navClass: "nav-small",
          linkClassName: "nav-small-link" // pages={pages}
          ,
          sitepage_type: item,
          width: width
        }));
      }
    });
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: '2vw'
    }
  }, /*#__PURE__*/react.createElement(LangSelectionTool, null))), /*#__PURE__*/react.createElement(RouteSwitcher, null));
};
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(10682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(34051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(31555);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Pages/RoutesAndLinks/footer.css
var footer = __webpack_require__(15366);
;// CONCATENATED MODULE: ./src/Components/Pages/RoutesAndLinks/footer.css

      
      
      
      
      
      
      
      
      

var footer_options = {};

footer_options.styleTagTransform = (styleTagTransform_default());
footer_options.setAttributes = (setAttributesWithoutAttributes_default());

      footer_options.insert = insertBySelector_default().bind(null, "head");
    
footer_options.domAPI = (styleDomAPI_default());
footer_options.insertStyleElement = (insertStyleElement_default());

var footer_update = injectStylesIntoStyleTag_default()(footer/* default */.Z, footer_options);




       /* harmony default export */ const RoutesAndLinks_footer = (footer/* default */.Z && footer/* default.locals */.Z.locals ? footer/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Pages/RoutesAndLinks/Footer.js












var Footer = function Footer() {
  var sitePageType = SitePageType();
  var sitePageRegion = SitePageRegion();
  var pages = ContentPages();
  console.log('[PAGES_SMART]', pages, sitePageType, sitePageRegion);
  return /*#__PURE__*/react.createElement("footer", {
    "class": "footer"
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: "xs,sm,md,lg,xl",
    style: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '80%'
    }
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3
  }, /*#__PURE__*/react.createElement(react.Fragment, null, sitePageType && sitePageType.map(function (item) {
    if (item.sitepage_type_id !== 7) {
      return sitePageRegion && sitePageRegion.map(function (item1) {
        if (item.sitepage_region_id === item1.sitepage_region_id && item1.sitepage_region_name.includes("Footer")) {
          console.log('ITEM', item, "ITEM1", item1);
          return /*#__PURE__*/react.createElement(Col/* default */.Z, {
            Col: true,
            lg: true
          }, /*#__PURE__*/react.createElement("div", {
            "class": "footerLinks"
          }, /*#__PURE__*/react.createElement("h3", null, item.sitepage_type_name), /*#__PURE__*/react.createElement(SitePagesList, {
            sitepage_type: item
          })));
        }
      });
    }
  })))));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/App.css
var App = __webpack_require__(39087);
;// CONCATENATED MODULE: ./src/App.css

      
      
      
      
      
      
      
      
      

var App_options = {};

App_options.styleTagTransform = (styleTagTransform_default());
App_options.setAttributes = (setAttributesWithoutAttributes_default());

      App_options.insert = insertBySelector_default().bind(null, "head");
    
App_options.domAPI = (styleDomAPI_default());
App_options.insertStyleElement = (insertStyleElement_default());

var App_update = injectStylesIntoStyleTag_default()(App/* default */.Z, App_options);




       /* harmony default export */ const src_App = (App/* default */.Z && App/* default.locals */.Z.locals ? App/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Library/PageDevices/ScrollToTop.js


var ScrollToTop = function ScrollToTop() {
  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  (0,react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/provider.js + 8 modules
var provider = __webpack_require__(29558);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(14039);
;// CONCATENATED MODULE: ./src/LocalizationWrapper.js





 // import locales from './Components/Library/Localization/locales'
// import messages from './Archive/Translations/common'



 ////



 ////



var LocalizationWrapper = function LocalizationWrapper(props) {
  var locale = props.match.params.locale;
  var dispatch = (0,es/* useDispatch */.I0)();
  var redux_locale = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.current_locale;
  });
  var switcher_locale = (0,es/* useSelector */.v9)(function (state) {
    return state.locale.locales;
  });
  (0,react.useEffect)(function () {
    dispatch(changeLang(locale));
  }, [locale]);
  (0,react.useEffect)(function () {
    dispatch(getLangResponse());
  }, []);
  var contentPages = ContentPages(locale); //  const contentPages = ContentPages(switcher_locale)
  // const contentPages = ContentPages(redux_locale)
  // console.log('LOCALE:',locale,'REDUX_LOCALE:',redux_locale,'SWITCHER_LOCALE:',switcher_locale, 'CONTENTPAGES:',contentPages)

  return /*#__PURE__*/react.createElement(provider/* default */.Z, {
    locale: locale // locale={switcher_locale}
    // messages={contentPages}
    ,
    messages: localStorage.getItem("".concat(locale, "_page_titles")) ? JSON.parse(localStorage.getItem("".concat(locale, "_page_titles"))) : contentPages
  }, /*#__PURE__*/react.createElement(ScrollToTop, null), /*#__PURE__*/react.createElement(TopMenu, null), /*#__PURE__*/react.createElement(Footer, null));
};
;// CONCATENATED MODULE: ./src/Redux/services/payment.service.js





var PaymentService = /*#__PURE__*/(0,createClass/* default */.Z)(function PaymentService() {
  (0,classCallCheck/* default */.Z)(this, PaymentService);

  (0,defineProperty/* default */.Z)(this, "data", []);

  (0,defineProperty/* default */.Z)(this, "getPaymentInfo", function () {
    console.log("work_with_payment: getPaymentInfo ");

    var CryptoJS = __webpack_require__(81354);

    var orderDataEncrypted = localStorage.getItem('orderData');
    var bytes = CryptoJS.AES.decrypt(orderDataEncrypted, "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby");
    var orderData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    var ActionRQ = orderData; // return axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))

    return axios_default().post("".concat("http://smartbooker.biz/", "interface/xmlsubj/"), JSON.stringify({
      ActionRQ: ActionRQ
    })).then(function (response) {
      var responseData = response.data;
      console.log("work_with_payment: responseData: getPaymentInfo ", responseData);
      return responseData;
    })["catch"](function (error) {
      console.log('[axios error]: ', error);
    });
  });
}
/* getPaymentVoucher = (service_id) => {
    console.log("work_with_payment: getPaymentVoucher ");
    const ActionRQ = {
        "username":"Serodynringa",
        "password":"%tmMJZbABm6cB@tY",
        "user_id" :1426,
        "action":"GetPaymentVoucherRQ",
        "data" :
            {
                "site_service_id" : 1,		// index of the service in the site
                "smart_service_id" : service_id,	// booking_entity.id in Smart
                "site_client_id" : 3,		// it must be BUYER only
                "smart_client_id" : 1426	// it must be BUYER only
            }
    };
    // return axios.post('http://smartbooker.biz/interface/xmlsubj/', JSON.stringify({ActionRQ}))
    return axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
        .then((response) => {
            const responseData = response.data;
            console.log("work_with_payment: responseData: getPaymentVoucher ", responseData);
            // console.log("work_with_payment: response ", response);
            return responseData;
            // return response;
        })
        .catch(error =>{
            console.log('[axios error]: ', error)
        });
}; */
);


// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(90071);
;// CONCATENATED MODULE: ./src/Redux/helpers/history.js


var global = __webpack_require__(58908);

var isServer = !(typeof global.window !== 'undefined' && global.window.document && global.window.document.createElement); // console.log('isServer: ', isServer);

var history_history = isServer ? (0,esm_history/* createMemoryHistory */.PP)({
  initialEntries: ['/']
}) : (0,esm_history/* createBrowserHistory */.lX)();
;// CONCATENATED MODULE: ./src/App.js








 // import AxiosDemo from './Redux/components/pages/Axios';











 // import { setOrderId } from './Redux/actions'
// import messages from './Archive/Translations/common'



console.log('ENV', "sandbox_7WLZNn1ilq3BSZWgX9bkixgkbHYL49a1M4Pmymby");
var paymentService = new PaymentService();
var App_supportedLangs = config.supportedLangs.join('|');

function App_App() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  }),
      currentUser = _useSelector.user;

  var dispatch = (0,es/* useDispatch */.I0)(); // dispatch(setOrderId(25));

  (0,react.useEffect)(function () {
    if (currentUser) {
      console.log('currentUser: ', currentUser);
    }
  }, [currentUser]);

  var logOut = function logOut() {
    dispatch(auth_logout());
  };

  return /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, {
    history: history_history
  }, /*#__PURE__*/react.createElement(PaymentServiceProvider, {
    value: paymentService
  }, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/:locale(".concat(App_supportedLangs, ")"),
    component: LocalizationWrapper
  }), /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
    to: config.defaultLang
  }))));
}

/* harmony default export */ const src_App_0 = (App_App);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/* import() */ 736).then(__webpack_require__.bind(__webpack_require__, 53217)).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ const src_reportWebVitals = (reportWebVitals);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(53894);
;// CONCATENATED MODULE: ./src/Redux/reducers/posts.js



function posts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function posts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? posts_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : posts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initState = {
  items: [],
  loaded: false,
  errors: [],
  single: null,
  single_loaded: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants_GET_POSTS_REQ:
      return posts_objectSpread(posts_objectSpread({}, state), {}, {
        loaded: false
      });

    case constants_GET_POSTS_RES:
      return posts_objectSpread(posts_objectSpread({}, state), {}, {
        loaded: true,
        items: action.payload
      });

    case 'REMOVE_POST':
      return posts_objectSpread(posts_objectSpread({}, state), {}, {
        posts: state.posts.filter(function (post) {
          return post.id !== action.payload;
        })
      });

    case constants_GET_POSTS_ERR:
      return posts_objectSpread(posts_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const posts = (reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/hotels.js



function hotels_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function hotels_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hotels_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hotels_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var hotels_initState = {
  hotels: [],
  hotels_loaded: false,
  hotels_errors: [],
  general_hotels: [],
  general_hotels_loaded: false,
  general_hotels_errors: [],
  hotel_name: '',
  hotel_name_loaded: false,
  hotel_name_errors: []
};

var hotels_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : hotels_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_HOTELS_REQ:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        hotels_loaded: false
      });

    case GET_HOTELS_RES:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        hotels_loaded: true,
        hotels: action.payload
      });

    case GET_HOTELS_ERR:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        hotels_errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_GENERAL_HOTELS_REQ:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        general_hotels_loaded: false
      });

    case GET_GENERAL_HOTELS_RES:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        general_hotels_loaded: true,
        general_hotels: action.payload
      });

    case GET_GENERAL_HOTELS_ERR:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        general_hotels_errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case constants_GET_HOTEL_NAME_REQ:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        hotel_name_loaded: false
      });

    case constants_GET_HOTEL_NAME_RES:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        hotel_name_loaded: true,
        hotel_name: action.payload
      });

    case GET_HOTEL_NAME_ERR:
      return hotels_objectSpread(hotels_objectSpread({}, state), {}, {
        hotel_name_errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const reducers_hotels = (hotels_reducer); // import { GET_DESC_REQ, GET_DESC_RES , GET_DESC_ERR,GET_EN_DESC_REQ, GET_EN_DESC_RES , GET_EN_DESC_ERR} from '../constants';
// import { GET_IMAGES_REQ, GET_IMAGES_RES , GET_IMAGES_ERR} from '../constants'
// const initState = {
// 	parts: [],
// 	loaded: false,
// 	errors: [],
//     en_parts: [],
//     en_parts_loaded: false,
//     errors: [],
//     images: [],
//     images_loaded: false,
//     errors: []
// }
// const reducer = ( state = initState, action ) => {
// 	switch( action.type ){
// 		case GET_DESC_REQ:
// 			return({
// 				...state,
// 				loaded: false
// 			})
// 		case GET_DESC_RES:
// 			return({
// 				...state,
// 				loaded: true,
// 				parts: action.payload
// 			})
// 		// case 'REMOVE_DESC':
// 		// 	return({
//         //         ...state,
//         //         htls: state.htls.filter( htl => htl.id !== action.payload )
// 		// 	})
// 		case GET_DESC_ERR:
// 			return({
// 				...state,
// 				errors: [...state.errors, action.error ]
// 			})
//             case GET_EN_DESC_REQ:
// 			return({
// 				...state,
// 				en_parts_loaded: false
// 			})
// 		case GET_EN_DESC_RES:
// 			return({
// 				...state,
// 				en_parts_loaded: true,
// 				en_parts: action.payload
//             })
//             case GET_EN_DESC_ERR:
//                 return({
//                     ...state,
//                     errors: [...state.errors, action.error ]
//                 })
//                 case GET_DESC_ERR:
// 			return({
// 				...state,
// 				errors: [...state.errors, action.error ]
// 			})
//         case GET_IMAGES_REQ:
// 			return({
// 				...state,
// 				images_loaded: false
// 			})
// 		case GET_IMAGES_RES:
// 			return({
// 				...state,
// 				images_loaded: true,
// 				images: action.payload
//             })
//             case GET_IMAGES_ERR:
//                 return({
//                     ...state,
//                     errors: [...state.errors, action.error ]
//                 })
//         default:
// 			return state;
//     }
// }
// export default reducer;
;// CONCATENATED MODULE: ./src/Redux/reducers/tours.js



var _initState;

function tours_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function tours_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? tours_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tours_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var tours_initState = (_initState = {
  touritems: [],
  touritems_loaded: false,
  errors: [],
  en_touritems: [],
  en_touritems_loaded: false
}, (0,defineProperty/* default */.Z)(_initState, "errors", []), (0,defineProperty/* default */.Z)(_initState, "images", []), (0,defineProperty/* default */.Z)(_initState, "images_loaded", false), (0,defineProperty/* default */.Z)(_initState, "errors", []), (0,defineProperty/* default */.Z)(_initState, "content", []), (0,defineProperty/* default */.Z)(_initState, "content_loaded", false), (0,defineProperty/* default */.Z)(_initState, "errors", []), _initState);

var tours_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tours_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants_GET_TOUR_REQ:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        touritems_loaded: false
      });

    case constants_GET_TOUR_RES:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        touritems_loaded: true,
        touritems: action.payload
      });

    case constants_GET_TOUR_ERR:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case constants_GET_EN_TOUR_REQ:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        en_touritems_loaded: false
      });

    case constants_GET_EN_TOUR_RES:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        en_touritems_loaded: true,
        en_touritems: action.payload
      });

    case constants_GET_EN_TOUR_ERR:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case constants_GET_IMAGES_TOUR_REQ:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        images_loaded: false
      });

    case constants_GET_IMAGES_TOUR_RES:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        images_loaded: true,
        images: action.payload
      });

    case constants_GET_IMAGES_TOUR_ERR:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_CONTENT_REQ:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        content_loaded: false
      });

    case GET_CONTENT_RES:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        content_loaded: true,
        content: action.payload
      });

    case GET_CONTENT_ERR:
      return tours_objectSpread(tours_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const tours = (tours_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/cities.js



function cities_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function cities_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? cities_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : cities_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var cities_initState = (0,defineProperty/* default */.Z)({
  locs: [],
  loc_loaded: false,
  errors: [],
  gen_locs: [],
  gen_loc_loaded: false
}, "errors", []);

var cities_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cities_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_GEO_REQ:
      return cities_objectSpread(cities_objectSpread({}, state), {}, {
        loc_loaded: false
      });

    case GET_GEO_RES:
      return cities_objectSpread(cities_objectSpread({}, state), {}, {
        loc_loaded: true,
        locs: action.payload
      });
    // case 'REMOVE_DESC':
    // 	return({
    //         ...state,
    //         htls: state.htls.filter( htl => htl.id !== action.payload )
    // 	})

    case GET_GEO_ERR:
      return cities_objectSpread(cities_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_GENERAL_GEO_REQ:
      return cities_objectSpread(cities_objectSpread({}, state), {}, {
        gen_loc_loaded: false
      });

    case GET_GENERAL_GEO_RES:
      return cities_objectSpread(cities_objectSpread({}, state), {}, {
        gen_loc_loaded: true,
        gen_locs: action.payload
      });

    case GET_GENERAL_GEO_ERR:
      return cities_objectSpread(cities_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const cities = (cities_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/content.js



function content_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function content_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? content_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : content_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var content_initState = {
  content: [],
  content_loaded: false,
  errors: []
};

var content_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : content_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_CONTENT_REQ:
      return content_objectSpread(content_objectSpread({}, state), {}, {
        content_loaded: false
      });

    case GET_CONTENT_RES:
      return content_objectSpread(content_objectSpread({}, state), {}, {
        content_loaded: true,
        content: action.payload
      });

    case GET_CONTENT_ERR:
      return content_objectSpread(content_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const content = (content_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/pages.js



var pages_initState;

function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pages_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var reducers_pages_initState = (pages_initState = {
  pages: [],
  pages_loaded: false,
  errors: [],
  purepage: [],
  purepage_loaded: false
}, (0,defineProperty/* default */.Z)(pages_initState, "errors", []), (0,defineProperty/* default */.Z)(pages_initState, "pageType", []), (0,defineProperty/* default */.Z)(pages_initState, "pageType_loaded", false), (0,defineProperty/* default */.Z)(pages_initState, "errors", []), (0,defineProperty/* default */.Z)(pages_initState, "pageRegion", []), (0,defineProperty/* default */.Z)(pages_initState, "pageRegion_loaded", false), (0,defineProperty/* default */.Z)(pages_initState, "errors", []), (0,defineProperty/* default */.Z)(pages_initState, "hotelPagesFooter", []), (0,defineProperty/* default */.Z)(pages_initState, "hotelPagesFooter_loaded", false), (0,defineProperty/* default */.Z)(pages_initState, "errors", []), (0,defineProperty/* default */.Z)(pages_initState, "galleryPage", []), (0,defineProperty/* default */.Z)(pages_initState, "galleryPage_loaded", false), (0,defineProperty/* default */.Z)(pages_initState, "errors", []), pages_initState);

var pages_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducers_pages_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_PAGES_REQ:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        pages_loaded: false
      });

    case GET_PAGES_RES:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        pages_loaded: true,
        pages: action.payload
      });

    case GET_PAGES_ERR:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_PurePage_REQ:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        purepage_loaded: false
      });

    case GET_PurePage_RES:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        purepage_loaded: true,
        purepage: action.payload
      });

    case GET_PurePage_ERR:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_PageTYPE_REQ:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        pageType_loaded: false
      });

    case GET_PageTYPE_RES:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        pageType_loaded: true,
        pageType: action.payload
      });

    case GET_PageTYPE_ERR:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_PageREGION_REQ:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        pageRegion_loaded: false
      });

    case GET_PageREGION_RES:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        pageRegion_loaded: true,
        pageRegion: action.payload
      });

    case GET_PageREGION_ERR:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_hotelPAGESfooter_REQ:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        hotelPagesFooter_loaded: false
      });

    case GET_hotelPAGESfooter_RES:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        hotelPagesFooter_loaded: true,
        hotelPagesFooter: action.payload
      });

    case GET_hotelPAGESfooter_ERR:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case constants_GET_PhotoGalleryPage_REQ:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        galleryPage_loaded: false
      });

    case constants_GET_PhotoGalleryPage_RES:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        galleryPage_loaded: true,
        galleryPage: action.payload
      });

    case constants_GET_PhotoGalleryPage_ERR:
      return pages_objectSpread(pages_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const pages = (pages_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/auth.js


function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? auth_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


console.log("user: ", localStorage.getItem("user"));
var user = JSON.parse(localStorage.getItem("user"));
var notRegisteredUser = {
  user_id: 1426,
  company_id: 1361,
  company_name: "hotelsukraine.com.ua"
};
var initialState = user ? {
  isLoggedIn: true,
  user: user
} : {
  isLoggedIn: false,
  user: notRegisteredUser
};
/* harmony default export */ function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case REGISTER_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isLoggedIn: false
      });

    case REGISTER_FAIL:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isLoggedIn: false
      });

    case LOGIN_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: payload.user
      });

    case LOGIN_FAIL:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: notRegisteredUser
      });

    case LOGOUT:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: notRegisteredUser
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./src/Redux/reducers/order.js

var order_initialState = {
  orderId: null
};

function order() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : order_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === SET_ORDER_ID) {
    console.log("work_with_payment: reducer ");
    return Object.assign({}, state, {
      orderId: action.payload
    });
  }

  return state;
}

/* harmony default export */ const reducers_order = (order);
;// CONCATENATED MODULE: ./src/Redux/reducers/voucher.js

var voucher_initialState = {
  voucherData: null
};

function voucher() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : voucher_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === FETCH_PAYMENT_VOUCHER_SUCCESS) {
    console.log("work_with_payment: reducer3 ", action);
    var payload = action.payload;
    /*const {data} = payload[0];
    console.log("work_with_payment: reducer4 ", data);*/

    return Object.assign({}, state, {
      voucherData: payload
    });
  }

  return state;
}

/* harmony default export */ const reducers_voucher = (voucher);
;// CONCATENATED MODULE: ./src/Redux/reducers/payment.js

var payment_initialState = {
  paymentInfo: null,
  loading: true,
  error: null
};

function payment() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : payment_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === types_SET_PAYMENT_INFO) {
    console.log("work_with_payment: ");
    var payload = action.payload;
    console.log("mapStateToProps_paymentInfo: reducer ");
    return Object.assign({}, state, {
      paymentInfo: payload,
      loading: true
    });
  }

  if (action.type === types_GET_PAYMENT_INFO) {
    var _payload = action.payload;
    console.log("work_with_payment: reducer ");
    return Object.assign({}, state, {
      paymentInfo: _payload,
      loading: true
    });
  }

  if (action.type === FETCH_PAYMENT_INFO_REQUEST) {
    var _payload2 = action.payload;
    console.log("work_with_payment: reducer ");
    return Object.assign({}, state, {
      paymentInfo: _payload2,
      loading: true
    });
  }

  if (action.type === FETCH_SET_PAYMENT_INFO_SUCCESS) {
    var _payload3 = action.payload;
    console.log("mapStateToProps_paymentInfo: reducer ");
    return Object.assign({}, state, {
      paymentInfo: _payload3,
      loading: true
    });
  }

  if (action.type === FETCH_PAYMENT_DATA_SUCCESS) {
    var _payload4 = action.payload;
    console.log("work_with_payment: reducer ");
    return Object.assign({}, state, {
      paymentInfo: _payload4,
      loading: false
    });
  }

  if (action.type === FETCH_SET_PAYMENT_INFO_ERROR) {
    var _payload5 = action.payload;
    console.log("work_with_payment: reducer ");
    return Object.assign({}, state, {
      paymentInfo: _payload5,
      loading: true
    });
  }

  if (action.type === FETCH_PAYMENT_DATA_ERROR) {
    var _payload6 = action.payload;
    console.log("work_with_payment: reducer ");
    return Object.assign({}, state, {
      paymentInfo: _payload6,
      loading: true
    });
  }

  return state;
}

/* harmony default export */ const reducers_payment = (payment);
;// CONCATENATED MODULE: ./src/Redux/reducers/message.js

var message_initialState = {};
/* harmony default export */ function reducers_message() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : message_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case SET_MESSAGE:
      return {
        message: payload
      };

    case CLEAR_MESSAGE:
      return {
        message: ""
      };

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./src/Redux/reducers/toptours.js



function toptours_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function toptours_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? toptours_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : toptours_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var toptours_initState = {
  toptours: [],
  toptours_loaded: false,
  errors: []
};

var toptours_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : toptours_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_TOPTOURS_REQ:
      return toptours_objectSpread(toptours_objectSpread({}, state), {}, {
        toptours_loaded: false
      });

    case GET_TOPTOURS_RES:
      return toptours_objectSpread(toptours_objectSpread({}, state), {}, {
        toptours_loaded: true,
        toptours: action.payload
      });

    case GET_TOPTOURS_ERR:
      return toptours_objectSpread(toptours_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const toptours = (toptours_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/paxchoice.js



function paxchoice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function paxchoice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? paxchoice_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : paxchoice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var paxchoice_initState = {
  pax: {
    adults: 2,
    children: 0,
    rooms: 1
  },
  pax_loaded: true,
  errors: [],
  pax_inner_search: {
    adults: 2,
    children: 0,
    rooms: 1
  },
  pax_inner_search_loaded: true,
  errors_inner_search: []
};

var paxchoice_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : paxchoice_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('ACTION_pax', action);

  switch (action.type) {
    case GET_PAX_REQ:
      return paxchoice_objectSpread(paxchoice_objectSpread({}, state), {}, {
        pax_loaded: true
      });

    case GET_PAX_RES:
      return paxchoice_objectSpread(paxchoice_objectSpread({}, state), {}, {
        pax_loaded: true,
        pax: action.payload
      });

    case GET_PAX_ERR:
      return paxchoice_objectSpread(paxchoice_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_PAX_INNER_REQ:
      return paxchoice_objectSpread(paxchoice_objectSpread({}, state), {}, {
        pax_inner_search_loaded: true
      });

    case GET_PAX_INNER_RES:
      return paxchoice_objectSpread(paxchoice_objectSpread({}, state), {}, {
        pax_inner_search_loaded: true,
        pax_inner_search: action.payload
      });

    case GET_PAX_INNER_ERR:
      return paxchoice_objectSpread(paxchoice_objectSpread({}, state), {}, {
        errors_inner_search: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const paxchoice = (paxchoice_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/hotelcontent.js



function hotelcontent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function hotelcontent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hotelcontent_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hotelcontent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var hotelcontent_initState = {
  hotelcontent: [],
  hotelcontent_loaded: false,
  hotelerrors: []
};

var hotelcontent_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : hotelcontent_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_HOTEL_CONTENT_REQ:
      return hotelcontent_objectSpread(hotelcontent_objectSpread({}, state), {}, {
        hotelcontent_loaded: false
      });

    case GET_HOTEL_CONTENT_RES:
      return hotelcontent_objectSpread(hotelcontent_objectSpread({}, state), {}, {
        hotelcontent_loaded: true,
        hotelcontent: action.payload
      });

    case GET_HOTEL_CONTENT_ERR:
      return hotelcontent_objectSpread(hotelcontent_objectSpread({}, state), {}, {
        hotelerrors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const hotelcontent = (hotelcontent_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/hotelrates.js



function hotelrates_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function hotelrates_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hotelrates_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hotelrates_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var hotelrates_initState = {
  hotelrates: [],
  hotelrates_loaded: false,
  hotelrates_errors: []
};

var hotelrates_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : hotelrates_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_HOTEL_RATES_REQ:
      return hotelrates_objectSpread(hotelrates_objectSpread({}, state), {}, {
        hotelrates_loaded: false
      });

    case GET_HOTEL_RATES_RES:
      return hotelrates_objectSpread(hotelrates_objectSpread({}, state), {}, {
        hotelrates_loaded: true,
        hotelrates: action.payload
      });

    case GET_HOTEL_RATES_ERR:
      return hotelrates_objectSpread(hotelrates_objectSpread({}, state), {}, {
        hotelrates_errors: [].concat((0,toConsumableArray/* default */.Z)(state.hotelrates_errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const hotelrates = (hotelrates_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/hotelroomschoice.js



function hotelroomschoice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function hotelroomschoice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hotelroomschoice_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hotelroomschoice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var hotelroomschoice_initState = {
  // pax: {adults:2,children:0,infants:0,rooms:1},
  room: [],
  room_loaded: true,
  errors: []
};

var hotelroomschoice_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : hotelroomschoice_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('ROOMS_ACTION_pax', action);

  switch (action.type) {
    case GET_HTL_ROOM_NUMBER_REQ:
      return hotelroomschoice_objectSpread(hotelroomschoice_objectSpread({}, state), {}, {
        room_loaded: true
      });

    case GET_HTL_ROOM_NUMBER_RES:
      return hotelroomschoice_objectSpread(hotelroomschoice_objectSpread({}, state), {}, {
        room_loaded: true,
        room: action.payload
      });

    case GET_HTL_ROOM_NUMBER_ERR:
      return hotelroomschoice_objectSpread(hotelroomschoice_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const hotelroomschoice = (hotelroomschoice_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/availabilitychoice.js



function availabilitychoice_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function availabilitychoice_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? availabilitychoice_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : availabilitychoice_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var availabilitychoice_initState = {
  avail_rooms: [],
  avail_loaded: true,
  errors: []
};

var availabilitychoice_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : availabilitychoice_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('ACTION_avail', action);

  switch (action.type) {
    case GET_AVAIL_REQ:
      return availabilitychoice_objectSpread(availabilitychoice_objectSpread({}, state), {}, {
        avail_loaded: true
      });

    case GET_AVAIL_RES:
      return availabilitychoice_objectSpread(availabilitychoice_objectSpread({}, state), {}, {
        avail_loaded: true,
        avail_rooms: action.payload
      });

    case GET_AVAIL_ERR:
      return availabilitychoice_objectSpread(availabilitychoice_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const availabilitychoice = (availabilitychoice_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/hotelsearchdata.js



var hotelsearchdata_initState;

function hotelsearchdata_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function hotelsearchdata_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hotelsearchdata_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hotelsearchdata_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var reducers_hotelsearchdata_initState = (hotelsearchdata_initState = {
  hotel_search_data: [],
  loaded: false,
  errors: [],
  occupancy_search_data: []
}, (0,defineProperty/* default */.Z)(hotelsearchdata_initState, "loaded", false), (0,defineProperty/* default */.Z)(hotelsearchdata_initState, "errors", []), hotelsearchdata_initState);

var hotelsearchdata_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducers_hotelsearchdata_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('ACTION_avail', action);

  switch (action.type) {
    case GET_HTL_SEARCH_REQ:
      return hotelsearchdata_objectSpread(hotelsearchdata_objectSpread({}, state), {}, {
        loaded: true
      });

    case GET_HTL_SEARCH_RES:
      return hotelsearchdata_objectSpread(hotelsearchdata_objectSpread({}, state), {}, {
        loaded: true,
        hotel_search_data: action.payload
      });

    case GET_HTL_SEARCH_ERR:
      return hotelsearchdata_objectSpread(hotelsearchdata_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    case GET_SEARCH_OCCUPANCY_REQ:
      return hotelsearchdata_objectSpread(hotelsearchdata_objectSpread({}, state), {}, {
        loaded: true
      });

    case GET_SEARCH_OCCUPANCY_RES:
      return hotelsearchdata_objectSpread(hotelsearchdata_objectSpread({}, state), {}, {
        loaded: true,
        occupancy_search_data: action.payload
      });

    case GET_SEARCH_OCCUPANCY_ERR:
      return hotelsearchdata_objectSpread(hotelsearchdata_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const hotelsearchdata = (hotelsearchdata_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/locale.js



function locale_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function locale_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? locale_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : locale_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var locale_initState = {
  current_locale: config.defaultLang,
  current_locale_loaded: true,
  current_locale_errors: [],
  locales: '',
  locales_loaded: false,
  errors: []
};

var locale_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : locale_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_LANG_REQ:
      return locale_objectSpread(locale_objectSpread({}, state), {}, {
        locales_loaded: true
      });

    case GET_LANG_RES:
      return locale_objectSpread(locale_objectSpread({}, state), {}, {
        locales_loaded: true,
        locales: action.payload
      });

    case GET_LANG_ERR:
      return locale_objectSpread(locale_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });
    // case CHANGE_LOCALE:
    // 	return({
    // 		...state,
    // 		current_locale: action.payload
    // 	})

    case GET_LOCALE_REQ:
      return locale_objectSpread(locale_objectSpread({}, state), {}, {
        current_locale_loaded: true
      });

    case GET_LOCALE_RES:
      return locale_objectSpread(locale_objectSpread({}, state), {}, {
        current_locale_loaded: true,
        current_locale: action.payload
      });

    case GET_LOCALE_ERR:
      return locale_objectSpread(locale_objectSpread({}, state), {}, {
        current_locale_errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const locale = (locale_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/hotelcities.js



function hotelcities_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function hotelcities_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? hotelcities_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : hotelcities_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var hotelcities_initState = {
  hotel_cities: [],
  hotel_cities_loaded: false,
  hotels_cities_errors: []
};

var hotelcities_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : hotelcities_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_HOTEL_CITIES_REQ:
      return hotelcities_objectSpread(hotelcities_objectSpread({}, state), {}, {
        hotel_cities_loaded: false
      });

    case GET_HOTEL_CITIES_RES:
      return hotelcities_objectSpread(hotelcities_objectSpread({}, state), {}, {
        hotel_cities_loaded: true,
        hotel_cities: action.payload
      });

    case GET_HOTEL_CITIES_ERR:
      return hotelcities_objectSpread(hotelcities_objectSpread({}, state), {}, {
        hotel_cities_errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const hotelcities = (hotelcities_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/currency.js



function currency_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function currency_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? currency_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : currency_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var currency_initState = {
  currencies: [],
  currencies_loaded: false,
  errors: []
};

var currency_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currency_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_CURRENCY_REQ:
      return currency_objectSpread(currency_objectSpread({}, state), {}, {
        currencies_loaded: false
      });

    case GET_CURRENCY_RES:
      return currency_objectSpread(currency_objectSpread({}, state), {}, {
        currencies_loaded: true,
        currencies: action.payload
      });

    case GET_CURRENCY_ERR:
      return currency_objectSpread(currency_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const currency = (currency_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/promocode.js



function promocode_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function promocode_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? promocode_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : promocode_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var promocode_initState = {
  promocode: '',
  promocode_loaded: true,
  errors: []
};

var promocode_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : promocode_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('ACTION_pax', action);

  switch (action.type) {
    case GET_PROMOCODE_REQ:
      return promocode_objectSpread(promocode_objectSpread({}, state), {}, {
        promocode_loaded: true
      });

    case GET_PROMOCODE_RES:
      return promocode_objectSpread(promocode_objectSpread({}, state), {}, {
        promocode_loaded: true,
        promocode: action.payload
      });

    case GET_PROMOCODE_ERR:
      return promocode_objectSpread(promocode_objectSpread({}, state), {}, {
        errors: [].concat((0,toConsumableArray/* default */.Z)(state.errors), [action.error])
      });

    default:
      return state;
  }
};

/* harmony default export */ const promocode = (promocode_reducer);
;// CONCATENATED MODULE: ./src/Redux/reducers/index.js






















 //{combineReducers} - это библиотека из редакса для комбинации нескольких редьюсеров

var root_reducer = (0,redux/* combineReducers */.UY)({
  posts: posts,
  hotels: reducers_hotels,
  tours: tours,
  cities: cities,
  content: content,
  pages: pages,
  toptours: toptours,
  auth: auth,
  order: reducers_order,
  voucher: reducers_voucher,
  payment: reducers_payment,
  message: reducers_message,
  paxchoice: paxchoice,
  hotelcontent: hotelcontent,
  hotelrates: hotelrates,
  hotelroomschoice: hotelroomschoice,
  availabilitychoice: availabilitychoice,
  hotelsearchdata: hotelsearchdata,
  locale: locale,
  hotelcities: hotelcities,
  currency: currency,
  promocode: promocode
});
/* harmony default export */ const reducers = (root_reducer);
;// CONCATENATED MODULE: ./src/Redux/redux/middlewares/logger.js
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('[LOGGER]', action);
      return next(action);
    };
  };
};
function loggerFn(store) {
  return function (next) {
    return function (action) {
      console.log('[LOGGER]', action);
      return next(action);
    };
  };
}
;// CONCATENATED MODULE: ./src/Redux/redux/middlewares/promise.js

var promise = function promise(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (action.type === "PROMISE") {
        var _action$actions = (0,slicedToArray/* default */.Z)(action.actions, 3),
            startAction = _action$actions[0],
            successAction = _action$actions[1],
            failureAction = _action$actions[2];

        dispatch({
          type: startAction
        });
        return action.promise.then(function (res) {
          return res.json();
        }).then(function (res) {
          dispatch({
            type: successAction,
            payload: res
          });
        })["catch"](function (err) {
          dispatch({
            type: failureAction,
            error: err
          });
        });
      }

      return next(action);
    };
  };
};
;// CONCATENATED MODULE: ./src/Redux/redux/store.js






var composeEnhancers =  false ? 0 : redux/* compose */.qC;
var middlewares = (0,redux/* applyMiddleware */.md)(logger, redux_thunk_es/* default */.Z, promise);
var store = (0,redux/* createStore */.MT)(reducers, composeEnhancers(middlewares));
console.log('[STORE]', store.getState());
/* harmony default export */ const redux_store = (store);
;// CONCATENATED MODULE: ./src/index.prod.js


 // import './index.css';




react_dom.hydrate( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
  store: redux_store
}, /*#__PURE__*/react.createElement(src_App_0, null))), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

src_reportWebVitals();

/***/ }),

/***/ 39087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* .App {\n  text-align: center;\n} */\n\n/* .AppDatepicker{\n  /* border: none; */\n  /* font-size: 25px; */\n  /* width: 20vw; */\n/* } */ \n\n/* .App-logo {\n  height: 40vmin;\n  pointer-events: none;\n} */\n\n/* @media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n} */\n\n/* .App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n} */\n/* \n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nlabel {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 350px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n} */", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;oBACoB;EAClB,qBAAqB;EACrB,iBAAiB;AACnB,MAAM;;AAEN;;;GAGG;;AAEH;;;;GAIG;;AAEH;;;;;;;;;GASG;AACH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA6CG","sourcesContent":["/* .App {\n  text-align: center;\n} */\n\n/* .AppDatepicker{\n  /* border: none; */\n  /* font-size: 25px; */\n  /* width: 20vw; */\n/* } */ \n\n/* .App-logo {\n  height: 40vmin;\n  pointer-events: none;\n} */\n\n/* @media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n} */\n\n/* .App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n} */\n/* \n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nlabel {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 350px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 69045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "label {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 350px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 50px auto 25px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Library/Authorization/Login.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;EAClB,+CAA+C;EAC/C,kDAAkD;EAClD,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;AACpB","sourcesContent":["label {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 350px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 50px auto 25px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 47506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".galleryCSS{\n    position: relative;\n    height: 100%;\n    width: 100vh;\n    margin: 0 auto;\n    overflow: hidden;  \n} \n\n.prevGallery, .nextGallery {\n    cursor: pointer;\n    /* position: absolute; */\n    /* z-index: 100; */\n    top: 45%;\n    width: auto;\n    padding: 16px;\n    color: rgb(3,3,63);\n    background-color: rgb(255,255,255,0.6);\n    font-weight: bold;\n    font-size: 30px;\n    transition: 0.6s ease;\n  \n  }\n  \n  .nextGallery {\n    right: 0;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  .leftGallery {\n    padding-right: 50px;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  \n  .prevGallery:hover, .nextGallery:hover {\n    background-color: rgba(102, 98, 98, 0.8);\n    color: white;\n    border-radius: 5vw;\n  }\n\n", "",{"version":3,"sources":["webpack://./src/Components/Library/HotelPhotoGallery/GalleryCss.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;IACjB,eAAe;IACf,qBAAqB;;EAEvB;;EAEA;IACE,QAAQ;IACR,gCAAgC;EAClC;;EAEA;IACE,mBAAmB;IACnB,gCAAgC;EAClC;;;EAGA;IACE,wCAAwC;IACxC,YAAY;IACZ,kBAAkB;EACpB","sourcesContent":[".galleryCSS{\n    position: relative;\n    height: 100%;\n    width: 100vh;\n    margin: 0 auto;\n    overflow: hidden;  \n} \n\n.prevGallery, .nextGallery {\n    cursor: pointer;\n    /* position: absolute; */\n    /* z-index: 100; */\n    top: 45%;\n    width: auto;\n    padding: 16px;\n    color: rgb(3,3,63);\n    background-color: rgb(255,255,255,0.6);\n    font-weight: bold;\n    font-size: 30px;\n    transition: 0.6s ease;\n  \n  }\n  \n  .nextGallery {\n    right: 0;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  .leftGallery {\n    padding-right: 50px;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  \n  .prevGallery:hover, .nextGallery:hover {\n    background-color: rgba(102, 98, 98, 0.8);\n    color: white;\n    border-radius: 5vw;\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 47620:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hotelWrapper{\n    font-family: 'Arial';\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    width: 60vw;\n    color: darkslategrey;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.htlOutline ,\n.htlAddress{\n    font-family: 'Arial';\n    display: grid;\n    grid-template-columns: 25vw 20vw;\n    margin-bottom: 4vw;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: justify;\n    /* row-gap: 1vw; */\n    background-color:#cce2f5 ;\n    padding: 1vw; \n    width: 45vw;\n    /* border-radius: 7px; */\n}\n\n/* span{\n    font-size: 15px;\n    border: 0.5px solid #5f6366;\n    line-height: 20px;\n    \n} */\n\n.anons , \n.description {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    text-align: justify;\n    font-size: 15px;\n}\n\n/* .htlAddress{\n    font-family: 'Arial';\n    display: \"flex\";\n    flex-direction: \"column\";\n    justify-content: 'center';\n} */", "",{"version":3,"sources":["webpack://./src/Components/Library/HotelsUkraineTestComponents/hotels.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;IAEI,oBAAoB;IACpB,aAAa;IACb,gCAAgC;IAChC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,wBAAwB;AAC5B;;AAEA;;;;;GAKG;;AAEH;;IAEI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;;;;GAKG","sourcesContent":[".hotelWrapper{\n    font-family: 'Arial';\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    width: 60vw;\n    color: darkslategrey;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.htlOutline ,\n.htlAddress{\n    font-family: 'Arial';\n    display: grid;\n    grid-template-columns: 25vw 20vw;\n    margin-bottom: 4vw;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: justify;\n    /* row-gap: 1vw; */\n    background-color:#cce2f5 ;\n    padding: 1vw; \n    width: 45vw;\n    /* border-radius: 7px; */\n}\n\n/* span{\n    font-size: 15px;\n    border: 0.5px solid #5f6366;\n    line-height: 20px;\n    \n} */\n\n.anons , \n.description {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    text-align: justify;\n    font-size: 15px;\n}\n\n/* .htlAddress{\n    font-family: 'Arial';\n    display: \"flex\";\n    flex-direction: \"column\";\n    justify-content: 'center';\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 16451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".descriptionUl{\n    width: 65vw;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5vh;\n    font-family: 'Tahoma';\n}\n\n.descriptionLi{\n    display: flex;\n    flex-direction: column;\n    text-align: justify;\n    border: 2px solid #d4e5f7;\n    border-radius: 5px;\n    background: #dce5fc;\n    padding: 1vw 2vw;\n    color: #001959;\n    margin-bottom: 1vh;\n    /* height: 10vh; */\n}\n\n.descriptionLi div{\n    text-align: right;\n    /* padding-left: ; */\n}\n\n.descriptionContent{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.searchFront{\n    /*the container must be positioned relative:*/\n    position: relative;\n    display: inline-block;\n  }\n\n  .availableButton{\n    padding: 0.5vw 1vw;\n    width: 10vw;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: #5EB82F;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n  }\n\n  .availableButton:hover{\n    cursor:pointer;\n    background-color: rgb(8, 131, 14);\n    color: rgb(250, 250, 141)\n  }\n\n  .searchrender_Wrapper{\n    display: flex;\n    flex-direction: row;\n    /* width: 30vw; */\n  }\n\n\n\n\n\n ", "",{"version":3,"sources":["webpack://./src/Components/Library/HotelsUkraineTestComponents/tour.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,+BAA+B;IAC/B,YAAY;IACZ,oBAAoB;EACtB;;EAEA;IACE,cAAc;IACd,iCAAiC;IACjC;EACF;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,iBAAiB;EACnB","sourcesContent":[".descriptionUl{\n    width: 65vw;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5vh;\n    font-family: 'Tahoma';\n}\n\n.descriptionLi{\n    display: flex;\n    flex-direction: column;\n    text-align: justify;\n    border: 2px solid #d4e5f7;\n    border-radius: 5px;\n    background: #dce5fc;\n    padding: 1vw 2vw;\n    color: #001959;\n    margin-bottom: 1vh;\n    /* height: 10vh; */\n}\n\n.descriptionLi div{\n    text-align: right;\n    /* padding-left: ; */\n}\n\n.descriptionContent{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.searchFront{\n    /*the container must be positioned relative:*/\n    position: relative;\n    display: inline-block;\n  }\n\n  .availableButton{\n    padding: 0.5vw 1vw;\n    width: 10vw;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: #5EB82F;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n  }\n\n  .availableButton:hover{\n    cursor:pointer;\n    background-color: rgb(8, 131, 14);\n    color: rgb(250, 250, 141)\n  }\n\n  .searchrender_Wrapper{\n    display: flex;\n    flex-direction: row;\n    /* width: 30vw; */\n  }\n\n\n\n\n\n "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".LangSwitcher{\n    display:flex;\n    flex-direction: row;\n    align-items: flex-start;\n}\n\n.LangSwitcher_item.active,\n.LangSwitcher_item:hover{\n    opacity:0.8;\n    background-color: rgb(38,71,141);\n}\n\n.LangSwitcher_item{ \n    cursor: pointer;\n    border:2px solid white;\n    background-color: white;\n    border-radius:10px;\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Library/Localization/LangSelectionFlagsCSS.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,WAAW;IACX,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":[".LangSwitcher{\n    display:flex;\n    flex-direction: row;\n    align-items: flex-start;\n}\n\n.LangSwitcher_item.active,\n.LangSwitcher_item:hover{\n    opacity:0.8;\n    background-color: rgb(38,71,141);\n}\n\n.LangSwitcher_item{ \n    cursor: pointer;\n    border:2px solid white;\n    background-color: white;\n    border-radius:10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".WrapperAboutUs{\n    display: flex;\n    flex-direction: column;\n}\n\n*{\n    margin:0;\n    padding:0;\n}\n\n\n.container {\n    min-width: 100%;\n    /* height: 100%; */\n    height:30%;\n    background: #065ca3;\n    /* #6194c0; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom:1vw;\n    border-radius: 10px;\n  }\n    .box {\n      position: relative;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n    }\n      .title {\n        /* width: 100%; */\n        position: relative;\n        display: flex;\n        align-items: center;\n        height: 60px;\n      }\n  \n       .container .title .block {\n          /* width: 0%; */\n          height: inherit;\n          background: #ffb510;\n          position: absolute;\n          /* position: relative; */\n          animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;\n          display: flex;\n          border-radius: 10px;\n        }\n  \n        h1 {\n          font-family: 'Poppins';\n          color: #fff;\n          font-size: 32px;\n          -webkit-animation: mainFadeIn 2s forwards;\n          -o-animation: mainFadeIn 2s forwards;\n          animation: mainFadeIn 2s forwards;\n          animation-delay: 1.6s;\n          opacity: 0;\n          display: flex;\n          align-items: baseline;\n          position: relative;\n        }\n              \n          h1 span {\n            /* width:0px; */\n            /* height: 0px; */\n            -webkit-border-radius: 50%;\n            -moz-border-radius: 50%;\n            border-radius: 50%;\n            background: #ffb510;\n            -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;\n            animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;\n            animation-delay: 2s;\n            margin-left: 5px;\n            margin-top: -10px;\n            position: absolute;\n            bottom: 13px;\n            right: -12px;\n          }      \n      \n  \n      .role {\n        width: 100%;\n        position: relative;\n        /* position:absolute; */\n        display: flex;\n        align-items: center;\n        /* height: 20px; */\n        /* margin-top: 0.5vh; */\n      }\n\n        .role .block {\n          width: 0%;\n          /* height: inherit; */\n          line-height:12px;\n          /* background: #e91e63; */\n          background: #8d98f3;\n          position: absolute;\n          animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;\n          animation-delay: 2s;\n          display: flex;\n          border-radius: 10px;\n        }\n  \n        .role p {\n          animation: secFadeIn 2s forwards;\n          animation-delay: 3.2s;\n          opacity: 0;\n           font-weight: 400;\n          font-family: 'Lato';\n          color: #ffffff;\n          font-size: 12px;\n          text-transform: uppercase;\n          letter-spacing: 5px;\n        }\n  \n  @keyframes mainBlock {\n    0% {\n      width: 0%;\n      left: 0;\n  \n    }\n    50% {\n      width: 100%;\n      left: 0;\n  \n    }\n    100% {\n      width: 0;\n      left: 100%;\n    }\n  }\n  \n  @keyframes secBlock {\n    0% {\n      width: 0%;\n      left: 0;\n  \n    }\n    50% {\n      width: 100%;\n      left: 0;\n  \n    }\n    100% {\n      width: 0;\n      left: 100%;\n    }\n  }\n  \n  @keyframes mainFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  \n  @keyframes popIn {\n    0% {\n      width: 0px;\n      height: 0px;\n      background: #e9d856;\n      border: 0px solid #ddd;\n      opacity: 0;\n    }\n    50% {\n      width: 10px;\n      height: 10px;\n      background: #e9d856;\n      opacity: 1;\n      bottom: 45px;\n    }\n     65% {\n        width: 7px;\n      height: 7px;\n        bottom: 0px;\n        width: 15px\n     }\n     80% {\n        width: 10px;\n      height: 10px;\n        bottom: 20px\n     }\n    100% {\n      width: 7px;\n      height: 7px;\n      background: #e9d856;\n      border: 0px solid #222;\n      bottom: 10px;\n  \n    }\n  }\n  \n  @keyframes secFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.5;\n    }\n  }\n\n  .desc {\n    background: #f7eea9;\n    position:relative;\n    left: -1000vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n     animation: top 0.8s forwards;\n     animation-delay: 4s;\n     margin-bottom:2vh;\n     animation-timing-function:linear;\n    padding:2vh 3vw;\n    border-radius: 10px;\n  }\n\n  @keyframes top {\n    0% {\n      opacity: 0;\n       left:0;\n       top:60%;\n    }\n    100% {\n      opacity: 1;\n       left:50%;\n       top: 60%;\n       transform: translateX(-50%); \n    }\n  }\n\n\n.Advantages{\n    display:grid;\n    grid-template-columns: repeat(5, 20%);\n    align-items: center;\n    background-color: #003057;\n    padding: 0 10px;\n    min-height: 20vh;\n    border-radius: 10px;\n    margin-bottom: 2vh;\n\n    position:relative;\n    left: -1000vw;\n     animation: top 0.8s forwards;\n     animation-delay: 4s;\n     animation-timing-function:linear;\n    }\n\n.Wrap{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding:0.5vw 1vw 0.5vw 1vw;\n    color: white;\n    /* position:absolute; */\n    /* top:0; */\n} \n\n.Wrap div{\n    margin-left:auto;\n    margin-right:auto;\n}\n\n.Advantages div{\n    display:flex;\n    justify-content: center;\n    align-self: flex-start;\n}\n\n.purecontentPage .Advantages div{\n    color:white;\n    min-height: 0;\n    text-align: center;\n}\n\n.purecontentPage .Advantages div.Numbers{\n    font-size: 25px;\n    font-weight: bold;\n}\n\n.MainText{\n    position:relative;\n    left: -1000vw;\n     animation: top 0.8s forwards;\n     animation-delay: 4s;\n     animation-timing-function:linear;\n}", "",{"version":3,"sources":["webpack://./src/Components/Library/PageDevices/Animation/AboutUsCSS.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;;AAGA;IACI,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;EACrB;IACE;MACE,kBAAkB;MAClB,aAAa;MACb,uBAAuB;MACvB,sBAAsB;IACxB;MACE;QACE,iBAAiB;QACjB,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,YAAY;MACd;;OAEC;UACG,eAAe;UACf,eAAe;UACf,mBAAmB;UACnB,kBAAkB;UAClB,wBAAwB;UACxB,gEAAgE;UAChE,aAAa;UACb,mBAAmB;QACrB;;QAEA;UACE,sBAAsB;UACtB,WAAW;UACX,eAAe;UACf,yCAAyC;UACzC,oCAAoC;UACpC,iCAAiC;UACjC,qBAAqB;UACrB,UAAU;UACV,aAAa;UACb,qBAAqB;UACrB,kBAAkB;QACpB;;UAEE;YACE,eAAe;YACf,iBAAiB;YACjB,0BAA0B;YAC1B,uBAAuB;YACvB,kBAAkB;YAClB,mBAAmB;YACnB,qEAAqE;YACrE,8DAA8D;YAC9D,mBAAmB;YACnB,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,YAAY;YACZ,YAAY;UACd;;;MAGJ;QACE,WAAW;QACX,kBAAkB;QAClB,uBAAuB;QACvB,aAAa;QACb,mBAAmB;QACnB,kBAAkB;QAClB,uBAAuB;MACzB;;QAEE;UACE,SAAS;UACT,qBAAqB;UACrB,gBAAgB;UAChB,yBAAyB;UACzB,mBAAmB;UACnB,kBAAkB;UAClB,+DAA+D;UAC/D,mBAAmB;UACnB,aAAa;UACb,mBAAmB;QACrB;;QAEA;UACE,gCAAgC;UAChC,qBAAqB;UACrB,UAAU;WACT,gBAAgB;UACjB,mBAAmB;UACnB,cAAc;UACd,eAAe;UACf,yBAAyB;UACzB,mBAAmB;QACrB;;EAEN;IACE;MACE,SAAS;MACT,OAAO;;IAET;IACA;MACE,WAAW;MACX,OAAO;;IAET;IACA;MACE,QAAQ;MACR,UAAU;IACZ;EACF;;EAEA;IACE;MACE,SAAS;MACT,OAAO;;IAET;IACA;MACE,WAAW;MACX,OAAO;;IAET;IACA;MACE,QAAQ;MACR,UAAU;IACZ;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;;EAGA;IACE;MACE,UAAU;MACV,WAAW;MACX,mBAAmB;MACnB,sBAAsB;MACtB,UAAU;IACZ;IACA;MACE,WAAW;MACX,YAAY;MACZ,mBAAmB;MACnB,UAAU;MACV,YAAY;IACd;KACC;QACG,UAAU;MACZ,WAAW;QACT,WAAW;QACX;KACH;KACA;QACG,WAAW;MACb,YAAY;QACV;KACH;IACD;MACE,UAAU;MACV,WAAW;MACX,mBAAmB;MACnB,sBAAsB;MACtB,YAAY;;IAEd;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,YAAY;IACd;EACF;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;KAClB,4BAA4B;KAC5B,mBAAmB;KACnB,iBAAiB;KACjB,gCAAgC;IACjC,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE;MACE,UAAU;OACT,MAAM;OACN,OAAO;IACV;IACA;MACE,UAAU;OACT,QAAQ;OACR,QAAQ;OACR,2BAA2B;IAC9B;EACF;;;AAGF;IACI,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;;IAElB,iBAAiB;IACjB,aAAa;KACZ,4BAA4B;KAC5B,mBAAmB;KACnB,gCAAgC;IACjC;;AAEJ;IACI,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;KACZ,4BAA4B;KAC5B,mBAAmB;KACnB,gCAAgC;AACrC","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');\n\n.WrapperAboutUs{\n    display: flex;\n    flex-direction: column;\n}\n\n*{\n    margin:0;\n    padding:0;\n}\n\n\n.container {\n    min-width: 100%;\n    /* height: 100%; */\n    height:30%;\n    background: #065ca3;\n    /* #6194c0; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom:1vw;\n    border-radius: 10px;\n  }\n    .box {\n      position: relative;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n    }\n      .title {\n        /* width: 100%; */\n        position: relative;\n        display: flex;\n        align-items: center;\n        height: 60px;\n      }\n  \n       .container .title .block {\n          /* width: 0%; */\n          height: inherit;\n          background: #ffb510;\n          position: absolute;\n          /* position: relative; */\n          animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;\n          display: flex;\n          border-radius: 10px;\n        }\n  \n        h1 {\n          font-family: 'Poppins';\n          color: #fff;\n          font-size: 32px;\n          -webkit-animation: mainFadeIn 2s forwards;\n          -o-animation: mainFadeIn 2s forwards;\n          animation: mainFadeIn 2s forwards;\n          animation-delay: 1.6s;\n          opacity: 0;\n          display: flex;\n          align-items: baseline;\n          position: relative;\n        }\n              \n          h1 span {\n            /* width:0px; */\n            /* height: 0px; */\n            -webkit-border-radius: 50%;\n            -moz-border-radius: 50%;\n            border-radius: 50%;\n            background: #ffb510;\n            -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;\n            animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;\n            animation-delay: 2s;\n            margin-left: 5px;\n            margin-top: -10px;\n            position: absolute;\n            bottom: 13px;\n            right: -12px;\n          }      \n      \n  \n      .role {\n        width: 100%;\n        position: relative;\n        /* position:absolute; */\n        display: flex;\n        align-items: center;\n        /* height: 20px; */\n        /* margin-top: 0.5vh; */\n      }\n\n        .role .block {\n          width: 0%;\n          /* height: inherit; */\n          line-height:12px;\n          /* background: #e91e63; */\n          background: #8d98f3;\n          position: absolute;\n          animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;\n          animation-delay: 2s;\n          display: flex;\n          border-radius: 10px;\n        }\n  \n        .role p {\n          animation: secFadeIn 2s forwards;\n          animation-delay: 3.2s;\n          opacity: 0;\n           font-weight: 400;\n          font-family: 'Lato';\n          color: #ffffff;\n          font-size: 12px;\n          text-transform: uppercase;\n          letter-spacing: 5px;\n        }\n  \n  @keyframes mainBlock {\n    0% {\n      width: 0%;\n      left: 0;\n  \n    }\n    50% {\n      width: 100%;\n      left: 0;\n  \n    }\n    100% {\n      width: 0;\n      left: 100%;\n    }\n  }\n  \n  @keyframes secBlock {\n    0% {\n      width: 0%;\n      left: 0;\n  \n    }\n    50% {\n      width: 100%;\n      left: 0;\n  \n    }\n    100% {\n      width: 0;\n      left: 100%;\n    }\n  }\n  \n  @keyframes mainFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  \n  \n  @keyframes popIn {\n    0% {\n      width: 0px;\n      height: 0px;\n      background: #e9d856;\n      border: 0px solid #ddd;\n      opacity: 0;\n    }\n    50% {\n      width: 10px;\n      height: 10px;\n      background: #e9d856;\n      opacity: 1;\n      bottom: 45px;\n    }\n     65% {\n        width: 7px;\n      height: 7px;\n        bottom: 0px;\n        width: 15px\n     }\n     80% {\n        width: 10px;\n      height: 10px;\n        bottom: 20px\n     }\n    100% {\n      width: 7px;\n      height: 7px;\n      background: #e9d856;\n      border: 0px solid #222;\n      bottom: 10px;\n  \n    }\n  }\n  \n  @keyframes secFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.5;\n    }\n  }\n\n  .desc {\n    background: #f7eea9;\n    position:relative;\n    left: -1000vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n     animation: top 0.8s forwards;\n     animation-delay: 4s;\n     margin-bottom:2vh;\n     animation-timing-function:linear;\n    padding:2vh 3vw;\n    border-radius: 10px;\n  }\n\n  @keyframes top {\n    0% {\n      opacity: 0;\n       left:0;\n       top:60%;\n    }\n    100% {\n      opacity: 1;\n       left:50%;\n       top: 60%;\n       transform: translateX(-50%); \n    }\n  }\n\n\n.Advantages{\n    display:grid;\n    grid-template-columns: repeat(5, 20%);\n    align-items: center;\n    background-color: #003057;\n    padding: 0 10px;\n    min-height: 20vh;\n    border-radius: 10px;\n    margin-bottom: 2vh;\n\n    position:relative;\n    left: -1000vw;\n     animation: top 0.8s forwards;\n     animation-delay: 4s;\n     animation-timing-function:linear;\n    }\n\n.Wrap{\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding:0.5vw 1vw 0.5vw 1vw;\n    color: white;\n    /* position:absolute; */\n    /* top:0; */\n} \n\n.Wrap div{\n    margin-left:auto;\n    margin-right:auto;\n}\n\n.Advantages div{\n    display:flex;\n    justify-content: center;\n    align-self: flex-start;\n}\n\n.purecontentPage .Advantages div{\n    color:white;\n    min-height: 0;\n    text-align: center;\n}\n\n.purecontentPage .Advantages div.Numbers{\n    font-size: 25px;\n    font-weight: bold;\n}\n\n.MainText{\n    position:relative;\n    left: -1000vw;\n     animation: top 0.8s forwards;\n     animation-delay: 4s;\n     animation-timing-function:linear;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 74255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --duration: 5s;\n    --ease: linear; \n    --main-bg-color: rgb(235,214,188);  \n   }\n\n.svgContainer{\n    height: 50%;\n    width: 100%;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.digit circle {\n     animation: dash var(--duration) var(--ease) alternate infinite;\n     animation-name: circle-draw;\n     stroke-dashoffset: -1;\n     stroke-dasharray: 1 1;\n     stroke-linejoin: round;\n     stroke-linecap: round;\n     /* stroke-dashoffset: -1.2; */\n     /* stroke-dasharray: 1 1.2; */\n     /* stroke-opacity: 0.5; */\n      }\n\n.digit path {\n    /* stroke: var(--color); */\n   stroke-dashoffset: -1;\n    stroke-dasharray: 550;\n    animation: stroke var(--duration) var(--ease) alternate infinite ;\n    animation-name: path-draw;   \n    stroke-linejoin: round;\n     /*stroke-linecap: round;\n     stroke-dashoffset: -4;\n    /* stroke-dasharray: 1 1.2;*/\n}\n\n.digit{\n  transform: scale(0.9);\n    animation-name: digit;\n    animation: digit var(--duration) ease alternate infinite;\n    animation-delay: calc((var(--i) * 1s));;\n        }\n\nsvg:nth-child(1){\n --x-offset: 150%;\n}\nsvg:nth-child(2){\n--x-offset: 50%;\n    }\nsvg:nth-child(3){\n--x-offset: -50%;\n}\n\nsvg:nth-child(4){\n--x-offset: -150%;\n}\n\nsvg:nth-child(1){\n --y-offset: calc(25% - 8%)\n}\nsvg:nth-child(2){\n  --y-offset: calc(-25% + 8%)\n }\nsvg:nth-child(3){\n --y-offset: calc(25% - 8%)\n}\nsvg:nth-child(4){\n --y-offset: calc(25% - 8%)\n}\n\n@keyframes digit{\n    from, 25% {\n        transform: translate(var(--x-offset,0), var(--y-offset,0)) scale(1) ;\n    }\n    50% {\n        transform: translate(0%, var(--y-offset)) scale(1) ;\n    }\n    75%, to{\n        transform: none scale(1) ;\n     }\n    }\n\n.digits {\n    display: flex;\n    flex-direction: row;\n    /* animation: sin var(--duration) infinite */\n}\n\n\n@keyframes path-draw {\n        0%, 43% {\n            stroke-dashoffset: 550;\n        }\n        90%, 100% {\n            stroke-dashoffset: 0;\n        }\n} \n\n@keyframes circle-draw {\n        0% {\n            stroke-dasharray: 0 1 0.3 0.3; stroke-dashoffset: 1;\n        }\n       18%, 55%{\n        stroke-dasharray: 1 1; stroke-dashoffset: -2;\n        }\n        70% , 100% {\n            stroke-dashoffset: -3;\n        }\n}", "",{"version":3,"sources":["webpack://./src/Components/Library/PageDevices/Animation/yearanimationCSS.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,cAAc;IACd,iCAAiC;GAClC;;AAEH;IACI,WAAW;IACX,WAAW;IACX,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;EACxC,kBAAkB;AACpB;;AAEA;KACK,8DAA8D;KAC9D,2BAA2B;KAC3B,qBAAqB;KACrB,qBAAqB;KACrB,sBAAsB;KACtB,qBAAqB;KACrB,6BAA6B;KAC7B,6BAA6B;KAC7B,yBAAyB;MACxB;;AAEN;IACI,0BAA0B;GAC3B,qBAAqB;IACpB,qBAAqB;IACrB,iEAAiE;IACjE,yBAAyB;IACzB,sBAAsB;KACrB;;gCAE2B;AAChC;;AAEA;EACE,qBAAqB;IACnB,qBAAqB;IACrB,wDAAwD;IACxD,sCAAsC;QAClC;;AAER;CACC,gBAAgB;AACjB;AACA;AACA,eAAe;IACX;AACJ;AACA,gBAAgB;AAChB;;AAEA;AACA,iBAAiB;AACjB;;AAEA;CACC;AACD;AACA;EACE;CACD;AACD;CACC;AACD;AACA;CACC;AACD;;AAEA;IACI;QACI,oEAAoE;IACxE;IACA;QACI,mDAAmD;IACvD;IACA;QACI,yBAAyB;KAC5B;IACD;;AAEJ;IACI,aAAa;IACb,mBAAmB;IACnB,4CAA4C;AAChD;;;AAGA;QACQ;YACI,sBAAsB;QAC1B;QACA;YACI,oBAAoB;QACxB;AACR;;AAEA;QACQ;YACI,6BAA6B,EAAE,oBAAoB;QACvD;OACD;QACC,qBAAqB,EAAE,qBAAqB;QAC5C;QACA;YACI,qBAAqB;QACzB;AACR","sourcesContent":[":root {\n    --duration: 5s;\n    --ease: linear; \n    --main-bg-color: rgb(235,214,188);  \n   }\n\n.svgContainer{\n    height: 50%;\n    width: 100%;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.digit circle {\n     animation: dash var(--duration) var(--ease) alternate infinite;\n     animation-name: circle-draw;\n     stroke-dashoffset: -1;\n     stroke-dasharray: 1 1;\n     stroke-linejoin: round;\n     stroke-linecap: round;\n     /* stroke-dashoffset: -1.2; */\n     /* stroke-dasharray: 1 1.2; */\n     /* stroke-opacity: 0.5; */\n      }\n\n.digit path {\n    /* stroke: var(--color); */\n   stroke-dashoffset: -1;\n    stroke-dasharray: 550;\n    animation: stroke var(--duration) var(--ease) alternate infinite ;\n    animation-name: path-draw;   \n    stroke-linejoin: round;\n     /*stroke-linecap: round;\n     stroke-dashoffset: -4;\n    /* stroke-dasharray: 1 1.2;*/\n}\n\n.digit{\n  transform: scale(0.9);\n    animation-name: digit;\n    animation: digit var(--duration) ease alternate infinite;\n    animation-delay: calc((var(--i) * 1s));;\n        }\n\nsvg:nth-child(1){\n --x-offset: 150%;\n}\nsvg:nth-child(2){\n--x-offset: 50%;\n    }\nsvg:nth-child(3){\n--x-offset: -50%;\n}\n\nsvg:nth-child(4){\n--x-offset: -150%;\n}\n\nsvg:nth-child(1){\n --y-offset: calc(25% - 8%)\n}\nsvg:nth-child(2){\n  --y-offset: calc(-25% + 8%)\n }\nsvg:nth-child(3){\n --y-offset: calc(25% - 8%)\n}\nsvg:nth-child(4){\n --y-offset: calc(25% - 8%)\n}\n\n@keyframes digit{\n    from, 25% {\n        transform: translate(var(--x-offset,0), var(--y-offset,0)) scale(1) ;\n    }\n    50% {\n        transform: translate(0%, var(--y-offset)) scale(1) ;\n    }\n    75%, to{\n        transform: none scale(1) ;\n     }\n    }\n\n.digits {\n    display: flex;\n    flex-direction: row;\n    /* animation: sin var(--duration) infinite */\n}\n\n\n@keyframes path-draw {\n        0%, 43% {\n            stroke-dashoffset: 550;\n        }\n        90%, 100% {\n            stroke-dashoffset: 0;\n        }\n} \n\n@keyframes circle-draw {\n        0% {\n            stroke-dasharray: 0 1 0.3 0.3; stroke-dashoffset: 1;\n        }\n       18%, 55%{\n        stroke-dasharray: 1 1; stroke-dashoffset: -2;\n        }\n        70% , 100% {\n            stroke-dashoffset: -3;\n        }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 59981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CartNotPickedImage{\n    padding:5px;\n    /* width:10vw; */\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    /* z-index: -1; */\n    /* position: relative; */\n}\n\n.CartPickedImage,\n.CartNotPickedImage:hover{\n    padding:5px;\n    /* width:10vw; */\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    opacity:0.7;\n    background-color: rgb(17, 17, 114);\n\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Library/PageDevices/CartGallery/CartGalleryCSS.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,kCAAkC;;AAEtC","sourcesContent":[".CartNotPickedImage{\n    padding:5px;\n    /* width:10vw; */\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    /* z-index: -1; */\n    /* position: relative; */\n}\n\n.CartPickedImage,\n.CartNotPickedImage:hover{\n    padding:5px;\n    /* width:10vw; */\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    opacity:0.7;\n    background-color: rgb(17, 17, 114);\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".NotPickedImage{\n    padding:5px;\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    /* z-index: -1; */\n    /* position: relative; */\n} \n\n.PickedImage,\n.NotPickedImage:hover{\n    padding:5px;\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    opacity:0.7;\n}", "",{"version":3,"sources":["webpack://./src/Components/Library/PageDevices/CartGallery/CartGalleryShortVersionCSS.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;;IAEI,WAAW;IACX,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,WAAW;AACf","sourcesContent":[".NotPickedImage{\n    padding:5px;\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    /* z-index: -1; */\n    /* position: relative; */\n} \n\n.PickedImage,\n.NotPickedImage:hover{\n    padding:5px;\n    width:100%;\n    height:11vh;\n    border-radius:0.7vw;\n    cursor:pointer;\n    opacity:0.7;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 61844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ChoiceBlockWrapper{\n    display: grid;\n    grid-template-columns:repeat(2,20vw);\n    /* margin-top: 30px; */\n}\n\n.Icons{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    /* font-weight: bold; */\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 17px;\n}\n\n\n/* .BookingDetails{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    min-width: 45%;\n    min-height: 60vh;\n    border: 2px solid rgb(206, 207, 209);\n    border-radius: 6px;\n    margin-top: 2vw;\n}\n\n.BookingDetails h3{\n    text-align: center;\n    color: #005AEB;\n    font-size: 22px;\n    font-weight: bold;\n    font-family: 'Arial Narrow';\n}\n\n.BookingChoice{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 1vw;\n} */\n\n/* .ChoiceBlock{\n    display:flex;\n    flex-direction:column;\n    padding-left: 3vw;\n}\n\n\n.ChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 90%;\n    color: rgb(77, 75, 75);\n} */\n\n.HotelPaxChoiceWrapper{  \n    /* padding: 3vw; */\n    /* width: 25vw; */\n    display: flex;\n    flex-direction: row;\n    height: 25px;\n    font-Family: Tahoma;\n    /* font-size: 16px; */\n}\n\n\n.HotelPaxChoiceWrapper h4{ \n    color: rgb(75, 73, 73);\n    font-size:15px;\n    font-family: 'Tahoma';\n    cursor: pointer;\n    margin: auto;\n}\n\n/* .PaxChoice{\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n} */\n\n/* .PaxChoice h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n} */\n\n.HotelPaxResult{ \n    /* border: 1px solid #d9d9d9; */\n    border-radius: 2px;\n    height: 32px;\n    width: 100%;\n    padding: 3px 11px;\n    background-color: white;\n}\n\n.HotelPaxResultSmallScreen{ \n    border-bottom: 0.5px solid grey;\n    border-radius: 2px;\n    height: 32px;\n    width: 90%;\n    padding: 3px 11px;\n    background-color: white;\n}\n/* \n.HotelPaxResult h4{\n    color: rgb(16, 45, 105);\n    font-family: 'Arial Narrow';\n    font-size: 16px;\n    cursor: pointer;\n} */\n\n.DropdownButton{\n    margin-top: 0.5vh;\n    background-color: white;\n    border: 2px solid rgb(177, 174, 174);\n    border-radius: 5px;\n    min-width: 200px;\n}\n\n.DropdownItem{\n    /* min-width: 200px; */\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    color: #102D69;\n}\n\n.DropdownItem:hover{  \n    background-color: #d7ebfc;\n    text-decoration: none;\n}\n\n/* .DescriptionTourDetails{\n    /* max-width: 50%; */\n    /* margin-left: 4vw; */\n/* }  */\n\n.PopUpNotActive{ \n    display : none;\n}\n\n.PopUpActive{ \n    display: block;\n    position: absolute;\n    background-color: white;\n    margin-top:5vh;\n    z-index: 1000;\n    /* width: 23vw; */\n    border: 1px solid #d9d9d9;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    padding: 15px;\n    /* overflow: hidden; */\n}\n\n.PopUpButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-size: 19px;\n    width: 19vw;\n    height: 50px;\n    text-align: center;\n    margin-top: 25px;\n    margin-bottom: 6px;\n}\n\n/* .BookingChoiceInner{\n    display:flex;\n    flex-direction:column;\n}\n\n.DateSelection{\n    font-size: 14px;\n    color:blue;\n    font-weight: bold;\n} */\n\n.Minus{\n    color: white;\n    background-Color: #009FE3;\n    border: 0.8vw solid #009FE3;\n    border-radius: 5vw;\n    font-size: 15px;\n    font-weight: bolder;\n    width: 40px;\n    height: 40px\n}\n\n.Plus {\n   color: white;\n   background-Color: #009FE3;\n   border: 0.8vw solid #009FE3;\n   border-radius: 5vw;\n   font-size: 15px;\n   font-weight: bolder;\n   width: 40px;\n   height: 40px\n}\n.DownOutlined{ \n    color: #d9d9d9;\n    font-size: 13px;\n    padding-left: 5px;\n}\n\n/* .RadioWrapper{\n    margin-top: 20px;\n} */\n\n/* .RadioWrapper h5{\n    color: blue;\n    font-size: 19px;\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    min-width: 35vw;\n    margin-bottom: 15px;\n}\n\n.Radio{\n    margin-top: 20px;\n    min-width:35vw; \n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.WrapperAddToBasket{\n    min-width:35vw;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToBasketButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 8vw;\n    height: 40px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n} */", "",{"version":3,"sources":["webpack://./src/Components/Library/PageDevices/HotelsPaxChoiceCSS.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;;AAGA;;;;;;;;;;;;;;;;;;;;;;;;GAwBG;;AAEH;;;;;;;;;;;;GAYG;;AAEH;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;AACzB;;;AAGA;IACI,sBAAsB;IACtB,cAAc;IACd,qBAAqB;IACrB,eAAe;IACf,YAAY;AAChB;;AAEA;;;;GAIG;;AAEH;;;;;GAKG;;AAEH;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;;;;;;GAMG;;AAEH;IACI,iBAAiB;IACjB,uBAAuB;IACvB,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;wBACwB;IACpB,sBAAsB;AAC1B,OAAO;;AAEP;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,yDAAyD;IACzD,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;;;;;;;;GASG;;AAEH;IACI,YAAY;IACZ,yBAAyB;IACzB,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX;AACJ;;AAEA;GACG,YAAY;GACZ,yBAAyB;GACzB,2BAA2B;GAC3B,kBAAkB;GAClB,eAAe;GACf,mBAAmB;GACnB,WAAW;GACX;AACH;AACA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;;GAEG;;AAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA6CG","sourcesContent":[".ChoiceBlockWrapper{\n    display: grid;\n    grid-template-columns:repeat(2,20vw);\n    /* margin-top: 30px; */\n}\n\n.Icons{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    /* font-weight: bold; */\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 17px;\n}\n\n\n/* .BookingDetails{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    min-width: 45%;\n    min-height: 60vh;\n    border: 2px solid rgb(206, 207, 209);\n    border-radius: 6px;\n    margin-top: 2vw;\n}\n\n.BookingDetails h3{\n    text-align: center;\n    color: #005AEB;\n    font-size: 22px;\n    font-weight: bold;\n    font-family: 'Arial Narrow';\n}\n\n.BookingChoice{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 1vw;\n} */\n\n/* .ChoiceBlock{\n    display:flex;\n    flex-direction:column;\n    padding-left: 3vw;\n}\n\n\n.ChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 90%;\n    color: rgb(77, 75, 75);\n} */\n\n.HotelPaxChoiceWrapper{  \n    /* padding: 3vw; */\n    /* width: 25vw; */\n    display: flex;\n    flex-direction: row;\n    height: 25px;\n    font-Family: Tahoma;\n    /* font-size: 16px; */\n}\n\n\n.HotelPaxChoiceWrapper h4{ \n    color: rgb(75, 73, 73);\n    font-size:15px;\n    font-family: 'Tahoma';\n    cursor: pointer;\n    margin: auto;\n}\n\n/* .PaxChoice{\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n} */\n\n/* .PaxChoice h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n} */\n\n.HotelPaxResult{ \n    /* border: 1px solid #d9d9d9; */\n    border-radius: 2px;\n    height: 32px;\n    width: 100%;\n    padding: 3px 11px;\n    background-color: white;\n}\n\n.HotelPaxResultSmallScreen{ \n    border-bottom: 0.5px solid grey;\n    border-radius: 2px;\n    height: 32px;\n    width: 90%;\n    padding: 3px 11px;\n    background-color: white;\n}\n/* \n.HotelPaxResult h4{\n    color: rgb(16, 45, 105);\n    font-family: 'Arial Narrow';\n    font-size: 16px;\n    cursor: pointer;\n} */\n\n.DropdownButton{\n    margin-top: 0.5vh;\n    background-color: white;\n    border: 2px solid rgb(177, 174, 174);\n    border-radius: 5px;\n    min-width: 200px;\n}\n\n.DropdownItem{\n    /* min-width: 200px; */\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    color: #102D69;\n}\n\n.DropdownItem:hover{  \n    background-color: #d7ebfc;\n    text-decoration: none;\n}\n\n/* .DescriptionTourDetails{\n    /* max-width: 50%; */\n    /* margin-left: 4vw; */\n/* }  */\n\n.PopUpNotActive{ \n    display : none;\n}\n\n.PopUpActive{ \n    display: block;\n    position: absolute;\n    background-color: white;\n    margin-top:5vh;\n    z-index: 1000;\n    /* width: 23vw; */\n    border: 1px solid #d9d9d9;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    padding: 15px;\n    /* overflow: hidden; */\n}\n\n.PopUpButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-size: 19px;\n    width: 19vw;\n    height: 50px;\n    text-align: center;\n    margin-top: 25px;\n    margin-bottom: 6px;\n}\n\n/* .BookingChoiceInner{\n    display:flex;\n    flex-direction:column;\n}\n\n.DateSelection{\n    font-size: 14px;\n    color:blue;\n    font-weight: bold;\n} */\n\n.Minus{\n    color: white;\n    background-Color: #009FE3;\n    border: 0.8vw solid #009FE3;\n    border-radius: 5vw;\n    font-size: 15px;\n    font-weight: bolder;\n    width: 40px;\n    height: 40px\n}\n\n.Plus {\n   color: white;\n   background-Color: #009FE3;\n   border: 0.8vw solid #009FE3;\n   border-radius: 5vw;\n   font-size: 15px;\n   font-weight: bolder;\n   width: 40px;\n   height: 40px\n}\n.DownOutlined{ \n    color: #d9d9d9;\n    font-size: 13px;\n    padding-left: 5px;\n}\n\n/* .RadioWrapper{\n    margin-top: 20px;\n} */\n\n/* .RadioWrapper h5{\n    color: blue;\n    font-size: 19px;\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    min-width: 35vw;\n    margin-bottom: 15px;\n}\n\n.Radio{\n    margin-top: 20px;\n    min-width:35vw; \n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.WrapperAddToBasket{\n    min-width:35vw;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToBasketButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 8vw;\n    height: 40px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 29718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".LoadingOutlinedIcon{\n    border:none;\n    rotate: 20%;\n    font-size: 40px;\n    /* text-align: center; */\n\n}\n\n.Loading{\n    height: 270px;\n    /* text-align: center; */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.LoadingText{\n    color:rgb(7, 7, 85);\n    font-size: 17px;\n    font-family:Arial;\n    /* vertical-align: middle; */\n    margin: auto;\n    position:absolute;\n    top:40%\n}", "",{"version":3,"sources":["webpack://./src/Components/Library/PageDevices/LoadingMessage.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,wBAAwB;;AAE5B;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,4BAA4B;IAC5B,YAAY;IACZ,iBAAiB;IACjB;AACJ","sourcesContent":[".LoadingOutlinedIcon{\n    border:none;\n    rotate: 20%;\n    font-size: 40px;\n    /* text-align: center; */\n\n}\n\n.Loading{\n    height: 270px;\n    /* text-align: center; */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.LoadingText{\n    color:rgb(7, 7, 85);\n    font-size: 17px;\n    font-family:Arial;\n    /* vertical-align: middle; */\n    margin: auto;\n    position:absolute;\n    top:40%\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 33582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".photoGalleryCSS{\n    position: relative;\n    /* height: 100%; */\n    /* width: 100vh; */\n    /* width: 100%; */\n    margin: 0 auto;\n    overflow: hidden;  \n} \n\n.prevGallery, .nextGallery {\n    cursor: pointer;\n    position: absolute;\n    /* z-index: 100; */\n    top: 45%;\n    width: auto;\n    padding: 16px;\n    color: rgb(3,3,63);\n    background-color: rgb(255,255,255,0.6);\n    font-weight: bold;\n    font-size: 30px;\n    transition: 0.6s ease;\n  \n  }\n  \n  .nextGallery {\n    right: 0;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  .leftGallery {\n    padding-right: 50px;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  \n  .prevGallery:hover, .nextGallery:hover {\n    background-color: rgba(102, 98, 98, 0.8);\n    color: white;\n    border-radius: 5vw;\n  }\n\n", "",{"version":3,"sources":["webpack://./src/Components/Library/PhotoGallery/PhotoGalleryCSS.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;IACjB,eAAe;IACf,qBAAqB;;EAEvB;;EAEA;IACE,QAAQ;IACR,gCAAgC;EAClC;;EAEA;IACE,mBAAmB;IACnB,gCAAgC;EAClC;;;EAGA;IACE,wCAAwC;IACxC,YAAY;IACZ,kBAAkB;EACpB","sourcesContent":[".photoGalleryCSS{\n    position: relative;\n    /* height: 100%; */\n    /* width: 100vh; */\n    /* width: 100%; */\n    margin: 0 auto;\n    overflow: hidden;  \n} \n\n.prevGallery, .nextGallery {\n    cursor: pointer;\n    position: absolute;\n    /* z-index: 100; */\n    top: 45%;\n    width: auto;\n    padding: 16px;\n    color: rgb(3,3,63);\n    background-color: rgb(255,255,255,0.6);\n    font-weight: bold;\n    font-size: 30px;\n    transition: 0.6s ease;\n  \n  }\n  \n  .nextGallery {\n    right: 0;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  .leftGallery {\n    padding-right: 50px;\n    /* border-radius: 3px 0 0 3px; */\n  }\n\n  \n  .prevGallery:hover, .nextGallery:hover {\n    background-color: rgba(102, 98, 98, 0.8);\n    color: white;\n    border-radius: 5vw;\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 94716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SliderCSS{\n    width: 100%;\n    position: relative;\n    margin-left: 0;\n    margin-right: 0; \n    height: 50vh;\n    padding: 0;\n    overflow: hidden;  \n} \n\n.Arrows{\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.prev, .next {\n    cursor: pointer;\n    position: absolute;\n    z-index: 100;\n    top: 40%;\n    width: auto;\n    line-height: 16px;\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    transition: 0.6s ease;  \n  }\n  \n  .next {\n    right: 0;\n  }\n\n  .left {\n    padding-right: 50px;\n  }\n\n  \n  .prev:hover, .next:hover {\n    background-color: rgb(207, 181, 149 , 0.8);\n    /* background-color: rgb(3,3,63,0.6); */\n    border-radius: 7vw;\n  }\n\n/* .Arrow{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    top: 75%;\n    margin-left: 20vw;\n    padding: 16px;\n    font-size: 18px;\n    width: auto;\n    background: rgb(235, 214, 188);\n    border-radius: 10px;\n    cursor: pointer;\n    position: absolute;\n    z-index: 100;\n    /* margin-top: -5px; */\n   /*transition: 0.6s ease;\n    font-weight: bold;\n    /* align-items: center; */\n/*} */\n", "",{"version":3,"sources":["webpack://./src/Components/Library/Slider/SliderCss.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,qBAAqB;EACvB;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,mBAAmB;EACrB;;;EAGA;IACE,0CAA0C;IAC1C,uCAAuC;IACvC,kBAAkB;EACpB;;AAEF;;;;;;;;;;;;;;0BAc0B;GACvB;;6BAE0B;AAC7B,KAAK","sourcesContent":[".SliderCSS{\n    width: 100%;\n    position: relative;\n    margin-left: 0;\n    margin-right: 0; \n    height: 50vh;\n    padding: 0;\n    overflow: hidden;  \n} \n\n.Arrows{\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.prev, .next {\n    cursor: pointer;\n    position: absolute;\n    z-index: 100;\n    top: 40%;\n    width: auto;\n    line-height: 16px;\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    transition: 0.6s ease;  \n  }\n  \n  .next {\n    right: 0;\n  }\n\n  .left {\n    padding-right: 50px;\n  }\n\n  \n  .prev:hover, .next:hover {\n    background-color: rgb(207, 181, 149 , 0.8);\n    /* background-color: rgb(3,3,63,0.6); */\n    border-radius: 7vw;\n  }\n\n/* .Arrow{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    top: 75%;\n    margin-left: 20vw;\n    padding: 16px;\n    font-size: 18px;\n    width: auto;\n    background: rgb(235, 214, 188);\n    border-radius: 10px;\n    cursor: pointer;\n    position: absolute;\n    z-index: 100;\n    /* margin-top: -5px; */\n   /*transition: 0.6s ease;\n    font-weight: bold;\n    /* align-items: center; */\n/*} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 39477:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".FormWrapper{\n    margin: 3vh 10vw 5vh 10vw;\n}\n\n.FormWrapper h2{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    font-family:Arial;\n    color:blue;\n    font-size:22px;\n    font-weight:bold;\n    background-color: #d7ebfc;\n    line-height:6vh;\n}\n\n.HeadPolicies{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    font-family:Arial;\n    color:#102D69;\n    font-size:17px;\n    font-weight:bold;\n    background-color: #ecf3fa;\n}\n\n.RegWrapper{\n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.RegWrapperSmallScreen{\n    display:flex;\n    flex-direction: column-reverse;\n    justify-content: space-evenly;\n}\n\n.myForm{\n    display: block;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    flex: 1;\n    margin-right: 1vw;\n    width: 60%;\n}\n\n.myFormSmallScreen{\n    display: block;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    flex: 1;\n    margin-right: 1vw;\n    width: 100%;\n}\n\n.InputBlock{\n    display:flex;\n    flex-direction:column;\n    justify-content:space-evenly;\n    width:90%;\n    margin-top: 2vh;\n    border: 1px solid rgb(206, 207, 209);\n    background-color: #f4f6f8;\n    padding: 2vw;\n    border-radius: 5px;\n}\n.RadioForm{\n        min-width:20vw; \n        display:flex;\n        flex-direction: row;\n        justify-content: space-evenly;\n}\n\n.FormLabel{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n    margin-bottom:1vh\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/BookingForm/BookingForm.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;IACV,cAAc;IACd,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,OAAO;IACP,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,OAAO;IACP,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,4BAA4B;IAC5B,SAAS;IACT,eAAe;IACf,oCAAoC;IACpC,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;AACA;QACQ,cAAc;QACd,YAAY;QACZ,mBAAmB;QACnB,6BAA6B;AACrC;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB;AACJ","sourcesContent":[".FormWrapper{\n    margin: 3vh 10vw 5vh 10vw;\n}\n\n.FormWrapper h2{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    font-family:Arial;\n    color:blue;\n    font-size:22px;\n    font-weight:bold;\n    background-color: #d7ebfc;\n    line-height:6vh;\n}\n\n.HeadPolicies{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    font-family:Arial;\n    color:#102D69;\n    font-size:17px;\n    font-weight:bold;\n    background-color: #ecf3fa;\n}\n\n.RegWrapper{\n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.RegWrapperSmallScreen{\n    display:flex;\n    flex-direction: column-reverse;\n    justify-content: space-evenly;\n}\n\n.myForm{\n    display: block;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    flex: 1;\n    margin-right: 1vw;\n    width: 60%;\n}\n\n.myFormSmallScreen{\n    display: block;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    flex: 1;\n    margin-right: 1vw;\n    width: 100%;\n}\n\n.InputBlock{\n    display:flex;\n    flex-direction:column;\n    justify-content:space-evenly;\n    width:90%;\n    margin-top: 2vh;\n    border: 1px solid rgb(206, 207, 209);\n    background-color: #f4f6f8;\n    padding: 2vw;\n    border-radius: 5px;\n}\n.RadioForm{\n        min-width:20vw; \n        display:flex;\n        flex-direction: row;\n        justify-content: space-evenly;\n}\n\n.FormLabel{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n    margin-bottom:1vh\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 37897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CartDetails{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    display: inline-block;\n    width: 40%;\n    /* flex:1; */\n}\n\n.CartDetailsSmallScreen{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    display: inline-block;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    /* flex:1; */\n}\n\n\n.CartDetails h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.CartDetailsSmallScreen h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n\n.MainRateDetails{\n    display: grid;\n    width:100%;\n    grid-template-columns: 40% 60%;\n}\n\n.MainRateDetails h5{\n    color: rgb(77, 75, 75);\n    font-size: 16px;    \n}\n\n.TaxDetails{\n    font-size: 14px;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/BookingForm/CartDetails.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".CartDetails{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    display: inline-block;\n    width: 40%;\n    /* flex:1; */\n}\n\n.CartDetailsSmallScreen{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    display: inline-block;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    /* flex:1; */\n}\n\n\n.CartDetails h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.CartDetailsSmallScreen h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n\n.MainRateDetails{\n    display: grid;\n    width:100%;\n    grid-template-columns: 40% 60%;\n}\n\n.MainRateDetails h5{\n    color: rgb(77, 75, 75);\n    font-size: 16px;    \n}\n\n.TaxDetails{\n    font-size: 14px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".NonActivePmnt{\n    display: none;\n}\n\n.ActivePmnt{\n    display: block;\n    color: blue;\n    font-size: 20px;\n    font-weight: bold;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.NonActiveSubmit{\n    display: none;\n}\n\n.SubmitButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 90%;\n    width: 25%;\n    text-align: center;\n    padding-bottom: 2vh;\n    padding-top: 2vh;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n}\n\n.SubmitButton:hover{\n    background: darkblue;\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/BookingForm/ConfirmButton.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":[".NonActivePmnt{\n    display: none;\n}\n\n.ActivePmnt{\n    display: block;\n    color: blue;\n    font-size: 20px;\n    font-weight: bold;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.NonActiveSubmit{\n    display: none;\n}\n\n.SubmitButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 90%;\n    width: 25%;\n    text-align: center;\n    padding-bottom: 2vh;\n    padding-top: 2vh;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n}\n\n.SubmitButton:hover{\n    background: darkblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 56042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Hidden{\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/BookingForm/OfflineSummary.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB","sourcesContent":[".Hidden{\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ChoiceBlockWrapper{\n    display: grid;\n    grid-template-columns:repeat(2,20vw);\n    /* margin-top: 30px; */\n}\n\n.Icons{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    /* font-weight: bold; */\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 17px;\n}\n\n\n.BookingDetails{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    min-width: 45%;\n    min-height: 60vh;\n    border: 2px solid rgb(206, 207, 209);\n    border-radius: 6px;\n    margin-top: 2vw;\n}\n\n.BookingDetails h3{\n    text-align: center;\n    color: #005AEB;\n    font-size: 22px;\n    font-weight: bold;\n    font-family: 'Arial Narrow';\n}\n\n.BookingChoice{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 1vw;\n}\n\n.ChoiceBlock{\n    display:flex;\n    flex-direction:column;\n    padding-left: 3vw;\n}\n\n\n.ChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 90%;\n    /* font-family: 'Tahoma'; */\n    /* font-size:14px; */\n    color: rgb(77, 75, 75);\n}\n\n.FrontHotelPaxChoiceWrapper{\n    /* padding: 3vw; */\n    /* width: 25vw; */\n    display: flex;\n    flex-direction: row;\n    height: 25px;\n    font-Family: Tahoma;\n    font-size: 16px;\n}\n\n\n.FrontHotelPaxChoiceWrapper h4{\n    font-family: 'Tahoma';\n    font-size: 14px;\n    color: rgb(75, 73, 73);\n    cursor: pointer;\n}\n\n.FrontHotelPaxResult{\n    /* border: 1px solid #d9d9d9; */\n    border-radius: 2px;\n    /* height: 32px; */\n    /* width: 90%; */\n    padding: 3px 11px;\n    background-color: white;\n}\n\n.FrontHotelPaxResultSmallScreen{\n    border-bottom: 0.5px solid grey;\n    border-radius: 2px;\n    /* height: 32px; */\n    /* width: 90%; */\n    padding: 3px 11px;\n    background-color: white;\n    display:flex;\n    justify-content: center;\n}\n\n.DropdownButton{\n    margin-top: 0.5vh;\n    background-color: white;\n    border: 2px solid rgb(177, 174, 174);\n    border-radius: 5px;\n    min-width: 200px;\n}\n\n.DropdownItem{\n    /* min-width: 200px; */\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    color: #102D69;\n}\n\n.DropdownItem:hover{  \n    background-color: #d7ebfc;\n    text-decoration: none;\n}\n\n.DescriptionTourDetails{\n    /* max-width: 50%; */\n    margin-left: 4vw;\n}\n\n.PopUpNotActive{\n    display : none;\n}\n\n.PopUpActive{\n    display: block;\n    position: absolute;\n    background-color: white;\n    margin-top:2vw;\n    z-index: 1000;\n    width: 23vw;\n    /* width:inherit; */\n    border: 1px solid #d9d9d9;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    padding: 15px;\n    /* overflow: hidden; */\n}\n\n.PopUpButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-size: 19px;\n    width: 19vw;\n    height: 50px;\n    text-align: center;\n    margin-top: 25px;\n    margin-bottom: 6px;\n}\n\n.BookingChoiceInner{\n    display:flex;\n    flex-direction:column;\n}\n\n.DateSelection{\n    font-size: 14px;\n    color:blue;\n    font-weight: bold;\n}\n\n.Minus{\n    color: white;\n    background-Color: #009FE3;\n    border: 0.8vw solid #009FE3;\n    border-radius: 5vw;\n    font-size: 15px;\n    font-weight: bolder;\n    width: 40px;\n    height: 40px\n}\n\n.Plus {\n   color: white;\n   background-Color: #009FE3;\n   border: 0.8vw solid #009FE3;\n   border-radius: 5vw;\n   font-size: 15px;\n   font-weight: bolder;\n   width: 40px;\n   height: 40px\n}\n.DownOutlined{\n    color: #d9d9d9;\n    font-size: 13px;\n    padding-left: 5px;\n}\n\n.RadioWrapper{\n    margin-top: 20px;\n}\n\n.RadioWrapper h5{\n    color: blue;\n    font-size: 19px;\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    min-width: 35vw;\n    margin-bottom: 15px;\n}\n\n.Radio{\n    margin-top: 20px;\n    min-width:35vw; \n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.WrapperAddToBasket{\n    min-width:35vw;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToBasketButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 8vw;\n    height: 40px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/HotelsAutocompleteCSS.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,cAAc;IACd,gBAAgB;IAChB,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;AACrB;;;AAGA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,cAAc;IACd,2BAA2B;IAC3B,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;;AAGA;IACI,qBAAqB;IACrB,eAAe;IACf,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,yDAAyD;IACzD,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX;AACJ;;AAEA;GACG,YAAY;GACZ,yBAAyB;GACzB,2BAA2B;GAC3B,kBAAkB;GAClB,eAAe;GACf,mBAAmB;GACnB,WAAW;GACX;AACH;AACA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB","sourcesContent":[".ChoiceBlockWrapper{\n    display: grid;\n    grid-template-columns:repeat(2,20vw);\n    /* margin-top: 30px; */\n}\n\n.Icons{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    /* font-weight: bold; */\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 17px;\n}\n\n\n.BookingDetails{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    min-width: 45%;\n    min-height: 60vh;\n    border: 2px solid rgb(206, 207, 209);\n    border-radius: 6px;\n    margin-top: 2vw;\n}\n\n.BookingDetails h3{\n    text-align: center;\n    color: #005AEB;\n    font-size: 22px;\n    font-weight: bold;\n    font-family: 'Arial Narrow';\n}\n\n.BookingChoice{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 1vw;\n}\n\n.ChoiceBlock{\n    display:flex;\n    flex-direction:column;\n    padding-left: 3vw;\n}\n\n\n.ChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 90%;\n    /* font-family: 'Tahoma'; */\n    /* font-size:14px; */\n    color: rgb(77, 75, 75);\n}\n\n.FrontHotelPaxChoiceWrapper{\n    /* padding: 3vw; */\n    /* width: 25vw; */\n    display: flex;\n    flex-direction: row;\n    height: 25px;\n    font-Family: Tahoma;\n    font-size: 16px;\n}\n\n\n.FrontHotelPaxChoiceWrapper h4{\n    font-family: 'Tahoma';\n    font-size: 14px;\n    color: rgb(75, 73, 73);\n    cursor: pointer;\n}\n\n.FrontHotelPaxResult{\n    /* border: 1px solid #d9d9d9; */\n    border-radius: 2px;\n    /* height: 32px; */\n    /* width: 90%; */\n    padding: 3px 11px;\n    background-color: white;\n}\n\n.FrontHotelPaxResultSmallScreen{\n    border-bottom: 0.5px solid grey;\n    border-radius: 2px;\n    /* height: 32px; */\n    /* width: 90%; */\n    padding: 3px 11px;\n    background-color: white;\n    display:flex;\n    justify-content: center;\n}\n\n.DropdownButton{\n    margin-top: 0.5vh;\n    background-color: white;\n    border: 2px solid rgb(177, 174, 174);\n    border-radius: 5px;\n    min-width: 200px;\n}\n\n.DropdownItem{\n    /* min-width: 200px; */\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    color: #102D69;\n}\n\n.DropdownItem:hover{  \n    background-color: #d7ebfc;\n    text-decoration: none;\n}\n\n.DescriptionTourDetails{\n    /* max-width: 50%; */\n    margin-left: 4vw;\n}\n\n.PopUpNotActive{\n    display : none;\n}\n\n.PopUpActive{\n    display: block;\n    position: absolute;\n    background-color: white;\n    margin-top:2vw;\n    z-index: 1000;\n    width: 23vw;\n    /* width:inherit; */\n    border: 1px solid #d9d9d9;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    padding: 15px;\n    /* overflow: hidden; */\n}\n\n.PopUpButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-size: 19px;\n    width: 19vw;\n    height: 50px;\n    text-align: center;\n    margin-top: 25px;\n    margin-bottom: 6px;\n}\n\n.BookingChoiceInner{\n    display:flex;\n    flex-direction:column;\n}\n\n.DateSelection{\n    font-size: 14px;\n    color:blue;\n    font-weight: bold;\n}\n\n.Minus{\n    color: white;\n    background-Color: #009FE3;\n    border: 0.8vw solid #009FE3;\n    border-radius: 5vw;\n    font-size: 15px;\n    font-weight: bolder;\n    width: 40px;\n    height: 40px\n}\n\n.Plus {\n   color: white;\n   background-Color: #009FE3;\n   border: 0.8vw solid #009FE3;\n   border-radius: 5vw;\n   font-size: 15px;\n   font-weight: bolder;\n   width: 40px;\n   height: 40px\n}\n.DownOutlined{\n    color: #d9d9d9;\n    font-size: 13px;\n    padding-left: 5px;\n}\n\n.RadioWrapper{\n    margin-top: 20px;\n}\n\n.RadioWrapper h5{\n    color: blue;\n    font-size: 19px;\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    min-width: 35vw;\n    margin-bottom: 15px;\n}\n\n.Radio{\n    margin-top: 20px;\n    min-width:35vw; \n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.WrapperAddToBasket{\n    min-width:35vw;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToBasketButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 8vw;\n    height: 40px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PCPopUpNotActive{\n    display:none;\n}\n\n.PCPopUpActive{\n    display: block;\n    position: absolute;\n    background-color: white;\n    margin-top:1vw;\n    z-index: 1000;\n}\n\n/* .PromoCode h4{\n    font-size:14px;\n    color:rgb(136, 6, 6);\n    font-weight:bold;\n}  */", "",{"version":3,"sources":["webpack://./src/Components/Pages/FirstPageofSearchModule/HotelsAutocompleteBlock/PromoCodeCSS.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;IACd,aAAa;AACjB;;AAEA;;;;IAII","sourcesContent":[".PCPopUpNotActive{\n    display:none;\n}\n\n.PCPopUpActive{\n    display: block;\n    position: absolute;\n    background-color: white;\n    margin-top:1vw;\n    z-index: 1000;\n}\n\n/* .PromoCode h4{\n    font-size:14px;\n    color:rgb(136, 6, 6);\n    font-weight:bold;\n}  */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 43867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".largeScreenSearch{\n    width:90%;\n    margin-right: auto;\n    margin-left: auto;    \n}\n/* .mySearch{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    border-radius: 0 10px 10px 10px;\n    border-right: 50px solid #96c6f0;\n    border-left: 50px solid #96c6f0;\n    border-top: 15px solid #96c6f0;\n    border-bottom: 15px solid #96c6f0;\n} */\n\n.mySearch{\n    width:100%;\n    display: grid;\n    grid-template-columns: repeat(2,25%) 27% 10% 13%;\n    justify-content: center;\n    border-radius: 0 10px 10px 10px;\n    border-right: 50px solid #96c6f0;\n    border-left: 50px solid #96c6f0;\n    border-top: 15px solid #96c6f0;\n    border-bottom: 15px solid #96c6f0;\n}\n\n.mySearch .PromoCode{\n    grid-column:4;\n    border-left:0.5px solid grey;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    font-size:14px;\n    color:rgb(136, 6, 6);\n    font-weight:bold;\n    /* background:#96c6f0 */\n}\n.mySearch input::placeholder{\n    font-family: 'Tahoma';\n    font-size:14px;\n}\n .textInput ,\n .mySearch select{\n     font-size: 16px;\n     font-family: Arial, Helvetica, sans-serif;\n     color: #001959;\n     width: 40vw;\n     padding: 1vw;\n     border-bottom: none;\n     border-top: none;\n     border-left: none;\n     border-right: 1px solid #001959;\n    }\n\n.dropdownDatePicker{\n    font-family: 'Arial';\n}\n\n.mySearch button{\n        /* background-color:#3CB260; */\n        background-color: #005AEB;\n        color: white;\n        font-size: 16px;\n        font-family: Arial, Helvetica, sans-serif;\n        width: 10vw;\n        border-radius: 0.5vw;  \n        padding: 0.7vw; \n        font-weight: bold;    \n        margin-right:auto;\n        margin-left:auto;\n}\n\n.mySearch button:hover{\n    background-color: #001959;\n    color: white;\n    cursor: pointer;\n    \n}\n\n\n.formInnerWrapper{\n    border: 3px solid white;\n    width: 70.5vw;\n    /* margin: -1vw; */\n    border-radius: 0.5vw; \n\n}\n\n.formOuterWrapper{\n      border-top: 1.5vw solid #96c6f0;\n      border-bottom: 1.5vw solid #96c6f0;\n      border-left: 5vw solid#96c6f0;\n      border-right: 5vw solid #96c6f0;\n      margin-left: auto;\n      margin-right: auto;\n      margin-top: 0.3vw;\n      border-radius: 0.5vw; \n      width: 80vw;\n}\n\n.borderInnerWrapper2{\n    border: 2px solid white;\n}\n\n\ndiv.datePicker{\n    font-family:'Tahoma'; \n    display:flex;\n    align-items: center;\n    /* padding-top: 0.8vw; */\n    /* margin-left: 1vw; */\n    /* color: grey */\n}\n\ninput::placeholder{\n    color: rgb(75, 73, 73);\n    font-size:90%;\n}\n\n.ant-picker-input input::placeholder {\n    color: rgb(75, 73, 73);\n  }\n\n.MonthPicker .ant-picker-input{\n    width:20vw;\n}\n\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/Search.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;;;;;;;;GASG;;AAEH;IACI,UAAU;IACV,aAAa;IACb,gDAAgD;IAChD,uBAAuB;IACvB,+BAA+B;IAC/B,gCAAgC;IAChC,+BAA+B;IAC/B,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,cAAc;IACd,oBAAoB;IACpB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,qBAAqB;IACrB,cAAc;AAClB;CACC;;KAEI,eAAe;KACf,yCAAyC;KACzC,cAAc;KACd,WAAW;KACX,YAAY;KACZ,mBAAmB;KACnB,gBAAgB;KAChB,iBAAiB;KACjB,+BAA+B;IAChC;;AAEJ;IACI,oBAAoB;AACxB;;AAEA;QACQ,8BAA8B;QAC9B,yBAAyB;QACzB,YAAY;QACZ,eAAe;QACf,yCAAyC;QACzC,WAAW;QACX,oBAAoB;QACpB,cAAc;QACd,iBAAiB;QACjB,iBAAiB;QACjB,gBAAgB;AACxB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;;AAEnB;;;AAGA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,oBAAoB;;AAExB;;AAEA;MACM,+BAA+B;MAC/B,kCAAkC;MAClC,6BAA6B;MAC7B,+BAA+B;MAC/B,iBAAiB;MACjB,kBAAkB;MAClB,iBAAiB;MACjB,oBAAoB;MACpB,WAAW;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,sBAAsB;EACxB;;AAEF;IACI,UAAU;AACd","sourcesContent":[".largeScreenSearch{\n    width:90%;\n    margin-right: auto;\n    margin-left: auto;    \n}\n/* .mySearch{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    border-radius: 0 10px 10px 10px;\n    border-right: 50px solid #96c6f0;\n    border-left: 50px solid #96c6f0;\n    border-top: 15px solid #96c6f0;\n    border-bottom: 15px solid #96c6f0;\n} */\n\n.mySearch{\n    width:100%;\n    display: grid;\n    grid-template-columns: repeat(2,25%) 27% 10% 13%;\n    justify-content: center;\n    border-radius: 0 10px 10px 10px;\n    border-right: 50px solid #96c6f0;\n    border-left: 50px solid #96c6f0;\n    border-top: 15px solid #96c6f0;\n    border-bottom: 15px solid #96c6f0;\n}\n\n.mySearch .PromoCode{\n    grid-column:4;\n    border-left:0.5px solid grey;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    font-size:14px;\n    color:rgb(136, 6, 6);\n    font-weight:bold;\n    /* background:#96c6f0 */\n}\n.mySearch input::placeholder{\n    font-family: 'Tahoma';\n    font-size:14px;\n}\n .textInput ,\n .mySearch select{\n     font-size: 16px;\n     font-family: Arial, Helvetica, sans-serif;\n     color: #001959;\n     width: 40vw;\n     padding: 1vw;\n     border-bottom: none;\n     border-top: none;\n     border-left: none;\n     border-right: 1px solid #001959;\n    }\n\n.dropdownDatePicker{\n    font-family: 'Arial';\n}\n\n.mySearch button{\n        /* background-color:#3CB260; */\n        background-color: #005AEB;\n        color: white;\n        font-size: 16px;\n        font-family: Arial, Helvetica, sans-serif;\n        width: 10vw;\n        border-radius: 0.5vw;  \n        padding: 0.7vw; \n        font-weight: bold;    \n        margin-right:auto;\n        margin-left:auto;\n}\n\n.mySearch button:hover{\n    background-color: #001959;\n    color: white;\n    cursor: pointer;\n    \n}\n\n\n.formInnerWrapper{\n    border: 3px solid white;\n    width: 70.5vw;\n    /* margin: -1vw; */\n    border-radius: 0.5vw; \n\n}\n\n.formOuterWrapper{\n      border-top: 1.5vw solid #96c6f0;\n      border-bottom: 1.5vw solid #96c6f0;\n      border-left: 5vw solid#96c6f0;\n      border-right: 5vw solid #96c6f0;\n      margin-left: auto;\n      margin-right: auto;\n      margin-top: 0.3vw;\n      border-radius: 0.5vw; \n      width: 80vw;\n}\n\n.borderInnerWrapper2{\n    border: 2px solid white;\n}\n\n\ndiv.datePicker{\n    font-family:'Tahoma'; \n    display:flex;\n    align-items: center;\n    /* padding-top: 0.8vw; */\n    /* margin-left: 1vw; */\n    /* color: grey */\n}\n\ninput::placeholder{\n    color: rgb(75, 73, 73);\n    font-size:90%;\n}\n\n.ant-picker-input input::placeholder {\n    color: rgb(75, 73, 73);\n  }\n\n.MonthPicker .ant-picker-input{\n    width:20vw;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 71660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* .smallScreenSearch{\n    width:95%;\n    margin-right: auto;\n    margin-left: auto; \n} */\n.mySearch_inner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.SwitcherSearchPannel{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n}\n \n.mySearch_inner button{\n        min-width:90%;\n        background-color: #005AEB;\n        color: white;\n        font-size: 16px;\n        font-family: Arial, Helvetica, sans-serif;\n        /* width: 10vw; */\n        border-radius: 1vw;  \n        padding: 1vh 7vw 1vh 7vw; \n        font-weight: bold;     \n        margin-top: 0.9vh;\n        text-align: center;\n        margin-bottom: 1vh;\n}\n\n.mySearch_inner button:hover{\n    background-color: #001959;\n    cursor: pointer;\n}\n\n/* .formInnerWrapper_inner{\n    border: 3px solid white;\n    width: 17vw;\n    margin: -0.2vw;\n    border-radius: 0.5vw; \n\n} */\n\n.formOuterWrapper_inner{\n    border-top: 4vw solid #96c6f0;\n    border-left: 1vw solid  #96c6f0;\n    border-right: 1vw solid #96c6f0;\n    border-bottom: 4vw solid  #96c6f0;\n      /* margin-top: 1vw; */\n      border-radius: 0.5vw; \n}\n\n/* .borderInnerWrapper2_inner{\n    border: 2px solid white;\n\n} */\n\n.noResultSearch{\n    color: #001959;\n    font-size: 18px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-family:  Arial, Helvetica, sans-serif;\n}\n\n.datePicker_inner{\n    font-family:Tahoma; \n    padding-top: 0.8vw;\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SmallScreenSearchCSS.css"],"names":[],"mappings":"AAAA;;;;GAIG;AACH;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;QACQ,aAAa;QACb,yBAAyB;QACzB,YAAY;QACZ,eAAe;QACf,yCAAyC;QACzC,iBAAiB;QACjB,kBAAkB;QAClB,wBAAwB;QACxB,iBAAiB;QACjB,iBAAiB;QACjB,kBAAkB;QAClB,kBAAkB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;;;;;GAMG;;AAEH;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,+BAA+B;IAC/B,iCAAiC;MAC/B,qBAAqB;MACrB,oBAAoB;AAC1B;;AAEA;;;GAGG;;AAEH;IACI,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;AACf","sourcesContent":["/* .smallScreenSearch{\n    width:95%;\n    margin-right: auto;\n    margin-left: auto; \n} */\n.mySearch_inner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.SwitcherSearchPannel{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n}\n \n.mySearch_inner button{\n        min-width:90%;\n        background-color: #005AEB;\n        color: white;\n        font-size: 16px;\n        font-family: Arial, Helvetica, sans-serif;\n        /* width: 10vw; */\n        border-radius: 1vw;  \n        padding: 1vh 7vw 1vh 7vw; \n        font-weight: bold;     \n        margin-top: 0.9vh;\n        text-align: center;\n        margin-bottom: 1vh;\n}\n\n.mySearch_inner button:hover{\n    background-color: #001959;\n    cursor: pointer;\n}\n\n/* .formInnerWrapper_inner{\n    border: 3px solid white;\n    width: 17vw;\n    margin: -0.2vw;\n    border-radius: 0.5vw; \n\n} */\n\n.formOuterWrapper_inner{\n    border-top: 4vw solid #96c6f0;\n    border-left: 1vw solid  #96c6f0;\n    border-right: 1vw solid #96c6f0;\n    border-bottom: 4vw solid  #96c6f0;\n      /* margin-top: 1vw; */\n      border-radius: 0.5vw; \n}\n\n/* .borderInnerWrapper2_inner{\n    border: 2px solid white;\n\n} */\n\n.noResultSearch{\n    color: #001959;\n    font-size: 18px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-family:  Arial, Helvetica, sans-serif;\n}\n\n.datePicker_inner{\n    font-family:Tahoma; \n    padding-top: 0.8vw;\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* .myForm{\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    align-items: flex-start ;\n    margin-top: 6vw;\n    margin-left: 7vw;\n}\n\n.myForm label{\n    padding-right: 30px;\n}\n\n.list__green {\n    color: green;\n}\n\n.list__red{\n    color: red;\n} */\n\n.switcher{\n    /* position: relative; */\n    /* margin-top: 1vw; */\n    /* width: 80%; */\n    text-align: left;\n    display:flex;\n    flex-direction: row;\n    width:100%;\n    /* height: 7vw; */\n    /* overflow: hidden */\n    /* margin-left: auto; */\n    /* margin-right: auto; */\n}\n\n.switcher h4{\n    color:rgb(25, 25, 94);\n    font-size:90%;\n    font-weight:bold;\n}\n\n.switcher__item.active{\n    background-color: #96c6f0;\n    color: #003057;\n\n}\n\n.switcher__item{\n    background-color: #cddef8;\n    color: rgb(175, 170, 170);\n    font-weight: bold;    \n    cursor: pointer;\n    padding: 7px 5px 5px 7px;\n    border-top: 1px solid #8bc0f0;\n    border-left: 1px solid #8bc0f0;\n    border-right : 1px solid #8bc0f0;\n    border-bottom: none;\n    border-top-right-radius: 3vw;\n    border-top-left-radius: 1vw;\n    width: 35%;\n    /* height: 100%; */\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/FirstPageofSearchModule/SearchResizersAndSwitchers/SwitcherFront.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;GAmBG;;AAEH;IACI,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,cAAc;;AAElB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,wBAAwB;IACxB,6BAA6B;IAC7B,8BAA8B;IAC9B,gCAAgC;IAChC,mBAAmB;IACnB,4BAA4B;IAC5B,2BAA2B;IAC3B,UAAU;IACV,kBAAkB;AACtB","sourcesContent":["/* .myForm{\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    align-items: flex-start ;\n    margin-top: 6vw;\n    margin-left: 7vw;\n}\n\n.myForm label{\n    padding-right: 30px;\n}\n\n.list__green {\n    color: green;\n}\n\n.list__red{\n    color: red;\n} */\n\n.switcher{\n    /* position: relative; */\n    /* margin-top: 1vw; */\n    /* width: 80%; */\n    text-align: left;\n    display:flex;\n    flex-direction: row;\n    width:100%;\n    /* height: 7vw; */\n    /* overflow: hidden */\n    /* margin-left: auto; */\n    /* margin-right: auto; */\n}\n\n.switcher h4{\n    color:rgb(25, 25, 94);\n    font-size:90%;\n    font-weight:bold;\n}\n\n.switcher__item.active{\n    background-color: #96c6f0;\n    color: #003057;\n\n}\n\n.switcher__item{\n    background-color: #cddef8;\n    color: rgb(175, 170, 170);\n    font-weight: bold;    \n    cursor: pointer;\n    padding: 7px 5px 5px 7px;\n    border-top: 1px solid #8bc0f0;\n    border-left: 1px solid #8bc0f0;\n    border-right : 1px solid #8bc0f0;\n    border-bottom: none;\n    border-top-right-radius: 3vw;\n    border-top-left-radius: 1vw;\n    width: 35%;\n    /* height: 100%; */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CartDetailsSummary{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n\n.CartDetailsSmallScreenSummary{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    display: inline-block;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    /* flex:1; */\n}\n\n\n.CartDetailsSummary h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.CartDetailsSmallScreenSummary h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.VoucherText{\n    display: flex;\n    justify-content: center;\n}\n\n.VoucherText h4{\n    color: rgb(77, 75, 75);\n    font-size:15px;\n    font-weight: bold;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/LiqPay/CartDetailsSummary.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[".CartDetailsSummary{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n\n.CartDetailsSmallScreenSummary{\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    display: inline-block;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    /* flex:1; */\n}\n\n\n.CartDetailsSummary h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.CartDetailsSmallScreenSummary h4{\n    color: rgb(77, 75, 75);\n    font-size:18px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.VoucherText{\n    display: flex;\n    justify-content: center;\n}\n\n.VoucherText h4{\n    color: rgb(77, 75, 75);\n    font-size:15px;\n    font-weight: bold;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 73674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".HotelFooterPages{\n    width:70%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:1vh;\n}\n\n.HotelFooterPagesSmallScreen{\n    width:90%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:1vh;\n}\n\n.HotelFooterPages h2{\n    color: white;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n}\n\n.HotelFooterPagesSmallScreen h2{\n    color: white;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n}\n\n.HotelContentWrapper{\n    background:#ddeaf5;\n    border-radius:5px;\n    margin-bottom:-5vh;\n    padding-top:3vh;\n    padding-right:3vh;\n    padding-left:3vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    border-top:3px solid white;\n}\n\n.HotelContentWrapperSmallScreen{\n    background:#ddeaf5;\n    border-radius:5px;\n    padding-top:2vh;\n    padding-right:3vh;\n    padding-left:3vh;\n}\n\n.HotelContentWrapper img{\n    margin-bottom:2vh;\n}\n.HotelContentWrapper button{\n    height: 100%;\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 90%;\n    width: 25%;\n    text-align: center;\n    padding-bottom: 2vh;\n    padding-top: 2vh;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.HotelContentWrapper button:hover{\n    cursor:pointer;\n    background: #024461;\n    color: white;\n}\n.HotelContentWrapperSmallScreen img{\n    margin-bottom:2vh;\n}\n\n.HotelContentWrapperSmallScreen h3{\n    font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/PageComponents/Footer/CityHotelsCSS.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".HotelFooterPages{\n    width:70%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:1vh;\n}\n\n.HotelFooterPagesSmallScreen{\n    width:90%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:1vh;\n}\n\n.HotelFooterPages h2{\n    color: white;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n}\n\n.HotelFooterPagesSmallScreen h2{\n    color: white;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n}\n\n.HotelContentWrapper{\n    background:#ddeaf5;\n    border-radius:5px;\n    margin-bottom:-5vh;\n    padding-top:3vh;\n    padding-right:3vh;\n    padding-left:3vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    border-top:3px solid white;\n}\n\n.HotelContentWrapperSmallScreen{\n    background:#ddeaf5;\n    border-radius:5px;\n    padding-top:2vh;\n    padding-right:3vh;\n    padding-left:3vh;\n}\n\n.HotelContentWrapper img{\n    margin-bottom:2vh;\n}\n.HotelContentWrapper button{\n    height: 100%;\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 90%;\n    width: 25%;\n    text-align: center;\n    padding-bottom: 2vh;\n    padding-top: 2vh;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.HotelContentWrapper button:hover{\n    cursor:pointer;\n    background: #024461;\n    color: white;\n}\n.HotelContentWrapperSmallScreen img{\n    margin-bottom:2vh;\n}\n\n.HotelContentWrapperSmallScreen h3{\n    font-size: 15px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".galleryNotActive{\n    display:none;\n}\n\n.galleryActive{\n    display:block;\n    /* position:relative; */\n}\n\n.purecontentPage{\n    display: flex;\n    flex-direction: column;\n    color: rgb(3, 3, 63);\n    justify-content: center;\n    text-align: justify;\n    margin-left: 6vw;\n    margin-right: 6vw;\n    margin-top: 4vh;\n    margin-bottom: 6vh;\n}\n\n.purecontentPage img{\n    max-width: 100%;\n    /* max-height: 300px; */\n    /* height: 12vh; */\n    border-radius: 2px;\n}\n\n.purecontentPage div{\n    color: rgb(95, 94, 94);\n    font-size: 16px;\n    text-align: justify;\n    font-family: Arial;\n    min-height:10vh;\n}\n\n.purecontentPage p span{\n    color: rgb(95, 94, 94);\n    font-size: 16px;\n    text-align: justify;\n    font-family: 'Arial';\n    line-height: 22px;\n}\n\n.purecontentPage div span{\n    color: rgb(95, 94, 94);\n    font-size: 16px;\n    text-align: justify;\n    font-family: 'Arial';\n    line-height: 22px;\n}\n\n.purecontentPage h2{\n    /* color: #102D69; */\n    color: white;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n}\n\n.purecontentPage h3{\n    color: #102D69;\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    margin-top: 2vh;\n    margin-bottom: 0.4vh;\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n\n.purecontentPage h4{\n    color: royalblue;\n    font-size: 18px;\n    font-weight: bold;\n    font-style: italic;\n    font-family: Arial;\n    margin-bottom: 0.4vh;\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n\n.purecontentPage .inner{\n    font-size: 17px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n    cursor:pointer;\n}\n\n.purecontentPage .innerClicked{\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #1d3574;\n    padding: 2vw;\n    border-radius: 1vw;\n    cursor:pointer;\n}\n\n.purecontentPage .inner a{\ntext-decoration: none;\ncolor: white;\n}\n\n.purecontentPage .inner:hover{\n   background-color: #1d3574;\n   /* color: white; */\n}\n\n.purecontentPage .innerClicked a{\n    text-decoration: none;\n    color: white;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/PageComponents/MenuPageGeneratorCSS.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;AACA,qBAAqB;AACrB,YAAY;AACZ;;AAEA;GACG,yBAAyB;GACzB,kBAAkB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB","sourcesContent":[".galleryNotActive{\n    display:none;\n}\n\n.galleryActive{\n    display:block;\n    /* position:relative; */\n}\n\n.purecontentPage{\n    display: flex;\n    flex-direction: column;\n    color: rgb(3, 3, 63);\n    justify-content: center;\n    text-align: justify;\n    margin-left: 6vw;\n    margin-right: 6vw;\n    margin-top: 4vh;\n    margin-bottom: 6vh;\n}\n\n.purecontentPage img{\n    max-width: 100%;\n    /* max-height: 300px; */\n    /* height: 12vh; */\n    border-radius: 2px;\n}\n\n.purecontentPage div{\n    color: rgb(95, 94, 94);\n    font-size: 16px;\n    text-align: justify;\n    font-family: Arial;\n    min-height:10vh;\n}\n\n.purecontentPage p span{\n    color: rgb(95, 94, 94);\n    font-size: 16px;\n    text-align: justify;\n    font-family: 'Arial';\n    line-height: 22px;\n}\n\n.purecontentPage div span{\n    color: rgb(95, 94, 94);\n    font-size: 16px;\n    text-align: justify;\n    font-family: 'Arial';\n    line-height: 22px;\n}\n\n.purecontentPage h2{\n    /* color: #102D69; */\n    color: white;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n}\n\n.purecontentPage h3{\n    color: #102D69;\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    margin-top: 2vh;\n    margin-bottom: 0.4vh;\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n\n.purecontentPage h4{\n    color: royalblue;\n    font-size: 18px;\n    font-weight: bold;\n    font-style: italic;\n    font-family: Arial;\n    margin-bottom: 0.4vh;\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n\n.purecontentPage .inner{\n    font-size: 17px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #6194c0;\n    padding: 2vw;\n    border-radius: 1vw;\n    cursor:pointer;\n}\n\n.purecontentPage .innerClicked{\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    font-family: Arial;\n    background-color: #1d3574;\n    padding: 2vw;\n    border-radius: 1vw;\n    cursor:pointer;\n}\n\n.purecontentPage .inner a{\ntext-decoration: none;\ncolor: white;\n}\n\n.purecontentPage .inner:hover{\n   background-color: #1d3574;\n   /* color: white; */\n}\n\n.purecontentPage .innerClicked a{\n    text-decoration: none;\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 62335:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapperMain{\n    min-height: 100vh;\n}\n\n/* ALL CSS FOR VERY TOP MENU */\n.topMenu{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    background-color: #003057;\n    height: 8vh;\n    padding: 0.3vw;    \n    text-align: center;\n    top: 0;\n    left: 0;\n    /* position: fixed; */\n    /* z-index: 1040;     */\n}\n\n.WhiteLableTopMenu{\n    background-position:center;\n   \tbackground-size:cover;\n    border-bottom: 10px solid rgb(38,71,141);\n\twidth:100%;\n    top: 0;\n    left: 0;\n    height: 55vh;\n    margin-bottom:8vh;\n    /* margin-left: auto;\n    margin-right: auto; */\n}\n\n/* FOR WHITELABLES COMPANIES LIKE ROTARY WHEN I DO NOT WANT TO SHOW OUR MENU */\n.NotVisibleMenu{\n    display:none;\n}\n\n.topMenu_right{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 3vw;    \n    text-align: center;\n    /* position: fixed; */\n}\n\n.topMenu a{\n    font-family: Arial;\n    /* font-weight:bold; */\n    font-size: 13px;\n    /* padding-left:5px; */\n    color: white;\n    text-decoration: none;\n    padding: 1vw;\n}\n\n.topMenu a:hover{\n    /* color:rgb(133,133,244); */\n    /* color: #7a7581; */\n    color: #BCD7EE;\n    font-weight: bold;\n    font-style: italic;\n}\n\n/* for NavLinks topmenu that come from Smart */\n.Upper{\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    justify-content: center;\n    align-items: center;\n    /* padding-left: 0;\n    margin-top: auto;\n    margin-bottom: auto; */\n}\n\n.Upper ul{\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.HomeIcon{\n    color: white;   \n    font-size: 25px;\n    font-weight: bold;\n    border: none;\n    padding-left: 3vw;;\n}\n\n/* for NaVLinks when the page is active*/\na.active {  \n    color:white;\n    text-decoration: underline;\n    font-weight: bold;\n}\n\n.UserOutlinedIcon{\n    border: none;\n    font-weight:bold;\n    padding-right: 0.4vw;\n}\n/* ///////////////////////////////////// */\n\n/* ALL CSS FOR MIDDLE MENU */\n.middleMenu ,\n.nav_big{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n}\n\n.middleMenuSmallScreen{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.middleMenu,\n.middleMenuSmallScreen\n{\n    padding-top: 3px;\n    padding-bottom: 3px;\n    background-color: #dce5ee;\n    width: 100%;\n    position: sticky;\n    z-index: 1030;\n}\n\n.middleMenu a{\n    color: #003057;\n    text-decoration: none;\n    min-width: 10vw;\n}\n\n.middleMenu a:hover{\n    color: white;\n    font-style: italic;\n}\n\n.middleMenu h2:hover{\n    background-color: #82b3db;\n    border-radius: 6px;\n}\n\n.ArkturDMClogo{\n    padding:5px 15px 5px 20px;\n    height: 80px;\n}\n\n/* LargeScreensCSS */\n\n.nav_big{\n    margin-left: 3vw;\n    /* max-width: 30vw; */\n}\n\n.nav_big_link{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    list-style: none;\n    padding-left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    max-width: 50%;\n}\n\n.nav_big_link li{\n    display: flex;\n    flex-direction: row;\n    justify-content:flex-start;\n}\n\n.wrapper_nav_big_link{\n    margin-top:auto;\n    margin-bottom:auto;\n}\n\n.nav_big_link h2{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    font-weight: bold;\n    width: 10vw;\n    line-height : 3vw;\n    color: #102D69;\n    font-family: \"Arial Narrow\";\n    font-size: 18px;\n}\n\n.nav_big_link a{\n    padding-left: 1vw;\n    padding-right: 1vw;\n}\n/* //////////////////////// */\n\n/* SmallScreensWindow CSS */\n\n.nav-small-link{\n    cursor: pointer;\n    color: #003057;\n    list-style: none;\n    line-height: 10px;\n    padding-left: auto;\n    padding-right: auto;\n    /* min-width:11vw; */\n}\n\n.nav-small-link a{\n    font-family: 'Tahoma';\n    font-size: 3vh;\n    /* font-weight: bold; */\n    /* font-style: italic; */\n    color: #003057;\n    text-align: left;\n    vertical-align: middle;\n}\n\n#sidebar-list{\n    width: 30%;\n    position: absolute;\n    z-index: 2000;\n    right: 0;\n    padding-top: 4vh;\n    padding-left: 4vw;\n    /* font-size: 12px; */\n}\n\n.hamburger-btn{\n    /* width: 15%; */\n    width:20vw;\n    background-color:#DCE5EE;\n    margin-top: 1vh;\n    border: none;\n    display:block;\n    position: relative;\n    left:50%;\n}\n\n.MenuButtonIcon{\n    color: #003057;\n    /* font-size: 30px; */\n    font-weight: bold;\n    border: none;\n}\n\n.CloseMenuIcon{\n    /* font-size: 30px; */\n    font-weight: bold;\n    border-radius: 20px;\n    border: none;\n    color:#003057\n}\n.addTransition{\n    /* background-color: #f7e9ec; */\n    /* background-color: #003057; */\n    background-color: #dce5ee;;\n    min-height: 30vh;\n    /* width: 170px; */\n    /* width: 20vw; */\n    position: absolute;\n    /* position: sticky; */\n    z-index: 2000;\n    right: 0;\n    /* top: 0; */\n    /* margin-top: 35px; */\n    border: 2px solid white;\n    border-radius: 6px;\n    /* transform: translateX(170px); */\n    /* transition: transform 0.5s ease-in-out; */\n}\n.removeTransition{\n    /* transform: translateX(170px); */\n    /* transition: transform 0.5s ease-in-out;  */\n    display: none;\n}\n\n/* .nav-small{\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    justify-content: space-around;\n    min-width: 15vw;\n    /* margin: auto; */\n    /* min-height: 15vh; */\n    /* margin-top: 50px; */\n    /* width: 80%; */\n/* } */ \n\n\n/* ////////////////////// */\n\n.dropdown_list {\n    display: none;\n}\n\n.dropdown:hover .dropdown_list{\n    display: block;\n    position: absolute;\n    z-index: 1000;\n    /* background-color: rgb(235, 214, 188); */\n    background-color: #BCD7EE;\n    /* background-color: #5fa2d8; */\n    list-style-type: none;\n    width: 10vw;\n    padding-left: 2vw;\n    margin-left: 0px;\n    border-radius: 10px;\n}\n\n.dropdown:hover{\n    /* background-color: rgb(235, 214, 188); */\n    /* background-color: #f8d8ae; */\n    border-radius: 6px;\n    color: #001959;\n    /* color:rgb(133,133,244); */\n    font-style: italic;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* background-color: rgb(235, 214, 188); */\n    background-color: #BCD7EE;\n    display: block;\n    border-radius: 10px;\n    position: absolute;\n    z-index: 1000;\n    width: 15vw;\n    /* text-align: left;\n    margin-left: '179px';\n    margin-top: '64' */\n\n}\n\n.list_2{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.list li{\n    list-style-type: none;\n    margin-bottom: 0.5vw;\n\n}\n\n.testLi {\n    list-style-type: none;\n    position:absolute;\n    z-index: 1000;\n    background-color: rgb(235, 214, 188);\n    border: 2px solid burlywood;\n    border-radius: 10px;\n    padding: 0 auto;\n    text-align: left;\n}\n\n.toursList{\n    position: relative;   \n    /* margin-top: -60px; */\n    /* margin-left: 150px; */\n    font-family: \"Calibri\";\n    font-size: 12px;\n}\n\n.toursListLi a{\n    text-decoration: none;\n    /* color:rgb(3, 3, 63); */\n    color: #001959\n}\n\n.toursListLi a:hover{\n    text-decoration: underline;\n    /* color: rgb(133,133,244) */\n    color: #005AEB;\n}\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/PageComponents/ResponsiveHeader/header.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB;;AAEA,8BAA8B;AAC9B;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,wCAAwC;CAC3C,UAAU;IACP,MAAM;IACN,OAAO;IACP,YAAY;IACZ,iBAAiB;IACjB;yBACqB;AACzB;;AAEA,8EAA8E;AAC9E;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;IACf,sBAAsB;IACtB,YAAY;IACZ,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB;;0BAEsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA,wCAAwC;AACxC;IACI,WAAW;IACX,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;AACxB;AACA,0CAA0C;;AAE1C,4BAA4B;AAC5B;;IAEI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;;;IAGI,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA,oBAAoB;;AAEpB;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA,6BAA6B;;AAE7B,2BAA2B;;AAE3B;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,cAAc;IACd,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ;AACJ;AACA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,QAAQ;IACR,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,kCAAkC;IAClC,4CAA4C;AAChD;AACA;IACI,kCAAkC;IAClC,6CAA6C;IAC7C,aAAa;AACjB;;AAEA;;;;;;sBAMsB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,gBAAgB;AACpB,MAAM;;;AAGN,2BAA2B;;AAE3B;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,0CAA0C;IAC1C,yBAAyB;IACzB,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,+BAA+B;IAC/B,kBAAkB;IAClB,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,0CAA0C;IAC1C,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX;;sBAEkB;;AAEtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;;AAExB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB;AACJ;;AAEA;IACI,0BAA0B;IAC1B,4BAA4B;IAC5B,cAAc;AAClB","sourcesContent":[".wrapperMain{\n    min-height: 100vh;\n}\n\n/* ALL CSS FOR VERY TOP MENU */\n.topMenu{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    background-color: #003057;\n    height: 8vh;\n    padding: 0.3vw;    \n    text-align: center;\n    top: 0;\n    left: 0;\n    /* position: fixed; */\n    /* z-index: 1040;     */\n}\n\n.WhiteLableTopMenu{\n    background-position:center;\n   \tbackground-size:cover;\n    border-bottom: 10px solid rgb(38,71,141);\n\twidth:100%;\n    top: 0;\n    left: 0;\n    height: 55vh;\n    margin-bottom:8vh;\n    /* margin-left: auto;\n    margin-right: auto; */\n}\n\n/* FOR WHITELABLES COMPANIES LIKE ROTARY WHEN I DO NOT WANT TO SHOW OUR MENU */\n.NotVisibleMenu{\n    display:none;\n}\n\n.topMenu_right{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 3vw;    \n    text-align: center;\n    /* position: fixed; */\n}\n\n.topMenu a{\n    font-family: Arial;\n    /* font-weight:bold; */\n    font-size: 13px;\n    /* padding-left:5px; */\n    color: white;\n    text-decoration: none;\n    padding: 1vw;\n}\n\n.topMenu a:hover{\n    /* color:rgb(133,133,244); */\n    /* color: #7a7581; */\n    color: #BCD7EE;\n    font-weight: bold;\n    font-style: italic;\n}\n\n/* for NavLinks topmenu that come from Smart */\n.Upper{\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    justify-content: center;\n    align-items: center;\n    /* padding-left: 0;\n    margin-top: auto;\n    margin-bottom: auto; */\n}\n\n.Upper ul{\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.HomeIcon{\n    color: white;   \n    font-size: 25px;\n    font-weight: bold;\n    border: none;\n    padding-left: 3vw;;\n}\n\n/* for NaVLinks when the page is active*/\na.active {  \n    color:white;\n    text-decoration: underline;\n    font-weight: bold;\n}\n\n.UserOutlinedIcon{\n    border: none;\n    font-weight:bold;\n    padding-right: 0.4vw;\n}\n/* ///////////////////////////////////// */\n\n/* ALL CSS FOR MIDDLE MENU */\n.middleMenu ,\n.nav_big{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n}\n\n.middleMenuSmallScreen{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.middleMenu,\n.middleMenuSmallScreen\n{\n    padding-top: 3px;\n    padding-bottom: 3px;\n    background-color: #dce5ee;\n    width: 100%;\n    position: sticky;\n    z-index: 1030;\n}\n\n.middleMenu a{\n    color: #003057;\n    text-decoration: none;\n    min-width: 10vw;\n}\n\n.middleMenu a:hover{\n    color: white;\n    font-style: italic;\n}\n\n.middleMenu h2:hover{\n    background-color: #82b3db;\n    border-radius: 6px;\n}\n\n.ArkturDMClogo{\n    padding:5px 15px 5px 20px;\n    height: 80px;\n}\n\n/* LargeScreensCSS */\n\n.nav_big{\n    margin-left: 3vw;\n    /* max-width: 30vw; */\n}\n\n.nav_big_link{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    list-style: none;\n    padding-left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    max-width: 50%;\n}\n\n.nav_big_link li{\n    display: flex;\n    flex-direction: row;\n    justify-content:flex-start;\n}\n\n.wrapper_nav_big_link{\n    margin-top:auto;\n    margin-bottom:auto;\n}\n\n.nav_big_link h2{\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    font-weight: bold;\n    width: 10vw;\n    line-height : 3vw;\n    color: #102D69;\n    font-family: \"Arial Narrow\";\n    font-size: 18px;\n}\n\n.nav_big_link a{\n    padding-left: 1vw;\n    padding-right: 1vw;\n}\n/* //////////////////////// */\n\n/* SmallScreensWindow CSS */\n\n.nav-small-link{\n    cursor: pointer;\n    color: #003057;\n    list-style: none;\n    line-height: 10px;\n    padding-left: auto;\n    padding-right: auto;\n    /* min-width:11vw; */\n}\n\n.nav-small-link a{\n    font-family: 'Tahoma';\n    font-size: 3vh;\n    /* font-weight: bold; */\n    /* font-style: italic; */\n    color: #003057;\n    text-align: left;\n    vertical-align: middle;\n}\n\n#sidebar-list{\n    width: 30%;\n    position: absolute;\n    z-index: 2000;\n    right: 0;\n    padding-top: 4vh;\n    padding-left: 4vw;\n    /* font-size: 12px; */\n}\n\n.hamburger-btn{\n    /* width: 15%; */\n    width:20vw;\n    background-color:#DCE5EE;\n    margin-top: 1vh;\n    border: none;\n    display:block;\n    position: relative;\n    left:50%;\n}\n\n.MenuButtonIcon{\n    color: #003057;\n    /* font-size: 30px; */\n    font-weight: bold;\n    border: none;\n}\n\n.CloseMenuIcon{\n    /* font-size: 30px; */\n    font-weight: bold;\n    border-radius: 20px;\n    border: none;\n    color:#003057\n}\n.addTransition{\n    /* background-color: #f7e9ec; */\n    /* background-color: #003057; */\n    background-color: #dce5ee;;\n    min-height: 30vh;\n    /* width: 170px; */\n    /* width: 20vw; */\n    position: absolute;\n    /* position: sticky; */\n    z-index: 2000;\n    right: 0;\n    /* top: 0; */\n    /* margin-top: 35px; */\n    border: 2px solid white;\n    border-radius: 6px;\n    /* transform: translateX(170px); */\n    /* transition: transform 0.5s ease-in-out; */\n}\n.removeTransition{\n    /* transform: translateX(170px); */\n    /* transition: transform 0.5s ease-in-out;  */\n    display: none;\n}\n\n/* .nav-small{\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    justify-content: space-around;\n    min-width: 15vw;\n    /* margin: auto; */\n    /* min-height: 15vh; */\n    /* margin-top: 50px; */\n    /* width: 80%; */\n/* } */ \n\n\n/* ////////////////////// */\n\n.dropdown_list {\n    display: none;\n}\n\n.dropdown:hover .dropdown_list{\n    display: block;\n    position: absolute;\n    z-index: 1000;\n    /* background-color: rgb(235, 214, 188); */\n    background-color: #BCD7EE;\n    /* background-color: #5fa2d8; */\n    list-style-type: none;\n    width: 10vw;\n    padding-left: 2vw;\n    margin-left: 0px;\n    border-radius: 10px;\n}\n\n.dropdown:hover{\n    /* background-color: rgb(235, 214, 188); */\n    /* background-color: #f8d8ae; */\n    border-radius: 6px;\n    color: #001959;\n    /* color:rgb(133,133,244); */\n    font-style: italic;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* background-color: rgb(235, 214, 188); */\n    background-color: #BCD7EE;\n    display: block;\n    border-radius: 10px;\n    position: absolute;\n    z-index: 1000;\n    width: 15vw;\n    /* text-align: left;\n    margin-left: '179px';\n    margin-top: '64' */\n\n}\n\n.list_2{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.list li{\n    list-style-type: none;\n    margin-bottom: 0.5vw;\n\n}\n\n.testLi {\n    list-style-type: none;\n    position:absolute;\n    z-index: 1000;\n    background-color: rgb(235, 214, 188);\n    border: 2px solid burlywood;\n    border-radius: 10px;\n    padding: 0 auto;\n    text-align: left;\n}\n\n.toursList{\n    position: relative;   \n    /* margin-top: -60px; */\n    /* margin-left: 150px; */\n    font-family: \"Calibri\";\n    font-size: 12px;\n}\n\n.toursListLi a{\n    text-decoration: none;\n    /* color:rgb(3, 3, 63); */\n    color: #001959\n}\n\n.toursListLi a:hover{\n    text-decoration: underline;\n    /* color: rgb(133,133,244) */\n    color: #005AEB;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 98517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ul{\n    padding-left:0;\n    padding-right:0;\n    list-style: none;\n}\n\n.TopToursWrapper{\n    margin-left: auto;\n    margin-right: auto; \n    width: 60vw;\n    text-align: center;\n}\n\n.TopToursWrapper:hover{\n    cursor: pointer;\n}\n\n.TopToursImage{\n /* width: '18vw', */\n  /* height: '33vh', */\n  /* width: 285px; */\n  height: 270px;\n  border-radius: 5px;\n}\n\n.TopToursTitle h4{\n /* display:block; */\n color: #003057; \n font-family: 'Arial Narrow';\n font-weight: bold;\n /* background: rgb(214, 114, 116); */\n /* background-color: #005AEB; */\n /* background-color: #BCD7EE; */\n /* border: 2px solid #005AEB; */\n text-align: center;\n /* width: 285px; */\n /* max-height: 60px; */\n /* line-height: 1.1em;\n overflow: hidden; */\n padding: 0.5vw;\n font-size: 100%;\n}\n \n.TopToursTitle{\n    background-color: #BCD7EE;\n    display: block;\n    /* width: 285px; */\n    height: 9vh;\n    overflow: hidden;\n    border-radius: 5px;\n    margin-top: 0.2vh;\n    margin-bottom: 2vh;\n    margin-left:auto;\n    margin-right:auto;\n} \n\n.SmallerTopToursWrapper{\n    margin-left: auto;\n    margin-right: auto;    \n}\n\n.SmallerTopToursImage{\n    height: 270px;\n    border-radius: 5px;   \n}\n\n.SmallerTopToursTitle{\n    background-color: #BCD7EE;\n    display: block;\n    height: 8vh;\n    overflow: hidden;\n    border-radius: 5px;\n    margin-top: 0.2vh;\n    margin-bottom: 2vh;   \n}\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/PageComponents/TopToursCSS.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;CACC,mBAAmB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;CACC,mBAAmB;CACnB,cAAc;CACd,2BAA2B;CAC3B,iBAAiB;CACjB,oCAAoC;CACpC,+BAA+B;CAC/B,+BAA+B;CAC/B,+BAA+B;CAC/B,kBAAkB;CAClB,kBAAkB;CAClB,sBAAsB;CACtB;oBACmB;CACnB,cAAc;CACd,eAAe;AAChB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":["ul{\n    padding-left:0;\n    padding-right:0;\n    list-style: none;\n}\n\n.TopToursWrapper{\n    margin-left: auto;\n    margin-right: auto; \n    width: 60vw;\n    text-align: center;\n}\n\n.TopToursWrapper:hover{\n    cursor: pointer;\n}\n\n.TopToursImage{\n /* width: '18vw', */\n  /* height: '33vh', */\n  /* width: 285px; */\n  height: 270px;\n  border-radius: 5px;\n}\n\n.TopToursTitle h4{\n /* display:block; */\n color: #003057; \n font-family: 'Arial Narrow';\n font-weight: bold;\n /* background: rgb(214, 114, 116); */\n /* background-color: #005AEB; */\n /* background-color: #BCD7EE; */\n /* border: 2px solid #005AEB; */\n text-align: center;\n /* width: 285px; */\n /* max-height: 60px; */\n /* line-height: 1.1em;\n overflow: hidden; */\n padding: 0.5vw;\n font-size: 100%;\n}\n \n.TopToursTitle{\n    background-color: #BCD7EE;\n    display: block;\n    /* width: 285px; */\n    height: 9vh;\n    overflow: hidden;\n    border-radius: 5px;\n    margin-top: 0.2vh;\n    margin-bottom: 2vh;\n    margin-left:auto;\n    margin-right:auto;\n} \n\n.SmallerTopToursWrapper{\n    margin-left: auto;\n    margin-right: auto;    \n}\n\n.SmallerTopToursImage{\n    height: 270px;\n    border-radius: 5px;   \n}\n\n.SmallerTopToursTitle{\n    background-color: #BCD7EE;\n    display: block;\n    height: 8vh;\n    overflow: hidden;\n    border-radius: 5px;\n    margin-top: 0.2vh;\n    margin-bottom: 2vh;   \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 67301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".TopToursDetailsBlock{\n    display:flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    /* width: '100vw' */\n}\n\n.TopToursDetailsBlockSmallScreen{\n    display:flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    /* width: '100vw' */\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/PageComponents/TopToursDetailsCSS.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":[".TopToursDetailsBlock{\n    display:flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    /* width: '100vw' */\n}\n\n.TopToursDetailsBlockSmallScreen{\n    display:flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    /* width: '100vw' */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 15366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer{\n    width: 100% ;\n    background-color: #003057;\n    min-height: 25vh;\n    padding-bottom: 3vw;\n    bottom: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.footer h2{\n    line-height: 0.5rem;\n}\n\n/* .footerXS {\n    min-width: 400px;\n    background-color: orange;\n    min-height: 25vh;\n    padding-bottom: 3vw;\n    bottom: 0;\n    color: red;\n}\n\n.footerSX .footerLinks{\n    padding-top: 2vw;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* min-width: 110vw; */\n/* }  */\n\n.footer ul a{\n    height: 1.5vw;\n    padding-top: 0.3vw; \n    padding-bottom: 0.3vw;\n    color: white;\n    padding-left: 0;\n    font-size: 13px;\n    font-family: Arial;\n    position: relative;\n    z-index: 2000;\n}\n\n.footer ul{\n    list-style: none;\n    padding-left: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.footer ul a:hover{\n   text-decoration: underline;\n}\n\n.footerLinks{\n    margin-top: 2vw;\n    /* min-width: 110vw; */\n}\n\n.footerLinks h3{\n    padding-bottom: 1.2vh;\n}\n\n.footer h3{\n    color: white;\n    font-weight: bold;\n    font-family: Tahoma;\n    font-size: 14px;\n }\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/RoutesAndLinks/footer.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;;;;;;;;;;;;;;;0BAgB0B;AAC1B,OAAO;;AAEP;IACI,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;GACG,0BAA0B;AAC7B;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;CAClB","sourcesContent":[".footer{\n    width: 100% ;\n    background-color: #003057;\n    min-height: 25vh;\n    padding-bottom: 3vw;\n    bottom: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.footer h2{\n    line-height: 0.5rem;\n}\n\n/* .footerXS {\n    min-width: 400px;\n    background-color: orange;\n    min-height: 25vh;\n    padding-bottom: 3vw;\n    bottom: 0;\n    color: red;\n}\n\n.footerSX .footerLinks{\n    padding-top: 2vw;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* min-width: 110vw; */\n/* }  */\n\n.footer ul a{\n    height: 1.5vw;\n    padding-top: 0.3vw; \n    padding-bottom: 0.3vw;\n    color: white;\n    padding-left: 0;\n    font-size: 13px;\n    font-family: Arial;\n    position: relative;\n    z-index: 2000;\n}\n\n.footer ul{\n    list-style: none;\n    padding-left: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.footer ul a:hover{\n   text-decoration: underline;\n}\n\n.footerLinks{\n    margin-top: 2vw;\n    /* min-width: 110vw; */\n}\n\n.footerLinks h3{\n    padding-bottom: 1.2vh;\n}\n\n.footer h3{\n    color: white;\n    font-weight: bold;\n    font-family: Tahoma;\n    font-size: 14px;\n }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 96216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".HotelDescriptionUl{\n    /* width: 65vw; */\n    \n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5vh;\n    font-family: 'Tahoma';\n}\n\n.HotelDescriptionUlSmallScreen{\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5vh;\n  font-family: 'Tahoma';\n}\n\n.HotelDescriptionLi{\n    /* display: flex; */\n    display:grid;\n    /* flex-direction: column; */\n    grid-template-columns: 33% 67%;\n    grid-auto-rows: minmax(100px, auto);\n    text-align: justify;\n    border: 2px solid #d4e5f7;\n    border-radius: 5px;\n    background: #dce5fc;\n    padding: 1vw 2vw;\n    color: #001959;\n    margin-bottom: 1vh;\n    /* height: 10vh; */\n}\n\n.HotelDescriptionLiSmallScreen{\n  display: flex;\n  /* display:grid; */\n  flex-direction: column-reverse;\n  /* grid-template-columns: 100%; */\n  /* grid-auto-rows: minmax(100px, auto); */\n  text-align: justify;\n  border: 2px solid #d4e5f7;\n  border-radius: 5px;\n  background: #dce5fc;\n  padding: 1vw 2vw;\n  color: #001959;\n  margin-bottom: 1vh;\n  /* height: 10vh; */\n}\n\n.descriptionContent{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.searchFront{\n    /*the container must be positioned relative:*/\n    position: relative;\n    display: inline-block;\n  }\n\n\n  .searchrendering_Wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 30vw; */\n  }\n\n  .WrapperHotel_ItemContent{\n    padding-right: 2vw;\n    grid-column:1 / 4;\n    grid-row:1 / 3;\n    margin-bottom: 3vw;\n  }\n\n  .Hotel_ItemContent {\n     /* display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    justify-items: start; */\n    padding: 0;\n    display:grid;\n    grid-template-columns: 30vw 20vw;\n    grid-template-rows: 30% 70%;\n    /* border-top:2px solid blue; */\n  }\n\n  .Hotel_ItemContentSmallScreen {\n    display: grid;\n    grid-template-columns: 40% 60%;\n    grid-template-rows: repeat(10vw,2);\n    /* justify-content: flex-end; */\n    /* justify-items: start; */\n    padding: 0;\n  }\n\n  .Li_HotelContent{\n    list-style-type: none;\n    font-size: 12px;\n    text-align: justify;\n    color: #001959;\n    padding-left: 1vw;\n    /* min-width: 15vw; */\n  }\n\n  .Li_HotelContentSmallScreen{\n    grid-row:1/4; \n    grid-column:2;\n    /* margin-bottom: 3vw; */\n  }\n\n  .Li_HotelContent span{\n    /* list-style-type: none; */\n    font-size: 12px;\n    text-align: justify;\n    color: #001959;\n    /* padding-left: 1vw; */\n    /* min-width: 15vw; */\n  }\n\n  .HotelNameStarRating{\n    display:flex; \n    flex-direction:row;\n  }\n\n  .HotelNameStarRatingSmallScreen{\n    display:flex;\n    flex-direction: column;\n  }\n\n  .HotelAddressSmallScreen{\n    grid-row:2;\n    grid-column:2;\n    font-size:12px;\n  }\n\n  .Li_Image{\n    list-style-type:none;\n    text-align: left;\n  }\n\n  .Li_ImageSmallScreen{\n    list-style-type:none;\n    grid-row:1/3;\n    grid-column:1;\n  }\n\n  .div_ItemObj{\n    display: flex;\n    flex-direction: column;\n    align-content: flex-start;\n    justify-content: flex-end;\n    max-width: 30vw;\n  }\n\n  .availablePeriods{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    /* justify-content: flex-start; */\n    margin-left: 1vw;\n    padding-bottom: 4vw;\n  }\n\n  .minimumRate_details{\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n  /*!!!!! BUTTONS !!!!!*/\n\n.availableButtonHotel{\n  padding: 0.5vw 1vw;\n  width: 55%;\n  font-size: 13px;\n  font-weight: bold;\n  background-color: #5EB82F;\n  /* background-color: #37e04e; */\n  color: white;\n  border-radius: 0.5vw;\n  position: relative;\n  z-index: 50;\n}\n\n.availableButtonHotel:hover{\n  cursor:pointer;\n  background-color: rgb(8, 131, 14);\n  color: rgb(250, 250, 141)\n}\n\n .onrequestButton{\n  padding: 0.5vw 1vw;\n  width: 10vw;\n  font-size: 13px;\n  font-weight: bold;\n  color: white;\n  border-radius: 0.5vw;\n  background-color: rgb(117, 111, 107);\n}\n\n.onrequestButton a{\n  color: white;\n  text-decoration:none;\n}\n\n.onrequestButton a:hover{\n  color: white;\n  text-decoration:underline;\n}\n\n.HotelAddress{\n  list-style-type: none;\n}\n\n.RateLoading{\n    width: 285px;\n    height: 250px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n\n}\n\n.test:hover{\ncursor:pointer;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/SecondPageofSearchModule/Hotels/HotelItemsCSS.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;;IAEjB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,qBAAqB;AACvB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,4BAA4B;IAC5B,8BAA8B;IAC9B,mCAAmC;IACnC,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,iCAAiC;EACjC,yCAAyC;EACzC,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,qBAAqB;EACvB;;;EAGA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,kBAAkB;EACpB;;EAEA;KACG;;;2BAGsB;IACvB,UAAU;IACV,YAAY;IACZ,gCAAgC;IAChC,2BAA2B;IAC3B,+BAA+B;EACjC;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,+BAA+B;IAC/B,0BAA0B;IAC1B,UAAU;EACZ;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,wBAAwB;EAC1B;;EAEA;IACE,2BAA2B;IAC3B,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,uBAAuB;IACvB,qBAAqB;EACvB;;EAEA;IACE,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,UAAU;IACV,aAAa;IACb,cAAc;EAChB;;EAEA;IACE,oBAAoB;IACpB,gBAAgB;EAClB;;EAEA;IACE,oBAAoB;IACpB,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,yBAAyB;IACzB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;IACjC,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA,sBAAsB;;AAExB;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,+BAA+B;EAC/B,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC;AACF;;CAEC;EACC,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;EACpB,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;;AAEjC;;AAEA;AACA,cAAc;AACd","sourcesContent":[".HotelDescriptionUl{\n    /* width: 65vw; */\n    \n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5vh;\n    font-family: 'Tahoma';\n}\n\n.HotelDescriptionUlSmallScreen{\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5vh;\n  font-family: 'Tahoma';\n}\n\n.HotelDescriptionLi{\n    /* display: flex; */\n    display:grid;\n    /* flex-direction: column; */\n    grid-template-columns: 33% 67%;\n    grid-auto-rows: minmax(100px, auto);\n    text-align: justify;\n    border: 2px solid #d4e5f7;\n    border-radius: 5px;\n    background: #dce5fc;\n    padding: 1vw 2vw;\n    color: #001959;\n    margin-bottom: 1vh;\n    /* height: 10vh; */\n}\n\n.HotelDescriptionLiSmallScreen{\n  display: flex;\n  /* display:grid; */\n  flex-direction: column-reverse;\n  /* grid-template-columns: 100%; */\n  /* grid-auto-rows: minmax(100px, auto); */\n  text-align: justify;\n  border: 2px solid #d4e5f7;\n  border-radius: 5px;\n  background: #dce5fc;\n  padding: 1vw 2vw;\n  color: #001959;\n  margin-bottom: 1vh;\n  /* height: 10vh; */\n}\n\n.descriptionContent{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n.searchFront{\n    /*the container must be positioned relative:*/\n    position: relative;\n    display: inline-block;\n  }\n\n\n  .searchrendering_Wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 30vw; */\n  }\n\n  .WrapperHotel_ItemContent{\n    padding-right: 2vw;\n    grid-column:1 / 4;\n    grid-row:1 / 3;\n    margin-bottom: 3vw;\n  }\n\n  .Hotel_ItemContent {\n     /* display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    justify-items: start; */\n    padding: 0;\n    display:grid;\n    grid-template-columns: 30vw 20vw;\n    grid-template-rows: 30% 70%;\n    /* border-top:2px solid blue; */\n  }\n\n  .Hotel_ItemContentSmallScreen {\n    display: grid;\n    grid-template-columns: 40% 60%;\n    grid-template-rows: repeat(10vw,2);\n    /* justify-content: flex-end; */\n    /* justify-items: start; */\n    padding: 0;\n  }\n\n  .Li_HotelContent{\n    list-style-type: none;\n    font-size: 12px;\n    text-align: justify;\n    color: #001959;\n    padding-left: 1vw;\n    /* min-width: 15vw; */\n  }\n\n  .Li_HotelContentSmallScreen{\n    grid-row:1/4; \n    grid-column:2;\n    /* margin-bottom: 3vw; */\n  }\n\n  .Li_HotelContent span{\n    /* list-style-type: none; */\n    font-size: 12px;\n    text-align: justify;\n    color: #001959;\n    /* padding-left: 1vw; */\n    /* min-width: 15vw; */\n  }\n\n  .HotelNameStarRating{\n    display:flex; \n    flex-direction:row;\n  }\n\n  .HotelNameStarRatingSmallScreen{\n    display:flex;\n    flex-direction: column;\n  }\n\n  .HotelAddressSmallScreen{\n    grid-row:2;\n    grid-column:2;\n    font-size:12px;\n  }\n\n  .Li_Image{\n    list-style-type:none;\n    text-align: left;\n  }\n\n  .Li_ImageSmallScreen{\n    list-style-type:none;\n    grid-row:1/3;\n    grid-column:1;\n  }\n\n  .div_ItemObj{\n    display: flex;\n    flex-direction: column;\n    align-content: flex-start;\n    justify-content: flex-end;\n    max-width: 30vw;\n  }\n\n  .availablePeriods{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    /* justify-content: flex-start; */\n    margin-left: 1vw;\n    padding-bottom: 4vw;\n  }\n\n  .minimumRate_details{\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n  /*!!!!! BUTTONS !!!!!*/\n\n.availableButtonHotel{\n  padding: 0.5vw 1vw;\n  width: 55%;\n  font-size: 13px;\n  font-weight: bold;\n  background-color: #5EB82F;\n  /* background-color: #37e04e; */\n  color: white;\n  border-radius: 0.5vw;\n  position: relative;\n  z-index: 50;\n}\n\n.availableButtonHotel:hover{\n  cursor:pointer;\n  background-color: rgb(8, 131, 14);\n  color: rgb(250, 250, 141)\n}\n\n .onrequestButton{\n  padding: 0.5vw 1vw;\n  width: 10vw;\n  font-size: 13px;\n  font-weight: bold;\n  color: white;\n  border-radius: 0.5vw;\n  background-color: rgb(117, 111, 107);\n}\n\n.onrequestButton a{\n  color: white;\n  text-decoration:none;\n}\n\n.onrequestButton a:hover{\n  color: white;\n  text-decoration:underline;\n}\n\n.HotelAddress{\n  list-style-type: none;\n}\n\n.RateLoading{\n    width: 285px;\n    height: 250px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n\n}\n\n.test:hover{\ncursor:pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 79799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".TourDescriptionUl{\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5vh;\n    font-family: 'Tahoma';\n}\n\n.TourDescriptionUlSmallScreen{\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5vh;\n  font-family: 'Tahoma';\n}\n\n.descriptionLi{\n    display: flex;\n    flex-direction: column;\n    text-align: justify;\n    border: 2px solid #d4e5f7;\n    border-radius: 5px;\n    background: #dce5fc;\n    padding: 1vw 2vw;\n    color: #001959;\n    margin-bottom: 1vh;\n    /* height: 10vh; */\n}\n\n\n.descriptionLi div{\n    text-align: right;\n    /* padding-left: ; */\n}\n\n.TourDescriptionContent{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n  margin-top:2vh;\n}\n\n.TourDescriptionContentSmallScreen{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top:2vh;\n  /* align-items: flex-end; */\n}\n\n/* .descriptionLi div button{\n    background: #dfa65b;\n    color: white;\n} */\n\n/* input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    font-size: 10vw;\n  } */\n\n.searchFront{\n    /*the container must be positioned relative:*/\n    position: relative;\n    display: inline-block;\n  }\n\n  .availableButtonSecondPage{\n    padding: 0.5vw 1vw;\n    font-size: 2vh;\n    font-weight: bold;\n    background-color: #5EB82F;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n    width: 80%;\n    margin-top: 3vh;\n  }\n\n  .availableButtonSecondPage:hover{\n    cursor:pointer;\n    background-color: #296807;\n    color: rgb(250, 250, 141)\n  }\n\n\n   .onrequestButton{\n    padding: 0.5vw 1vw;\n    width: 10vw;\n    font-size: 13px;\n    font-weight: bold;\n    color: white;\n    border-radius: 0.5vw;\n    background-color: rgb(117, 111, 107);\n  }\n\n  /* .onrequestButton:hover{\n    cursor:pointer;\n    background-color: rgb(170,15,15);\n    color:rgb(250, 250, 141)\n  } */\n\n  .TourSearchrendering_Wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 30vw; */\n  }\n\n  .Ul_ItemContent {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    justify-items: center;\n    padding: 0;\n    width:100%;\n  }\n\n  /* .imageSearchrender{\n    min-width: '15vw';\n    min-height: '15vw';\n    border-radius: '5px'; \n  } */\n\n  .Li_ItemContent{\n    list-style-type: none;\n    font-size: 2vh;\n    text-align: justify;\n    color: #001959;\n    /* font-style: italic; */\n    padding-left: 1vw;\n    /* width: 50%; */\n    text-align: center;\n  }\n\n  .div_TourItemObj{\n    display: flex;\n    flex-direction: column;\n    align-content: flex-start;\n    justify-content: flex-end;\n  }\n\n  .div_TourItemObjSmallScreen{\n    display: flex;\n    flex-direction: row;\n    /* align-content: flex-start; */\n    justify-content: space-between;\n    margin-top: 2vh;\n  }\n\n  .availablePeriods{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    /* justify-content: flex-start; */\n    margin-left: 1vw;\n    padding-bottom: 4vw;\n  }\n\n  .minimumRate_details{\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n.contentLoadingWheel{\n  height: 3vw;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/SecondPageofSearchModule/Tours/SearchItems.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,qBAAqB;AACzB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,qBAAqB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,cAAc;EACd,2BAA2B;AAC7B;;AAEA;;;GAGG;;AAEH;;KAEK;;AAEL;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,+BAA+B;IAC/B,YAAY;IACZ,oBAAoB;IACpB,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,yBAAyB;IACzB;EACF;;;GAGC;IACC,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,oCAAoC;EACtC;;EAEA;;;;KAIG;;EAEH;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,qBAAqB;IACrB,UAAU;IACV,UAAU;EACZ;;EAEA;;;;KAIG;;EAEH;IACE,qBAAqB;IACrB,cAAc;IACd,mBAAmB;IACnB,cAAc;IACd,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,+BAA+B;IAC/B,8BAA8B;IAC9B,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;IACjC,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;AAEF;EACE,WAAW;AACb","sourcesContent":[".TourDescriptionUl{\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5vh;\n    font-family: 'Tahoma';\n}\n\n.TourDescriptionUlSmallScreen{\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5vh;\n  font-family: 'Tahoma';\n}\n\n.descriptionLi{\n    display: flex;\n    flex-direction: column;\n    text-align: justify;\n    border: 2px solid #d4e5f7;\n    border-radius: 5px;\n    background: #dce5fc;\n    padding: 1vw 2vw;\n    color: #001959;\n    margin-bottom: 1vh;\n    /* height: 10vh; */\n}\n\n\n.descriptionLi div{\n    text-align: right;\n    /* padding-left: ; */\n}\n\n.TourDescriptionContent{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n  margin-top:2vh;\n}\n\n.TourDescriptionContentSmallScreen{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top:2vh;\n  /* align-items: flex-end; */\n}\n\n/* .descriptionLi div button{\n    background: #dfa65b;\n    color: white;\n} */\n\n/* input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    font-size: 10vw;\n  } */\n\n.searchFront{\n    /*the container must be positioned relative:*/\n    position: relative;\n    display: inline-block;\n  }\n\n  .availableButtonSecondPage{\n    padding: 0.5vw 1vw;\n    font-size: 2vh;\n    font-weight: bold;\n    background-color: #5EB82F;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n    width: 80%;\n    margin-top: 3vh;\n  }\n\n  .availableButtonSecondPage:hover{\n    cursor:pointer;\n    background-color: #296807;\n    color: rgb(250, 250, 141)\n  }\n\n\n   .onrequestButton{\n    padding: 0.5vw 1vw;\n    width: 10vw;\n    font-size: 13px;\n    font-weight: bold;\n    color: white;\n    border-radius: 0.5vw;\n    background-color: rgb(117, 111, 107);\n  }\n\n  /* .onrequestButton:hover{\n    cursor:pointer;\n    background-color: rgb(170,15,15);\n    color:rgb(250, 250, 141)\n  } */\n\n  .TourSearchrendering_Wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 30vw; */\n  }\n\n  .Ul_ItemContent {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    justify-items: center;\n    padding: 0;\n    width:100%;\n  }\n\n  /* .imageSearchrender{\n    min-width: '15vw';\n    min-height: '15vw';\n    border-radius: '5px'; \n  } */\n\n  .Li_ItemContent{\n    list-style-type: none;\n    font-size: 2vh;\n    text-align: justify;\n    color: #001959;\n    /* font-style: italic; */\n    padding-left: 1vw;\n    /* width: 50%; */\n    text-align: center;\n  }\n\n  .div_TourItemObj{\n    display: flex;\n    flex-direction: column;\n    align-content: flex-start;\n    justify-content: flex-end;\n  }\n\n  .div_TourItemObjSmallScreen{\n    display: flex;\n    flex-direction: row;\n    /* align-content: flex-start; */\n    justify-content: space-between;\n    margin-top: 2vh;\n  }\n\n  .availablePeriods{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    /* justify-content: flex-start; */\n    margin-left: 1vw;\n    padding-bottom: 4vw;\n  }\n\n  .minimumRate_details{\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n.contentLoadingWheel{\n  height: 3vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 89055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".WrapperAddToBasket{\n    min-width:35vw;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToBasketButton{\n    align-self: center;\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 9vw;\n    height: 40px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n}\n\n.AddToBasketButtonSmallScreen{\n    align-self: center;\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 17px;\n    width: 15vw;\n    text-align: center;\n    vertical-align:middle;\n    padding: 2vw 1vw;\n    margin-bottom: 5vw;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/ThirdPageofSearchModule/Hotels/BookButtonHotelCSS.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB","sourcesContent":[".WrapperAddToBasket{\n    min-width:35vw;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToBasketButton{\n    align-self: center;\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 9vw;\n    height: 40px;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px;   \n}\n\n.AddToBasketButtonSmallScreen{\n    align-self: center;\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 17px;\n    width: 15vw;\n    text-align: center;\n    vertical-align:middle;\n    padding: 2vw 1vw;\n    margin-bottom: 5vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".HotelDetailsWrapper{\n    margin: 3vh 6vw 5vh 6vw;\n}\n\n.HotelDetailsWrapper h2{\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 27px;\n    font-weight: bold;\n    margin-right:2vw;\n}\n\n.SearchDetails{\n    display: grid;\n    grid-template-columns: 20% 20% 45% 15%;\n    text-align:center;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    background-color:rgb(245, 233, 159);\n    text-align: center;\n    margin-top: 2vh;\n    margin-bottom: 5vh;\n}\n\n.SearchDetailsSmallScreen{\n    /* display: grid;\n    grid-template-columns: 20% 20% 45% 15%; */\n    display: flex;\n    flex-direction: column;\n    text-align:center;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    background-color:rgb(245, 233, 159);\n    text-align: center;\n    margin-top: 2vh;\n    margin-bottom: 5vh;\n}\n\n.SearchDetails h4,span{\n   margin:auto;\n}\n\n.SearchDetails h4{\n    font-family:Arial;\n    color:#102D69;\n    font-size:17px;\n    /* font-weight:bold; */\n      display: flex;\n    flex-direction: column;\n}\n\n.SearchDetailsSmallScreen h4{\n    font-family:Arial;\n    color:#102D69;\n    font-size:17px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n}\n\n.SearchDetails span{\n    font-family:Arial;\n    color: blue;\n    font-size:17px;\n    font-weight:bold;\n}\n\n.SearchDetailsSmallScreen span{\n    font-family:Arial;\n    color: blue;\n    font-size:17px;\n    font-weight:bold;\n}\n.ContentDetails{\n    display:grid;\n    grid-template-columns: 70% 30%;\n}\n\n.ContentDetailsSmallScreen{\n    display:flex;\n    flex-direction: column;\n}\n\n.availableButton{\n    padding: 0.5vw 1vw;\n    /* width: 10vw; */\n    font-size: 17px;\n    font-family:Arial;\n    font-weight: bold; \n    background-color: #2f81b8;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n  }\n  \n  .availableButton:hover{\n    cursor:pointer;\n    background-color: #085486;\n    color: rgb(250, 250, 141)\n  }\n\n  .availableButtonSmallScreen{\n    padding: 2vw 1vw;\n    /* width: 10vw; */\n    font-size: 17px;\n    font-family:Arial;\n    font-weight: bold; \n    background-color: #2f81b8;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n    grid-column: 1/-1;\n    max-width:60%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:2vw;\n  }\n\n  .availableButtonSmallScreen:hover{\n    cursor:pointer;\n    background-color: #085486;\n    color: rgb(250, 250, 141)\n  }\n\n  input::placeholder{\n    color: rgb(75, 73, 73);\n    font-size:15px;\n    font-family: 'Tahoma';\n    text-align: center;\n}\n\n/* .ant-picker-input input::placeholder {\n    color: rgb(75, 73, 73);\n  } */\n", "",{"version":3,"sources":["webpack://./src/Components/Pages/ThirdPageofSearchModule/Hotels/HotelDetailsCSS.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,iBAAiB;IACjB,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;6CACyC;IACzC,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;IACnB,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;GACG,WAAW;AACd;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,sBAAsB;MACpB,aAAa;IACf,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,+BAA+B;IAC/B,YAAY;IACZ,oBAAoB;EACtB;;EAEA;IACE,cAAc;IACd,yBAAyB;IACzB;EACF;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,+BAA+B;IAC/B,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,cAAc;IACd,yBAAyB;IACzB;EACF;;EAEA;IACE,sBAAsB;IACtB,cAAc;IACd,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;;KAEK","sourcesContent":[".HotelDetailsWrapper{\n    margin: 3vh 6vw 5vh 6vw;\n}\n\n.HotelDetailsWrapper h2{\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 27px;\n    font-weight: bold;\n    margin-right:2vw;\n}\n\n.SearchDetails{\n    display: grid;\n    grid-template-columns: 20% 20% 45% 15%;\n    text-align:center;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    background-color:rgb(245, 233, 159);\n    text-align: center;\n    margin-top: 2vh;\n    margin-bottom: 5vh;\n}\n\n.SearchDetailsSmallScreen{\n    /* display: grid;\n    grid-template-columns: 20% 20% 45% 15%; */\n    display: flex;\n    flex-direction: column;\n    text-align:center;\n    padding: 1vw;\n    border:2px solid rgb(206, 207, 209);\n    border-radius:0.5vw;\n    background-color:rgb(245, 233, 159);\n    text-align: center;\n    margin-top: 2vh;\n    margin-bottom: 5vh;\n}\n\n.SearchDetails h4,span{\n   margin:auto;\n}\n\n.SearchDetails h4{\n    font-family:Arial;\n    color:#102D69;\n    font-size:17px;\n    /* font-weight:bold; */\n      display: flex;\n    flex-direction: column;\n}\n\n.SearchDetailsSmallScreen h4{\n    font-family:Arial;\n    color:#102D69;\n    font-size:17px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n}\n\n.SearchDetails span{\n    font-family:Arial;\n    color: blue;\n    font-size:17px;\n    font-weight:bold;\n}\n\n.SearchDetailsSmallScreen span{\n    font-family:Arial;\n    color: blue;\n    font-size:17px;\n    font-weight:bold;\n}\n.ContentDetails{\n    display:grid;\n    grid-template-columns: 70% 30%;\n}\n\n.ContentDetailsSmallScreen{\n    display:flex;\n    flex-direction: column;\n}\n\n.availableButton{\n    padding: 0.5vw 1vw;\n    /* width: 10vw; */\n    font-size: 17px;\n    font-family:Arial;\n    font-weight: bold; \n    background-color: #2f81b8;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n  }\n  \n  .availableButton:hover{\n    cursor:pointer;\n    background-color: #085486;\n    color: rgb(250, 250, 141)\n  }\n\n  .availableButtonSmallScreen{\n    padding: 2vw 1vw;\n    /* width: 10vw; */\n    font-size: 17px;\n    font-family:Arial;\n    font-weight: bold; \n    background-color: #2f81b8;\n    /* background-color: #37e04e; */\n    color: white;\n    border-radius: 0.5vw;\n    grid-column: 1/-1;\n    max-width:60%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:2vw;\n  }\n\n  .availableButtonSmallScreen:hover{\n    cursor:pointer;\n    background-color: #085486;\n    color: rgb(250, 250, 141)\n  }\n\n  input::placeholder{\n    color: rgb(75, 73, 73);\n    font-size:15px;\n    font-family: 'Tahoma';\n    text-align: center;\n}\n\n/* .ant-picker-input input::placeholder {\n    color: rgb(75, 73, 73);\n  } */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 81634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".RatesGridWrapper{\n    display: grid;\n    grid-template-columns: 30% 5% 29% 12% 12% 12%;\n    grid-auto-rows: minmax(4vw,auto);\n    padding-left:0;\n    margin-bottom:0;\n    /* grid-gap: 5px; */\n}\n\n.Header{\n    background-color: #a3caf1;\n    border-radius: 0.5vw;\n    border: 2px solid rgb(109, 109, 196);\n}\n\n.RoomTypeColumn{\n    grid-column:1;\n    grid-row: 1/span 2;\n    color: #102D69;\n    font-size: 17px;\n    font-family:Arial;\n    font-weight:bold;\n    background-color: rgb(228, 228, 247);\n    border-bottom: 2px solid rgb(109, 109, 196); \n    border-radius: 5px;;\n}\n\n.RoomTypeColumnSmallScreen{\n    grid-column:1/-1;\n    grid-row: 1;\n    color: #102D69;\n    font-size: 17px;\n    font-family:Arial;\n    font-weight:bold;\n    background-color: rgb(199, 199, 230);\n    /* border-bottom: 2px solid rgb(109, 109, 196);  */\n    border-radius: 5px;\n    padding-top:3vw;\n    padding-bottom:3vw;\n    text-align:center;\n}\n\n.NotActive{\n    display:none;\n}\n\n.GridUlDetails{\n    padding-left:0;\n    border-left: 2px solid rgb(109, 109, 196);\n    border-right: 2px solid rgb(109, 109, 196);\n    border-radius: 5px;\n}\n\n.DetailsSmallScreen{\n    display:grid;\n    grid-template-columns: 50% 50%;\n    grid-auto-rows: minmax(4vw,auto);\n    border: 2px solid rgb(109, 109, 196);\n    border-radius: 5px;\n}\n\n.DetailsSmallScreen div h5:nth-child(1){\n  grid-row:2;\n  /* border-bottom: 2px solid rgb(109, 109, 196);\n  border-right: 2px solid rgb(109, 109, 196);\n  border-left: 2px solid rgb(109, 109, 196); */\n  font-size: 17px;\n  color: #102D69;\n  font-family:Arial;\n  font-weight:bold;\n  display: flex;\n  flex-direction:row;\n  justify-content: center;\n  align-items: center;\n}\n\n.DetailsSmallScreen div h5:nth-child(2){\n    grid-row:3;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    }\n\n.Details{\n    display: grid;\n    grid-template-columns: 30% 5% 29% 12% 12% 12%;\n    grid-auto-rows: minmax(4vw,auto);\n    list-style: none; \n}\n\n.Details h5{\n    margin-bottom:0;\n    overflow: hidden;\n    text-align:center;\n}\n\n.Details h5:nth-child(1){\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.RatesGridHeader{\n    list-style: none;\n    font-family:Arial;\n    color:#102D69;\n    font-size:18px;\n    font-weight:bold;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 4;\n    border-left: 2px solid rgb(109, 109, 196);\n    text-align: center;\n}\n\n.RatesGridHeader:nth-child(1){\n    border-left:none;\n}\n\n.WrapperAvailableOptions{\n    display:grid;\n    grid-column:4/-1;\n    grid-template-columns: 33% 33% 33%;\n    margin-bottom:0;\n    text-align:center;\n    border-bottom: 2px solid rgb(109, 109, 196);\n}\n\n.WrapperAvailableOptions h5:nth-child(2){\n    border-left: 2px solid rgb(109, 109, 196);\n}\n\n.WrapperAvailableOptions h5:nth-child(3){\n    border-left: 2px solid rgb(109, 109, 196);\n} \n\n.WrapperAvailableOptionsSmallScreen{\n    grid-row:3;\n    /* display:grid; */\n    /* grid-template-rows:5vw 5vw 8vw; */\n    margin-bottom:0;\n    text-align:center;\n    display: flex;\n    flex-direction: column;\n    /* border-bottom: 2px solid rgb(109, 109, 196); */\n}\n\n.AvailableOptions{\n    font-size: 15px;\n    color:#102D69;\n    font-family:'Arial';\n    /* font-weight:bold; */\n    text-align:center;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/ThirdPageofSearchModule/Hotels/RatesBlock/RatesBlockCSS.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,6CAA6C;IAC7C,gCAAgC;IAChC,cAAc;IACd,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,oCAAoC;IACpC,2CAA2C;IAC3C,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,oCAAoC;IACpC,kDAAkD;IAClD,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,yCAAyC;IACzC,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,gCAAgC;IAChC,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;EACE,UAAU;EACV;;8CAE4C;EAC5C,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB;;AAEJ;IACI,aAAa;IACb,6CAA6C;IAC7C,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,2CAA2C;AAC/C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,oCAAoC;IACpC,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,iDAAiD;AACrD;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;AACrB","sourcesContent":[".RatesGridWrapper{\n    display: grid;\n    grid-template-columns: 30% 5% 29% 12% 12% 12%;\n    grid-auto-rows: minmax(4vw,auto);\n    padding-left:0;\n    margin-bottom:0;\n    /* grid-gap: 5px; */\n}\n\n.Header{\n    background-color: #a3caf1;\n    border-radius: 0.5vw;\n    border: 2px solid rgb(109, 109, 196);\n}\n\n.RoomTypeColumn{\n    grid-column:1;\n    grid-row: 1/span 2;\n    color: #102D69;\n    font-size: 17px;\n    font-family:Arial;\n    font-weight:bold;\n    background-color: rgb(228, 228, 247);\n    border-bottom: 2px solid rgb(109, 109, 196); \n    border-radius: 5px;;\n}\n\n.RoomTypeColumnSmallScreen{\n    grid-column:1/-1;\n    grid-row: 1;\n    color: #102D69;\n    font-size: 17px;\n    font-family:Arial;\n    font-weight:bold;\n    background-color: rgb(199, 199, 230);\n    /* border-bottom: 2px solid rgb(109, 109, 196);  */\n    border-radius: 5px;\n    padding-top:3vw;\n    padding-bottom:3vw;\n    text-align:center;\n}\n\n.NotActive{\n    display:none;\n}\n\n.GridUlDetails{\n    padding-left:0;\n    border-left: 2px solid rgb(109, 109, 196);\n    border-right: 2px solid rgb(109, 109, 196);\n    border-radius: 5px;\n}\n\n.DetailsSmallScreen{\n    display:grid;\n    grid-template-columns: 50% 50%;\n    grid-auto-rows: minmax(4vw,auto);\n    border: 2px solid rgb(109, 109, 196);\n    border-radius: 5px;\n}\n\n.DetailsSmallScreen div h5:nth-child(1){\n  grid-row:2;\n  /* border-bottom: 2px solid rgb(109, 109, 196);\n  border-right: 2px solid rgb(109, 109, 196);\n  border-left: 2px solid rgb(109, 109, 196); */\n  font-size: 17px;\n  color: #102D69;\n  font-family:Arial;\n  font-weight:bold;\n  display: flex;\n  flex-direction:row;\n  justify-content: center;\n  align-items: center;\n}\n\n.DetailsSmallScreen div h5:nth-child(2){\n    grid-row:3;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    }\n\n.Details{\n    display: grid;\n    grid-template-columns: 30% 5% 29% 12% 12% 12%;\n    grid-auto-rows: minmax(4vw,auto);\n    list-style: none; \n}\n\n.Details h5{\n    margin-bottom:0;\n    overflow: hidden;\n    text-align:center;\n}\n\n.Details h5:nth-child(1){\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.RatesGridHeader{\n    list-style: none;\n    font-family:Arial;\n    color:#102D69;\n    font-size:18px;\n    font-weight:bold;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 4;\n    border-left: 2px solid rgb(109, 109, 196);\n    text-align: center;\n}\n\n.RatesGridHeader:nth-child(1){\n    border-left:none;\n}\n\n.WrapperAvailableOptions{\n    display:grid;\n    grid-column:4/-1;\n    grid-template-columns: 33% 33% 33%;\n    margin-bottom:0;\n    text-align:center;\n    border-bottom: 2px solid rgb(109, 109, 196);\n}\n\n.WrapperAvailableOptions h5:nth-child(2){\n    border-left: 2px solid rgb(109, 109, 196);\n}\n\n.WrapperAvailableOptions h5:nth-child(3){\n    border-left: 2px solid rgb(109, 109, 196);\n} \n\n.WrapperAvailableOptionsSmallScreen{\n    grid-row:3;\n    /* display:grid; */\n    /* grid-template-rows:5vw 5vw 8vw; */\n    margin-bottom:0;\n    text-align:center;\n    display: flex;\n    flex-direction: column;\n    /* border-bottom: 2px solid rgb(109, 109, 196); */\n}\n\n.AvailableOptions{\n    font-size: 15px;\n    color:#102D69;\n    font-family:'Arial';\n    /* font-weight:bold; */\n    text-align:center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 82601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".TourDetailsWrapper{\n    display: flex;\n    flex-direction: column;\n    max-width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.TourDetailsWrapper h2{\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 22px;\n    font-weight: bold;\n}\n\n.TourChoiceBlockWrapper{\n    display: grid;\n    grid-template-columns:repeat(2,50%);\n    margin-top: 2vh;\n}\n\n.Icons{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    /* font-weight: bold; */\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 17px;\n}\n\n.TourDetailsInner{\n    display: flex;\n    flex-direction: row;\n    align-items: space-between;\n    width: 100%;\n}\n\n.TourDetailsInnerSmallScreen{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.GalleryTourDetails{\n    /* max-width: 45%; */\n    margin-right: 3vw;\n}\n\n.TourBookingDetails{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    /* min-width: 45%; */\n    min-height: 60vh;\n    border: 2px solid rgb(206, 207, 209);\n    border-radius: 6px;\n    margin-top: 2vw;\n}\n\n.TourBookingDetails h3{\n    text-align: center;\n    color: #005AEB;\n    font-size: 22px;\n    font-weight: bold;\n    font-family: 'Arial Narrow';\n}\n\n/* .BookingChoice{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 1vw;\n} */\n\n.TourBookingChoice{\n    display:grid;\n    grid-template-columns:repeat(2,50%);\n    grid-template-rows:auto;\n    margin-left:3vw;\n}\n\n/* .RateChoiceBlock{\n    display: grid;\n    grid-template-columns: repeat(2, 20vw);\n    margin-top: 1vw;\n    padding-left: 3vw;\n} */\n\n/* .first{\n    margin-top: 1vh;\n    margin-bottom: 1vh;\n}\n\n.third{\n    order:2;\n} */\n\n.TourChoiceBlock{\n    display:flex;\n    flex-direction:column;\n    /* padding-left: 3vw; */\n}\n\n.TourRateLoading{\n    width: 285px;\n    height: 250px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n\n}\n\n\n.TourChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.TourPaxChoiceWrapper{\n    /* padding-left: 3vw; */\n    /* max-width: 20vw; */\n    width: 50%;\n}\n\n.TourPaxChoiceWrapper h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.TourInclusionsBlock{\n    display:flex;\n    flex-direction:column;\n    /* margin-left: 40px; */\n    /* margin-top: -50px; */\n}\n\n.TourInclusionsBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.TourBookingChoice h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n/* .RateChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n} */\n\n.PaxChoice{\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n}\n\n.PaxChoice h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.PaxResult{\n    border: 1px solid #d9d9d9;\n    border-radius: 2px;\n    height: 32px;\n    width: 90%;\n    padding: 4px 11px;\n    background-color: white;\n}\n\n.PaxResult h4{\n    color: rgb(16, 45, 105);\n    font-family: 'Arial Narrow';\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.DropdownButton{\n    margin-top: 0.5vh;\n    background-color: white;\n    border: 2px solid rgb(177, 174, 174);\n    border-radius: 5px;\n    min-width: 200px;\n}\n\n.DropdownItem{\n    /* min-width: 200px; */\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    color: #102D69;\n}\n\n.DropdownItem:hover{  \n    background-color: #d7ebfc;\n    text-decoration: none;\n}\n\n.DescriptionTourDetails{\n    /* max-width: 50%; */\n    margin-left: 4vw;\n}\n\n.TourPopUpNotActive{\n    display : none;\n}\n\n.TourPopUpActive{\n    display: block;\n    position: absolute;\n    background-color: white;\n    z-index: 1000;\n    /* width: 45; */\n    border: 1px solid #d9d9d9;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    padding: 15px;\n    /* overflow: hidden; */\n}\n\n.TourPopUpButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-size: 19px;\n    width: 19vw;\n    height: 50px;\n    text-align: center;\n    margin-top: 25px;\n    margin-bottom: 6px;\n}\n\n.BookingChoiceInner{\n    display:flex;\n    flex-direction:column;\n}\n\n.DateSelection{\n    font-size: 14px;\n    color:blue;\n    font-weight: bold;\n}\n\n.Minus{\n    color: white;\n    background-Color: #009FE3;\n    border: 0.8vw solid #009FE3;\n    border-radius: 5vw;\n    font-size: 15px;\n    font-weight: bolder;\n    width: 40px;\n    height: 40px\n}\n\n.Plus {\n   color: white;\n   background-Color: #009FE3;\n   border: 0.8vw solid #009FE3;\n   border-radius: 5vw;\n   font-size: 15px;\n   font-weight: bolder;\n   width: 40px;\n   height: 40px\n}\n.DownOutlined{\n    color: #d9d9d9;\n    font-size: 13px;\n    padding-left: 5px;\n}\n\n.RadioWrapper{\n    margin-top: 20px;\n}\n\n.RadioWrapper h5{\n    color: blue;\n    font-size: 19px;\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    min-width: 35vw;\n    margin-bottom: 15px;\n}\n\n.Radio{\n    margin-top: 20px;\n    min-width:35vw; \n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.TourWrapperAddToBasket{\n    /* min-width:35vw; */\n    /* display:flex; */\n    /* flex-direction:row; */\n    /* justify-content:space-between; */\n    display:grid;\n    grid-template-columns: 60% 40%;\n    /* width: 100%; */\n    padding-top:3vh;\n    margin-top:0;\n    column-gap:4vw;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToCartTour{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 45%;\n    height: 6vh;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px; \n    position:relative;\n    z-index: 50;  \n}\n\n.AddToCartTour:hover{\n    cursor:pointer;\n}", "",{"version":3,"sources":["webpack://./src/Components/Pages/ThirdPageofSearchModule/TourDetailsCSS.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,oBAAoB;IACpB,gBAAgB;IAChB,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;;;;;GAKG;;AAEH;IACI,YAAY;IACZ,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;;;;;GAKG;;AAEH;;;;;;;GAOG;;AAEH;IACI,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;;AAEjC;;;AAGA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;;;;;GAKG;;AAEH;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,2BAA2B;IAC3B,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,yDAAyD;IACzD,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX;AACJ;;AAEA;GACG,YAAY;GACZ,yBAAyB;GACzB,2BAA2B;GAC3B,kBAAkB;GAClB,eAAe;GACf,mBAAmB;GACnB,WAAW;GACX;AACH;AACA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,wBAAwB;IACxB,mCAAmC;IACnC,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB","sourcesContent":[".TourDetailsWrapper{\n    display: flex;\n    flex-direction: column;\n    max-width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.TourDetailsWrapper h2{\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 22px;\n    font-weight: bold;\n}\n\n.TourChoiceBlockWrapper{\n    display: grid;\n    grid-template-columns:repeat(2,50%);\n    margin-top: 2vh;\n}\n\n.Icons{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    /* font-weight: bold; */\n    color: #102D69;\n    font-family: \"Arial\";\n    font-size: 17px;\n}\n\n.TourDetailsInner{\n    display: flex;\n    flex-direction: row;\n    align-items: space-between;\n    width: 100%;\n}\n\n.TourDetailsInnerSmallScreen{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.GalleryTourDetails{\n    /* max-width: 45%; */\n    margin-right: 3vw;\n}\n\n.TourBookingDetails{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    /* min-width: 45%; */\n    min-height: 60vh;\n    border: 2px solid rgb(206, 207, 209);\n    border-radius: 6px;\n    margin-top: 2vw;\n}\n\n.TourBookingDetails h3{\n    text-align: center;\n    color: #005AEB;\n    font-size: 22px;\n    font-weight: bold;\n    font-family: 'Arial Narrow';\n}\n\n/* .BookingChoice{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 1vw;\n} */\n\n.TourBookingChoice{\n    display:grid;\n    grid-template-columns:repeat(2,50%);\n    grid-template-rows:auto;\n    margin-left:3vw;\n}\n\n/* .RateChoiceBlock{\n    display: grid;\n    grid-template-columns: repeat(2, 20vw);\n    margin-top: 1vw;\n    padding-left: 3vw;\n} */\n\n/* .first{\n    margin-top: 1vh;\n    margin-bottom: 1vh;\n}\n\n.third{\n    order:2;\n} */\n\n.TourChoiceBlock{\n    display:flex;\n    flex-direction:column;\n    /* padding-left: 3vw; */\n}\n\n.TourRateLoading{\n    width: 285px;\n    height: 250px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n\n}\n\n\n.TourChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.TourPaxChoiceWrapper{\n    /* padding-left: 3vw; */\n    /* max-width: 20vw; */\n    width: 50%;\n}\n\n.TourPaxChoiceWrapper h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.TourInclusionsBlock{\n    display:flex;\n    flex-direction:column;\n    /* margin-left: 40px; */\n    /* margin-top: -50px; */\n}\n\n.TourInclusionsBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.TourBookingChoice h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n/* .RateChoiceBlock h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n} */\n\n.PaxChoice{\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n}\n\n.PaxChoice h4{\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    font-size: 17px;\n    color: rgb(77, 75, 75);\n}\n\n.PaxResult{\n    border: 1px solid #d9d9d9;\n    border-radius: 2px;\n    height: 32px;\n    width: 90%;\n    padding: 4px 11px;\n    background-color: white;\n}\n\n.PaxResult h4{\n    color: rgb(16, 45, 105);\n    font-family: 'Arial Narrow';\n    font-size: 16px;\n    cursor: pointer;\n}\n\n.DropdownButton{\n    margin-top: 0.5vh;\n    background-color: white;\n    border: 2px solid rgb(177, 174, 174);\n    border-radius: 5px;\n    min-width: 200px;\n}\n\n.DropdownItem{\n    /* min-width: 200px; */\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    color: #102D69;\n}\n\n.DropdownItem:hover{  \n    background-color: #d7ebfc;\n    text-decoration: none;\n}\n\n.DescriptionTourDetails{\n    /* max-width: 50%; */\n    margin-left: 4vw;\n}\n\n.TourPopUpNotActive{\n    display : none;\n}\n\n.TourPopUpActive{\n    display: block;\n    position: absolute;\n    background-color: white;\n    z-index: 1000;\n    /* width: 45; */\n    border: 1px solid #d9d9d9;\n    border-radius: 6px;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    padding: 15px;\n    /* overflow: hidden; */\n}\n\n.TourPopUpButton{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-size: 19px;\n    width: 19vw;\n    height: 50px;\n    text-align: center;\n    margin-top: 25px;\n    margin-bottom: 6px;\n}\n\n.BookingChoiceInner{\n    display:flex;\n    flex-direction:column;\n}\n\n.DateSelection{\n    font-size: 14px;\n    color:blue;\n    font-weight: bold;\n}\n\n.Minus{\n    color: white;\n    background-Color: #009FE3;\n    border: 0.8vw solid #009FE3;\n    border-radius: 5vw;\n    font-size: 15px;\n    font-weight: bolder;\n    width: 40px;\n    height: 40px\n}\n\n.Plus {\n   color: white;\n   background-Color: #009FE3;\n   border: 0.8vw solid #009FE3;\n   border-radius: 5vw;\n   font-size: 15px;\n   font-weight: bolder;\n   width: 40px;\n   height: 40px\n}\n.DownOutlined{\n    color: #d9d9d9;\n    font-size: 13px;\n    padding-left: 5px;\n}\n\n.RadioWrapper{\n    margin-top: 20px;\n}\n\n.RadioWrapper h5{\n    color: blue;\n    font-size: 19px;\n    font-family: 'Arial Narrow';\n    font-weight: bold;\n    min-width: 35vw;\n    margin-bottom: 15px;\n}\n\n.Radio{\n    margin-top: 20px;\n    min-width:35vw; \n    display:flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n.TourWrapperAddToBasket{\n    /* min-width:35vw; */\n    /* display:flex; */\n    /* flex-direction:row; */\n    /* justify-content:space-between; */\n    display:grid;\n    grid-template-columns: 60% 40%;\n    /* width: 100%; */\n    padding-top:3vh;\n    margin-top:0;\n    column-gap:4vw;\n}\n\n.WrapperAddToBasket h4{\n    width: 30vw;\n    height: 25px;\n    text-align: left;\n    margin-top: 25px;\n    margin-bottom: 8px;\n}\n\n.AddToCartTour{\n    background: #009FE3;\n    color: white;\n    border: 1px solid grey;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: 19px;\n    width: 45%;\n    height: 6vh;\n    text-align: center;\n    padding-bottom: 5px;\n    margin-top: 25px;\n    margin-bottom: 8px; \n    position:relative;\n    z-index: 50;  \n}\n\n.AddToCartTour:hover{\n    cursor:pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 10150,
	"./it-ch.js": 10150,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 18758,
	"./km.js": 18758,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 85893,
	"./ss.js": 85893,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 46601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 89214:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 71922:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2363:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 96419:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56353:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 42480:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69386:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 31616:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 50247:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69862:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 40964:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_ssr"] = self["webpackChunkreact_ssr"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34988)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map