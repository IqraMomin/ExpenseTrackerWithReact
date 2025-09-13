import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2023");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredByYear = props.expenses.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear)
    })
    let expenseContent = <h3 style={{color:"gray"}}>No expenses found</h3>
    const filteredContent = filteredByYear.map((expense, index) => {
        return (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
                location={expense.location}
            />
        )
    });
    if (filteredByYear.length === 1) {
        expenseContent = <div>
            {filteredContent}
            <h3 style={{color:"gray"}}>Only one expense found. Please add more</h3>
        </div>
    } else if (filteredByYear > 1) {
        expenseContent = filteredContent;
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear} />
                {expenseContent}
            </Card>
        </div>
    )
}

export default Expenses;