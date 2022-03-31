'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
    shortcutGlobal,
} = require('qiao-electron');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
    shortcutGlobal,
});