import axios from "axios";

export default {
  install(Vue,option){
    Vue.prototype.axios=axios;
  }
}
