import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner';

import './actors-list.css';


function ActorsList( { fetchItems, items, setItems, onDeleted }) {
    
    useEffect(() => {
        fetchItems();
    }, []);
 
    const spinner = items.loading ? <Spinner /> : null;

    return (
        <ul className='list-group col-4'>
            {spinner}
            {items.items.map(item => (
                <li className='list-group-item actors-item'
                    key={item.id} >
                    {item.name}
                    <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick = {() => onDeleted(item.id)}>
                    <i className="fa fa-trash-o" />
                </button>
                </li>
                

            ))}
        </ul>
    );
}

export default ActorsList;








// export default class ItemList extends Component {

//     swapiService = new SwapiService();
    
//     state = {
//         peopleList: null 
//     }

//     componentDidMount() {
//         this.swapiService
//             .getAllPeople()
//             .then((peopleList)=> {
//                 this.setState({
//                     peopleList
//                 });
//             });

//     }

//     renderItems (arr) {
//         return arr.map(({ id, name }) => {
//             return (
//                 <li className = "list-group-item"
//                   key={id}
//                   onClick = {() => this.props.onItemSelected(id)}>
//                     {name}
//                 </li>
//             );
//         });
//     }

//     render() {

//         const { peopleList } = this.state;

//         if (!peopleList) {
//             return (
//                 <Spinner />
//             )
//         }

//         const items = this.renderItems(peopleList);

//         return (
//             <ul className="item-list list-group">
//                 {items}
//             </ul>
//         );
//     }
// }