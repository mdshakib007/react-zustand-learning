import React from 'react';
import useHabitStore from '../app/habitStore';
import { useState } from 'react';


const HabitForm = () => {
    const addHabit = useHabitStore((state) => state.addHabit);
    const [habitTitle, setHabitTitle] = useState('');
    const [habitFrequency, setHabitFrequency] = useState('');

    const handleHabitSubmit = () => {
        if (!habitTitle || !habitFrequency) return alert("Please add a Habit to add!");
        addHabit({
            id: Math.ceil(Math.random() * 1000),
            title: habitTitle,
            frequency: habitFrequency,
            completedDates: [],
            createdAt: new Date().toISOString(),
        })
        setHabitTitle('');
        setHabitFrequency('');
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-xl">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">Add a New Habit</h2>

                <input
                    type="text"
                    value={habitTitle}
                    onChange={(e) => setHabitTitle(e.target.value)}
                    placeholder="Enter Habit title"
                    className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <select
                    value={habitFrequency}
                    onChange={(e) => setHabitFrequency(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    <option value="" disabled>Select Frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                </select>

                <button
                    onClick={handleHabitSubmit}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl transition-colors duration-300 cursor-pointer"
                >
                    Add Habit
                </button>
            </div>
        </div>
    );
};

export default HabitForm;