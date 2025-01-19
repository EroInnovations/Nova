import { ALERTBOX } from "./AlertBox/AlertBox.js";
import { BUTTON } from "./Button/Button.js";
import { FLOATFIXEDBUTTON } from "./FloatFixedButton/FixedButton.js";
import { FOOTER } from "./Footer/Footer.js";
import { FULLSCROLLVIEW } from "./FullScrollView/FullScrollView.js";
import { HEADER } from "./Header/Header.js";
import { ICON } from "./Icon/Icon.js";
import { IMAGE } from "./Image/Image.js";
import { IMAGEBUTTON } from "./ImageButton/ImageButton.js";
import { INPUT } from "./Input/Input.js";
import { LEFTBUTTONTEXT } from "./LeftButtonText/LeftButtonText.js";
import { LEFTIMAGE } from "./LeftImage/LeftImage.js";
import { LEFTTEXT } from "./LeftText/LeftText.js";
import { MESSAGEDISPLAY } from "./MessageDisplay/MessageDisplay.js";
import { ROUNDBUTTON } from "./RoundButton/RoundButton.js";
import { ROUNDINPUT } from "./RoundInput/RoundInput.js";
import { TEXT } from "./Text/Text.js";
import { TEXTAREA } from "./TextArea/TextArea.js";
const COMPONENTS=()=>{
const DATA=`const INPUT=${INPUT};
const ROUNDINPUT=${ROUNDINPUT};
const ROUNDBUTTON=${ROUNDBUTTON};
const IMAGE=${IMAGE};
const MESSAGEDISPLAY=${MESSAGEDISPLAY};
const FLOATFIXEDBUTTON=${FLOATFIXEDBUTTON};
const IMAGEBUTTON=${IMAGEBUTTON};
const FULLSCROLLVIEW=${FULLSCROLLVIEW};
const BUTTON=${BUTTON};
const LEFTBUTTONTEXT=${LEFTBUTTONTEXT};
const LEFTTEXT=${LEFTTEXT};
const TEXTAREA=${TEXTAREA};
const ALERTBOX=${ALERTBOX};
const HEADER=${HEADER};
const FOOTER=${FOOTER};
const ICON=${ICON};
const LEFTIMAGE=${LEFTIMAGE};
const TEXT=${TEXT};
`;
localStorage.setItem('COMPONENTS',DATA);
};
export{COMPONENTS};

`
const TEXT=${TEXT};
`