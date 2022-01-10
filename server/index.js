const path = require( 'path' );
const global = require( 'global' );

const isServer = !(
  typeof global.window !== 'undefined' &&
  global.window.document &&
  global.window.document.createElement
);

if (isServer) {
  global.window = {};
}

// ignore `.scss` imports
require( 'ignore-styles' );

// transpile imports on the fly
require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

// import express server
require( './express.js' );