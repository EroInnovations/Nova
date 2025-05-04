import { CENTERTEXT } from "../../Library/Components/CenterText/CenterText.js";
import { FOOTER } from "../../Library/Components/Footer/Footer.js";
import { ICONTEXT } from "../../Library/Components/IconText/IconText.js";
import { IMAGE } from "../../Library/Components/Image/Image.js";
import { LEFTTEXT } from "../../Library/Components/LeftText/LeftText.js";
import { RIGHTVIEW } from "../../Library/Components/RightView/RightView.js";
import { VIEW } from "../../Library/Components/View/Views.js";
import { GETINDEXEDDATA } from "../../Library/Functions/GetIndexedData/GetIndexedData.js";
import { RELOAD } from "../../Library/Functions/Reload/Reload.js";
import { ROUTE } from "../../Library/Functions/Route/Route.js";
import { STYLED } from "../../Library/Functions/Style/Style.js";
import { HOMEHEADERTEMPLATE } from "../../Library/Templates/Components/HomeHeaderTemplate/HomeHeaderTemplate.js";
import { LEFTTEXTBACKHEADERBODY } from "../../Library/Templates/Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { DOWNLOADSAVEINDEX } from "../../Library/Templates/Functions/DownloadSaveIndex/DownloadSaveIndex.js";

const API='https://docs.google.com/spreadsheets/d/1CL2HWe9Pwj18F7O9RKny8oRQFAw5-K_A0Io-rvCWryk/edit?usp=sharing';

export const ANDROIDELGON=()=>{

    DATALOADER();

    HOMEHEADERTEMPLATE('','transparent','transparent',(ELEMENT)=>{

        ICONTEXT(ELEMENT,WHITEMOVIEICON,'transparent','#fff','80px','40px','20px','20px','Services','auto 5%',()=>{

            ROUTE(' ',SERVICESPAGE,'ANDROIDELGON');

        });

        ICONTEXT(ELEMENT,WHITETRENDINGTOPICSICON,'transparent','#fff','70px','40px','20px','20px','Stories','auto  20% 5%',()=>{

            ROUTE(' ',NEWSPAGE,'ANDROIDELGON');

        });

        ICONTEXT(ELEMENT,WHITEPHONEICON,'transparent','#fff','150px','40px','20px','20px','Contact Us','auto  1%',()=>{

            ROUTE(' ',CONTACTPAGE,'ANDROIDELGON');

        });

    },(ELEMENT)=>{

        GETINDEXEDDATA('Posts','Posts',(data)=>{

            VIEW(ELEMENT,'transparent','95%','50%','2% auto',(ELEMENTS)=>{

                STYLED(ELEMENTS,'border-radius','5px');
                STYLED(ELEMENTS,'overflow','hidden');

                IMAGE(ELEMENTS,data.ProductImage,'100%','100%','',()=>{

                });

                FOOTER(ELEMENTS,'#000000','100%','100px',(ELEMENTES)=>{

                    LEFTTEXT(ELEMENTES,'',data.ProductDetails,'','20px','1%','0 auto',()=>{

                    });

                    RIGHTVIEW(ELEMENTES,'forestgreen','100px','40px','10% 2%',(ELE)=>{

                        STYLED(ELE,'border-radius','5px');

                        CENTERTEXT(ELE,'','Full Story','#fff','20px','5%',()=>{

                            ROUTE(' ',FULLPAGE,'ANDROIDELGON');

                        });

                    });

                });

            });

        });

    });

};

const SERVICESPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE(' ',ANDROIDELGON,'ANDROIDELGON');

    },'Video Services','',()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('Videos','Videos',(data)=>{

            VIEW(ELEMENT,'blue','95%','50%','2% auto',(ELEMENTS)=>{

                STYLED(ELEMENT,'border-radius','5px');
                
            });

        });

    });

};

const NEWSPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE(' ',ANDROIDELGON,'ANDROIDELGON');

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

        ROUTE(' ',ANDROIDELGON,'ANDROIDELGON');

    },'Contact Us','',()=>{

    },(ELEMENT)=>{

    });
};

const FULLPAGE=()=>{

    LEFTTEXTBACKHEADERBODY('',()=>{

        ROUTE(' ',ANDROIDELGON,'ANDROIDELGON');

    },'Life Changing Stories','',()=>{

    },(ELEMENT)=>{

        GETINDEXEDDATA('Products','Products',(data)=>{

            VIEW(ELEMENT,'blue','95%','50%','2% auto',(ELEMENT)=>{

                
                STYLED(ELEMENT,'border-radius','5px');

            });

        });

    });
};

const DATALOADER=()=>{

    DOWNLOADSAVEINDEX(API,'ElgonPosts','Posts',(data)=>{

        RELOAD();
        
    });

    DOWNLOADSAVEINDEX(API,'ElgonPosts','Videos',(data)=>{

    });

    DOWNLOADSAVEINDEX(API,'ElgonPosts','LifeStories',(data)=>{

    });

};