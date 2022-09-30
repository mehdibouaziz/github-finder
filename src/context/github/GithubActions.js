import axios from "axios"

const github = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL
})

    // Get search results from github API
    export const searchUsers = async (text) => {
        const params = new URLSearchParams({
            q: text
        })
        const response = await github.get(`/search/users?${params}`)
        return response.data.items
    }

    // Get single user and repos from github API
    export const getUserAndRepos = async (login) => {
        const [user, repos] = await Promise.all([
            github.get(`/users/${login}`),
            github.get(`/users/${login}/repos`)
        ])

        return { user: user.data, repos: repos.data}
    }