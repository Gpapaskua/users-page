
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router';
import { usersAPI } from '../api/usersAPI';

/**Components */
import Pagination from '../components/common/Paginition';
import Spinner from '../components/common/Spinner';
import Filter from '../components/Filter'
import UsersList from '../components/UsersList';



const Users = () => {

    const { search } = useLocation();
    const queryString = useMemo(() => {
        return new URLSearchParams(search);
    }, [search]);

    const [showFilter, setShowFilter] = useState(false);

    const [filterItems, setFilterItems] = useState({
        perPage: '',
        name: '',
        email: '',
        doc_id: '',
        phone: '',
        adress: '',
        id: '',
        status: '',
        contract_type_id: '',
        job_type_id: '',
        seniority_id: '',
        position_id: ''
    });

    const [page, setPage] = useState(queryString.has('page') ? parseInt(queryString.get('page')) : 1);
    const [users, setUsers] = useState(null);

    const getUsers = useCallback(
        () => {
          
            let keys = queryString.keys();
            let query = `?page=${page}`;
            
            for(let key of keys) {
                query+=`&${key}=${queryString.get(key)}`
            }
            
            usersAPI.getUsers(query)
            .then(data => {
                setUsers(data);
            })
                
           
            
            
        },
        [queryString, page],
    )


    
        

    useEffect(() => {
      
        getUsers();
    }, [ getUsers, page]);
    

    return (
        <div className='container'>
            <div className='container py-3 mt-4 bg-white'>
                <button 
                    className='btn btn-primary px-4 py-1 mx-2'
                    onClick={() => setShowFilter(!showFilter)}>Filters</button>
                {
                    showFilter ? <Filter 
                                    filterItems={filterItems} 
                                    setFilterItems={setFilterItems}
                                    setPage={setPage}
                                     /> : null
                }
            </div>

            {
                users  ?  <UsersList users={users.data} /> : <Spinner />
            }

            {
            users  ?  <Pagination 
                            
                            totalItems={users.total} 
                            page={page}
                            setPage={setPage}
                            queryString={queryString}/> : null
            }
        </div>
    )
}

export default Users
