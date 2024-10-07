const { Model, DataTypes } = require('sequelize');

const RECURSO_TABLE = 'recursos';

class Recurso extends Model {
    static init(sequelize) {
        super.init({
            recurso_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            accion_diaria_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'acciones_diarias',
                    key: 'accion_diaria_id'
                }
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
            costo: {
                allowNull: true,
                type: DataTypes.DECIMAL(10, 2),
            },
        }, {
            sequelize,
            tableName: RECURSO_TABLE,
            modelName: 'Recurso',
            timestamps: true,
        });
    }
}

module.exports = {
    Recurso,
};
