import { Component } from 'react'
import Button from '../../Component/Button/Button'
import ListItem from '../../Component/ListItem/ListItem'
import './Styles.css'
import {data} from '../../data'

class HomeScreen extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="inner-conteiner">
                <h1 className="page-title">
                    To Do List
                </h1>

                <section className="input-section">
                    <input
                        className="add-task-input"
                        type="text"
                        placeholder="Enter a New Task"
                    />

                    <Button
                        text="Add"
                        handelClick={() => { }}
                    >
                    </Button>
                </section>

                <section className="items-section">{
                    data.map(item=><ListItem task={item.text}/>)
                }
                </section>

            </div>
        )
    }
}

export default HomeScreen