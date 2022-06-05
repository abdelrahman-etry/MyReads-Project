import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            resultBooks: []
        };
    }
 
    setQuery = (query) => {
        let library = this.props.books;
        this.setState({ query: query })
    
        if(query ===''){
            this.setState({ resultBooks: [] })
        }
      
        if(query.length > 0){
            BooksAPI.search(query).then((results) => {
                if(results.length > 0){
                    const resultBooks = results.map((book) => {
                        library.forEach(function(el) {
                            if(el.id === book.id){
                                book.shelf = el.shelf
                            }else{
                                book.shelf = 'none';
                            }
                        })

                        return{
                            id: book.id,
                            shelf: book.shelf,
                            authors: book.authors,
                            title: book.title,
                            imageLinks: {
                                thumbnail: book.imageLinks.thumbnail
                            }
                        }
                    });
            
                    this.setState({ resultBooks })
                };      
            }).catch(this.setState({ resultBooks: [] }));
        };  
    };
  
    render(){
        const { } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close </Link>
                    
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => this.setQuery(e.target.value)}
                            value={this.state.query} 
                        />
                    </div>
                </div>
        
                {this.state.resultBooks.length > 0 &&
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.resultBooks.map((book) => {
                                return(
                                    <li key={ book.id } >
                                        <Books book={ book } onChangeShelf={this.props.onChangeShelf} />
                                    </li>
                                )
                            })}
                        </ol>
                </div>}
            </div>
        )
    }
}

export default SearchBook;
