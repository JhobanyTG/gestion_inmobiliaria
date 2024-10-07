const {models} = require('../libs/sequelize')

class GastoService {
    
    constructor(){}

    async find(){
        const res = await models.Gasto.findAll();
        return res;
    }

    async findOne(id){
        const res = await models.Gasto.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.Gasto.create(data);
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

module.exports = GastoService;