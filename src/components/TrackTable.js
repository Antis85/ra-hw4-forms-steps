import React from 'react';
import PropTypes from 'prop-types';

export default function TrackTable(props) {
  const { table, onClick } = props;
  const tableItems = table.map((item) => (
    <tr key={item.id} align="center">
      <td>{item.date}</td>
      <td>{item.distance}</td>
      <td>
        <button
          onClick={() => onClick.handleEdit(item.id)}
          className="TrackTable-button button-edit"
        >
          &#9998;
        </button>
        <button
          onClick={() => onClick.handleRemove(item.id)}
          className="TrackTable-button button-remove"
        >
          &#10008;
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <table className="TrackTable-header">
        <thead>
          <tr align="center">
            <th>Дата (ДД.М.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
      </table>
      <table className="TrackTable-body">
        <tbody>{tableItems}</tbody>
      </table>
    </>
  );
}

TrackTable.propTypes = {
  table: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.shape({
    handleEdit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
  }).isRequired,
};
