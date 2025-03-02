import React from 'react'

function Ternary(){
    let a = true;
    let b = false;
    return (
        <div>   
            <div>   
                {a ? <div>“Stwierdzenie a jest prawdziwe”</div>:<div> “Stwierdzenie a jest fałszywe”</div>}
            </div>
            <div>
                {b ? <div> “Stwierdzenie b jest prawdziwe” </div>:<div> “Stwierdzenie b jest fałszywe”</div>}
            </div>
        </div>
    );

};
export default Ternary;