import React from 'react';

const LANGUAGE = [
  'Java',
  'Scala',
  'Perl'
]

export const List = ({title}) => {
    return (
      <div>
      <h4>{title}</h4>
      {
        LANGUAGE.map((lang,index)=>{
          return <div key={index}>{lang}</div>
        })
      }
      <h4>List</h4>
      </div>
    )
  }
