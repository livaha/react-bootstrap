function setcookie(){    
    //window is not defined
    window.document.cookie='SESSION_ID=1'; 
}
module.exports = function (data) {
    switch(data.cgid){
        /**登陆页面 login */
        case 0:
            if((data.username==='admin')&&(data.password==='admin'))
                return {
                    restcode:2000,
                    errmsg:'success',
                    first_boot:0
                }
            else return{
                restcode:4001,
                errmsg:'unauthorized',
                first_boot:0
            }
        /** 登陆页面 auth */
        case 1:
            return {
                restcode:2000,
                errmsg:'success',
                first_boot:0
            }
        default:            
            return{
                restcode:4008,
                'error':'the message you send is not defined!',
                "locktime":	8,
            }
    }
  };
  