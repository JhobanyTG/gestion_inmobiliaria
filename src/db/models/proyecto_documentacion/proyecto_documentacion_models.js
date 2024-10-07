const { Model, DataTypes } = require('sequelize');

const PROYECTO_DOCUMENTACION_TABLE = 'proyecto_documentaciones';

class ProyectoDocumentacion extends Model {
    static init(sequelize) {
        super.init({
            proyecto_documentaciones_id: {
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
            documentacion_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'documentaciones',
                    key: 'documentacion_id'
                }
            },
        }, {
            sequelize,
            tableName: PROYECTO_DOCUMENTACION_TABLE,
            modelName: 'ProyectoDocumentacion',
            timestamps: true,
        });
    }
}

module.exports = {
    ProyectoDocumentacion,
};
