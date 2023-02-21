import './App.css';

function App() {

  const projectlist = [
    {
      employee: 'deep savaliya',
      job_type: 'full stack developer',
      work: 'Project Management Dashboard',
      complete: 'Done',
      salary: '50000',
      joining: '4'
    },
    {
      employee: 'radhey vaghasiya',
      job_type: 'front end developer',
      work: 'Quiz App',
      complete: 'Done',
      salary: '10000',
      joining: '1'
    },
    {
      employee: 'prabhat bhnderi',
      job_type: 'back end developer',
      work: 'Data structures',
      complete: 'Done',
      salary: '35000',
      joining: '3'
    },
    {
      employee: 'smit patel',
      job_type: 'ui/ux designer',
      work: 'A Restaurant Menu',
      complete: 'In Progress',
      salary: '15000',
      joining: '2'
    },
    {
      employee: 'meet rakholiya',
      job_type: 'android developer',
      work: 'admin panel',
      complete: 'In Progress',
      salary: '40000',
      joining: '1'
    },
  ]

  const total = projectlist.filter(j => j.complete == 'Done')

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
              projectlist.filter(j => j.complete == 'Done').map((i, index) => {
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
              <td colSpan={3}>
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
