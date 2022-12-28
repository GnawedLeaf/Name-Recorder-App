import styles from "./FormInput.module.css"

import Button from "./UI/Button"
import { useState } from "react"
import Card from "./Card"


const FormInput = (props) => {
    const [usernameInput, setUsernameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidAge, setIsValidAge] = useState(true)




    //I save the username that was added 
    const usernameListener = (event) => {
        if (event.target.value.trim().length === 0) setIsValidUsername(false);
        else setIsValidUsername(true)
        setUsernameInput(event.target.value)
    }

    const ageListener = (event) => {
        if (event.target.value.trim().length === 0) setIsValidAge(false);
        else setIsValidAge(true)
        setAgeInput(event.target.value)
    }

    const submitClickedHandler = (event) => {
        //Prevents refreshing of the page
        event.preventDefault();

        if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
            return;
        }

        //creating a new object to be sent 
        const newPersonToBeAdded = {
            name: usernameInput,
            age: ageInput
        }

        props.onAddingNewPerson(newPersonToBeAdded);




        //Set the input fields to nothing
        setUsernameInput('')
        setAgeInput('')

    }


    return (
        <form onSubmit={submitClickedHandler}>
            <Card>
                <div className={`${styles['form-control']} ${!isValidUsername && styles.invalid}`}>
                    <label >Username</label>
                    <input onChange={usernameListener} type="text" value={usernameInput}></input>
                </div>
                <div className={`${styles['form-control']} ${!isValidAge && styles.invalid}`}>
                    <label>Age (Years)</label>
                    <input onChange={ageListener} type="number" value={ageInput}></input>
                </div>
                <Button type={'submit'} value={"Add User"} ></Button>
            </Card>
        </form>
    )
}


export default FormInput