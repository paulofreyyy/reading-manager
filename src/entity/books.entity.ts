export interface Book {
    title: string;
    author: string;
    image?: string;
    genre: string;
    status: 'Concluído' | 'Não lido' | 'Lendo' | 'Abandonado';
    totalPages: number;
    currentPage?: number;
    rating?: number;
    type: 'Físico' | 'Audio-Book' | 'E-book'
}
