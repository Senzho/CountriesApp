import React from 'react';
import './CountryElement.css';

export default function CountryElement (props) {
    return (
        <tr key={props.index}>
            <td>{props.country.name.official}</td>
            <td>{props.country.capital}</td>
            <td>{props.country.region}</td>
            <td>{props.country.language}</td>
            <td>{props.country.population}</td>
            <td className='cell-center'>
                <img src={props.country.flags.png} className='flag' />
            </td>
        </tr>
        
    );
}
