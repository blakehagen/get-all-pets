import React, { PropTypes } from 'react';

const App = (props) => {
  console.log('props --> ', props);
  return (
    <div>
      {/* {props.children} */}
      this is the app
    </div>
  );
};

// App.propTypes = {
//   children: PropTypes.shape(),
// };

export default App;
