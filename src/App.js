import './App.css';

function App() {

  const projectlist = [
    {
      employee: 'Deep Savaliya',
      job_type: 'full stack developer',
      work: 'Project Management Dashboard',
      complete: 'Done',
      salary: 95000,
      joining: 4
    },
    {
      employee: 'Radhey Vaghasiya',
      job_type: 'front end developer',
      work: 'Quiz App',
      complete: 'Done',
      salary: 10000,
      joining: 1
    },
    {
      employee: 'Prabhat Bhnderi',
      job_type: 'back end developer',
      work: 'Data structures',
      complete: 'Done',
      salary: 35000,
      joining: 3
    },
    {
      employee: 'Smit Patel',
      job_type: 'ui/ux designer',
      work: 'A Restaurant Menu',
      complete: 'In Progress',
      salary: 15000,
      joining: 2
    },
    {
      employee: 'Meet Rakholiya',
      job_type: 'android developer',
      work: 'admin panel',
      complete: 'In Progress',
      salary: 40000,
      joining: 1
    },
    {
      employee: 'Aenil dhameliya',
      job_type: 'IOS developer',
      work: 'IOS Application',
      complete: 'Done',
      salary: 43000,
      joining: 2
    },
    {
      employee: 'Ishita Naliyadra',
      job_type: 'backend developer',
      work: 'backend Application',
      complete: 'In Progress',
      salary: 80000,
      joining: 2
    },
  ]

  const total = projectlist.filter(j =>  j.complete == 'Done')

  const tatal  = total.reduce((acc, curr) => {
    return acc + curr.salary
  }, 0)

  const totalsalary = total.reduce((acc, curr) => {
    return acc + (curr.salary * curr.joining)
  }, 0)

  return (
    <div className="App">
      <h1>Employee List</h1>

      <center>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee Name</th>
              <th>Job</th>
              <th>Currant Work</th>
              <th>Complete Project</th>
              <th>Salary</th>
              <th>Joining Period</th>
              <th>Total Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              total.map((i, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i?.employee}</td>
                    <td>{i?.job_type}</td>
                    <td>{i?.work}</td>
                    <td>{i?.complete}</td>
                    <td>{i?.salary}</td>
                    <td>{i?.joining} Year</td>
                    <td>{i?.salary * i?.joining}</td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan={5}>
                <b>Total :- </b>
              </td>
              <td >
                <center>
                  {tatal}
                </center>
              </td>
              <td colSpan={2}>
                <center>
                  {totalsalary}
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>

    </div>
  );
}

export default App;
