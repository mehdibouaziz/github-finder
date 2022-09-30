import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../context/github/GithubActions"


const UserSearch = () => {
    const [text, setText] = useState('')
    const {users, dispatch} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text === '') {
            setAlert('Please enter something', 'error')
        } else {
            dispatch({type: 'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})

            setText('')
        }
    }
    const handleClear = () => {
        dispatch({type: 'CLEAR_USERS'})
    }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 mb-8 gap-8">
        <div className="col-span-3">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-3/4 pr-40 bg-gray-200 rounded-r-none input input-lg text-black"
                            placeholder='Search'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            />
                        <button className="rounded-l-none w-1/4 btn btn-lg">GO</button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 ?
            <div>
                <button className="btn btn-ghost btn-lg" onClick={handleClear}>Clear</button>
            </div>
        : <></>}
    </div>
  )
}

export default UserSearch