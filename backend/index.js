const express = require('express') ;

const morgan = require('morgan') ;

const cors = require('cors') ;

const app = express() ;

const mongoose = require( './database') ;


app.set('port', process.env .PORT || 3000);

app .use(morgan('dev'));

app .use(express.json());

app.use(cors({origin: 'http://localhost:4200'}));

// rutas de nuestro servidor

app .use('/api/app_web/usuarios',require('./routes/usuario.routes'));
app .use('/api/app_web/productos',require('./routes/producto.routes'));
app .use('/api/app_web/servicios',require('./routes/servicio.routes'));

// Iniciando el servidor

app.listen(app.get('port'), () => {// esta es una mejor manera de configurar el puerto

    console.log('server activo en el puerto', app.get('port'));

});