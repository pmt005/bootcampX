SELECT sum(assignment_submissions.duration) as total_cohort_assign_duration
FROM assignment_submissions
INNER JOIN students ON students.id = assignment_submissions.student_id
INNER JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12';