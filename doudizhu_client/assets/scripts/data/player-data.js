let PlayerData = function () {
    let that ={};
    that.uid = undefined;
    that.uniqueID = '10000'; //此处是由于事先没有做微信登陆的步骤所以先做一个假的id先
    that.nickName = '小明' + Math.floor(Math.random() * 10 );
    that.avatarUrl = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=373849174,2079142017&fm=27&gp=0.jpg';
    that.houseCardCount = 0;
    for (let i = 0; i < 7 ; i++) {
        that.uniqueID += Math.floor(Math.random() * 10);
    }
    //以下用于编写微信的回调
    that.wxLoginSuccess = function(data) {
        that.uniqueID = data.uniqueID;
        that.nickName = data.nickName;
        that.avatarUrl = data.avatarUrl;
     };
        that.loginSuccess = function (data) {
            console.log('data = ' + JSON.stringify(data));
        };
    return that;
};
export default PlayerData;