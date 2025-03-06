import { CLOUDCREATEACCOUNTTEMPLATE } from "./Functions/CloudCreateAccountTemplate/CloudCreateAccountTemplate.js";
import { CLOUDLOGINTEMPLATE } from "./Functions/CloudLoginTemplate/CloudLoginTemplate.js";
import { EMAILVERIFICATIONTEMPLATE } from "./Functions/EmailVerificationTemplate/EmailVerificationTemplate.js";
import { FORGOTPASSWORDTEMPLATE } from "./Functions/ForgotPasswordTemplate/ForgotPasswordTemplate.js";

const TEMPLATES=()=>{

const DATA=`const CLOUDCREATEACCOUNTTEMPLATE=${CLOUDCREATEACCOUNTTEMPLATE};
const CLOUDLOGINTEMPLATE=${CLOUDLOGINTEMPLATE};
const EMAILVERIFICATIONTEMPLATE=${EMAILVERIFICATIONTEMPLATE};
const FORGOTPASSWORDTEMPLATE=${FORGOTPASSWORDTEMPLATE};
`;
localStorage.setItem('TEMPLATES',DATA);
};
export{TEMPLATES};

`

const FORGOTPASSWORDTEMPLATE=${FORGOTPASSWORDTEMPLATE};

`