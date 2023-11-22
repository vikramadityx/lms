import React from 'react'

const InventoryIcon = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.419 14.7321C20.419 18.3101 18.31 20.4191 14.732 20.4191H6.95C3.363 20.4191 1.25 18.3101 1.25 14.7321V6.9321C1.25 3.3591 2.564 1.2501 6.143 1.2501H8.143C8.861 1.2511 9.537 1.5881 9.967 2.1631L10.88 3.3771C11.312 3.9511 11.988 4.2891 12.706 4.2901H15.536C19.123 4.2901 20.447 6.1161 20.447 9.7671L20.419 14.7321Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.48145 13.463H15.2164" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default InventoryIcon