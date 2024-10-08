export interface Book {
    title: string;
    author: string;
    genre: string;
    status: 'lido' | 'não lido' | 'lendo';
    totalPages: number;
    currentPage: number;
}
