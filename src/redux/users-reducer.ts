const SET_USERS = "SET-USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: []
}

export type UserType = {
    name: string| null,
    id: number,
    uniqueUrlName: any,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string,
    id?: number,
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): ActionType => ({type: SET_USERS, users: users})
export const follow = (id: number) => ({type: FOLLOW, id: id})
export const unfollow = (id: number) => ({type: UNFOLLOW, id: id})

