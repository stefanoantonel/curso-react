//Aca vamos a poner el codigo para el lado del server.
import express from "express";
import http from "http";
import engine from "socket.io";

const port = 3000;
const app = express();

//configurar la ruta de archivos estaticos.
app.use("/", express.static(__dirname + "/public"));
//el __dirname es donde esta este archivo. 

//Ruta para el index
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

let server = http.createServer(app).listen(port, () => {
	console.log("El server esta escuchando en el puero "+port);
})