import React from 'react';
import useCourseStore from '../app/courseStore';
import { useState } from 'react';
import '../App.css';


const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle, setCourseTitle] = useState('');
    
    const handleCourseSubmit = () => {
        if(!courseTitle) return alert("Please add a course to add!");
        addCourse({
            id: Math.ceil(Math.random() * 1000),
            title: courseTitle,
            completed: false,
        })
        setCourseTitle('');
    }
    return (
        <div className="container mx-auto px-4 py-8 max-w-xl">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">Add a New Course</h2>
                
                <input 
                    type="text" 
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    placeholder="Enter course title"
                    className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                
                <button
                    onClick={handleCourseSubmit}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl transition-colors duration-300 cursor-pointer"
                >
                    Add Course
                </button>
            </div>
        </div>
    );    
};

export default CourseForm;