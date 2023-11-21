const InputForm = ({divClassName, htmlFor, labelTitle, type,inputId, autocomplete,onChange, labelClass, value, disabled }) => {

    return (
        <div className={divClassName}>
            <label htmlFor={htmlFor} className={labelClass}>{labelTitle}</label>
            <input
                type={type}
                id={inputId}
                autoComplete={autocomplete}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
        </div>
    );
}
export default InputForm;