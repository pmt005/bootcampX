const { Pool } = require('pg');

const pool = new Pool({
  user: 'patricktumu',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohort = process.argv[2];
const values = [`%${cohort}%`];
const queryString = `
SELECT DISTINCT teachers.name as teacher , cohorts.name AS cohort
FROM teachers
INNER JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
INNER JOIN students ON students.id = student_id
INNER JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;`;

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort} : ${row.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));