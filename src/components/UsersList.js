import React from 'react'

/**Components */
import User from './common/User'

const UsersList = ({ users }) => {

    
    
    return (
        <div className='container bg-white py-2 mt-5'>
            <table className="table w-100 mt-5 overflow-hidden">
                <thead className='table-success custom-table-head align-middle'>
                    <tr>
                    <th scope="col" className='text-muted'>ID</th>
                    <th scope="col" className='text-muted'>Name</th>
                    <th scope="col" className='text-muted'>Email</th>
                    <th scope="col" className='text-muted'>Department</th>
                    <th scope="col" className='text-muted'>Position</th>
                    <th scope="col" className='text-muted'>Role</th>
                    <th scope="col" className='text-muted'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <User user={user} key={user.id}/>           
                        })
                    }
                
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
