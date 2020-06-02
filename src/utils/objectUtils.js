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
                // width: '350px',
            }),
            control: () => ({
                display: 'flex',
                height: '100%',
            }),
            valueContainer: (provided) => ({
                ...provided,
                color: 'white',
                fontFamily: 'spurs',
                fontSize: '22px',
                padding: '0',
                margin: '0',
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
            option: (provided) => ({
                ...provided,
                display: 'flex',
                backgroundColor: 'pink',
                borderBottom: '1px dotted pink',
                // color: state.isSelected ? 'red' : 'blue',
                padding: 20,
            }),
        }
    );
};