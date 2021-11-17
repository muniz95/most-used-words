const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);
  pathsToRows(paths)
    .then(prepareData)
    .then(groupWords)
    .then((groupWords) => event.reply("process-subtitles", groupWords))
});