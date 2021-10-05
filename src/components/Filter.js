import React from 'react'
import { useHistory } from 'react-router';

/**Helpers */
import { positions } from '../helpers/formHelpers';

const Filter = ({filterItems, setFilterItems, setPage}) => {

    const positionKeys = Object.keys(positions);
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
        const url = `?page=${1}${filterItems.perPage.length > 0 ? `&perPage=${filterItems.perPage}` : ''}${filterItems.name.length > 0 ? `&name=${filterItems.name}` : ''}${filterItems.email.length > 0 ? `&email=${filterItems.email}` : ''}${filterItems.doc_id.length > 0 ? `&doc_id=${filterItems.doc_id}` : ''}${filterItems.phone.length > 0 ? `&phone=${filterItems.phone}` : ''}${filterItems.adress.length > 0 ? `&adress=${filterItems.adress}` : ''}${filterItems.id.length > 0 ? `&id=${filterItems.id}` : ''}${filterItems.status.length > 0 ? `&status=${filterItems.status}` : ''}${filterItems.contract_type_id.length > 0 ? `&contract_type_id=${filterItems.contract_type_id}` : ''}${filterItems.job_type_id.length > 0 ? `&job_type_id=${filterItems.job_type_id}` : ''}${filterItems.seniority_id.length > 0 ? `&seniority_id=${filterItems.seniority_id}` : ''}${filterItems.position_id.length > 0 ? `&position_id=${filterItems.position_id}` : ''}`
        history.push(url);
        setPage(1);
    }

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
                                <option value='1'>Internship</option>
                                <option value='2'>Labor</option>
                                <option value='3'>Service</option>
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
                                <option value='1'>Full-Time</option>
                                <option value='2'>Part-Time</option>
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
                                <option value = "2"   >junior+</option>
                                <option value = "3"   >mid</option>
                                <option value = "4"   >mid+</option>
                                <option value = "5"   >mid/senior</option>
                                <option value = "6"   >senior</option>
                                <option value = "7"   >senior+</option>
                                <option value = "8"   >lead</option>
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
                                    positionKeys.map((p, index) => {
                                        return <option 
                                                    key={index}
                                                    value={p}>{positions[p].value}</option>
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
