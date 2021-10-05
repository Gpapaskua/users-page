import React  from 'react'
import { useHistory } from 'react-router';
import { range } from './pagerRange'


const Pagination = ({page, setPage, totalItems, perPage, filterItems}) => {
    
    const totalPages = Math.ceil(totalItems / (perPage ? parseInt(perPage) : 10));
    const pages = page < 3 ? range(1, page + 3, page, totalPages)
    : range(page-2, page + 2, page, totalPages);

    const history = useHistory();
    
    const handlePageChange = e => {

        let type = e.target.id;
        let newPage = 1;

        switch(type){
            
            case 'arrow-left': {

                newPage = parseInt(page) - 1;
                break;
            }

            case 'arrow-right': {

                newPage = parseInt(page) + 1;
                break;
            }

            default: {

                newPage = parseInt(e.target.textContent);
        
            }


        }
        
        const url = `?page=${newPage}${filterItems.perPage.length > 0 ? `&perPage=${filterItems.perPage}` : ''}${filterItems.name.length > 0 ? `&name=${filterItems.name}` : ''}${filterItems.email.length > 0 ? `&email=${filterItems.email}` : ''}${filterItems.doc_id.length > 0 ? `&doc_id=${filterItems.doc_id}` : ''}${filterItems.phone.length > 0 ? `&phone=${filterItems.phone}` : ''}${filterItems.adress.length > 0 ? `&adress=${filterItems.adress}` : ''}${filterItems.id.length > 0 ? `&id=${filterItems.id}` : ''}${filterItems.status.length > 0 ? `&status=${filterItems.status}` : ''}${filterItems.contract_type_id.length > 0 ? `&contract_type_id=${filterItems.contract_type_id}` : ''}${filterItems.job_type_id.length > 0 ? `&job_type_id=${filterItems.job_type_id}` : ''}${filterItems.seniority_id.length > 0 ? `&seniority_id=${filterItems.seniority_id}` : ''}${filterItems.position_id.length > 0 ? `&position_id=${filterItems.position_id}` : ''}`
        history.push(url);
        setPage(newPage);

    }

    
    if(totalPages < 3){
        return null;
    } 
    return (
        <div className="col-md-12 py-2">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    
                    <li className="page-item rounded">
                        <span 
                            role='button'
                            className={page > 1 ? 'page-link' : "d-none"}
                            id='arrow-left'
                            onClick={handlePageChange}
                            >
                            <i className='fas fa fa-angle-left pe-none'></i>
                        </span>
                    </li>
        
                    <li className={page - 3 > 1 && totalPages > 5 ? 'page-item' : 'd-none'}>
                        <span 
                            role='button'
                            className='page-link shadow-none' 
                            onClick={handlePageChange}>
                                1</span>
                            
                    </li>

                    <li className={page - 3 > 1 && totalPages > 5 ? 'page-item d-flex' : 'd-none'}>
                        <span className='px-2 align-self-end'>...</span>              
                    </li>
            
                    {
                    pages.map((item, index) => {
                        
                        return  (
                                    <li 
                                        className={`page-item ${page === item ? 'active' : ''}`}
                                        key={index}>
                                        <span 
                                            role='button'
                                            className='page-link rounded px-3 text-decoration-none shadow-none' 
                                            onClick={handlePageChange}
                                            >
                                                {item}</span>
                                    </li> 
                                )       
                    })}

                    <li 
                        className={page + 2 < totalPages && totalPages > 5 ? "page-item d-flex" : "d-none"}>
                            <span className='px-2 align-self-end rounded'>...</span>
                    </li>
                    <li 
                        className={page + 2 < totalPages && totalPages > 5 ? "page-item" : "d-none"}>
                            <span 
                                role='button'
                                className='page-link shadow-none rounded' 
                                onClick={handlePageChange}>
                                    {totalPages}
                            </span>
                    </li>

                    <li className={page === totalPages ? "d-none" : "page-item"}>
                        <span 
                            className='page-link shadow-none rounded'
                            role='button' 
                            id='arrow-right'
                            onClick={handlePageChange}>
                                <i className='fas fa fa-angle-right pe-none'></i>
                                </span>
                    </li>        
                    
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
