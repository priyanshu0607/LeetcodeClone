import assert from "assert";
import { Problem } from "../types/problem";
import exampleImage from "./images/mostwater.jpg";

// Handler function to validate the solution
export const containerWithMostWaterHandler = (fn: any) => {
	try {
		const tests = [
			{ input: [1,8,6,2,5,4,8,3,7], output: 49 },
			{ input: [1,1], output: 1 },
			{ input: [4,3,2,1,4], output: 16 },
			{ input: [1,2,1], output: 2 },
		];

		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i].input);
			assert.deepEqual(result, tests[i].output);
		}
		return true;
	} catch (error: any) {
		console.error("Error from containerWithMostWaterHandler: ", error);
		throw new Error(error);
	}
};

// Starter code that will be provided to the user
const starterCodeContainerWithMostWaterJS = `function maxArea(height) {
  // Write your code here
};`;

// Problem definition
export const containerWithMostWater: Problem = {
	id: "container-with-most-water",
	title: "Container With Most Water",
	problemStatement: `
		<p class='mt-3'>Given <code>n</code> non-negative integers <code>height[0], height[1], ..., height[n - 1]</code>, where each represents a point at coordinate <code>(i, height[i])</code>. <p class='mt-3'>n vertical lines are drawn such that the two endpoints of the line <code>i</code> are at <code>(i, 0)</code> and <code>(i, height[i])</code>.</p> <p class='mt-3'>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p> <p class='mt-3'>Return the maximum amount of water a container can store.</p>
		`,
	examples: [
		{
			id: 0,
			inputText: 'height = [1,8,6,2,5,4,8,3,7]',
			outputText: "49",
			img: exampleImage.src,
            
		},
		{
			id: 1,
			inputText: 'height = [1,1]',
			outputText: "1",
		},
		{
			id: 2,
			inputText: 'height = [4,3,2,1,4]',
			outputText: "16",
		},
		{
			id: 3,
			inputText: 'height = [1,2,1]',
			outputText: "2",
		},
	],
	constraints: `<li class='mt-2'><code>2 <= height.length <= 10<sup>5</sup></code></li>
<li class='mt-2 '><code>0 <= height[i] <= 10<sup>4</sup></code></li>`,
	handlerFunction: containerWithMostWaterHandler,
	starterCode: starterCodeContainerWithMostWaterJS,
	starterFunctionName: "function maxArea(",
	order: 5,
};
