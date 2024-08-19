import assert from "assert";
import { Problem } from "../types/problem";

// Handler function to validate the solution
export const bestTimeToBuyAndSellStockHandler = (fn: any) => {
	try {
		const tests = [
			{ input: [7,1,5,3,6,4], output: 5 },
			{ input: [7,6,4,3,1], output: 0 },
			{ input: [2,4,1], output: 2 },
			{ input: [2,1,2,1,4,3], output: 3 },
		];

		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i].input);
			assert.deepEqual(result, tests[i].output);
		}
		return true;
	} catch (error: any) {
		console.error("Error from bestTimeToBuyAndSellStockHandler: ", error);
		throw new Error(error);
	}
};

// Starter code that will be provided to the user
const starterCodeBestTimeToBuyAndSellStockJS = `function maxProfit(prices) {
  // Write your code here
};`;

// Problem definition
export const bestTimeToBuyAndSellStock: Problem = {
	id: "best-time-to-buy-and-sell-stock",
	title: "Best Time to Buy and Sell Stock",
	problemStatement: `<p class='mt-3'>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
	<p class='mt-3'>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
	<p class='mt-3'>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>`,
	examples: [
		{
			id: 0,
			inputText: 'prices = [7,1,5,3,6,4]',
			outputText: "5",
		},
		{
			id: 1,
			inputText: 'prices = [7,6,4,3,1]',
			outputText: "0",
		},
		{
			id: 2,
			inputText: 'prices = [2,4,1]',
			outputText: "2",
		},
		{
			id: 3,
			inputText: 'prices = [2,1,2,1,4,3]',
			outputText: "3",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= prices.length <= 10<sup>5</sup></code></li>
<li class='mt-2'><code>0 <= prices[i] <= 10<sup>4</sup></code></li>`,
	handlerFunction: bestTimeToBuyAndSellStockHandler,
	starterCode: starterCodeBestTimeToBuyAndSellStockJS,
	starterFunctionName: "function maxProfit(",
	order: 7,
};
