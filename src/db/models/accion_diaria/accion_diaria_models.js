const { Model, DataTypes } = require('sequelize');

const ACCION_DIARIA_TABLE = 'acciones_diarias';

class AccionDiaria extends Model {
    static init(sequelize) {
        super.init({
            accion_diaria_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            usuario_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'usuarios',
                    key: 'usuario_id'
                }
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
        }, {
            sequelize,
            tableName: ACCION_DIARIA_TABLE,
            modelName: 'AccionDiaria',
            timestamps: true,
        });
    }
}

module.exports = {
    AccionDiaria,
};
