const fs = require('fs')
fs.appendFile('marcos/note.txt', "aaaaaaaaaaaa", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
