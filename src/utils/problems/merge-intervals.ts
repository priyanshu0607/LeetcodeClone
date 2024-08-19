import assert from "assert";
import { Problem } from "../types/problem";

// Handler function to validate the solution
export const mergeIntervalsHandler = (fn: any) => {
	try {
		const tests = [
			{ input: [[1,3],[2,6],[8,10],[15,18]], output: [[1,6],[8,10],[15,18]] },
			{ input: [[1,4],[4,5]], output: [[1,5]] },
			{ input: [[1,4],[2,3]], output: [[1,4]] },
			{ input: [[1,4],[0,4]], output: [[0,4]] },
		];

		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i].input);
			assert.deepEqual(result, tests[i].output);
		}
		return true;
	} catch (error: any) {
		console.error("Error from mergeIntervalsHandler: ", error);
		throw new Error(error);
	}
};

// Starter code that will be provided to the user
const starterCodeMergeIntervalsJS = `function merge(intervals) {
  // Write your code here
};`;

// Problem definition
export const mergeIntervals: Problem = {
	id: "merge-intervals",
	title: "Merge Intervals",
	problemStatement: `<p class='mt-3'>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>`,
	examples: [
		{
			id: 0,
			inputText: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
			outputText: "[[1,6],[8,10],[15,18]]",
		},
		{
			id: 1,
			inputText: 'intervals = [[1,4],[4,5]]',
			outputText: "[[1,5]]",
		},
		{
			id: 2,
			inputText: 'intervals = [[1,4],[2,3]]',
			outputText: "[[1,4]]",
		},
		{
			id: 3,
			inputText: 'intervals = [[1,4],[0,4]]',
			outputText: "[[0,4]]",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= intervals.length <= 10<sup>4</sup></code></li>
<li class='mt-2'><code>intervals[i].length == 2</code></li>
<li class='mt-2'><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>`,
	handlerFunction: mergeIntervalsHandler,
	starterCode: starterCodeMergeIntervalsJS,
	starterFunctionName: "function merge(",
	order: 6,
};
