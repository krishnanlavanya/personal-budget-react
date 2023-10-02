import React from 'react';
import BudgetData from '../budget.json';

function Budget({ data }) {
    const myBudget = BudgetData.myBudget;
    
    return (
    <div>
        <ul>
         {myBudget.map((item, index) => (
         <li key={index}>
            {item.title}: {item.budget}
            </li>
        ))}
        </ul>
    </div>
    );
}

export default Budget;