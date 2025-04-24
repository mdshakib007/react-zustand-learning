import React from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

const Courses = () => {
    return (
        <div>
            <CourseForm />
            <CourseList />
        </div>
    );
};

export default Courses;