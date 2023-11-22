import React from 'react'

const Orders = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5134 20.5H6.16555C3.09919 20.5 0.746786 19.3925 1.41498 14.9348L2.19301 8.8936C2.60491 6.66934 4.02367 5.81808 5.26852 5.81808H15.447C16.7102 5.81808 18.0466 6.73342 18.5225 8.8936L19.3006 14.9348C19.8681 18.889 17.5797 20.5 14.5134 20.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.6502 5.5984C14.6502 3.21233 12.716 1.27804 10.3299 1.27804V1.27804C9.18088 1.27317 8.07727 1.7262 7.26308 2.53695C6.44889 3.34771 5.9912 4.44939 5.99121 5.5984H5.99121" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.296 10.1018H13.2502" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.46492 10.1018H7.41916" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Orders