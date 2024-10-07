require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT,
    },
    postgresql: {
        host: process.env.POSTGRE_HOST || 'localhost',
        user: process.env.POSTGRE_USER || 'postgres',
        password: process.env.POSTGRE_PASSWORD || '',
        database: process.env.POSTGRE_DB || 'db_inmobiliaria',
        port: process.env.POSTGRE_DB || '5432',
    }
}