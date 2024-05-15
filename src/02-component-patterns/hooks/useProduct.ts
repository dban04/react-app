import { useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces'

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0}: useProductArgs) => {
    const [counter, SetCounter] = useState( value );

    const isControlled = useRef<boolean>( !!onChange );

    const increaseBy = (value: number) => {

        if( isControlled.current  ) {
            return onChange!({ count: value, product })
        }
        const newValue = Math.max(counter + value, 0)
        SetCounter(newValue)
        onChange && onChange({ count: newValue, product});
    }

    useEffect(() => {
        SetCounter(value)
    },[ value ])

    return {
        counter,
        increaseBy
    }
}