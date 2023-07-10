import { InputProps } from "@/lib/types";
import { FC } from "react";
import Input from "./Input";
import Button from "./Button";


const QuantityButtonGroup: FC<InputProps> = ({...props}) => {

    return(
        <div className="flex">
            <Button intent='secondary' className="rounded-l-xl border-l-2 px-4">-</Button>
            <Input className="border-y-black border-x-0 text-center"/>
            <Button intent='secondary' className="rounded-r-xl border-r-2 px-4">+</Button>
        </div>
    )
}

export default QuantityButtonGroup;