import { UserActionTypes } from "./user.types"

export const setCurrentUser = user => ({ // this is a action creator function
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})