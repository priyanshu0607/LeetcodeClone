import assert from "assert";
import { Problem } from "../types/problem";

// Definition for a binary tree node.
interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

// Helper function to create a binary tree from an array input
const createBinaryTree = (arr: (number | null)[]): TreeNode | null => {
	if (!arr.length) return null;
	let root: TreeNode | null = { val: arr[0] as number, left: null, right: null };
	const queue: (TreeNode | null)[] = [root];
	let i = 1;
	while (i < arr.length) {
		const current = queue.shift();
		if (current) {
			if (arr[i] !== null) {
				current.left = { val: arr[i] as number, left: null, right: null };
				queue.push(current.left);
			}
			i++;
			if (i < arr.length && arr[i] !== null) {
				current.right = { val: arr[i] as number, left: null, right: null };
				queue.push(current.right);
			}
			i++;
		}
	}
	return root;
};

// Handler function to validate the solution
export const maxDepthHandler = (fn: any) => {
	try {
		const tests = [
			{ input: [3,9,20,null,null,15,7], output: 3 },
			{ input: [1,null,2], output: 2 },
			{ input: [], output: 0 },
			{ input: [0], output: 1 },
		];

		for (let i = 0; i < tests.length; i++) {
			const tree = createBinaryTree(tests[i].input);
			const result = fn(tree);
			assert.deepEqual(result, tests[i].output);
		}
		return true;
	} catch (error: any) {
		console.error("Error from maxDepthHandler: ", error);
		throw new Error(error);
	}
};

// Starter code that will be provided to the user
const starterCodeMaxDepthJS = `function maxDepth(root) {
  // Write your code here
};`;

// Problem definition
export const maxDepthOfBinaryTree: Problem = {
	id: "maximum-depth-of-binary-tree",
	title: "Maximum Depth of Binary Tree",
	problemStatement: `<p class='mt-3'>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>
	<p class='mt-3'>A binary tree's <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>`,
	examples: [
		{
			id: 0,
			inputText: 'root = [3,9,20,null,null,15,7]',
			outputText: "3",
		},
		{
			id: 1,
			inputText: 'root = [1,null,2]',
			outputText: "2",
		},
		{
			id: 2,
			inputText: 'root = []',
			outputText: "0",
		},
		{
			id: 3,
			inputText: 'root = [0]',
			outputText: "1",
		},
	],
	constraints: `<li class='mt-2'><code>The number of nodes in the tree is in the range [0, 10<sup>4</sup>].</code></li>
<li class='mt-2'><code>-100 <= Node.val <= 100</code></li>`,
	handlerFunction: maxDepthHandler,
	starterCode: starterCodeMaxDepthJS,
	starterFunctionName: "function maxDepth(",
	order: 8,
};
