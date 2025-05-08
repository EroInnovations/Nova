export const ABOUTUSPAGE=()=>{

    BACKPAGE('HOMEPAGE');

    CLEAR('');

    IMAGE('',EROINNOVATIONSLOGOONE,'','','',()=>{

    });

    NAVTEMPLATE('','transparent','98%','50px','1%',(ELEMENT)=>{

        TEXT(ELEMENT,'h3','Home','','','',()=>{

            ROUTE('',HOMEPAGE,'HOMEPAGE');

        });

        TEXT(ELEMENT,'h3','Pricing','','','',()=>{

            ROUTE(' ',PRICINGPAGE,'ABOUTUSPAGE');

        });

        TEXT(ELEMENT,'h3','Metrics','','','',()=>{

            ROUTE(' ',METRICSPAGE,'ABOUTUSPAGE');

        });

    });

    VIEW('',' ','98%','auto','',(ELEMENT)=>{

        const Message='Elite Robust Ontology is a Cloud Native Based Company That is located in Mbale City,In Uganda.';

        LEFTTEXT(ELEMENT,'',Message,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Message1='It was Founded By Erou Andrew Richard and It Ventures in Mobile App Development,Desktop Software,Website Development and System Development,Elite Robust Ontology Is Fully Registered Company In Uganda and Adheres to the Rules Governing it.';

        LEFTTEXT(ELEMENT,'',Message1,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Message2='We have experiencied Developers who can build your Dream Today,all you have to is to imagine and come with your idea and our expertise will make your idea a reality and leave you to inspire others,We set the Pase for others to Follow.';

        LEFTTEXT(ELEMENT,'',Message2,'','','1%','',()=>{

        });

        
        BREAK(ELEMENT);

        const Message3='In Uganda ,We are the Best in Cloud Native Development for all your ICT Problems and We Solve your Problem Beyond your expectations.';

        LEFTTEXT(ELEMENT,'',Message3,'','','1%','',()=>{

        });

        BREAK(ELEMENT);

        const Message4='Elite Robust Ontology is the First Company in Uganda to Build a Cloud Native Frame Work named Nova that builds not only Cross Platform Solutions but It Also Powers those Platforms and its actively Maintained by our team of Engineers and Ready to make the world a better place with our Cloud Native Solutions that are Breaking Records in the tech World.';

        LEFTTEXT(ELEMENT,'',Message4,'','','1%','',()=>{

        });


    });

    CENTERTEXT('','h1','Market Share','','25px','2%',()=>{

    });

    LEFTTEXT('','','Elite Robust Ontology is Valued at a Market Share of $4,100.6 per 26th April,2025.This figure has Either Increased or Decreased Since its Based on Monthly Report not Daily.','','','1%','',()=>{

    });

    BREAK('');

};
