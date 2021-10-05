
export const range = (start, end, page, lastPage) => {
    let length = end - start + 1;
    if(lastPage <= 5){
        return  Array.from({length: lastPage}, (item, index) => index+1)
    }
    if(page + 2 >= lastPage && lastPage > 4){
        return Array.from({ length }, (_, idx) => idx + (lastPage - 4));
    }
    
    return Array.from({ length }, (_, idx) => idx + start);
}