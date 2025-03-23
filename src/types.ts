// src/types.ts
export interface BookResponse {
    id: string;
    title: string;
    author: string;
    genre: string,
    description: string,
    price: string | number;
    stock: number,
    image_data: string; // Path to the image stored in the backend
}

export interface Book {
    id: string,
    title: string,
    author: string,
    price: number,
    image_data: string
}