import { HOMEFOOTERTEMPLATE } from "./Components/HomeFooterTemplate/HomeFooterTemplate.js";
import { HOMEROUNDFOOTERTEMPLATE } from "./Components/HomeRoundFooterTemplate/HomeRoundFooterTemplate.js";
import { LEFTTEXTBACKHEADER } from "./Components/LeftTextBackHeader/LeftTextBackHeader.js";
import { LEFTTEXTBACKHEADERBODY } from "./Components/LeftTextBackHeaderBody/LeftTextBackHeaderBody.js";
import { RIGHTTEXTBACKHEADER } from "./Components/RightTextBackHeader/RightTextBackHeader.js";
import { RIGHTTEXTBACKHEADERBODY } from "./Components/RightTextBackHeaderBody/RightTextBackHeaderBody.js";
import { ACCOUNTCHECKER } from "./Functions/AccountChecker/AccountChecker.js";
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
const LEFTTEXTBACKHEADERBODY=${LEFTTEXTBACKHEADERBODY};
const RIGHTTEXTBACKHEADERBODY=${RIGHTTEXTBACKHEADERBODY};
const ACCOUNTCHECKER=${ACCOUNTCHECKER};
const HOMEFOOTERTEMPLATE=${HOMEFOOTERTEMPLATE};
const HOMEROUNDFOOTERTEMPLATE=${HOMEROUNDFOOTERTEMPLATE};
`;
localStorage.setItem('TEMPLATES',DATA);
};
export{TEMPLATES};

`

const HOMEROUNDFOOTERTEMPLATE=${HOMEROUNDFOOTERTEMPLATE};

`