import React, { useState } from 'react';
import ActorsList from '../actors-list/actors-list';
import ActorForm from '../actor-form/actor-form';

import './actors-page.css';

function ActorsPage() {

    const [items, setItems] = useState({
        items: [],
        loading: true
    });

    const addActor = value => {
        console.log(value);
        value.id = items.items.length + 1;
        setItems ({
            items: [...items.items, value],
            loading: false
        });
        console.log(items.items);
    }

    const fetchItems = async () => {
        const data = await fetch('https://swapi.co/api/people/');
        
        const items = await data.json();

        const arr = [];
        items.results.map((v,i)=> (
            arr[i] = {
                name: v.name,
                id: i
            }
        ));

        setItems({
            items: arr,
            loading: false
        });
    };

    const onDeleted = (e) => {
        const index =items.items.findIndex((el) => el.id === e);
        const newArr = [
            ...items.items.slice(0, index),
            ...items.items.slice(index +1 )
        ];
        console.log(newArr);
        setItems({
            items: newArr,
            loading: false
        });
    };



    return (
        <div className='actors-page'>
            <h3>Actors page</h3>
            <div className='actor-content'>
                <ActorForm addActor={addActor}  />
                <ActorsList fetchItems={fetchItems} items={items} setItems={setItems} onDeleted={onDeleted} />
            </div>
        </div>
    );
};

export default ActorsPage;