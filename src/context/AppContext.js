import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'Food', cost: 120 },
		{ id: uuidv4(), name: 'Rent', cost: 500 },
		{ id: uuidv4(), name: 'Transportation', cost: 100 },
		{ id: uuidv4(), name: 'Savings', cost: 150 },
		{ id: uuidv4(), name: 'Insurance', cost: 300 },
	],
};


export const AppContext = createContext();

export const AppProvider = (props) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};