/** Action Types */
export const createUsernameActionTypes = {
    CREATE_USERNAME: 'CREATE_USERNAME'
}
/** Creates a username */
export function createUsername(payload) {
    return {
      type: createUsernameActionTypes.CREATE_USERNAME,
      payload
    }
  }