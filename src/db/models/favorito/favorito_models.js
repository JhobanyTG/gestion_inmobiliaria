const { Model, DataTypes } = require('sequelize');

const FAVORITO_TABLE = 'favoritos';

class Favorito extends Model {
    static init(sequelize) {
        super.init({
            favorito_id: {
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
            lote_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'lotes',
                    key: 'lote_id'
                }
            },
        }, {
            sequelize,
            tableName: FAVORITO_TABLE,
            modelName: 'Favorito',
            timestamps: true,
        });
    }
}

module.exports = {
    Favorito,
};
