import { Component } from 'react'
import Button from '../Button/Button'
import './Styles.css'

class ListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="list-item">
                <span className="task-title">
                    {this.props.task}
                </span>

                <Button text="delete" isPurble={true}></Button>

            </div>
        )
    }
}

export default ListItem