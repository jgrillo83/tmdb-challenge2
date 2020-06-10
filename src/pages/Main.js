import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List, Item} from "../components"
import {getImgUrl, getBackdropImgUrl} from "../lib/tools"

export default class Main extends Lightning.Component{
    static _template() {
        return {
            Background: {
                w: 1920, h: 1080,
            },
            Logo: {
                src: Utils.asset("images/logo.png"),
                x: 80, y: 50, alpha: 1,
            },
            Lists: {
                x: 100, y: 700, zIndex: 3
            },
            FocusIndicator: {

            }
        };
    }

    _init() {
        console.log("_init MAIN");
        this._index = 0;
        this._movies = 0;
    }

    _setIndex(idx){
      // store new index
      this._index = idx;
      this.tag("Background").src = getBackdropImgUrl(this._movies[this._index].backdrop_path);
      this.tag("Lists").setSmooth("x", 100 - (idx ? ((idx  * 250) + 15) : 0));
    }

    _handleUp(){
      // todo
    }

    _handleDown(){
      // todo
    }

    _handleRight() {
      this._setIndex(Math.min(++this._index, this._movies.length - 1));
    }

    _handleLeft() {
      this._setIndex(Math.max(0, --this._index));
    }

    _focus() {
      console.log("_focus MAIN");
    }

    _unfocus() {
        // @todo
    }

    /**
     * @todo: add set movies() that will be called by the data-provider
     * inside set movies create new List child and call it's movies setter
     * and hand over the movies
     */
     set movies(v) {
       this._movies = v;
       this.tag("Lists").children = v.map((el, idx) => {
           return { type: Item,
             title: el.title,
             poster: getImgUrl(el.poster_path),
             x: idx*250
           }
       })
     }

    _getFocused() {
        // @todo: delegate focus to List child
        return this.childList[this._index]
    }

    _active() {
      console.log("Main : active")
    }
}
