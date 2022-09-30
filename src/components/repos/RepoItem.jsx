import PropTypes from 'prop-types'
import { FaEye, FaLink, FaStar } from 'react-icons/fa'
import {GoIssueOpened , GoRepoForked} from 'react-icons/go'

const RepoItem = ({repo}) => {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

  return (
    <div className='mb-1 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={html_url} target='_blank' rel="noreferrer">
                    <FaLink className='inline mr-1'/> {name}
                </a>
            </h3>
            <p className="mb-3">{description}</p>
            <div>
                <div className="mr-2 mb-2 badge badge-info badge-lg">
                    <FaEye className="mr-2" />
                    {watchers_count}
                </div>
                <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className="mr-2" />
                    {stargazers_count}
                </div>
                <div className="mr-2 badge badge-error badge-lg">
                    <GoIssueOpened className="mr-2" />
                    {open_issues}
                </div>
                <div className="mr-2 badge badge-warning badge-lg">
                    <GoRepoForked className="mr-2" />
                    {forks}
                </div>
            </div>
        </div>
        
    </div>
  )
}

RepoItem.propTypes = {
    repos: PropTypes.object.isRequired,
}

export default RepoItem