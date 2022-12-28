
import './App.css';
import { useState } from 'react';
import FormInput from './components/FormInput';
import NameList from './components/NameList';


function App() {

  //Array of questions stored
  const [questions, setQuestions] = useState([
    { value: 'Username', id: 1 },
    { value: "Age (Years)", id: 2 }
  ])

  //Array of people stored 
  const [peopleArray, setPeople] = useState([
    { name: "Max", age: "31", id: Math.round((Math.random() * 1000000.)).toString() },
    { name: "Lewis", age: "51", id: Math.round((Math.random() * 1000000.)).toString() }
  ])


  //Updating the array to be sent down 
  const newPersonHandler = (person) => {

    setPeople(prevPeople => {
      const updatedPeople = [...prevPeople]
      updatedPeople.unshift({ name: person.name, age: person.age, id: Math.round((Math.random() * 1000000.)).toString() })
      return updatedPeople
    })

  }

  //Returns an array without the object with the id to be deleted
  const deleteHandler = (deletedId) => {

    console.log('Id of deleted: ' + deletedId)
    setPeople(person => {
      const updatedPeople = person.filter(smth => smth.id !== deletedId);
      return updatedPeople;
    })
  }


  return (
    <div>
      <div className='title'>Name Recorder App</div>
      <FormInput onAddingNewPerson={newPersonHandler} questionsInput={questions}></FormInput>
      <NameList onDelete={deleteHandler} peopleList={peopleArray}></NameList>
      <div className="footer">Made with React</div>
    </div>
  );

}





export default App;
