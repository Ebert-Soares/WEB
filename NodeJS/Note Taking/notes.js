
const fs = require('fs');





function loadNotes(){

try{
  const buffer = fs.readFileSync("notes.json");
  const JSON1 = buffer.toString();
  return JSON.parse(JSON1);
}catch (e){
  return[]
}

}





const getNotes = ()=>{

}





const addNote = (title, body)=>{
loadNotes();
  const loadNotes = loadNotes();
  loadNotes.push({
    title: title,
    body: body,
  })
  saveNotes(loadNotes);
  const saveNotes = loadNotes=>{
    const dJSON = JSON.stringify(loadNotes);
    fs.writeFileSync("notes.json", loadNotes)
  }

}


module.exports = {
  addNote: addNote,
  getNotes: getNotes


}
