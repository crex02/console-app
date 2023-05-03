
const fs = require('fs');

let data;

try {
    data = fs.readFileSync('./data/test.csv', 'utf8');
    console.log(data);
    const json = parseCsvToJson(data);
    writeJsonToFile(json);

} catch (err) {
    console.error(err);
}

function parseCsvToJson(data) {
    //1) data = "name,surname,yob,gender\nsimone,maccarone,2003,male\njing,wang,1993,female\npietro,viglino,1988,male\nvalentina,cherubini,2001,female"
    //2) trasformare stringa in un array di righe   righe = ["name,surname,yob,gender", "jing,wang,1993,female", "simone,maccarone,2003,male","pietro,viglino,1988,male","valentina,cherubini,2001,female"]
    //3) separare la prima riga dalle successive:   intestazione = "name,surname,yob,gender" righe = ["jing,wang,1993,female", "simone,maccarone,2003,male","pietro,viglino,1988,male","valentina,cherubini,2001,female"]
    //4) trasformare intestazione in un array
    //5) creare un array vuoto
    //6) cicliamo le righe 
    //7) trasformiamo la riga in un array
    //8) creare un nuovo oggetto vuoto
    //9) ciclare su intestazione e aggiungere una proprietà all'oggetto per ogni elemento di intestazione
    //10) aggiungere un oggetto all'array temporaneo
    //11) fare uno stringify dell'array temporaneo
    //12) ritornare la stringa json
}

function writeJsonToFile(json) {

    const content = 'STICAZZI!';

    try {
        fs.writeFileSync('/Users/joe/test.txt', content);
    } catch (err) {
        console.error(err);
    }
}