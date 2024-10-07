const { Model, DataTypes } = require('sequelize');

const PROYECTO_TABLE = 'proyectos';

class Proyecto extends Model {
    static init(sequelize) {
        super.init({
            proyecto_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            descripcion: {
                allowNull: true,
                type: DataTypes.TEXT,
            },
            logo: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            fecha_inicio: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            ubicacion: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            area_total: {
                allowNull: true,
                type: DataTypes.DECIMAL(10, 2),
            },
            cantidad_manzanas: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            cantidad_lotes: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            tamano_lotes: {
                allowNull: true,
                type: DataTypes.STRING(50),
            },
            luz: {
                allowNull: true,
                type: DataTypes.BOOLEAN,
            },
            agua: {
                allowNull: true,
                type: DataTypes.BOOLEAN,
            },
            desague: {
                allowNull: true,
                type: DataTypes.BOOLEAN,
            },
            nombre_encargado: {
                allowNull: true,
                type: DataTypes.STRING(100),
            },
            numero_celular: {
                allowNull: true,
                type: DataTypes.STRING(15),
            },
            plano_imagen: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            tipo_lotes_normales: {
                allowNull: true,
                type: DataTypes.BOOLEAN,
            },
            tipo_lotes_comerciales: {
                allowNull: true,
                type: DataTypes.BOOLEAN,
            },
            cantidad_areas_verdes: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            cantidad_parques: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            cantidad_lotes_vendidos: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            cantidad_lotes_disponibles: {
                allowNull: true,
                type: DataTypes.INTEGER,
            },
            video_link: {
                allowNull: true,
                type: DataTypes.STRING(255),
            },
            fecha_fin: {
                allowNull: true,
                type: DataTypes.DATE,
            },
        }, {
            sequelize,
            tableName: PROYECTO_TABLE,
            modelName: 'Proyecto',
            timestamps: true,
        });
    }
}

module.exports = {
    Proyecto,
};
