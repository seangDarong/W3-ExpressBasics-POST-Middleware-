// server.js
import express from 'express';
import courses from "./course.js";
const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, maxCredits, minCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    let filteredCourses = courses.filter(course => course.department === dept);

    if (level){
        filteredCourses = filteredCourses.filter(course => course.level === level);
    }
    
    if (maxCredits){
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(maxCredits));
    }
    if (minCredits){
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(minCredits));
    }
    if (semester){
        filteredCourses = filteredCourses.filter(course => course.semester === semester);
    }
    
    if (instructor){
        filteredCourses = filteredCourses.filter(course => course.instructor.toLowerCase().includes(instructor.toLowerCase()));
    }

    res.json(filteredCourses);
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
