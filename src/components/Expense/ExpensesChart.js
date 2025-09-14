import React from 'react';
import "./ExpensesChart.css";
import Chart from "../Chart/Chart.js";

function ExpensesChart(props) {
return (
        <div>
           <Chart chartExpenses={props.filteredExpensesForChart}/> 
        </div>
    )
}

export default ExpensesChart;
