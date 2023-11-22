import React from 'react'

const Graph = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3986 10.5743C13.9609 10.5743 14.4328 11.0384 14.3468 11.5936C13.8424 14.8603 11.0459 17.2857 7.67313 17.2857C3.94155 17.2857 0.916992 14.2612 0.916992 10.5305C0.916992 7.45677 3.25208 4.59362 5.88103 3.94625C6.44594 3.80677 7.02489 4.20414 7.02489 4.78572C7.02489 8.72607 7.15734 9.74537 7.90559 10.2998C8.65383 10.8541 9.53366 10.5743 13.3986 10.5743Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0778 7.293C17.1225 4.76142 14.0128 0.680718 10.2234 0.750893C9.92864 0.756156 9.69267 1.00177 9.67952 1.29563C9.5839 3.37721 9.71285 6.07458 9.78478 7.29738C9.80671 7.67809 10.1058 7.97721 10.4857 7.99914C11.7427 8.07107 14.5383 8.16931 16.59 7.85879C16.869 7.81668 17.0734 7.57458 17.0778 7.293Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Graph