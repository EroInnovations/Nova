const NOVASTART=()=>{

    CLEAR('');

    BUTTON('','','50px','forestgreen','','pick file',(ELEMENT)=>{

        FILEPICKER ((da)=>{

            console.log(da)

        });

    });
  
};