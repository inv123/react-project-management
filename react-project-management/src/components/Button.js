import React from 'react'

export const Button = ({type, content}) => {
  let classnames = 'px-4 py-2 rounded ';
  type === 'primary' ? classnames += ' text-white bg-black' : type === 'secondary' ? classnames += ' text-black bg-white' : classnames += ' bg-slate-600 text-slate-200'
  return (
    <>
        <button className={classnames}>{content}</button>
    </>
  )
}
