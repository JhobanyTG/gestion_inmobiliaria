const { Model, DataTypes } = require('sequelize');

const PRIVILEGIO_TABLE = 'privilegios';

class Privilegio extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRIVILEGIO_TABLE,
            modelName: 'Privilegio',
            timestamps: true
        }
    }
}

const PrivilegioSchema = {
    privilegio_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre_privilegio: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.TEXT
    }
}

module.exports = { Privilegio, PrivilegioSchema }
