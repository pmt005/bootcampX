SELECT DISTINCT teachers.name as teacher , cohorts.name
FROM teachers
INNER JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
INNER JOIN students ON students.id = student_id
INNER JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;