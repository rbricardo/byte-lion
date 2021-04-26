export const setUser = (data) => ({
  type: 'SET_USER',
  payload: data
})

const initialState = {
  userData: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userData: action.payload
      }
    default:
      return state
  }
}
