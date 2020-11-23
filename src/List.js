import React from 'react';

export class List extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h4>{ title }</h4>
        <div>リストです</div>
      </div>
    )
  }
}


/* export const List = (props) => {
    return (
      <div>
          <h4>{props.title}</h4>
          <h4>List</h4>
      </div>
    )
  } */