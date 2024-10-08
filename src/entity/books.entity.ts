export interface Book {
    title: string;
    author: string;
    image?: string;
    genre: string;
    status: 'Concluído' | 'TBR' | 'Lendo' | 'Abandonado';
    totalPages: number;
    currentPage?: number;
    rating?: number;
    type: 'Físico' | 'Audio-Book' | 'E-book'
}
