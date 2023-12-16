export interface MoviesResponseData {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genres?: Genre[]
    homepage?: string;
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies?: ProductionCompany[];
    production_countries?: Name[];
    release_date: string,
    runtime: number;
    spoken_languages?: Name[];
    status: string;
    tagline: string;
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface Genre {
    id: number,
    name: string,
}

export interface ProductionCompany {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

export interface Name {
    name: string;
}
