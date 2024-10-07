const { Model, DataTypes } = require('sequelize');

const USUARIO_ROL_TABLE = 'usuario_roles';

class UsuarioRol extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_ROL_TABLE,
            modelName: 'UsuarioRol',
            timestamps: false
        }
    }
}

const UsuarioRolSchema = {
    usuario_rol_id: {
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
    rol_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'rol_id'
        }
    }
}

module.exports = { UsuarioRol, UsuarioRolSchema }
