const { Model, DataTypes } = require('sequelize');

const LOTE_TABLE = 'lotes';

class Lote extends Model {
    static init(sequelize) {
        super.init({
            lote_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            area_total: {
                allowNull: false,
                type: DataTypes.DECIMAL(10, 2),
            },
            precio: {
                allowNull: false,
                type: DataTypes.DECIMAL(10, 2),
            },
            estado: {
                allowNull: false,
                type: DataTypes.ENUM('separado', 'vendido', 'disponible'),
            },
            tipo_lote: {
                allowNull: false,
                type: DataTypes.ENUM('normal', 'comercial'),
            },
            imagen: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            proyecto_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'proyectos',
                    key: 'proyecto_id'
                }
            },
        }, {
            sequelize,
            tableName: LOTE_TABLE,
            modelName: 'Lote',
            timestamps: true,
        });
    }
}

module.exports = {
    Lote,
};
