const { Model, DataTypes } = require('sequelize');

const DOCUMENTACION_TABLE = 'documentaciones';

class Documentacion extends Model {
    static init(sequelize) {
        super.init({
            documentacion_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
        }, {
            sequelize,
            tableName: DOCUMENTACION_TABLE,
            modelName: 'Documentacion',
            timestamps: true,
        });
    }
}

module.exports = {
    Documentacion,
};
