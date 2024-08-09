import React, { FC, ReactNode } from 'react'
import { Button } from '../ui/button'
interface BtnProps{
    children: ReactNode
    className?: string
    type?:"button" | "submit" | "reset"
    variant?:  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null
}

const CustomButton: FC<BtnProps> = ({ children, className, type = 'button', variant }) => {
  return (
    <Button className={`${className} rounded-4xl`} type={type} variant={variant}>{children}</Button>
  )
}

export default CustomButton