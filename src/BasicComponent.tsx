import React, { FC, HTMLAttributes } from 'react'

export interface BasicComponentProps extends HTMLAttributes<HTMLDivElement> {
  name: string
}

const BasicComponent: FC<BasicComponentProps> = (props) => {
  const { name, ...other } = props;

  return <div className="text-red-500" {...other}>
    This is a basic component, { name }
  </div>
}

export default BasicComponent
