import _ from 'lodash';

export const checkPermission = (usersRole = [], actionRole = []) => {
  // Check permission of user is allow in action Role
  // If actionRole is * return true
  if (_.intersection(actionRole, ["*"]).length > 0) {
    return true;
  } else {
    // If it content, 2 array is greater than 0
    if (_.intersection(usersRole, actionRole).length > 0) {
      return true;
    }
    return false;
  }
}

export const checkRolesUser = (navBarAuth = [], userRole = []) => {
  // Check permission of user is allow in action Role
  // If actionRole is * return true
  if (_.intersection(navBarAuth, ["*"]).length > 0) {
    
    return true;
  } else {
    // If it content, 2 array is greater than 0
    if (_.intersection(userRole, navBarAuth).length > 0) {
      return true;
    }
    if (_.isEmpty(navBarAuth)) {
      return true;
    }
    return false;
  }
};