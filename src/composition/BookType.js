import React, {Component} from 'react';
import { thisExpression } from '@babel/types';

class BookType extends Component {
    changeSelection = (value) => {
        console.log(this.props.handleBookType(value))
        this.props.handleBookType(value)
    }
    
    render(){
        return(<>
            <form id="bookTypeForm">
                <label htmlFor="bookType">Book Type:</label>
                <select 
                    id="bookType"
                    onChange={e=>this.changeSelection(e.target.value)}
                >
                    <option value="none">No Filter</option>
                    <option value="free-ebooks">Free E-Books</option>
                </select>
            </form>
        </>
        )
    }
}

export default BookType