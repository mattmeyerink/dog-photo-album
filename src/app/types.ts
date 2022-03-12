export interface SingleDogResponse {
    message: string;
    status: string;
}

export interface MultipleDogsResponse {
    message: string[];
    status: string;
}

export interface DogPhoto {
    image: string;
    breed: string;
}
