import React from 'react'

const Books = (props) => {
    return(
        props.book.id !== undefined && (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover">
                        {/* {props.book.imageLinks !== undefined && */}
                            <img src={props.book.imageLinks.thumbnail} alt={props.book.title}
                                style={{ width: 128,
                                height: 193}} />
                        {/* } */}
                    </div>
            
                    <div className="book-shelf-changer">
                        <select onChange={(e) => props.onChangeShelf(props.book, e.target.value)} value={props.book.shelf}>
                            <option value="na" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>

                <div className="book-title">{props.book.title}</div>
                
                {(props.book.authors != null) &&
                    <ul className="book-authors">{props.book.authors.map((author, index) => (
                        <li key={index}> {author}</li>
                    ))}
                    </ul>
                }
            </div>
        )
    )
}


export default Books;
