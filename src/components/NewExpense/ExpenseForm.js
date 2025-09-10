import React, { useState } from "react";
import "./ExpenseForm.css";
const userDetails={
    enteredTilte :"",enteredAmount:"",enteredDate:""
}
const ExpenseForm = ()=>{
    const [userInput,setUserInput] = useState(userDetails);

    const titleClickHandler = (event)=>{
        setUserInput((prevState)=>{
            return{
                ...prevState,enteredTilte:event.target.value
            }
        })
    }
    const amountClickHandler = (event)=>{
        setUserInput((prevState)=>{
            return{
                ...prevState,enteredAmount:event.target.value
            }
        })
    }
    const dateClickHandler = (event)=>{
        setUserInput((prevState)=>{
            return{
                ...prevState,enteredDate:event.target.value
            }
        })
    }
    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={amountClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" min="2023-01-01" max="2024-12-31" id="date" onChange={dateClickHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenseForm;