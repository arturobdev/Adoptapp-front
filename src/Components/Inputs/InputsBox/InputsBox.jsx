/* eslint-disable react/prop-types */

const InputsBox = ({ title, children }) => {

    return (

        <div className="filter-box">
            <h4 className="filter-title">{title}</h4>
            {children}
        </div>
    )
}
export default InputsBox;