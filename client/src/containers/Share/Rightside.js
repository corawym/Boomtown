import React from 'react';
import PropTypes from 'prop-types';

import { ShareStepper } from '../../components/Share';

const Rightside = ({stepIndex,handleChange,filters,filterSelected,handleImageUpload,handleSubmitItem}) => (
  <div className="shareRightside">
    <ShareStepper 
      stepIndex={stepIndex} 
      handleChange={handleChange} 
      filters={filters} 
      filterSelected={filterSelected}
      handleImageUpload={handleImageUpload}
      handleSubmitItem={handleSubmitItem}
    />
  </div>
);

Rightside.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  filterSelected: PropTypes.array.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  handleSubmitItem: PropTypes.func.isRequired
}

export default Rightside;