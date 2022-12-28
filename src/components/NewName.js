
import Card from "./Card";
import Button from "./UI/Button";
import shit from "./NewName.module.css";
import DeleteButton from "./UI/DeleteButton";

const NewName = (props) => {

    return (
        <Card>
            <div className={shit.nameDisplay}>{props.name} ({props.age} years old)  </div>
            <DeleteButton onDelete={props.onDelete} id={props.id} value={"Delete"} style="background-color: red"></DeleteButton>
        </Card>
    )
}

export default NewName;