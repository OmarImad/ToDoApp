import { useEffect, useState } from 'react'
import Button from '../../Component/Button/Button'
import ListItem from '../../Component/ListItem/ListItem'
import './Styles.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'


function HomeScreen() {
const [state, setState] = useState({})

const [value, setValue] = useState('')
const [list, setList] = useState([])
const [error, setError] = useState('')



    /* fetch data from Api */
    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log();

            setList(response.data.splice(0,20))
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    /* another way to fetch data */
    /* async componentDidMount(){
         try{
             const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
             console.log(response)
             this.setState({
                 list: response.data
             })
         }catch(e){
             console.log(e)
         }
     }*/

    return (
        <div className="inner-conteiner">
            <h1 className="page-title">
                To Do List
                </h1>

            <section className="input-section">
                <div className="input-box">
                    <input
                        className="add-task-input"
                        type="text"
                        placeholder="Enter a New Task..."

                        //Control input
                        onChange={(event) => 
                            {setValue(event.target.value)}
                        }
                        value={value}
                    />
                    {error?
                        <span>
                            {error}
                        </span>
                        : null
                    }
                </div>

                <Button
                    text="Add"
                    handleClick={() => {
                        if (value) {
                            const newArr = [
                                {
                                    title: value,
                                    id: uuidv4()
                                },
                                ...list
                            ];

                            setValue('')
                            setError('')
                            setList(newArr)

                        }else {
                            setError("please submit a task")
                        
                        }
                    }}
                >
                </Button>

            </section>

            <section className="items-section">
                {list?.length?(
                    list.map((item => (
                        <ListItem
                            task={item.title}
                            key={item.id}

                            handleDelete={() => {
                                const filterdItems = list.filter(
                                    (filterItem) => filterItem.id != item.id
                                );
                                    setList(filterdItems)
                            }}
                        />
                    ))
                    )) : (
                    <span>loading...</span>
                )}
            </section>

        </div>
    )

}

export default HomeScreen