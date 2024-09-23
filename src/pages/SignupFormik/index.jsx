import "../../css/SignUp.css"

import { useFormik } from 'formik';
import { toast } from 'react-toastify'
import * as Yup from 'yup';


const SignUpFormik = () => {

  const signupSchema = Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Firstname is required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Lastname is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string().min(11, 'Phone number must be minimum of 11 digits')
      .max(15, 'Phone number must be maximum of 15 digits').required('Required')
    })

  const validate = values => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Firtname is required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Lastname must be provided';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };



    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:''
      },
      validationSchema: signupSchema,
      onSubmit: values => {
        toast.success(JSON.stringify(values));
      },
    });




    return (
      <div style={{width:'500px'}}>
        <center>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            { formik.errors.firstName ? (
              <div style={{color:'red'}}>{formik.errors.firstName}</div>
            ) : null}
      
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={{color:'red'}}>{formik.errors.lastName}</div>
            ) : null}
      
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{color:'red'}}>{formik.errors.email}</div>
            ) : null}
      
          <label htmlFor="phoneNumber">Phone</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{color:'red'}}>{formik.errors.phoneNumber}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
          </center>
      </div>
    );
  };


export default SignUpFormik;
