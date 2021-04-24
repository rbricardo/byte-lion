export const setUserId = (data) => ({
  type: 'SET_USER_ID',
  payload: data
})

const initialState = {
  userId: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload
      }
    default:
      return state
  }
}
