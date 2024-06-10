// Simulating API data
const products = [
    { id: 1, name: 'Savings Account', description: 'A savings account with excellent benefits.', link: 'savings-account' },
    { id: 2, name: 'Credit Card', description: 'Get exclusive rewards.', link: 'credit-card' },
    { id: 3, name: 'Personal Loan', description: 'Personal loans with low rates.', link: 'personal-loan' }
];

// Function to fetch products data (simulated asynchronous operation)
export const fetchProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000); // Simulates a 1-second delay
    });
};
