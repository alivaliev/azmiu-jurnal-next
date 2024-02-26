import React, { useEffect, useState } from "react";
import Select from "react-select";


interface Custom{
  id?:any,
  value:any,
  data?:any[],
  options?:any[],
  name?:string,
  placeholder?:string,
  onChange?: (selected: any) => void,
}

const SelectOption = (props:Custom) => {



  return (
    <React.Fragment>
        <Select
          id={props.id}
          className="basic-single"
          classNamePrefix="select"
          value={props.value}
          isDisabled={false}
          isLoading={props.data && Array.isArray(props.data) && props.data.length === 0}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          onChange={props.onChange}
          name="color"
          options={props.options}
          placeholder={props.placeholder}
        />
    </React.Fragment>
  );
};

export default SelectOption;
