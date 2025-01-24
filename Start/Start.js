import { ENVIRONMENT } from "../Environment/Environment.js";
const START=()=>{

    if (!localStorage.getItem('Updates')) {

        const body=document.querySelector(".body");
    
        body.innerHTML=`

            <h1>Updates</h1>

            <p>Please Wait</p>
            
            <p>Downloading Updates</p>

            <div class="LoadingIconer"></div>
        
        `;
        
    }
    
    ENVIRONMENT();
};
export{START};