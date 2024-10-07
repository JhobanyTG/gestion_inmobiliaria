const {models} = require('../libs/sequelize')

class DocumentacionService {
    
    constructor(){}

    async find(){
        const res = await models.Documentacion.findAll();
        return res;
    }

    async findOne(id){
        const res = await models.Documentacion.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.Documentacion.create(data);
        return res;
    }

    async update(id, data){
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async delete(id){
        const model = await this.findOne(id);
        const res = await model.destroy();
        return res;
    }
}

module.exports = DocumentacionService;