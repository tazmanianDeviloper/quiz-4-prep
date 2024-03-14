import PropTypes from "prop-types";

export default function ThemeToggle(props) {
    return (
        <button onClick={props.toggleTheme}>
            Change Theme
        </button>
    );
}

ThemeToggle.propTypes = {
    toggleTheme: PropTypes.func.isRequired
};
