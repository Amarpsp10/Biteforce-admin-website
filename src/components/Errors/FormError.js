import classes from './Error.module.css'
import ErrorIcon from './../../assets/icons/error-icon.svg'

const FormError = ({message}) =>{
    return(
        <>
        {message ?
            <div className={classes.formErrorContainer}>
                <img src={ErrorIcon} alt='error-icon'/>
                <text style={{fontSize:13,marginLeft:5}}>{message}</text>
            </div>
            :null
            }
        </>
    )
}

export default FormError;