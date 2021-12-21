import React, {useState} from 'react';
import './CountryElement.css';
import ModalR from './ModalR';

const countryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

export default function CountryElement (props) {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    async function getCountryData() {
        var country = props.country.name.common;
        var data = await fetch(countryUrl + country).then(res => {
            return res.json();
          }
        );
        return data;
    };

    async function showInfoAlert(){
        var countryData = await getCountryData();
        var info = countryData.extract_html;
        bootbox.alert(info, function() {
            
        });
    };

    return (
        <tr key={props.index} onClick={() => showInfoAlert()}>
            <td>{props.country.name.official}</td>
            <td>{props.country.capital}</td>
            <td>{props.country.region}</td>
            <td>
                <a href='#' onClick={onOpenModal}>View languages</a>
            </td>
            <td>{props.country.population}</td>
            <td className='cell-center'>
                <img src={props.country.flags.png} className='flag' />
            </td>
            <td>
                <ModalR languages={props.country.languages} open={open} onOpen={onOpenModal} onClose={onCloseModal} />
            </td>
        </tr>
    );
}
