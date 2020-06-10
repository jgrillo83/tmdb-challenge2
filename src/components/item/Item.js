import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Level extends Lightning.Component{
    static getFonts() {
      return [{ family: 'Regular', url: Utils.asset('fonts/SourceSansPro-Regular.ttf') }]
    }
    static _template(){
        return {
            Image: {

            },
            Title: {
                w: 200,
                y: 280, x: 20, /* visible: false */
                text: {fontFace: "SourceSansPro-Regular", fontSize: 30}
            }
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */
    set title(v){
        // @todo: patch the correct image and title
        this._title = v;
        this.tag("Title").text = v;
    }

    set poster(v) {
      this._poster_path = v;
      this.tag("Image").src = this._poster_path;
    }
}
