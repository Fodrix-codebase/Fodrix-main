import React from 'react';
import '../css/DnT.css';

export default function DnT() {
    return (
        <>
            
    <div className="container_dt">
    <div className="box_dt">
    <div className="head1_dt">
    <h1>Finally, when is your shoot?</h1>
    </div>
    <p className="p2_dt">When do you need your photographer? You can change this later if needed.
    </p>
<form className="d_t" method="post" name="form">
    <div className="sub-main_dt">
    <br/>
    <div className="font_dt">Shoot Date</div>
    <input type="date" name="date" placeholder="dd-mm-yyyy" required=""/>
    <div className="font_dt">Start Time</div>
    <input type="time" name="time" placeholder="time" required=""/>
    <br/>
   <button type="submit" onclick="location.href='avaliable.html'">Next</button>
   </div>
</form>
</div>
</div>
        </>
    );
}