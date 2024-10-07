const { Model, DataTypes } = require('sequelize');

const USUARIO_TABLE = 'usuarios';

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            timestamps: true
        }
    }
}

const UsuarioSchema = {
    usuario_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    persona_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'personas',
            key: 'persona_id'
        }
    },
    correo_electronico: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true
    },
    contrasena: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },
    estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}

module.exports = { Usuario, UsuarioSchema }
