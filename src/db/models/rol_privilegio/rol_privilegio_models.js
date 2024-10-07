const { Model, DataTypes } = require('sequelize');

const ROL_PRIVILEGIO_TABLE = 'rol_privilegios';

class RolPrivilegio extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROL_PRIVILEGIO_TABLE,
            modelName: 'RolPrivilegio',
            timestamps: false
        }
    }
}

const RolPrivilegioSchema = {
    rol_privilegio_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    rol_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'rol_id'
        }
    },
    privilegio_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'privilegios',
            key: 'privilegio_id'
        }
    }
}

module.exports = { RolPrivilegio, RolPrivilegioSchema }
