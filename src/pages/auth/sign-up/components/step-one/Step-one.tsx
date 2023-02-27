import { TextInput } from '../../../../../common/components/input/Input';
import { IEmployeeSignUpForm } from '../../../../../common/interfaces/CommonInterfaces';
import { Error } from '../../interface/Error';

interface prop {
  formData: IEmployeeSignUpForm,
  updateFields: (fields: Partial<IEmployeeSignUpForm>) => void,
  error: Error
}

const StepOne = (props: prop) => {
  return (
    <div className='auth-12-register animate-entry-signup'>
      <div className='auth-12-register-header-text mb-1'>
        <h2>Join the <span className='primary-text'>Zoobo</span> crew and get started on an adventure of endless fun!</h2>
      </div>
      <TextInput updateValue={props.updateFields} value={props.formData?.email} type="email" name="email" placeholder="mail@example.com" label="Email Address" note={props.error?.note} error={props.error?.for}/>
      <p>Please ensure that you enter the correct email address for your Zoobo account. This email will serve as the primary means of communication for important updates and information about your account.</p>
    </div>
  )
}

export default StepOne;

