const { Model, DataTypes } = require('sequelize');

const REFERENCIA_TABLE = 'referencias';

class Referencia extends Model {
    static init(sequelize) {
        super.init({
            referencia_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            proyecto_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'proyectos',
                    key: 'proyecto_id'
                }
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            foto: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
        }, {
            sequelize,
            tableName: REFERENCIA_TABLE,
            modelName: 'Referencia',
            timestamps: true,
        });
    }
}

module.exports = {
    Referencia,
};
