import React from 'react';
import Book_Data from "./BookData";
import ToBook from '../../components/ToBook/ToBook';
import "./ShopPage.css";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            toBook: Book_Data

        }

    }
    render(){
        const {toBook} = this.state;
        return(<div className='shop-page'>
                {toBook.map(({id, ...otherToBookProps}) => (
                        <ToBook key = {id} {...otherToBookProps}/>
                ))}
            
        </div>);

    }

}
export default ShopPage;