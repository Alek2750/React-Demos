import React, { Component } from 'react';

class GradePresenter extends Component {
    constructor(props) {
      super(props);
      this.state = {students: this.props.data};
    }
    render() {
      const rows = this.state.students.map((s) =>
        <tr key={s.id}>
          <td>{s.id}</td> <td>{s.name}</td> <td>{s.grade}</td>
        </tr>
      );
      return (
        <div>
          <h3>List of grades</h3>
          <table className="table">
            <tr><th>Id</th> <th>Name</th> <th>Grade</th></tr>
            {rows}
          </table>
        </div>
      )
    }}

    export default GradePresenter;