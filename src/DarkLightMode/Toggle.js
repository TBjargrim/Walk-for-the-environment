import React from 'react'
import { func, string } from 'prop-types';

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <button onClick={toggleTheme} >
          Switch Theme
        </button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
