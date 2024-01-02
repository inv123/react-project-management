import React from 'react'

export const Button = ({type, content, clickHandler}) => {
  let classnames = 'px-4 py-2 rounded transition duration-150 ease-linear ';
  type === 'primary' ? classnames += ' text-white bg-black' : type === 'secondary' ? classnames += ' text-black bg-white' : type === 'green' ? classnames +='bg-green-400  hover:bg-green-200' : type === 'red' ? classnames += 'bg-red-400 text-white hover:bg-red-600' :  classnames += ' bg-slate-600 text-slate-200';
  return (
    <>
        <button className={classnames} onClick={clickHandler}>{content}</button>
    </>
  )
}
