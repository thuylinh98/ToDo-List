import React, {memo} from 'react';
const BulkAction = memo(props => {
  return (
    <div className="todo">
        Bulk Action
        <button className="button remove">Remove</button>
        <button className="button done">Done</button>
    </div>
  );
})

export default BulkAction;