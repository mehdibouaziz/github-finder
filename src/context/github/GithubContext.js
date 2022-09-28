import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get search results from github API
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const { items } = await response.json()
        
        dispatch({type: 'GET_USERS', payload: items})
    }

    // trigger Spinner display
    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }

    // clear users in state
    const clearUsers = () => {
        dispatch({type: 'CLEAR_USERS'})
    }

    return (
        <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        setLoading,
        clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext