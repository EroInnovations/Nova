import { LEFTTEXTBACKHEADER } from "./Components/LeftTextBackHeader/LeftTextBackHeader.js";
import { RIGHTTEXTBACKHEADER } from "./Components/RightTextBackHeader/RightTextBackHeader.js";
import { CLOUDCREATEACCOUNTTEMPLATE } from "./Functions/CloudCreateAccountTemplate/CloudCreateAccountTemplate.js";
import { CLOUDLOGINTEMPLATE } from "./Functions/CloudLoginTemplate/CloudLoginTemplate.js";
import { EMAILVERIFICATIONTEMPLATE } from "./Functions/EmailVerificationTemplate/EmailVerificationTemplate.js";
import { FORGOTPASSWORDTEMPLATE } from "./Functions/ForgotPasswordTemplate/ForgotPasswordTemplate.js";

const TEMPLATES=()=>{
const DATA=`const CLOUDCREATEACCOUNTTEMPLATE=${CLOUDCREATEACCOUNTTEMPLATE};
const CLOUDLOGINTEMPLATE=${CLOUDLOGINTEMPLATE};
const EMAILVERIFICATIONTEMPLATE=${EMAILVERIFICATIONTEMPLATE};
const FORGOTPASSWORDTEMPLATE=${FORGOTPASSWORDTEMPLATE};
const LEFTTEXTBACKHEADER=${LEFTTEXTBACKHEADER};
const RIGHTTEXTBACKHEADER=${RIGHTTEXTBACKHEADER};
`;
localStorage.setItem('TEMPLATES',DATA);
};
export{TEMPLATES};

`

const RIGHTTEXTBACKHEADER=${RIGHTTEXTBACKHEADER};

`