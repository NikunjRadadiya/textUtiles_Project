import React from "react";

const Alert = (props) => {
  const capitilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alertmsg && (
      <>
        <div
          className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitilize(props.alertmsg.type)} :</strong>
          {props.alertmsg.msg}
        </div>
      </>
    )
  );
};

export default Alert;
