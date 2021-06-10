import Button from '../Button/Button'
import './Styles.css'

function ListItem(props){
        return (
            <div className="list-item">
                <span className="task-title">
                    {props.task}
                </span>

                <Button text="delete"
                 isPurble={true} handleClick={props.handleDelete}
                >       
                </Button>
            </div>
        )
    
}

export default ListItem