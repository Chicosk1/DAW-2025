import { use } from "react";
import MovieContext from "../context/movie-context";


export function useMovies() {
    const context = use(MovieContext);
    return context;
}