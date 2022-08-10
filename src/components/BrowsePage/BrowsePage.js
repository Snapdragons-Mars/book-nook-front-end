import { useState, useEffect } from 'react';

const BrowsePage = () => {
    const [userCity, setUserCity] = useState("");
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
      setUserCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit)     
    }

    const options = {
        mode: "no-cors",
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: process.env.REACT_APP_FOUR_SQUARE_KEY
        }
      };
      
    useEffect(() => {
        fetch(`https://api.foursquare.com/v3/places/search?client_id=UGHJ1SJQF1JL1UXHRPAYEQ1BLN23O2PRXOUTSTKBW3SZ2NXS&client_secret=CZA52NKL1F2ZQP2C2RZQ4XEV34M4ZJDUMXEUB5WGILV4QWZI&query=boba&near=houston`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <form type="submit" onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Please Enter Your City"
                    onChange={handleChange}
                    value={userCity}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BrowsePage;