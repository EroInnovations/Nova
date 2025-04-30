const ELITEPAY=(EMAIL,AMOUNT,DESCRIPTION,Callback)=>{

    fetch('https://script.google.com/macros/s/AKfycbw6BSTEaPrr8sPokyKMtuNVJdvTo-9tZy7w42g-Du43C--ebEIgkplQDtkdM91GKJThHQ/exec')
    .then(res =>res.json())
    .then(data =>{

        fetch('https://script.google.com/macros/s/AKfycbyNOslxcSIi2w_f9lKNt2gvefysR-_piITlIUl0EEwepUBUYpbqrddQdvavXStCurVgpw/exec',{
            method:'Post',
            body:JSON.stringify({
                "site": "https://eroinnovations.site",
                "token": data.token
            })
        })
        .then(res => res.json())
        .then(datata =>{

            fetch('https://script.google.com/macros/s/AKfycbxcjfDVJ11W5N2_QOV_djJBu3iLFwTubtwELxSX_ib7Jb3vTAqCSGFjyEfmDYEaSmfb7A/exec',{
                method:'Post',
                body:JSON.stringify(
                    {
                        "token": data.token,
                        "id": new Date(),
                        "amount": AMOUNT,
                        "currency":"USD",
                        "description":DESCRIPTION||"Payment On Elite Pay",
                        "callback_url": "https://eroinnovations.site/AfterPay.html",
                        "notification_id": datata.ipn_id,
                        "billing_address": {
                          "email_address":EMAIL,
                          "phone_number": "",
                          "country_code": "",
                          "first_name": EMAIL,
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