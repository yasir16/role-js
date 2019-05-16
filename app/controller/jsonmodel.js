let datas;

module.exports = {
    set : (rule, condition) => {
         datas = {
            
            id : rule.id,
            name : rule.name,
            type : rule.type,
            action_id : rule.action_id,
            roleallcondition : condition
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