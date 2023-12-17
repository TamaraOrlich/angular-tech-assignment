export interface MoviesResponseData {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export interface Movie {
    backdrop_path: string,
    genres?: Genre[]
    homepage?: string;
    id: number,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number;
    status: string;
    tagline: string;
    title: string,
    vote_average: number
}

export interface Genre {
    id: number,
    name: string,
}

export interface Name {
    name: string;
}
