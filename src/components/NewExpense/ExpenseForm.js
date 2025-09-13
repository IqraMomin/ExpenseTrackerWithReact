import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props)=>{
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");
    const [enteredLocation,setEnteredLocation] = useState("");

    const locationClickHandler = (event)=>{
        setEnteredLocation(event.target.value);
    }

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
            "title":enteredTitle,"amount":enteredAmount,"date":new Date(enteredDate),location:enteredLocation
        }
        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredLocation("");
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={enteredAmount} onChange={amountClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={enteredDate} min="2023-01-01" max="2024-12-31" id="date" onChange={dateClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="location">Location</label>
                    <input type="text" value={enteredLocation} id="location" onChange={locationClickHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenseForm;