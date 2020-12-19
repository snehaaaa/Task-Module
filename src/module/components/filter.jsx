import * as React from "react";


const FilterComponent = props => {
    return (
      <div className="filterListSection">
        {props.filter.map((el) => ( 
           <div className="filterItem" className={el.isActive ? "activefilter" : "filterItem"} key={el.value} onClick={() => {
            props.filterChange(el.value,el.isActive);
          }}>
              {el.name}
          </div>
        ))}
      </div>
    );
  };

export default FilterComponent;
