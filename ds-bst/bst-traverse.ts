import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  const arr = [];
  if (!node) {
    return [];
  }
  arr.push(...traverseRecursive(node.left));
  arr.push(node.value);
  arr.push(...traverseRecursive(node.right));
  console.log(arr);
  return arr;
}
