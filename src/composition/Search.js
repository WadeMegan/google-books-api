import React, {Component} from 'react';
import './Search.css'

class Search extends Component {

    searchTermChanged(searchTerm){
        this.props.changeHandler(searchTerm)
        //console.log(this.props.state.searchTerm)
    }

    
    
    render(){
        return(<>
            <form className="searchForm" onSubmit={e=>this.props.handleSubmit(e)}>
                <label htmlFor="keywordSearch">Search:</label>
                <input 
                    type="text" 
                    id="keywordSearch" 
                    placeholder="henry"
                    onChange={e=>this.searchTermChanged(e.target.value)}></input>
                <input className="searchButton" type="submit" value="Search"></input>
            </form>
        </>
        )
    }
}

export default Search