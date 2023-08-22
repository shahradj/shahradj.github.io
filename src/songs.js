const fs = require('fs');
const FileReader = require('filereader');

function listSongs(){
    var dirs = [];
    console.log('gets here');
    fs.readdir('./data/', (err, files) => {
        files.forEach(file => {
            dirs.push(file)
        })
    });
    console.log('then here');
    var newfiles = [];
    var i = 1;
    dirs.forEach(file => {
        var songs = [];
        fs.readdir('./data/'+file+'/', (err, files) => {
            files.forEach(file => {
                songs.push(file)
            })
        });
        newfiles.push({
            'id': i,
            'name': file,
            'files': songs
        })
        i++;
    });
    return newfiles;

}