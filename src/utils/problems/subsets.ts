import assert from "assert";
import { Problem } from "../types/problem";

// Handler function to validate the solution
export const subsetsHandler = (fn: any) => {
	try {
		const tests = [
			{ input: [1, 2, 3], output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] },
			{ input: [0], output: [[],[0]] },
			{ input: [1], output: [[],[1]] },
			{ input: [1, 2], output: [[],[1],[2],[1,2]] },
		];

		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i].input);
			// Sorting each subset and the result itself to ensure order doesn't affect the comparison
			const sortedResult = result.map((subset: number[]) => subset.sort((a, b) => a - b)).sort();
			const sortedOutput = tests[i].output.map((subset: number[]) => subset.sort((a, b) => a - b)).sort();
			assert.deepEqual(sortedResult, sortedOutput);
		}
		return true;
	} catch (error: any) {
		console.error("Error from subsetsHandler: ", error);
		throw new Error(error);
	}
};

// Starter code that will be provided to the user
const starterCodeSubsetsJS = `function subsets(nums) {
  // Write your code here
};`;

// Problem definition
export const subsets: Problem = {
	id: "subsets",
	title: "Subsets",
	problemStatement: `<p class='mt-3'>Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set).</p>
	<p class='mt-3'>The solution set must not contain duplicate subsets. Return the solution in any order.</p>`,
	examples: [
		{
			id: 0,
			inputText: 'nums = [1,2,3]',
			outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
		},
		{
			id: 1,
			inputText: 'nums = [0]',
			outputText: "[[],[0]]",
		},
		{
			id: 2,
			inputText: 'nums = [1]',
			outputText: "[[],[1]]",
		},
		{
			id: 3,
			inputText: 'nums = [1,2]',
			outputText: "[[],[1],[2],[1,2]]",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= nums.length <= 10</code></li>
<li class='mt-2'><code>-10 <= nums[i] <= 10</code></li>
<li class='mt-2'><code>All the numbers of nums are unique.</code></li>`,
	handlerFunction: subsetsHandler,
	starterCode: starterCodeSubsetsJS,
	starterFunctionName: "function subsets(",
	order: 9,
};
