import React from 'react';

function BtnGroup({filter, setFilter}){

  return(
    <div className="d-flex justify-content-center" >
        <button type="button" className= {filter === 'incomplete' ? "btn btn-outline-info mr-2 active" 
                                                                            : "btn btn-outline-info mr-2"} 
                              onClick={()=>setFilter('incomplete')}>Incomplete
        </button>

        <button type="button" className={filter === 'complete' ? "btn btn-outline-info mr-2 active"
                                                                          : "btn btn-outline-info mr-2"} 
                              onClick={()=>setFilter('complete')}>Complete
        </button>

        <button type="button" className={filter === 'all' ? "btn btn-outline-info active" 
                                                                     : "btn btn-outline-info"} 
                              onClick={()=>setFilter('all')}> All 
        </button>
    </div>
  )
}

export default BtnGroup;




