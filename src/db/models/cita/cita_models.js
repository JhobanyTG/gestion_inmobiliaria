const { Model, DataTypes } = require('sequelize');

const CITA_TABLE = 'citas';

class Cita extends Model {
    static init(sequelize) {
        super.init({
            cita_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            cliente_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'clientes', // Asegúrate de que el nombre de la tabla sea correcto
                    key: 'cliente_id'
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
            fecha_cita: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            modo_cita: {
                allowNull: false,
                type: DataTypes.ENUM('presencial', 'virtual'),
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
            estado: {
                allowNull: false,
                type: DataTypes.ENUM('agendado', 'cancelado', 'reprogramado'),
            },
        }, {
            sequelize,
            tableName: CITA_TABLE,
            modelName: 'Cita',
            timestamps: true,
        });
    }
}

module.exports = {
    Cita,
};
