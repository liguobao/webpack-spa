

import Audio from "../Component/Audio/Audio";
import AudioControl from "../Component/AudioControl/AudioControl";

class AudioControlTest {
    audio;
    audioControl;
    constructor (){
        this.audio = new Audio();
        this.audioControl = new AudioControl(this.audio.audio);
    }
}

export default AudioControlTest;