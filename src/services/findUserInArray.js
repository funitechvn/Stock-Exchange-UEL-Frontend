import _ from "lodash";
import store from "store";

export const findUserInArray = (array) => {
    const user = store.get('user');
    if (_.isEmpty(user)) {
        return false
    } else {
        let temp = _.findIndex(array, (o) => {
            return o.userId === user.id
        })
        return temp === -1 ? false : true 
    }
}