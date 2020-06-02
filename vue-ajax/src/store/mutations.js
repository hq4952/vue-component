import {isLoadingT,ReqT,ReqF} from "./instaedName.js"
export const mutations = {
    [isLoadingT](state){
        state.isLoading = true;
        state.isFirst = false
    },
    // isLoadingF(state){
    // },
    [ReqT](state,users){
        state.isLoading = false;
        state.users = users
    },
    [ReqF](state,errmsg){
        state.isLoading = false;
        state.errmsg = errmsg
    }
}