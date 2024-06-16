import {dataKey} from "./constant.js";
import data from "./data.js";

const Model = {
    checkData (){
        if(localStorage.getItem(dataKey)) return
        localStorage.setItem(dataKey, JSON.stringify(data))
    },

    getData () {
        const data = JSON.parse(localStorage.getItem(dataKey));
        return data;
    },
}

export default Model