import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router';

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
          
            axios.get(`https://sweeft-hrms.dznela.com/people?page=${page}${queryString.has('perPage') ? `&perPage=${queryString.get('perPage')}` : ""}${queryString.has('name') ? `&name=${queryString.get('name')}` : ''}${queryString.has('email')  ? `&email=${queryString.get('email')}` : ""}${queryString.has('doc_id')  ? `&doc_id=${queryString.get('doc_id')}` : ""}${queryString.has('phone') ? `&phone=${queryString.get('phone')}` : ""}${queryString.has('adress') ? `&adress=${queryString.get('adress')}` : ""}${queryString.has('id') ? `&id=${queryString.get('id')}` : ""}${queryString.has('status') ? `&status=${queryString.get('status')}` : ""}${queryString.has('contract_type_id') ? `&contract_type_id=${queryString.get('contract_type_id')}` : ""}${queryString.has('job_type_id') ? `&job_type_id=${queryString.get('job_type_id')}` : ""}${queryString.has('seniority_id') ? `&seniority_id=${queryString.get('seniority_id')}` : ""}${queryString.has('position_id') ? `&position_id=${queryString.get('position_id')}` : ""}`
            )
            .then(res => {
                if(res.status === 200){
                    setUsers(res.data);
                    
                }
            })
        },
        [queryString, page],
    )


    const updateFilters = useCallback(
        () => {
            setPage(queryString.has('page') ? parseInt(queryString.get('page')) : 1);
       
            setFilterItems({
            
            perPage: queryString.has('perPage') ? queryString.get('perPage') : 10,
            name: queryString.has('name') ? queryString.get('name') : "",
            email: queryString.has('email') ? queryString.get('email') : "",
            doc_id: queryString.has('doc_id') ? queryString.get('doc_id') : "",
            phone: queryString.has('phone') ? queryString.get('phone') : "",
            adress: queryString.has('adress') ? queryString.get('adress') : "",
            id: queryString.has('id') ? queryString.get('id') : "",
            status: queryString.has('status') ? queryString.get('status') : "",
            contract_type_id: queryString.has('contract_id') ? queryString.get('contact_id') : "",
            job_type_id: queryString.has('job_type_id') ? queryString.get('job_type_id') : "",
            seniority_id: queryString.has('seniority_id') ? queryString.get('seniority_id') : "",
            position_id: queryString.has('position_id') ? queryString.get('poition_id') : ""
            
        });
        },
        [queryString],
    )

    useEffect(() => { 
        updateFilters();

    }, [updateFilters]);


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
                users  ?  <UsersList users={users.data}/> : <Spinner />
            }

            {
            users  ?  <Pagination 
                            filterParams={filterItems} 
                            totalItems={users.total} 
                            page={page}
                            setPage={setPage}
                            perPage={filterItems.perPage}
                            filterItems={filterItems}/> : null
            }
        </div>
    )
}

export default Users
