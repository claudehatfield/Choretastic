import React from "react";

function Table() {
  return (
    
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead>
    <tr >
      <th><abbr title="Chore">Chore</abbr></th>
      <th><abbr title="Value">Value</abbr></th>
      <th><abbr title="Due">Due By</abbr></th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
      <td> Mow The Yard</td>
      <td> 5.00</td>
      <td> Nov 8 2019</td>
      <button class="button is-success">Done</button>
    </tr>
    </tbody>
</table>
      
  );
}

export default Table;