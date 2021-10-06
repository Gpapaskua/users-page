import React  from 'react'
import { useHistory, withRouter } from 'react-router';
import { range } from './pagerRange'


const Pagination = ({page, setPage, totalItems, queryString}) => {
    
    const perPage = queryString.has('perPage') ? queryString.get('perPage') : 10;
    console.log(perPage)
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

        let keys = queryString.keys();
        
        let url = `?page=${newPage}`;
        console.log(queryString.has('page') ? '?' : `?page=${newPage}`, url)
        for(let key of keys) {
            console.log(queryString[key])
            queryString.has(key) && key !== 'page' ? url+=`&${key}=${queryString.get(key)}` : url+=''
        }
        console.log(url)
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
