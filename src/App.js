import React, { Component } from 'react';
import Nav from "./composition/Nav"
import Search from "./composition/Search"
import Book from './composition/Book';
import Filter from './composition/Filter';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      books:[],
      searchTerm:null,
      printType:"all",
      bookType:"none"
    }
  }

  setSearchTerm=(term)=>{
    this.setState({
      searchTerm:term
    })
  }

  setBooks=(array)=>{
    this.setState({
      books:array
    })
  }

  setBookType=(value)=>{
    this.setState({
      bookType:value
    },()=>{this.handleSubmit()})
    
  }

  setPrintType=(value)=>{
    this.setState({
      printType:value
    },()=>{this.handleSubmit()})
  }

  handleSubmit=(e)=>{
    if(e){
      e.preventDefault();
    }
    console.log('hello')
    const searchTerm = this.state.searchTerm
    const printType = this.state.printType
    function checkFilter(param){
        if(param !== "none"){
            const bookType = param
            return `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${printType}&filter=${bookType}&key=AIzaSyAiN-wCSob0p-pmgqXIXfCUMw-t8l2xr0w`
        }
        else{
            return `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${printType}&key=AIzaSyAiN-wCSob0p-pmgqXIXfCUMw-t8l2xr0w`
        }
    }

    const url = checkFilter(this.state.bookType)
    console.log(url)
    
    fetch(url)
    .then(response=>response.json())
    .then(responseJson=>{
        const books = responseJson.items
        this.setBooks(books)
    }) 
}

  render(){
    return (
        <main className='App'>
          <Nav/>
          <Search 
            state={this.state}
            changeHandler={(term)=>this.setSearchTerm(term)}
            handleSubmit={(array)=>this.handleSubmit(array)}
            />
          <Filter
            state={this.state}
            handleBookType={(value)=>this.setBookType(value)}
            handlePrintType={(value)=>this.setPrintType(value)}/>
          <Book books={this.state.books}/>
        </main>
      );
  }
}

export default App;