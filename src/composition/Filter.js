import React, {Component} from 'react';
import PrintType from './PrintType'
import BookType from './BookType';
import './Filter.css'

class Filter extends Component {
    render(){
        return(<div className="filtersContainer">
            <PrintType
                handlePrintType={this.props.handlePrintType}/>
            <BookType 
                handleBookType = {this.props.handleBookType}
                state={this.props.state}/>
        </div>
        )
    }
}

export default Filter