import './AudioControl.css';
import './font.css';
import Html from './AudioControl.html';
import Component from "../Component";

class AudioControl extends Component{
    audio;

    constructor (audio){
        super(Html);
        this.audio = audio;
        this.render();
    }
}

export default AudioControl;