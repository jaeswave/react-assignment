import {Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <center>
        <br /><br />
        <div>
            <h1>Error 404</h1>
            <p><img src='https://lh6.googleusercontent.com/proxy/hvVRYNV3UMULBolPFhSIr_w3UvJ38sBKIGf8zo6daW4nZ4IOBM8URLs7HodNgIm5MhOoNdRDDcxtJmtcvR8LtOYlY3s5igyQRknBkQXybK7L' /></p><br /><br />
            <p>Click <Link to="/">here</Link> to go back to the homepage</p>

            
            
        </div>
    </center>
  )
}

export default ErrorPage