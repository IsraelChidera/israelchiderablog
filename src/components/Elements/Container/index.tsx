import React from 'react';

type ContainerProps = {
    children: React.ReactNode,
    className?: string,    
}

const index = ({children, className, ...rest} : ContainerProps) => {
  return (
    <div className={`${className} mx-auto xl:w-5/6 w-full px-3 xl:px-0`} {...rest}>
        {children}
    </div>
  )
}

export default index