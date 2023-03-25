import classes from './SelectOption.module.css'
const SelectOption = (props) => {
  return<div className={classes.select}>
  <select id="categoryId" onChange={props.onChange}>
    <option>Select option</option>
    <option>Electronics</option>
    <option>SkinCare</option>
    <option>Food</option>
  </select>
  </div>
};
export default SelectOption;
