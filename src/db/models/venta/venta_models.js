const { Model, DataTypes } = require('sequelize');

const VENTA_TABLE = 'ventas';

class Venta extends Model {
    static init(sequelize) {
        super.init({
            venta_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            lote_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'lotes',
                    key: 'lote_id'
                }
            },
            usuario_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'usuarios',
                    key: 'usuario_id'
                }
            },
            fecha_venta: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            documentacion_venta: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
        }, {
            sequelize,
            tableName: VENTA_TABLE,
            modelName: 'Venta',
            timestamps: true,
        });
    }
}

module.exports = {
    Venta,
};
