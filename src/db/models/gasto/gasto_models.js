const { Model, DataTypes } = require('sequelize');

const GASTO_TABLE = 'gastos';

class Gasto extends Model {
    static init(sequelize) {
        super.init({
            gasto_id: {
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
            tipo_gasto: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            monto: {
                allowNull: false,
                type: DataTypes.DECIMAL(10, 2),
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
            evidencia: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            fecha: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        }, {
            sequelize,
            tableName: GASTO_TABLE,
            modelName: 'Gasto',
            timestamps: true,
        });
    }
}

module.exports = {
    Gasto,
};
