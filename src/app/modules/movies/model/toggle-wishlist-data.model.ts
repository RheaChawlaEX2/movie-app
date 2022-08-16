import { MovieListData } from "./movie-list-data.model";

export interface ToggleWishListData {
    "movie-data": MovieListData,
    "in-wishlist": boolean
}