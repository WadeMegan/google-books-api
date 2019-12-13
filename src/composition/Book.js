import React, {Component} from 'react';
import BookItem from './BookItem'


function Book(props) {
        return(<>
            <div className="bookListContainer">
                <BookItem books={props.books}/>
            </div>
        </>
        )
}

export default Book