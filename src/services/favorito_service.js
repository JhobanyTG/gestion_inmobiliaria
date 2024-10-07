const {models} = require('../libs/sequelize')

class FavoritoService {
    
    constructor(){}

    async find(){
        const res = await models.Favorito.findAll();
        return res;
    }

    async findOne(id){
        const res = await models.Favorito.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.Favorito.create(data);
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

module.exports = FavoritoService;