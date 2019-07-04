import React, { useState } from 'react';

import './actor-form.css';

function ActorForm ({ addActor }) {

    const initState = {
        name: "",
        id: null
    };
    
    const [val, setVal] = useState(initState);

    const handleInputChange = e => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setVal({...val, [name]:value})

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (e.keyCode === 13) {
            addActor(val);
            setVal(initState);
        }
    }

    function handleEnter(e) {
        // e.preventDefault();
        if (e.keyCode == 13) {
            addActor(val);
            setVal(initState);
        }
      }

    return (
        <form onSubmit = {handleSubmit} className='col-4'>
            <label htmlFor="actor">Actor: </label>
            <input type="text" name="name"
                className='ml-3 col-10'
                value={val.name}
                onKeyDown={handleEnter}
                onChange={handleInputChange} />
            {/* <button>Add</button> */}
        </form> 
    )
}

export default ActorForm;


// function TodoForm ({addTodo}) {

//     // const initFormState = {
//     //     id: null,
//     //     head: "",
//     //     text: "",
//     //     isCompleted: false
//     // }

//     // const [val, setVal] = useState (initFormState);

    

//     // const handleInputChange = e => {
//     //     console.log(e.target.value);
//     //     const {name, value} = e.target;
//     //     setVal({...val, [name]:value })

//     // }
//     // const handleSubmit = e => {
//     //     e.preventDefault();
//     //     if (!val.head || !val.text) return;
//     //     if (e.keyCode === 13) {
//     //         addTodo(val);
//     //         setVal(initFormState);
//     //     }
        
//     // }

//     function handleEnter(e) {
//         // e.preventDefault();
//         if (!val.head || !val.text) return;
//         if (e.keyCode == 13) {
//             addTodo(val);
//             setVal(initFormState);
//         }
//       }
    
//     return (
//         <form onSubmit = {handleSubmit}>
//             <label htmlFor="head">Head:</label>
//             <input type="text" name="head" value={val.head} onKeyDown={handleEnter} onChange={handleInputChange} />
//             <label htmlFor="text">Task:</label>
//             <input type="text" name="text" value={val.text} onKeyDown={handleEnter} onChange={handleInputChange} />
//             {/* <button>Add</button> */}
//         </form> 
//     )

// }