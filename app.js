
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
    console.log('csv in stringa', data);
    //2) trasformare stringa in un array di righe   righe = ["name,surname,yob,gender", "jing,wang,1993,female", "simone,maccarone,2003,male","pietro,viglino,1988,male","valentina,cherubini,2001,female"]
    const rows = data.split(/\r?\n/);
    //3) separare la prima riga dalle successive:   intestazione = "name,surname,yob,gender" righe = ["jing,wang,1993,female", "simone,maccarone,2003,male","pietro,viglino,1988,male","valentina,cherubini,2001,female"]
    const header = rows.shift();
    //4) trasformare intestazione in un array
    const headerArray = rows.split(',');
    //5) creare un array vuoto
    const tempArray = [];
    //6) cicliamo le righe

    //7) trasformiamo la riga in un array
    //8) creare un nuovo oggetto vuoto
    //9) ciclare su intestazione e aggiungere una proprietà all'oggetto per ogni elemento di intestazione
    //10) aggiungere un oggetto all'array temporaneo
    for (let i = 0; i < rows.length; i++) {
        const row = righe[i];
        const rowArray = row.split(',');
        const obj = {};
        for (let j = 0; j < headerArray.length; j++) {
            const key = headerArray[j];
            const value = rowArray[j];
            obj[key] = value;
        }
        tempArray.push(obj);
    }
    //11) fare uno stringify dell'array temporaneo
    const jsonString = JSON.stringify(tempArray);
    //12) ritornare la stringa json
    return jsonString;
}

function writeJsonToFile(json) {

    const content = 'STICAZZI!';

    try {
        fs.writeFileSync('/Users/joe/test.txt', content);
    } catch (err) {
        console.error(err);
    }
}