import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { FOOTER } from "../../Library/Components/Footer/Footer.js";
import { ICONTEXT } from "../../Library/Components/IconText/IconText.js";
import { IFRAME } from "../../Library/Components/Iframe/Iframe.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { LEFTTEXT } from "../../Library/Components/LeftText/LeftText.js";
import { RIGHTTEXT } from "../../Library/Components/RightText/RightText.js";
import { RIGHTVIEW } from "../../Library/Components/RightView/RightView.js";
import { TEXT } from "../../Library/Components/Text/Text.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { GETINDEXEDDATA } from "../../Library/Functions/GetIndexedData/GetIndexedData.js";
import { JSONIFICATION } from "../../Library/Functions/Jsonification/Jsonification.js";
import { RELOAD } from "../../Library/Functions/Reload/Reload.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";
import { SESSIONDEJSONDATA } from "../../Library/Functions/SessionDejsonData/SessionDejsonData.js";
import { STOREDATA } from "../../Library/Functions/StoreData/StoreData.js";
import { STYLED } from "../../Library/Functions/Style/Style.js";
import { HOMEHEADERTEMPLATE } from "../../Library/Templates/Components/HomeHeaderTemplate/HomeHeaderTemplate.js";
import { LEFTTEXTBACKHEADERBODY } from "../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { NAVTEMPLATE } from "../../Library/Templates/Components/NavTemplate/NavTemplate.js";
import { DOWNLOADSAVEINDEX } from "../../Library/Templates/Functions/DownloadSaveIndex/DownloadSaveIndex.js";

const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';

export const ANDROIDELGON=()=>{

    DATALOADER();

    HOMEHEADERTEMPLATE('','transparent','transparent',(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHITEMOVIEICON,'transparent','#fff','80px','40px','20px','20px','Services','auto 5%',()=>{

            ROUTE(' ',SERVICESPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITETRENDINGTOPICSICON,'transparent','#fff','70px','40px','20px','20px','Stories','auto  20% 5%',()=>{

            ROUTE(' ',NEWSPAGE,'HOMEPAGE');

        });

        ICONTEXT(ELEMENT,WHITEPHONEICON,'transparent','#fff','150px','40px','20px','20px','Contact Us','auto  1%',()=>{

            ROUTE(' ',CONTACTPAGE,'HOMEPAGE');

        });

    },(ELEMENT)=>{

        GETINDEXEDDATA('Posts','Posts',(data)=>{

            VIEW(ELEMENT,'transparent','95%','50%','2% auto',(ELEMENTS)=>{

                STYLED(ELEMENTS,'border-radius','5px');
                STYLED(ELEMENTS,'overflow','hidden');

                IMAGE(ELEMENTS,data.Main,'100%','100%','',()=>{

                });

                FOOTER(ELEMENTS,'#000000','100%','100px',(ELEMENTES)=>{

                    LEFTTEXT(ELEMENTES,'',data.Short,'','20px','1%','0 auto',()=>{

                    });

                    RIGHTVIEW(ELEMENTES,'forestgreen','100px','40px','10% 2%',(ELE)=>{

                        STYLED(ELE,'border-radius','5px');

                        CENTERTEXT(ELE,'','Full Story','#fff','20px','5%',()=>{

                            JSONIFICATION(data,(MyData)=>{

                                STOREDATA('','CurrentPost',MyData);

                                ROUTE(' ',FULLPAGE,'HOMEPAGE');

                            });

                        });

                    });

                });

            });

        });

    });

};

const SERVICESPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE(' ',HOMEPAGE,'HOMEPAGE');

    },'Video Services','',()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('Videos','Videos',(data)=>{

            console.log(data);

            VIEW(ELEMENT,'transparent','95%','50%','2% auto',(ELEMENTS)=>{

                LEFTTEXT(ELEMENTS,'',data.Name,'','','','',()=>{

                });

                RIGHTTEXT(ELEMENTS,'',data.Time,'','','','',()=>{

                });

                STYLED(ELEMENTS,'border-radius','5px');
                STYLED(ELEMENTS,'overflow','hidden');

                IFRAME(ELEMENTS,(ELE)=>{

                    ELE.src=data.Long;

                });
                
            });

        });

    });

};

const NEWSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE(' ',HOMEPAGE,'HOMEPAGE');

    },'Life Changing Stories','',()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('LifeStories','LifeStories',(data)=>{

            VIEW(ELEMENT,'blue','95%','50%','2% auto',(ELEMENT)=>{

                
                STYLED(ELEMENT,'border-radius','5px');

            });

        });

    });
};

const CONTACTPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE(' ',HOMEPAGE,'HOMEPAGE');

    },'Contact Us','',()=>{

    },(ELEMENT)=>{

    });
};

const FULLPAGE=()=>{

    SESSIONDEJSONDATA('CurrentPost',(data)=>{

        console.log(data);

        LEFTTEXTBACKHEADERBODY('',()=>{

            ROUTE(' ',HOMEPAGE,'HOMEPAGE');
    
        },data.Name,'',()=>{
    
        },(ELEMENT)=>{

            IMAGE(ELEMENT,data.Main,'95%','50%','',()=>{

            });

            VIEW(ELEMENT,'','95%','auto','',(ELEMENTES)=>{

                LEFTTEXT(ELEMENTES,'',data.Long,'20px','','1%','5%',()=>{

                });

            });

            NAVTEMPLATE(ELEMENT,'','95%','50px','',(ELE)=>{

                LEFTTEXT(ELE,'','Posted On:'+data.Time,'20px','','1%','5%',()=>{

                });

            });

            NAVTEMPLATE(ELEMENT,'','95%','50px','',(ELE)=>{

                LEFTTEXT(ELE,'','Posted By:'+data.Posted,'20px','','1%','5%',()=>{

                });

            })
  
        })
    });

};

const DATALOADER=()=>{

    DOWNLOADSAVEINDEX(API,'ElgonPosts','Posts',(data)=>{

        RELOAD();
        
    });

    DOWNLOADSAVEINDEX(API,'ElgonServices','Videos',(data)=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonNews','LifeStories',(data)=>{

    });

};