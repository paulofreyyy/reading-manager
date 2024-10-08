import React from 'react';
import BookItem from './BookItem';
import { Book } from '../entity/books.entity';

interface BookListProps {
    books: Book[];
    updateStatus: (title: string) => void;
    updateCurrentPage: (title: string, page: number) => void;
    removeBook: (title: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, updateStatus, updateCurrentPage, removeBook }) => {
    return (
        <div>
            {books.map((book, index) => (
                <BookItem
                    key={index}
                    book={book}
                    updateStatus={updateStatus}
                    updateCurrentPage={updateCurrentPage}
                    removeBook={removeBook}
                />
            ))}
        </div>
    );
};

export default BookList;
