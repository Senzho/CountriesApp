import React, {useState} from 'react';

export default function FilterForm (props) {
    const options = [
        {label: 'all', value: 'all'}, 
        {label: 'name', value: 'name'}, 
        {label: 'capital', value: 'capital'}, 
        {label: 'region', value: 'region'}, 
        {label: 'population', value: 'population'}
    ]
    const [column, setColumn] = useState(options[0])
    const [keyword, setKeyword] = useState("")
    const handleChange = (e) =>{
        setColumn(e.target.value)
    }
    const handleInputChange = (e) => {
        setKeyword(e.target.value);
        if (keyword.length >= 3) {
            props.search(column, keyword);
        }
    }
    return (
        <div>
            <select id="columnSelector" onChange={handleChange}>
                {
                    options.map((option, i) => 
                        {
                            if (i === 0){
                                <option key={i} selected value={option.value}>{option.label}</option>
                            }else{
                                <option key={i} value={option.value}>{option.label}</option>
                            }
                        }
                    )
                }
            </select>
            <input type="text" id="searchBox" placeholder="Enter keyword" onChange={handleInputChange}/>
        </div>
    );
}