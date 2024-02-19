import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Masters = () => {
  return (
    <div className="masters">
      <div className="master-nav">
        <ul>
          <div className="dropdown">
            <li>
              <span>Customer Masters</span>
            </li>
            <div className="dropdown-content">
                <a>Customer Type</a>
                <a>Department</a>
            </div>
          </div>
          <li>
            <span>Employee Masters</span>
          </li>
          <li>
            <span>project Masters</span>
          </li>
          <li>
            <span>Task Masters</span>
          </li>
        </ul>
      </div>
      <div className="masters-container">
        <table className="master-table">
          <tr id="header">
            <th>Customer Type</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>abc</td>
            <td>
              <span>
                <EditIcon className="icon-E" />
                <DeleteIcon className="icon-D" />
              </span>
            </td>
          </tr>
          <tr>
            <td>abc2</td>
            <td>
              <span>
                <EditIcon className="icon-E" />
                <DeleteIcon className="icon-D" />
              </span>
            </td>
          </tr>
          <tr>
            <td>abc3</td>
            <td>
              <span>
                <EditIcon className="icon-E" />
                <DeleteIcon className="icon-D" />
              </span>
            </td>
          </tr>
          <tr>
            <td>abc4</td>
            <td>
              <span>
                <EditIcon className="icon-E" />
                <DeleteIcon className="icon-D" />
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Masters;
