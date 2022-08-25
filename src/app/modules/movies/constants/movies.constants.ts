import { FilterData } from "../model/movie-list-data.model"

export const MovieConstants = {
    addToWishListBtn: "WishList",
    removeFromWishListBtn: "Remove",
    imgSrc: "https://a0.muscache.com/im/pictures/54335902/8572cc9d_original.jpg",
    pageSize: 1000
}

export const TypeOptions = [
    "All",
    "TV Show",
    "Movie",
    
]

export const QUERY_PARAMS = {
    "search": "",
    "type": "",
    "order": "",

} as FilterData;




