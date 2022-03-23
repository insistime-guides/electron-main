'use strict';

// path
var path = require('path');

// qiao-electron
var q = require('qiao-electron');

/**
 * create login window
 * @returns 
 */
exports.createLoginWindow = function(){
  var loginFilePath = path.join(__dirname, '../../renderer-login/index.html');

  var options = {
    show: false,
    width: 200,
    height: 300,
    center: true,
    maximizable: false,
    titleBarStyle: 'hidden',
    fullscreenable: false,
    backgroundColor: '#66CD00'
  };

  return q.openWindowByFile(loginFilePath, options, true);
};

/**
 * open index window
 */
exports.openIndexWindow = function(){
  // check
  var windows = q.window.getAllWindows();
  if(!windows || !windows.length) return;

  // close login
  var loginWindow = windows[0];
  loginWindow.close();

  // open index
  var indexFilePath = path.join(__dirname, '../../renderer-index/index.html');
  var options = {
    width: 800,
    height: 600,
    backgroundColor: '#66CD00'
  };

  return q.openWindowByFile(indexFilePath, options);
};