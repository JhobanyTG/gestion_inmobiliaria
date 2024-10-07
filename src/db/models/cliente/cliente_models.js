const { Model, DataTypes } = require('sequelize');

const CLIENTE_TABLE = 'clientes';

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            cliente_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            persona_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'personas',
                    key: 'persona_id'
                }
            },
            preferencias: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            ubicacion_preferencia: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            cantidad_compras: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            fecha_ultima_compra: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            cliente_frecuente: {
                allowNull: true,
                type: DataTypes.BOOLEAN,
            },
        }, {
            sequelize,
            tableName: CLIENTE_TABLE,
            modelName: 'Cliente',
            timestamps: true,
        });
    }
}

module.exports = {
    Cliente,
};
