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
            control: () => ({
                display: 'flex',
                height: '100%',
            }),
            container: (provided) => ({
                ...provided,
                backgroundColor: `${selectedTeamColor}`,
                height: '100%',
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
            indicatorContainer: () => ({
                alignSelf: 'center',
            }),
            option: (provided, state) => ({
                ...provided,
                borderBottom: '1px dotted pink',
                color: state.isSelected ? 'red' : 'blue',
                padding: 20,
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
            placeholder: (provided) => ({
                ...provided,
                color: 'white',
            })
        }
    );
};