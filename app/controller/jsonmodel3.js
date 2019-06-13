let datas;

module.exports = {
    set : (schedule) => {
         datas = {
            id: schedule.id,
            type: schedule.type,
            status: schedule.status,
            name: schedule.name,
            time: schedule.time,
            date: schedule.date,
            day: schedule.day,
            action: JSON.parse(schedule.action)
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