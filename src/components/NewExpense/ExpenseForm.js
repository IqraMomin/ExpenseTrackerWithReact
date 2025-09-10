import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ()=>{
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    const titleClickHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountClickHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateClickHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    function formSubmitHandler(event){
        event.preventDefault();
        const ExpenseData = {
            "title":enteredTitle,"amount":enteredAmount,"date":new Date(enteredDate)
        }
        console.log(ExpenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
    return (
        <form onSubmit={formSubmitHandler}>
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