import React, { FC, ReactNode } from 'react'
import { Button } from '../ui/button'
import { Nunito_Sans } from "next/font/google";
const btnFont = Nunito_Sans({
  subsets:["latin"],
  weight:['300', '400', '500', '600', '700']
})
interface BtnProps{
    children: ReactNode
    className?: string
    type?:"button" | "submit" | "reset"
    variant?:  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null
}

const CustomButton: FC<BtnProps> = ({ children, className, type = 'button', variant }) => {
  return (
    <Button className={`${className} ${btnFont.className} rounded-4xl font-semibold h-auto`} type={type} variant={variant}>{children}</Button>
  )
}

export default CustomButton