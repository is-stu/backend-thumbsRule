const express = require('express');
const cors = require('cors');
const { dbCnn } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.usuariosPath = '/api/people';
        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection() {
        await dbCnn()
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/people'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
