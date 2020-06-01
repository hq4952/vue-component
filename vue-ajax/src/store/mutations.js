export const mutations = {
    isLoadingT(state){
        state.isLoading = true;
        state.isFirst = false
    },
    // isLoadingF(state){
    // },
    reqsuccess(state,users){
        state.isLoading = false;
        state.users = users
    },
    reqfailed(state,errmsg){
        state.isLoading = false;
        state.errmsg = errmsg
    }
}