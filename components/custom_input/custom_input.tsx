import React, { FC, ReactNode } from 'react'
import { Input } from '../ui/input'
import { Icon, LucideIcon } from 'lucide-react'
interface InputProps{
    Icon:LucideIcon
    placeholder?: string
    type?:string
    size:number
    className: string
}

const CustomInput:FC<InputProps> = ({Icon, placeholder, type, size, className}) => {
  return (
    <div className='relative'>
      <div className='absolute'><Icon size={size}/></div>
        <Input type={type} placeholder={placeholder} className={`${className}`}/>
    </div>
  )
}

export default CustomInput