import React from "react";
import PropTypes from "prop-types";

function RecursiveComponent(props) {
  const { components } = props;
  const CurrentComponent = components[0];
  
  return (
    <>
      <CurrentComponent>
        {components.length > 1 && (
          <RecursiveComponent components={components.slice(1)} />
        )}
      </CurrentComponent>
    </>
  );
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default RecursiveComponent;
