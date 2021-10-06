import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

/**API methods */
import { usersAPI } from '../api/usersAPI';



const Filter = ({filterItems, setFilterItems, setPage}) => {

    const [positions, setPositions] = useState(null);
    const [contractTypes, setContractTypes] = useState(null);
    const [seniorities, setSeniorities] = useState(null);
    const [jobTypes, setJobTypes] = useState(null);

    
    const history = useHistory();

    const onFilterItemsChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setFilterItems({
            ...filterItems,
            [name]: value
        });

    }
    
    const handleFilterSubmit = e => {

        e.preventDefault();
        let url = `?page=1`
        
        Object.keys(filterItems).map(key => url+=`&${key}=${filterItems[key]}`)

        history.push(url);
        setPage(1);
    }

    useEffect(() => {

        usersAPI.getPositions()
        .then(resp => setPositions(resp));

        usersAPI.getSeniorities()
        .then(resp => setSeniorities(resp));

        usersAPI.getContractTypes()
        .then(resp => setContractTypes(resp));

        usersAPI.getJobTypes()
        .then(resp => setJobTypes(resp)); 
        
    }, [])

    
    return (
        <div className='py-3 px-2'>
            <form onSubmit={handleFilterSubmit}>
                <div className='row'>
                    <div className="col-md-1 mb-3">
                        <label 
                            htmlFor="exampleFormControlInput1" 
                            className="form-label fw-bold">
                                Rows</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            name="perPage"
                            value={filterItems.perPage}
                            onChange={onFilterItemsChange} />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterEmail"
                            className="form-label fw-bold">Email</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="filterEmail"
                            name="email"
                            value={filterItems.email}
                            onChange={onFilterItemsChange} />

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterName"
                            className="form-label fw-bold">Name</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="filterName"
                            name="name"
                            value={filterItems.name}
                            onChange={onFilterItemsChange} />

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterDocId"
                            className="form-label fw-bold">Doc ID</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="filterDocId"
                            name="doc_id"
                            value={filterItems.doc_id}
                            onChange={onFilterItemsChange} />

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterPhone"
                            className="form-label fw-bold">Phone</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="filterPhone"
                            name="phone"
                            value={filterItems.phone}
                            onChange={onFilterItemsChange} />

                     </div>
                    <div className="col-md-3 mb-3">
                        <label 
                            htmlFor="filterAdress"
                            className="form-label fw-bold">Adress</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="filterAdress"
                            name="adress"
                            value={filterItems.adress}
                            onChange={onFilterItemsChange} />

                     </div>
                    <div className="col-md-1 mb-3">
                        <label 
                            htmlFor="filterId"
                            className="form-label fw-bold">ID</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="filterId" 
                            name="id"
                            value={filterItems.id}
                            onChange={onFilterItemsChange}/>

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterStatus"
                            className="form-label fw-bold">Status</label>
                        <select 
                            className="form-control"
                            id="filterStatus"
                            name="status"
                            onChange={onFilterItemsChange}>
                                <option value="1" defaultValue>Active</option>
                                <option value="2">Inactive</option>
                        </select>

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterContractType"
                            className="form-label fw-bold">Contract Type</label>
                        <select 
                            className="form-control"
                            id="filterContractType"
                            name="contract_type_id"
                            onChange={onFilterItemsChange}>
                                <option value='' defaultValue>Choose</option>
                                {
                                    contractTypes?.data.map((c, index) => {
                                        return <option 
                                                    value={c.id}
                                                    key={index}>{c.title}</option>
                                    })
                                }
                        </select>

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterWorkingRate"
                            className="form-label fw-bold">Working Rate</label>
                        <select 
                            className="form-control"
                            id="filterWorkingRate"
                            name="job_type_id"
                            value={filterItems.job_type_id}
                            onChange={onFilterItemsChange}>
                                <option value='' defaultValue>Choose</option>
                                {
                                    jobTypes?.data.map((j, index) => {
                                        return <option 
                                                    value={j.id} 
                                                    key={index}>
                                                        {j.title}</option>
                                    })
                                }
                        </select>

                     </div>
                    <div className="col-md-2 mb-3">
                        <label 
                            htmlFor="filterSeniority"
                            className="form-label fw-bold">Seniority</label>
                        <select 
                            className="form-control"
                            id="filterSeniority"
                            name="seniority_id"
                            onChange={onFilterItemsChange}>
                                <option value= "" defaultValue>Choose</option>
                                {
                                    seniorities?.data.map((s, index) => {
                                        return <option 
                                                    value={s.id} 
                                                    key={index}>
                                                        {s.title}</option>
                                    })
                                }
                        </select>

                     </div>
                    <div className="col-md-3 mb-3">
                        <label 
                            htmlFor="filterPosition"
                            className="form-label fw-bold">Position</label>
                        <select 
                            className="form-control"
                            id="filterSeniority"
                            name="position_id"
                            value={filterItems.position_id}
                            onChange={onFilterItemsChange}>
                                <option value='' defaultValue>Choose</option>
                                {
                                    positions?.data.map((p, index) => {
                                        return <option 
                                                    value={p.id} 
                                                    key={index}>
                                                        {p.title}</option>
                                    })
                                }
                        </select>

                     </div>
                     <div className='col-md-2'>
                         <button type='submit' className='btn btn-success px-3 py-1'>Search</button>
                     </div>
            </div>
            </form>
        </div>
    )
}

export default Filter
