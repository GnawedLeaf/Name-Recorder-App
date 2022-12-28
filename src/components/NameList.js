import NewName from "./NewName";

const NameList = (props) => {


    return (
        <div>
            {props.peopleList.map(person => <NewName onDelete={props.onDelete} name={person.name} age={person.age} id={person.id} />)}
        </div>

    )
}

export default NameList;