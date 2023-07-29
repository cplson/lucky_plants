import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { CartItem } from '@prisma/client'

export interface CartState{
    cart: CartItem[]
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.cart = action.payload;
        }
    }
})

export const {setCart} = cartSlice.actions
export default cartSlice.reducer;