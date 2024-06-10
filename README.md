# ⚛️ NUWE Frontend React JS Challenge 2 - React Banking App 🏦

Category ➡️ Software

Subcategory ➡️ React JS Frontend

Difficulty ➡️ Hard

---

## 🌐 Background

Welcome to the React Component Challenge! In this exciting project, you will transform a simple web application into a dynamic and engaging platform. Imagine creating a seamless user experience where visitors can effortlessly navigate through login pages, browse and manage products, and enjoy detailed product views.

Your mission is to enhance the core components of this application, focusing on user authentication, product display, and interactive features. This challenge offers a great opportunity to bring your creativity and problem-solving skills to life as you build an intuitive and user-friendly interface.

Get ready to dive in and make this application shine with your expertise!

Expected solution time ➡️  2 hours. **It is essential to complete your solution within this timeframe**, as it is a critical performance indicator used by the hiring company to evaluate your work. The timer will begin when you click the start button and will stop upon your submission.

## 📂 Repository Structure

A repository tree is provided below and should not be modified. Everything you need to develop the challenge is already included.
```bash
nuwe-frontend-js-react2/
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── api
    │   └── api.js
    ├── App.css
    ├── App.js
    ├── components
    │   ├── Home.js
    │   ├── Login.js
    │   ├── Navbar.js
    │   ├── ProductDetail.js
    │   ├── Product.js
    │   └── ProductList.js
    ├── context
    │   ├── AuthContext.js
    │   └── ProductContext.js
    ├── hoc
    │   ├── withAuth.js
    │   └── withLoading.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── tests
    └── theme.js
```
**It is necessary to modify only the files proposed in the tasks.**

## 🎯 Tasks

The tasks are the following:

**⚠️ Attention**: You'll find all the required information in the codebase. Make sure to read them.

- **Task 1**: The `Login` component handles user authentication. This component should:

   1. **Form Submission Disabled**:
      - The login form should have username and password fields.
      - The "Log In" button should remain disabled until both fields are filled.
      - Only when both fields are filled should the "Log In" button be enabled.

   2. **Form Submission Behavior**:
      - When the form is submitted, it should call the `login` function with the provided username and password.
      - After a successful login, the user should be navigated to the home page.
   - File: [Login.js](src/components/Login.js)

- **Task 2**: The `Product` component displays product information. This component should:

   1. **Render Product Information**:
      - Correctly render the product's name, description, and a "More Information" button.

   2. **Navigation on Button Click**:
      - Clicking the "More Information" button should navigate to the product's detailed page.
   - File: [Product.js](src/components/Product.js)

- **Task 3**: The `ProductDetail` component shows detailed information about a product. This component should:

   1. **Product Not Found Message**:
      - Display a "Product not found." message when the product is not found.

   2. **Loading State**:
      - Display a loading spinner and text while data is being loaded.

   3. **Display Product Details**:
      - Display the product's details when the product is found.
   - File: [ProductDetail.js](src/components/ProductDetail.js)

- **Task 4**: The `ProductList` component displays a list of products. This component should:

   1. **Loading State**:
      - Display a loading message when `isLoading` is true.

   2. **Display Products**:
      - Display a list of products when `isLoading` is false.
   - File: [ProductList.js](src/components/ProductList.js)

- **Task 5**: The `Home` component manages the application's home page. This component should:

   1. **Loading State Management**:
      - Set `isLoading` to false after 2 seconds.
   - File: [Home.js](src/components/Home.js)

## 💫 Guides

Install project dependencies using npm:
```bash
# You should be in the root directory
npm install
```

### Execute the project

This will launch the application in your default web browser. If it does not open automatically, you can access the application at http://localhost:3000.
```bash 
npm start
```

## 📤 Submission

1. Solve the proposed tasks.
2. Continuously push the changes you have made.
3. Wait for the results.
4. Click submit challenge when you have reached your maximum score.

## 📊 Evaluation

The final score will be given according to whether or not the objectives have been met.

In this case, the challenge will be evaluated on 900 points which are distributed as follows:

- **Task 1**: 180 points
- **Task 2**: 180 points
- **Task 3**: 180 points
- **Task 4**: 180 points
- **Task 5**: 180 points

## ❓ FAQs / Additional Information

In this case, as it is a more complex challenge, no tests are provided. But all the guidance needed to complete it is provided both within the README in tasks and within the code itself.

Only the files proposed in the objectives should be modified. You are not allowed to modify anything other than the proposed files.

- **What happens if I modify files that are not in scope?** The correction will fail because those changes will not be taken into account.
- **Can I add resources that are not in package.json?** No, everything needed to complete the challenge is included.
