const ELITEPAY=(EMAIL,AMOUNT,Callback)=>{

    fetch('https://script.google.com/macros/s/AKfycbyocwtVomJAIynregiiAeNUc-wtQABP78BWGnV-GOELmX_lgGGrRZE357H_NrMYO8NRbQ/exec')
    .then(res =>res.json())
    .then(data =>{

        fetch('https://script.google.com/macros/s/AKfycbyr8GUc6TTiMabOQooZHHF4kWyxnVG82tHY5Sn_VrqUBMRpeCfjPrrzx6ZHyi4kOyToCw/exec',{
            method:'Post',
            body:JSON.stringify({
                "site": "https://eroinnovations.site",
                "token": data.token
            })
        })
        .then(res => res.json())
        .then(datata =>{

            console.log(datata)

            fetch('https://script.google.com/macros/s/AKfycbwUqiPhyLcPrv_Ck49ZnBLjlrQqnA1XGWXDUoU_I8jZLzJXPr_uv_b6XaYBxxVjK92zrA/exec',{
                method:'Post',
                body:JSON.stringify(
                    {
                        "token": data.token,
                        "id": new Date(),
                        "amount": AMOUNT,
                        "currency":"USD",
                        "description": "Test payment",
                        "callback_url": "https://eroinnovations.site",
                        "notification_id": datata.ipn_id,
                        "billing_address": {
                          "email_address":EMAIL,
                          "phone_number": "",
                          "country_code": "",
                          "first_name": "",
                          "middle_name": "",
                          "last_name": "",
                          "line_1": "",
                          "line_2": "",
                          "city": "",
                          "state": "",
                          "postal_code": "",
                          "zip_code": ""
                        }
                    }
                      
                )
            })
            .then(res => res.json())
            .then(datate =>{

                Callback(datate.redirect_url);
    
            })
            .catch(error =>console.log(error))

        })
        .catch(error =>console.log(error))

    })
    .catch(error =>console.log(error))

}
export{ELITEPAY};