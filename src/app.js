const fs = require ('fs');

//Documentación de npm:
// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//  Leer archivo
// fs.readFile('text.txt', 'utf8', (err, data) => { //para leer los archivos
//   if (err) throw err;
//     console.log(data);
// })

// Renombrar el archivo txt

// fs.rename('text.txt', 'newFile.txt', (err) => {
//   if (err) throw err;
// })

//Agregar texto al archivo (documentación npm)
// try {
//   fs.appendFileSync('message.txt', 'data to append');
//   console.log('The "data to append" was appended to file!');
// } catch (err) {
//   /* Handle the error */
// }

//Agregar texto al archivo
// fs.appendFileSync('text.txt', '\ Buenos días', (error) => {
//   if (error) throw err;
// });

//Borrar un archivo
// fs.unlink('text2.txt', (error) => { // No está porque lo borramos xD
//   if (error) throw err;
// })

//Leer contenido de un directorio

fs.readdir('./../src', (error, files) => {
  files.forEach(file => {
    console.log(file);
    
  })
})
