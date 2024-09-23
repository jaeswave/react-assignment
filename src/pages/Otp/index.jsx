import { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from '../../shared-components/Button';
import { APPLINK } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Otp =  () =>  {
  const Navigate = useNavigate()
  const [otp, setOtp] = useState('');
  const [disabled, setDisabled] = useState(true);

  
function submitOtp(){
  
    if(otp !== '123456'){
      toast.error('Invalid/Expired otp')
      return 
    }

    toast.success("🥳You have successfully verified your otp")
    Navigate(APPLINK.LOGIN[0])
}

  return (
    <>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputType="tel"
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      containerStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        alignContent: 'center',
        width: '100%',
        height: '70vh',
        gap:'10px',
      }}
      inputStyle={{
        padding:'10px',
        width: '50px',
        fontSize: '20px',
        
      }}
      shouldAutoFocus={true}
    />
    <div>
    <center>
    <Button text="Proceed" style={{ width: '150px', }} onClick={submitOtp} disabled={otp.length == 6 ? false : true}  /> 
     </center>
    </div>
    </>
  );
}

export default Otp;