import { create } from "zustand";
import { persist } from "zustand/middleware";


const habitStore = (set) => ({
    habits: [],
    addHabit: (newHabit) => {
        set((state) => ({
            habits: [newHabit, ...state.habits],
        }))
    },
    removeHabit: (habitId) => {
        set((state) => ({
            habits: state.habits.filter(habit => habit.id != habitId),
        }))
    },
    toggleHabit: (habitId, date) => {
        const dateOnly = date.split('T')[0];
        set((state) => ({
            habits: state.habits.map(habit => {
                if (habit.id !== habitId) return habit;

                const isAlreadyCompleted = habit.completedDates.includes(dateOnly);
                const updatedDates = isAlreadyCompleted
                    ? habit.completedDates.filter(d => d !== dateOnly)
                    : [...habit.completedDates, dateOnly];

                return {
                    ...habit,
                    completedDates: updatedDates,
                };
            }),
        }));
    }
})

const useHabitStore = create(
    persist(habitStore, { // Persist is for saving data into local storage.
        name: 'habits',
    })
)

export default useHabitStore;