import React, {useState} from 'react'
import PropTypes from 'prop-types';

//Este componente se va a encargar de escribir la informacion en el input y enviarlo al  componente padre
export const AddCategory = ({setCategories}) => {

    const[inputValue, setInputValue]= useState("");
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >2){
            
        //Con esta condicion evitamos que se envie un vacio al momento de dar enter en el input
        //trim es para eliminar espacios vacios
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        // Dejamos vacio el setInputValue luego del Submit
        }    
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input
                type= "text"
                value= {inputValue}
                onChange = {handleInputChange}
            />
        </form>
       
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
