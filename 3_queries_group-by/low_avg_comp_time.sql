SELECT student.name as student, avg(assignment_submissions.duration) as average_assignment_duration, avg(assignments.duration) as average_estimated_duration
FROM students
INNER JOIN assignment_submissions ON id = assignment_submissions.student_id
INNER JOIN assignments ON assignment_submissions.assignment_id = assignments.id
WHERE students.end_date != NULL
GROUP BY average_assignment_duration DESC;