import React from 'react';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

const Habits = () => {
    return (
        <div>
            <HabitForm />
            <HabitList />
        </div>
    );
};

export default Habits;