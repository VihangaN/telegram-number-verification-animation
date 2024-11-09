import {useState} from 'react'
import './App.scss'
import Phone from "./Components/Phone.jsx";

function App() {
    const [number, setNumber] = useState();
    const [lastDigit, setLastDigit] = useState(0);

    const handleNumberChange = ({target}) => {
        const value = target.value;
        const formattedValue = value.replace(/[^0-9-]/g, '');
        // setNumber((prevValue) => formattedValue)
        // setLastDigit(prevState => formattedValue.slice(-1))


        setNumber(formattedValue);
    }

    console.log(number);
    return (
        <div className="main-wrapper">
            <Phone number={number} />
            <div className="mobile-number-input">
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="07X-XXXXXXX"
                    value={number}
                    onInput={handleNumberChange}
                    required
                    maxLength={10}
                    onKeyDown={(e) => console.log("down")}

                />
            </div>

        </div>
    )
}

export default App
