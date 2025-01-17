import { BUTTON } from "./Button/Button.js";
import { FLOATFIXEDBUTTON } from "./FloatFixedButton/FixedButton.js";
import { FULLSCROLLVIEW } from "./FullScrollView/FullScrollView.js";
import { IMAGE } from "./Image/Image.js";
import { IMAGEBUTTON } from "./ImageButton/ImageButton.js";
import { INPUT } from "./Input/Input.js";
import { MESSAGEDISPLAY } from "./MessageDisplay/MessageDisplay.js";
import { ROUNDBUTTON } from "./RoundButton/RoundButton.js";
import { ROUNDINPUT } from "./RoundInput/RoundInput.js";
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
`;
localStorage.setItem('COMPONENTS',DATA);
};
export{COMPONENTS};

`
const BUTTON=${BUTTON};
`