import "../css/index.css";
import { Link } from 'react-router-dom'

const Button = (prop) => {
  const { text, btn_type, style, identity, onClick=null, disabled=false } = prop;
  return btn_type == "login" ? (
    <button className="login-btn" style={style} onClick={onClick}>
      {text}
    </button>
  ) : btn_type == "getstarted" ? (
    <button className="get-started-btn" style={style} onClick={onClick} >
      {text}
    </button>
  ) : (
    <button className={identity} style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
