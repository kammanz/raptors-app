const selectMenuStyles = (selectedTeamColor) => {
  return {
    container: (provided) => ({
      ...provided,
      backgroundColor: selectedTeamColor,
      height: '100%',
      cursor: 'pointer',
      width: 320,
    }),
    control: () => ({
      display: 'flex',
      height: '100%',
    }),
    valueContainer: (provided) => ({
      ...provided,
      width: 285,
      padding: 0,
      margin: 0,
      color: 'white',
      fontFamily: 'spurs',
      fontSize: 22,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
      margin: 0,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'center',
      width: 30,
      paddingRight: 22,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 310,
      padding: 0,
    }),
  };
};

export default selectMenuStyles;
