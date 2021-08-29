import React from 'react'

export default function Alert(props) {
    
  // const capitalize = (word)=>{
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);

  //  }

    return (
       //this props.alert and && is an syntax its says that if props.alet is true then only return the next code else false
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>
    )
}
