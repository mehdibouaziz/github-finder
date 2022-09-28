import { useContext } from "react"
import { MdError } from 'react-icons/md'

import AlertContext from "../../context/alert/AlertContext"


const Alert = () => {
    const {alert} = useContext(AlertContext)

    return (
        <>
            {alert ? 
            <div
                className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
                style={{ visibility: alert ? 'visible' : 'hidden' }}
            >
                <div className='alert alert-error'>
                    <div>
                    <MdError className="text-2xl" />
                    <strong>{alert?.msg}</strong>
                    </div>
                </div>
            </div>
            : <></>
            }
        </>
    )
}

export default Alert