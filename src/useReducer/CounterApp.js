import React, { useReducer } from 'react';
import '../index.css';
// USE REDUCER
/* EL PRIMER PARAMETRO DEL USE REDUCER ES UNA FUNCION PURA QUE RECIBE 2 PARAMETROS EL PRIMERO ES EL ESTADO,
OSEA ES ESTADO DEL useReducer y el segundo es la accion que se va a realizar cuando hagamos algo,
el segundo argumente del useReducer es lo que contendra el estado
*/

export const CounterApp = () => {

    const types = {
        increment: 'increment',
        decrement: 'decrement',
        reset:     'reset'
    }

    const reducer = (state, action) => {
        switch(action.type){
            case types.increment:
                return state + 1;

            case types.decrement:
                return state -1;

            case types.reset:
                return 0

                default:
                    return state
        }     
    }
    const [ counter, dispatch ] = useReducer(reducer, 1);
    return (
        <>
        <h1>Clicks: {counter}</h1>
        <hr/>
        <button className="boton" onClick={() => dispatch({ type: types.increment })}>
            Increment
        </button>
        <button className="boton" onClick={() => dispatch({ type: types.decrement })}>
            Decrement
        </button>
        <button className="boton" onClick={() => dispatch({ type: types.reset })}>
            Reset
        </button>
        </>
    );
}

