# React Zustand Learning Projects

This repository is a hands-on journey into **state management in React using [Zustand](https://github.com/pmndrs/zustand)**. It's built with the objective of learning Zustand through small, focused projects that mirror real-world use cases.

---

## Project Objective

The goal of this repository is to **learn and master Zustand**, a lightweight and powerful state management library for React, by building **mini-apps** such as:

- **Course Tracker** – Add, remove, toggle completion status of learning goals.
- **Habit Tracker** – Track daily/weekly habits with toggles and completion history & track daily streak & helps us to see progress visually.

Project is simple, clean, and showcases a specific state management concept with minimal boilerplate.

---

## Why Zustand?

Zustand offers an elegant and scalable way to manage state outside of React components:

- **Minimal API** – Easy to learn and use
- **No Providers or Context** – Just import and use your store
- **Persistence Support** – Built-in middleware for saving state (e.g. to `localStorage`)
- **Devtools Integration** – Easy debugging for state updates

---

## Learning Approach

This repository follows a progressive learning strategy:

1. Start from **basic stores** with `create()`
2. Use **middleware** such as `devtools` and `persist`
3. Implement **state mutation patterns** (CRUD, toggling, filtering)
4. Build **multiple isolated projects** using the same state store idea
5. Add real-world features step-by-step (form handling, input validation, conditional rendering, etc.)

Project is designed to reinforce a specific aspect of Zustand and React component communication.

---

## 📂 Project Structure

```bash
react-zustand-learning/
│
├── src/
│   ├── app/
│   │   └── courseStore.js        # Zustand store for global state
│   ├── components/
│   │   ├── CourseForm.jsx        # Add new course
│   │   └── CourseList.jsx        # View and toggle courses
│   └── App.jsx                   # Main component
│
├── public/
│   └── index.html
│
└── README.md
```

## Technologies Used

1. React (with Vite)
2. Zustand
3. Zustand middleware: persist, devtools
4. Tailwind CSS (for styling)

### Future Plans
1. Add more micro-projects (habit tracker, notes app, task manager)
2.  Explore Zustand selectors
3. Integrate Zustand with API calls
4. Create reusable Zustand hooks across projects

## Preview
Coming Soon...

> Made with ❤️ by [Md Shakib Ahmed](https://mdshakib007.vercel.app/) – striving to be better every day.