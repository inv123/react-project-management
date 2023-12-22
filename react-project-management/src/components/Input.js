import React from 'react';
import { forwardRef } from 'react';

export const Input = forwardRef(function Input(props, ref){
    return (
        <>
            <label className="block mb-2 uppercase">{props.label}</label>
               {props.input ==='input' &&  <input className="block bg-gray-100 h-10 border-b-2 border-gray-300 border-solid w-full focus:border-gray-500 px-4 focus-visible:outline-none mb-8 py-2"  type={props.type === 'text' ? 'text' : 'date'} ref={ref} />}
    
               {props.input === 'textarea' && <textarea className="block bg-gray-100 h-24 border-b-2 border-gray-300 border-solid w-full focus:border-gray-500 pl-4 focus-visible:outline-none mb-8 py-2" ref={ref} />}
        </>
    ) 
})

