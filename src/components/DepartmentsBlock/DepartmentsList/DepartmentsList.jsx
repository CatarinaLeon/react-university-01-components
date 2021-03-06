import PropTypes from 'prop-types';
import Paper from '../../common/Paper/Paper';
import dots from '../../../images/dots.svg';

const DepartmentsList = ({ departments }) => (
  // console.log(departments);
  <ul>
    {departments.map((department, index) => (
      <li key={index}>
        <Paper>
          <div>
            <p>{department.name}</p>
            <button>
              <img src={dots} alt="Menu" />
            </button>
          </div>
        </Paper>
      </li>
    ))}
  </ul>
);

DepartmentsList.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default DepartmentsList;
