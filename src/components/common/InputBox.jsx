function InputBox({label, type, name, onChange, onInput, value}) {
  return (
    <div className="form-group">
      <label htmlFor="name">{label || ''}</label>
      <input
        type={type || 'text'}
        className="form-control"
        name={name || ''}
        data-rule="minlen:4"
        onChange={onChange}
        onInput={onInput}
        defaultValue={value || ''}
        data-msg="Please enter at least 8 chars of subject"
      />
      <div className="validate" />
    </div>
  );
}

export default InputBox;
