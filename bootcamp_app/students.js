const { Pool } = require('pg');

const pool = new Pool({
  user: 'patricktumu',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohort = process.argv[2];
const limit = process.argv[3];
const values = [`%${cohort}%`, limit];
const queryString = `
SELECT students.id, students.name, cohorts.name AS cohort
FROM students
INNER JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;`;

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));