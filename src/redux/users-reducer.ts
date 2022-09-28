const SET_USERS = "SET-USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

type InitialStateType = {
    users: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number
}

const initialState: InitialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1
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
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
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
    users?: Array<UserType>,
    totalUsersCount?: number,
    currentPage?: number
}

export const setUsers = (users: Array<UserType>): ActionType => ({type: SET_USERS, users: users})
export const follow = (id: number) => ({type: FOLLOW, id: id})
export const unfollow = (id: number) => ({type: UNFOLLOW, id: id})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})

