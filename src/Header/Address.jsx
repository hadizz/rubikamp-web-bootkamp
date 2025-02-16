import { useEffect } from 'react';
import Button from '../components/Button';
import { cities } from '../constants/address';

const Address = (props) => {
    const cityObject = cities.find(city => city.id === props.city)

    useEffect(() => {
        console.log('cityObject')
    }, [])

    return (
        <Button color='green'>
            <img />
            <span>ارسال به {cityObject.label}</span>
            <img />
        </Button>
    )
}

export default Address;