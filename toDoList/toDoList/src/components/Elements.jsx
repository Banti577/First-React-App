import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Elements.module.css'

const Elements = ({ elementValueFinal, deleteHandle }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">To Do</th>
            <th scope="col">Date</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {elementValueFinal.length > 0 ? (
            elementValueFinal.map((item, index) => (
              <tr key={item.name}> {/* Use name as the key */}
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.dueDate}</td>
                <td>
                  <button
                    type="button"
                    className={`${styles.button} btn btn-info`}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className={`${styles.button} btn btn-danger`}
                    onClick={() => deleteHandle(item.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No tasks left.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Elements
