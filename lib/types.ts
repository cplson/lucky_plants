import { ReactNode, InputHTMLAttributes } from "react"

export type Link = {
    path: string
    text: string
}

export type LinkProps = {
    link: Link
}

export type CardProps = {
    className?: string
    children: ReactNode
}

// -InputHTMLAttributes is used to access type definitions for HTML
//  input attributes from React
// -InputProps type extends HTMLInputElement type from React
//  allowing us to use any valid input element attribute
// -className ensures we can optionaly apply tailwind classes to the input
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string
}