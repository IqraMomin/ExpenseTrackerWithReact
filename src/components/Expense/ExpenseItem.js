import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props){
    const [title,setTitle] = useState(props.title);
    function buttonClickHandler(event){
        setTitle("New Title");
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <h2>Location</h2>
                <div className='expense-item__location'>{props.location}</div>
                <button onClick={buttonClickHandler}>Change Title</button>
            </div>
        </Card>
    )
}


export default ExpenseItem;