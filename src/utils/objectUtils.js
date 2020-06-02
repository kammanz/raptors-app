/**
 * A function that returns a custom style object for team select menu 
 * 
 * @param {string} selectedTeamColor
 * 
 * @returns {string}
 */

export const selectMenuStyles = (selectedTeamColor) => {
    return (
        {
            container: (provided) => ({
                ...provided,
                backgroundColor: `${selectedTeamColor}`,
                height: '100%',
                cursor: 'pointer',
                width: '305px',
            }),
            control: () => ({
                display: 'flex',
                height: '100%',
            }),
            valueContainer: (provided) => ({
                ...provided,
                 width: '285px',
                padding: '0',
                margin: '0',
                color: 'white',
                fontFamily: 'spurs',
                fontSize: '22px',
            }),
            singleValue: (provided) => ({
                ...provided,
                color: 'white',
                margin: '0',
            }),
            indicatorsContainer: (provided) => ({
                ...provided,
                display: 'flex',
                justifyContent: 'center',
                width: '30px',
                paddingRight: '22px',
            }),  
            indicatorSeparator: (provided) => ({
                ...provided,
                display: 'none',
            }),
            placeholder: (provided) => ({
                ...provided,
                color: 'white',
            }),
            option: (provided, state) => ({
                ...provided,
                display: state.isSelected ? 'none' : 'pink',
            }),
            menu: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuList: (provided) => ({
              ...provided,
              padding: 0,
            }),
        }
    );
};