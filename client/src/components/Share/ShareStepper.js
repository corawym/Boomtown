import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { TextTitle, TextDescription } from './Textinputs';
import { FilterMenu } from '../common/index';
import { setStepIndex } from '../../redux/modules/share';

class ShareStepper extends React.Component {

  handleNext = () => {
    const {stepIndex} = this.props;
    this.props.dispatch(setStepIndex(stepIndex + 1))
  };

  handlePrev = () => {
    const {stepIndex} = this.props;
    if (stepIndex > 0) {
      this.props.dispatch(setStepIndex(stepIndex - 1))
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.props;

    return (
      <div style={{margin: '30px 0 0 0'}}>
        <RaisedButton
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          default
          onClick={stepIndex === 3 ? this.props.handleSubmitItem : this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            default
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex, handleChange, filters, filterSelected} = this.props;

    return (
      <div style={{maxWidth: 500}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          
          <Step>
            <StepLabel style={{fontSize: '18px'}}>Add an Image</StepLabel>
            <StepContent style={{fontSize: '14px'}}>
              <p>We live in a visual culture. Upload an image of the item you're sharing.</p>
              <input type='file' id='imageUploader' onChange={this.props.handleImageUpload} />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>

          <Step>
            <StepLabel style={{fontSize: '18px'}}>Add a Title & Description</StepLabel>
            <StepContent style={{fontSize: '14px'}}>
              <p>Folks need to know what you're sharing. Give them a clue by adding a title & description.</p>
              <form>
                <Field
                  name="itemTitle" 
                  type="text" 
                  component={TextTitle}
                />
                <Field 
                  name="itemDescription" 
                  type="text" 
                  component={TextDescription} 
                />
              </form>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>

          <Step>
            <StepLabel style={{fontSize: '18px'}}>Categorize Your Item</StepLabel>
            <StepContent style={{fontSize: '14px'}}>
              <p>To share an item, you'll add it to our list of categories. You can select multiple categories.</p>
              <FilterMenu filters={filters} handleChange={handleChange} filterSelected={filterSelected}/>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>

          <Step>
            <StepLabel style={{fontSize: '18px'}}>Confirm Things!</StepLabel>
            <StepContent style={{fontSize: '14px'}}>
              <p>Great! If you're happy with everything, tap the button.</p>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>

        </Stepper>
      </div>
    );
  }
}

const newItemForm = reduxForm({
  form:'newItemForm'
})(ShareStepper)

export default newItemForm