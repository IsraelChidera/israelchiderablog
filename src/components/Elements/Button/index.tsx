import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    className: string,
    onClick?: any,
}

const index = ({children,className, onClick, ...rest}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} bg-dark text-sm px-8 py-3 text-white font-semibold`} {...rest}>
      {children}
    </button>
  )
}

export default index