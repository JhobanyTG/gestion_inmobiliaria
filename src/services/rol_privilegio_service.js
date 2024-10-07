const {models} = require('../libs/sequelize')

class RolPrivilegioService {
    
    constructor(){}

    async find(){
        const res = await models.RolPrivilegio.findAll();
        return res;
    }

    async findOne(id){
        const res = await models.RolPrivilegio.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.RolPrivilegio.create(data);
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

module.exports = RolPrivilegioService;