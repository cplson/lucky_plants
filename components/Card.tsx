import clsx from "clsx";
import { CardProps } from "@/lib/types";
import {FC} from 'react'

const Card: FC<CardProps> = ({className, children}) => {
    return(
        <div className={clsx(
            "rounded-xl px-10 py-4 my-8 drom-shadow-xl bg-white",
            className
        )}>
            {children}
        </div>
    )
}

export default Card;