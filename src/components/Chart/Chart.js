import React from 'react';
import ChartBar from './ChartBar';
import "./Chart.css";

function Chart(props) {

    const expensesOnlyArray = props.chartExpenses.map(monthData=>{
        return monthData.amount;
    });

    const maxValue = Math.max(...expensesOnlyArray);
    

    const arrayForChart = [
        { "expensesMonth": "Jan", "expensesValue": 0 },
        { "expensesMonth": "Feb", "expensesValue": 0 },
        { "expensesMonth": "Mar", "expensesValue": 0 },
        { "expensesMonth": "Apr", "expensesValue": 0 },
        { "expensesMonth": "May", "expensesValue": 0 },
        { "expensesMonth": "Jun", "expensesValue": 0 },
        { "expensesMonth": "July", "expensesValue": 0 },
        { "expensesMonth": "Aug", "expensesValue": 0 },
        { "expensesMonth": "Sep", "expensesValue": 0 },
        { "expensesMonth": "Oct", "expensesValue": 0 },
        { "expensesMonth": "Nov", "expensesValue": 0 },
        { "expensesMonth": "Dec", "expensesValue": 0 }
    ]
    for(let exp of props.chartExpenses){
        arrayForChart[exp.date.getMonth()].expensesValue += exp.amount;
    }
    console.log(arrayForChart);
    return (
        <div className='chart'>
            {arrayForChart.map(data=>{
                return <ChartBar key={data.expensesMonth} value={data.expensesValue} label={data.expensesMonth} maxValue={maxValue}/>
            })}
            
        </div>
    )
}

export default Chart
