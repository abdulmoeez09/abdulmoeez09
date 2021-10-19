import styles from '../styles/EOM.module.css'
import { Toolbar } from '../components/toolbar'
export const EOM = ({ employee }) => {
  console.log(employee)
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h2>{employee.name}</h2>
          <h5>{employee.position}</h5>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
  )
  const employee = await apiResponse.json()
  return {
    props: {
      employee,
    },
  }
}
export default EOM
