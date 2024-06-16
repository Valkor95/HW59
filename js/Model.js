import {dataKey} from "./constant";
import data from "./data";

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