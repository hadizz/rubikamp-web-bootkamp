import {useState } from 'react';
import Text from '../components/Text';
import Search from './Search';
import Address from './Address';
import {cities} from '../constants/address'
import styles from './Header.module.css';

const Header = () => {
    const [city, setCity] = useState(cities[0].id);
    return (
        <header className={styles.root}>
             <label htmlFor="cities">شهر خود را انتخاب کنید:</label>
             <select id="cities" onChange={e => setCity(e.target.value)}>
                {cities.map(city => {
                    return <option key={city.id} value={city.id}>{city.label}</option>
                })}
             </select>
            <Search placeholder={<div>جستجو در <Text color='red'>دیجی کالا</Text></div>} />
            <Address city={city} />
        </header>
    )
}

export default Header;