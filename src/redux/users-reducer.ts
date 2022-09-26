const SET_USERS = "SET-USERS"

const initialState: InitialStateType = {
    users: []
}

type InitialStateType = {
    users: Array<UserType>
}

export type UserType = {
    "name": string| null,
    "id": number,
    "uniqueUrlName": any,
    "photos": {
        "small": string | null,
        "large": string | null
    },
    "status": string | null,
    "followed": boolean
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string,
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): ActionType => ({type: SET_USERS, users: users})
