const { Model, DataTypes } = require('sequelize');

const ANUNCIO_TABLE = 'anuncios';

class Anuncio extends Model {
    static init(sequelize) {
        super.init({
            anuncio_id: {
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
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
            imagen: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            estado: {
                allowNull: false,
                type: DataTypes.ENUM('activo', 'inactivo'),
            },
        }, {
            sequelize,
            tableName: ANUNCIO_TABLE,
            modelName: 'Anuncio',
            timestamps: true,
        });
    }
}

module.exports = {
    Anuncio,
};
