import { Component } from 'react'
import Button from '../../Component/Button/Button'
import ListItem from '../../Component/ListItem/ListItem'
import './Styles.css'
import {data} from '../../data'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class HomeScreen extends Component {
    state={
    value:'',
    list: []
    }

   /* fetch data from Api */  

    componentDidMount(){
       const fetchData = async ()=>{
           try{
               const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
               console.log(response);

               this.setState({
                   list: response.data
               });
           }catch (e){
               console.log(e)
           }
       };
       fetchData();
   }

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


    render() {
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
                        onChange= {(event)=>{
                            this.setState({
                                value:event.target.value
                            })
                         }} 
                         value={this.state.value}
                    />
                    {this.state.error ? 
                    <span>
                        {this.state.error}
                    </span>
                    :null
                    }

                    </div>

                    <Button
                        text="Add"
                        handleClick={()=>{
                        if(this.state.value){
                            const newArr=[

                                {
                                    title:this.state.value,
                                    id: uuidv4()
                                },
                                ...this.state.list
                            ];

                            this.setState({
                                list:newArr,
                                value:"",
                                error:''
                            })
                        }else{
                                this.setState({
                                    error: "please submit a task"
                                })
                            }
                        }}
                    >
                    </Button>
                    
                </section>

                <section className="items-section">
                    {this.state.list.length ? (
                    this.state.list.map((item=>(
                    <ListItem
                         task={item.title}
                         key= {item.id}

                         handleDelete = {() =>{
                         const filterdItems = this.state.list.filter(
                            (filterItem) => filterItem.id != item.id
                            );

                            this.setState({
                                list: filterdItems
                            });
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
}

export default HomeScreen