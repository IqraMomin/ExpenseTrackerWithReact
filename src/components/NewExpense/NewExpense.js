import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{
    const [isEditing,setIsEditing] = useState(false);
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{
       const newExpenseData = {...enteredExpenseData,id:Math.random().toString()};
       props.onAddExpense(newExpenseData);
       setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={()=>{
                setIsEditing(true)
            }}>Add Expense</button>}
            {isEditing && <ExpenseForm onCancel={()=>{
                setIsEditing(false)
            }} onSaveExpenseData={saveExpenseDataHandler}/>}
            
        </div>
        
    )
}
export default NewExpense;