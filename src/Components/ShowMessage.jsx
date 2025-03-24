import React, { useState } from 'react';

function ShowMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Message</button>
      {show && <p>This is a secret message!</p>}
    </div>
  );
}

export default ShowMessage;
