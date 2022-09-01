export interface MovieListData {
    showId: string,
    imgSrc?: string,
    type: string,
    title: string,
    director?: string,
    cast?: string,
    country?: string,
    dateAdded?: string,
    releaseYear: string,
    rating: string
}

export interface FilterData{  
    search: string,
    type: string,
    order: string,    
}


