import React from 'react';

function InputButton(props) {
  return (
    <form>
        <input className="button" type="text" value={props.placeholder}/>
    </form>

  );
}
  
export default InputButton;