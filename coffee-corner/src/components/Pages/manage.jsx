import React from "react";
function Manage() {
    return (
        <>
       
        <div className="navbar">
            <ul>
                 
                
                
                
                <Link to="/addmenu">Addmenu</Link>
                
                <Link to="/dash">Dashboard</Link>
                <Link TO="/updatemenu">Updatemenu</Link>
                <Link TO="/ViewMenu">ViewMenu</Link>
            </ul>
         </div>   
        </>

    );
}
export default Manage;