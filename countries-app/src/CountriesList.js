import React from 'react';
import CountryElement from './CountryElement';
import "bootstrap/dist/css/bootstrap.css";

export default function CountriesList (props) {
    return (
        <div>
            <h1>Countries</h1>
            <table className='table table-dark table-striped table-hover'>
                <tbody>
                    {
                        props.countries.map((country, i) => 
                            <CountryElement country={country} index={i} />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}