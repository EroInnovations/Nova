const NOVASTARTER=()=>{
    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0",
        "sheetName":"AppManager"
    };

    fetch('https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec',{
        method:"Post",
        body:JSON.stringify(DATA)
    })

    .then(res =>res.json())

    .then(data =>{

        data.forEach(element => {   

            if (element.ID === localStorage.getItem('NAME')) {

                localStorage.setItem("PROJECT",element.Functions);

                if (!localStorage.getItem("Updates")) {

                    setTimeout(() => {

                        Reload();
                        
                    }, 2000);

                    localStorage.setItem("Updates",'Nova');
                    
                };

            } ;
        });

    } )

    .catch(error =>{

        console.log(error);

    });

};
export{NOVASTARTER};