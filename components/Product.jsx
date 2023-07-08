import { Product as ProductType } from '@/lib/types'

export default function Product({product}){
    return (
        <>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </>
    )
}