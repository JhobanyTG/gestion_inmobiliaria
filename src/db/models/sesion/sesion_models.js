const { Model, DataTypes } = require('sequelize');

const SESION_TABLE = 'sesiones';

class Sesion extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SESION_TABLE,
            modelName: 'Sesion',
            timestamps: false
        }
    }
}

const SesionSchema = {
    sesion_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    usuario_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'usuario_id'
        }
    },
    token: {
        allowNull: false,
        type: DataTypes.STRING(512)
    },
    fecha_creacion: {
        allowNull: false,
        type: DataTypes.DATE
    },
    fecha_expiracion: {
        allowNull: false,
        type: DataTypes.DATE
    },
    estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}

module.exports = { Sesion, SesionSchema }
