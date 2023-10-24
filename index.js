var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    
    const result = [];
    
    function inorder(node) {
        if (node.left) {
            inorder(node.left);
        }
        result.push(node.val);
        if (node.right) {
            inorder(node.right);
        }
    }
    inorder(root);
    return result;
};

// reference https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

const test = [1, 2, 3];

console.log(inorderTraversal(test));