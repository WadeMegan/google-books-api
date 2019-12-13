import React, {Component} from 'react';
import './BookItem.css'

class BookItem extends Component {
    render(){

        const books = this
            .props
            .books
            .map((book,index)=>{
                
                function picture(book){
                    if(book.volumeInfo.imageLinks.thumbnail){
                        return(<img src={book.volumeInfo.imageLinks.thumbnail} alt="book thumbnail"></img>)
                    }
                }

                function authorInfo(book){
                    if(book.volumeInfo.authors){
                        return(<p>Author(s): {book.volumeInfo.authors.join(' & ')}</p>)
                    }
                    else{
                        return('No authors')
                    }
                }

                function priceInfo(book){

                    if(book.saleInfo.saleability==="FREE"){
                        return(<p>{book.saleInfo.saleability}</p>)
                    }
                    else if(book.saleInfo.isEbook===true){
                        return(<p>Price: ${book.saleInfo.listPrice.amount}</p>)
                    }
                    else{
                        return(<p>Not for sale as an e-book</p>)
                    }  
                }

                function description(book){
                    if(book.volumeInfo.description){
                        return(<p className="description">{book.volumeInfo.description}</p>)
                    }
                }
                
                return(<div className="bookItemContainer" key={index}>
                    {picture(book)}
                    <div className="bookInfo">
                        <div className="mainInfo">
                          <h2>{book.volumeInfo.title}</h2>
                            {authorInfo(book)}
                            {priceInfo(book)}  
                        </div>
                        {description(book)}
                    </div>
                </div>)
            })

        return(<>
            {books}
        </>
        )
    }
}

export default BookItem


