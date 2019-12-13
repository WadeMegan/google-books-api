import React, {Component} from 'react';
import './PrintType.css'

class PrintType extends Component {
    changeSelection = (value) => {
        this.props.handlePrintType(value)
    }
    
    render(){
        return(<>
            <form id="printTypeForm">
                <label htmlFor="printType">Print Type:</label>
                <select id="printType" onChange={e=>this.changeSelection(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </form>
        </>
        )
    }
}

export default PrintType