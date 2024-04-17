import 'dotenv/config';
import app from './src/app';
import {DataBase} from './src/db';
const PORT = process.env.PORT || 3001;
const {conn} = DataBase;


app.get('/', (_req, res) => {
    res.send('Servidor funcionando correctamente!!')
})
conn.sync({ force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Listening on Port ${PORT}`);
    }).on('error', (err: any) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`El puerto ${PORT} está en uso, intentando otro puerto...`);
            const newPort = parseInt(`${PORT}`) + 1;
            app.listen(newPort, () => {
              console.log(`Servidor arrancado en el puerto ${newPort}`);
            });
          } else {
            console.error('Error al iniciar el servidor:', err);
          }
    })
})
