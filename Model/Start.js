const NOVASTARTER=()=>{

    if ( localStorage.getItem('Environment') === 'Development' ) {

        localStorage.setItem("PROJECT",'');

        if (!localStorage.getItem('Updates')) {

            localStorage.setItem('Updates','On');

            Reload();
            
        };
        
    } else {

        const DATA={
            "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
            "sheetName":"APPMANAGER"
        };

        fetch('https://script.google.com/macros/s/AKfycbwc_ZdByDbw4u-OcEcAaJQt11bfAe3znQ7pYre6pl1KOyIrx8E8PN9yIs1KVcLYPjQlOw/exec',{
            method:"Post",
            mode:"cors",
            body:JSON.stringify(DATA)
        })
    
        .then(res =>res.json())
    
        .then(data =>{
    
            if (!localStorage.getItem('Updates')) {
    
                const body=document.querySelector(".body");
        
                body.innerHTML=`
    
                    <br><br><br>
            
                    <h1>Updates</h1>
            
                    <p>Almost Ready</p>
                    
                    <p>Installing Updates</p>
            
                    <div class="LoadingIconer"></div>
                
                `;
                
            };
    
            data.forEach(element => {
    
                if (localStorage.getItem('Environment') === 'Development')  {
    
                    localStorage.setItem("PROJECT",'');
    
                    if (!localStorage.getItem('Updates')) {
    
                        localStorage.setItem('Updates','On');
    
                        Reload();
                        
                    };
    
                } else {
    
                    if (element.ID === localStorage.getItem("NAME") ) {
    
                        if (localStorage.getItem('Environment') === 'Production') {
    
                            localStorage.setItem("PROJECT",element.AndroidDesign+element.AndroidFunctions+element.SharedDesign+element.SharedFunctions+element.AppLogic);
                          
                            if (!localStorage.getItem('Updates')) {
    
                                localStorage.setItem('Updates','On');
    
                                Reload();
                                
                            };
                            
                            return;
    
                        };
    
                        if (localStorage.getItem('Environment') === 'Web') {
                            
                            localStorage.setItem("PROJECT",element.WebDesign+element.WebFunctions+element.SharedDesign+element.SharedFunctions+element.AppLogic);
                          
                            if (!localStorage.getItem('Updates')) {
    
                                localStorage.setItem('Updates','On');
    
                                Reload();
                                
                            };
                            
                            return;
    
                        };
    
                        if (localStorage.getItem('Environment') === 'Desktop') {
                            
                            localStorage.setItem("PROJECT",element.DesktopDesign+element.DesktopFunctions+element.SharedDesign+element.SharedFunctions+element.AppLogic);
                          
                            if (!localStorage.getItem('Updates')) {
    
                                localStorage.setItem('Updates','On');
    
                                Reload();
                                
                            };
                            
                            return;
    
                        };
                        
                    };
                    
                };
                
            });
    
        } )
    
        .catch(error =>{
    
            console.log(error);
    
        });
        
    };

};
export{NOVASTARTER};