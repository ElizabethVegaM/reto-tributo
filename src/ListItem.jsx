import React from 'react';

const ListItem = ({date, text}) => {
  return (
    <li>
      <strong>{date}</strong> - {text}
    </li>
  );
}

export default ListItem;