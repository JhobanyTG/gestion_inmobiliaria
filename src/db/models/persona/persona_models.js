const { Model, DataTypes } = require('sequelize');

const PERSONA_TABLE = 'personas'; // Asegúrate de que el nombre de la tabla sea correcto

class Persona extends Model {
    static init(sequelize) {
        super.init({
            persona_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(60),
            },
            apellido_p: {
                allowNull: true,
                type: DataTypes.STRING(30),
            },
            apellido_m: {
                allowNull: true,
                type: DataTypes.STRING(30),
            },
            telefono: {
                allowNull: true,
                type: DataTypes.STRING(15),
            },
            numero_wts: {
                allowNull: true,
                type: DataTypes.STRING(15),
            },
            direccion: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            fecha_nacimiento: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            tipo_persona: {
                allowNull: false,
                type: DataTypes.ENUM('cliente', 'usuario'),
            },
        }, {
            sequelize,
            tableName: PERSONA_TABLE,
            modelName: 'Persona',
            timestamps: true,
        });
    }
}

module.exports = {
    Persona,
};
