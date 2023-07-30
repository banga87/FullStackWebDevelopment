import { useState } from 'react';
import AdvancedCountry from './AdvancedCountry';
import '../styles/Country.css'

const BasicCountry = ({ country }) => {

    const [showAdvanced, setShowAdvanced] = useState(false);

    if (showAdvanced) {
        return (
            <>
                <AdvancedCountry country={ country } />
                <button onClick={()=> setShowAdvanced(!showAdvanced)}>hide</button>
            </>
        )
    }

    return (
        <div className="basic">
                <p>{country.name.common}</p> <button onClick={()=> setShowAdvanced(!showAdvanced)}>show</button>
            </div>
    )
}

export default BasicCountry;