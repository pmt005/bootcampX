SELECT assignments.id, name, day, chapter, count(assistance_requests) as total_requests
FROM assignments
INNER JOIN assistance_requests ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;