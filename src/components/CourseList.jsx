import React from 'react';
import useCourseStore from '../app/courseStore';

const CourseList = () => {
    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);


    return (
        <div className="container mx-auto px-4 py-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">My Course List</h2>
            <ul className="space-y-4">
                {courses.map((course) => (
                    <li
                        key={course.id}
                        className={`bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center transition-all duration-300 ${course.completed ? 'border-l-4 border-yellow-500' : 'border-l-4 border-transparent'
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                id={`course-${course.id}`}
                                checked={course.completed}
                                onChange={() => toggleCourseStatus(course.id)}
                                className="h-5 w-5 text-yellow-500 bg-gray-700 rounded focus:ring-yellow-500 focus:ring-2"
                            />
                            <label
                                htmlFor={`course-${course.id}`}
                                className={`text-lg ${course.completed ? 'line-through text-gray-400' : 'text-white'
                                    }`}
                            >
                                {course.title}
                            </label>
                        </div>
                        <button
                            onClick={() => removeCourse(course.id)}
                            className="text-red-400 hover:text-red-500 transition-colors duration-200 text-sm cursor-pointer hover:underline"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
