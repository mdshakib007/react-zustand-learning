import React from 'react';
import useHabitStore from '../app/habitStore';

const HabitList = () => {
    const habits = useHabitStore((state) => state.habits);
    const removeHabit = useHabitStore((state) => state.removeHabit);
    const toggleHabit = useHabitStore((state) => state.toggleHabit);

    // Function to calculate progress (0-100) over 30 days
    const calculateProgress = (completedDates) => {
        const totalDays = 30;
        const progress = Math.min(completedDates.length, totalDays);
        return (progress / totalDays) * 100;
    };

    const getStreak = (completedDates) => {
        let streak = 0;
        const currentDate = new Date()

        while (true) {
            const dateString = currentDate.toISOString().split('T')[0];
            if (completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            }
            else {
                break;
            }
        }
        return streak;
    }

    return (
        <div className="container mx-auto px-4 py-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">My Habit List</h2>
            <ul className="space-y-4">
                {habits.map((habit) => (
                    <li
                        key={habit.id}
                        className="bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center transition-all duration-300"
                    >
                        <div className="flex flex-col gap-2 text-white w-full">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{habit.title}</span>
                                <span className="text-sm text-gray-400 capitalize">{habit.frequency}</span>
                            </div>

                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>Streak: {getStreak(habit.completedDates)} 🔥</span>
                                <span>Created: {new Date(habit.createdAt).toLocaleDateString()}</span>
                            </div>

                            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-500 transition-all duration-300"
                                    style={{ width: `${calculateProgress(habit.completedDates)}%` }}
                                />
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <button
                                    className="text-green-400 hover:text-green-500 text-sm hover:underline transition-colors duration-200 cursor-pointer"
                                    onClick={() => toggleHabit(habit.id, new Date().toISOString())}
                                >
                                    <span>
                                        {habit.completedDates.includes(new Date().toISOString().split('T')[0])
                                            ? "Completed Today"
                                            : "Mark as Completed Today"}
                                    </span>
                                </button>

                                <button
                                    onClick={() => removeHabit(habit.id)}
                                    className="text-red-400 hover:text-red-500 transition-colors duration-200 text-sm cursor-pointer hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitList;
