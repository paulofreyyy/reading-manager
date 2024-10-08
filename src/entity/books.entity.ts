export interface Book {
    title: string;
    author: string;
    genre: string;
    status: 'lido' | 'não lido';
    totalPages: number;
    currentPage: number;
}