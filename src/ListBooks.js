import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const Listbooks = (props) => {
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
    
            <div className='list-books-content'>
                {props.shelf.map(shelf =>(
                    <Bookshelf
                        key={shelf}
                        onChangeShelf={props.onChangeShelf}
                        books={props.books.filter((book) => book.shelf === shelf)} name={shelf}/>
                ))}
            </div>
    
            <div className="open-search">
                <Link to="/search"> Add new book </Link>
            </div>
        </div>
    )
};


export default Listbooks;
