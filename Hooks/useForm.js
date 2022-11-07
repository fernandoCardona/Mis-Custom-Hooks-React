import { useState } from "react";

 

export const useForm = (inicialState = {}) => {
   const [values, setValues] = useState(inicialState);

    const reset = (state) => {
        setValues( inicialState );
    };

   const handleInputChange = ( {target} ) => {
         
        setValues({ 
            ...values,
            [target.name]: target.value,
            [target.email]: target.value,
            [target.password]: target.value

        })
    }
    return [ values, handleInputChange, reset ];

}


 
