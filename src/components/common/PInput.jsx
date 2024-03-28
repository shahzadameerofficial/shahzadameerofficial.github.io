import { useState, useEffect } from "react";

const PInput = ({
  type,
  name,
  value,
  onChange,
  options,
  onInput,
  placeholder,
  disabled,
  imgSrc,
  className,
  rows,
  cols,
  required,
  accessKey,
  accept,
  pattern,
  min,
  max,
  minLength,
  maxLength,
  onFocus,
  onBlur,
  multiples,
  icon
}) => {
  let [profile, setProfile] = useState("");
  let [tags, setTags] = useState([]);
  let [inputVal, setInputVal] = useState("");

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  function handleMultiples(e) {
    if (e.key === "Enter" && inputVal.trim() !== "") {
      setTags([...tags, inputVal.trim()]);
      let data = {
        target: {
          name: e.target.name,
          value: [...tags, e.target.value],
        },
      };
      e.preventDefault();
      if(onChange){
        onChange(data);
      }
      setInputVal("");
    }
  }
  function updateData(e) {
    setProfile(URL.createObjectURL(e.target.files[0]));
    onChange(e);
  }
  useEffect(() => {
    if (multiples && multiples.length > 0) {
      setTags(multiples);
    }
  }, [multiples]);
  if (type === "textarea") {
    return (
      <div className={`paradox-input ${className ? className : ""}`}>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onInput={onInput}
          id={name}
          rows={rows}
          cols={cols}
          required={required}
          placeholder={placeholder ? placeholder : name}
          disabled={disabled}
          // You can add other attributes or props here as needed
        />
        <label htmlFor={name} className="rounded-pill">
          {name.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")}
        </label>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className={`paradox-input ${className ? className : ""}`}>
        <select
          name={name}
          onChange={onChange}
          id={name}
          value={value}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          accessKey={accessKey}
          disabled={disabled}

          // You can add other attributes or props here as needed
        >
          {value == "" && <option value={value}>Select An Option</option>}
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
        <label htmlFor={name} className="rounded-pill">
          {name}
        </label>
      </div>
    );
  } else if (type !== "file" && type !== "multiple") {
    return (
      <div className={`paradox-input ${className ? className : ""}`}>
        {icon && (<icon />)}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-100"
          onInput={onInput}
          placeholder={placeholder ? placeholder : name}
          id={name}
          disabled={disabled}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          onFocus={onFocus}
          pattern={pattern}
          onBlur={onBlur}
          // You can add other attributes or props here as needed
        />
        <label htmlFor={name} className="rounded-pill">
          {name.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")}
        </label>
      </div>
    );
  } else if (type === "file") {
    return (
      <div className={`paradox-input file ${className ? className : ""}`}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={updateData}
          className="d-none"
          accept={accept}
          accessKey={accessKey}
          onInput={onInput}
          id={name}
          required={required}
          // You can add other attributes or props here as needed
        />
        <label htmlFor={name} className="rounded-pill">
          <img
            src={profile === ""?imgSrc: profile}
            alt=""
            style={{ width: "150px" }}
            className="rounded-circle"
          />
          <span>Choose A Profile Picture</span>
        </label>
      </div>
    );
  } else if (type === "multiple") {
    return (
      <div className={`paradox-input multiple ${className ? className : ""}`}>
        <input
          type={type}
          name={name}
          value={inputVal}
          onKeyDown={handleMultiples}
          className="w-100"
          onInput={(e) => {
            setInputVal(e.target.value);
          }}
          placeholder={placeholder || ''}
          id={name}
          disabled={disabled}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          onFocus={onFocus}
          pattern={pattern}
          onBlur={onBlur}
          // You can add other attributes or props here as needed
        />
        <label htmlFor={name} className="rounded-pill">
          {name.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")}
        </label>

        <div className="all-tags">
          {tags?.length < 1 && (<q>Type something and Hit Enter...</q>)}
          {tags.map((tag, index) => (
            <span className="rounded-pill" key={index} title={tag}>
              {tag}{" "}
              <button
                className="btn-close"
                type="button"
                onClick={() => handleTagRemove(tag)}
                title={`Remove '${tag}'`}
                disabled={disabled}
              >&#10005;</button>
            </span>
          ))}
        </div>
      </div>
    );
  }
};

export default PInput;
