import 'dotenv/config';
import app from './src/app';
import {DataBase} from './src/db';
const PORT = process.env.PORT;
const {conn} = DataBase;

conn.sync({ force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Listening on Port ${PORT}`);
    })
})
