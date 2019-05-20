let datas;

module.exports = {
    set : (rule, condition) => {
         datas = {
            
            id : rule.id,
            name : rule.name,
            action : condition
        }
        return datas;
    },

    get : () => {
        if(!datas) {
            throw new Error('data not Set');
        }
        return datas;
    } 
}