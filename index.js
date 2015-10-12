//Aca vamos a poner el codigo para el lado del server.
import express from "express";
import http from "http";
import engine from "socket.io";
import dbapi from "./db-api";

const port = 3000;
const app = express();

//configurar la ruta de archivos estaticos.
app.use("/", express.static(__dirname + "/public"));
//el __dirname es donde esta este archivo. 

//ruta para pedir pokemons
app.get("/pokemons", (req, res) => {
	dbapi.pokemons.find((pokemons) => {
		res.json(pokemons);
	});
});

//Ruta para el index
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

let server = http.createServer(app).listen(port, () => {
	console.log("El server esta escuchando en el puero "+port);
})

const io = engine.listen(server);

//cuando recibimos el mensaje del nuevo usuario lo transmitimos a todos 
io.on("connection", (socket) => {
	socket.on("message", (msg) => {
		io.emit("message", msg);
	});
});
