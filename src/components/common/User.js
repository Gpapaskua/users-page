import React from 'react'



const User = ({user}) => {
    
    return (
        <tr>
            <td>{user.id}</td>
            <td>
                <small>{user.first_name}&nbsp;{user.last_name}</small>
            </td>
            <td>
                <small>{user.email}</small>
            </td>
            <td>
                <small>Department</small>
            </td>
            <td>
            {user.positions.map((p, index) => 

                  p.title ? <small key={index}>{p.title}</small> : "No information"
            )}
            </td>
            <td>
                <small>{user.role.title}</small>
            </td>
            <td>
                <div className='pt-1'>
                    <i role='button' className='fas fa fa-info-circle fs-5 bg-primary text-white px-2 py-2 rounded mb-1'></i>
                </div>
                <div className='py-1'>
                    <i role='button' className='fas fa fa-trash fs-5 bg-danger text-white px-2 py-2 rounded'></i>
                </div>
            </td>
        </tr>
    
    )
}

export default User
