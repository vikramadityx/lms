import React from 'react'

const Customers = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59102 13.2068C11.28 13.2068 14.433 13.7658 14.433 15.9988C14.433 18.2318 11.301 18.8068 7.59102 18.8068C3.90102 18.8068 0.749023 18.2528 0.749023 16.0188C0.749023 13.7848 3.88002 13.2068 7.59102 13.2068Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59108 10.0198C5.16908 10.0198 3.20508 8.0568 3.20508 5.6348C3.20508 3.2128 5.16908 1.2498 7.59108 1.2498C10.0121 1.2498 11.9761 3.2128 11.9761 5.6348C11.9851 8.0478 10.0351 10.0108 7.62208 10.0198H7.59108Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.4824 8.8816C16.0834 8.6566 17.3164 7.2826 17.3194 5.6196C17.3194 3.9806 16.1244 2.6206 14.5574 2.3636" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5947 12.7322C18.1457 12.9632 19.2287 13.5072 19.2287 14.6272C19.2287 15.3982 18.7187 15.8982 17.8947 16.2112" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Customers