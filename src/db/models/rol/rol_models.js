const { Model, DataTypes } = require('sequelize');

const ROL_TABLE = 'roles';

class Rol extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_TABLE,
            modelName: 'Rol',
            timestamps: true
        }
    }
}

const RolSchema = {
    rol_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre_rol: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}

module.exports = { Rol, RolSchema }
