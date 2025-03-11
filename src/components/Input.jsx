const Input = (props) => (
    <input
        onChange={e => props.onChange(e.target.value)}
        style={{border: '1px solid red', padding: '10px', borderRadius: '5px'}}
        {...props}
    />
)

export default Input;