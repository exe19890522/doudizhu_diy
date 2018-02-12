// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

import global from './../global'
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    //此处教程中使用的是onLoad:function()，也可以使用start（）
    onLoad: function () {
        /*此处为一开始的代码，已在后面的课程中被改写
        let socket = io('http://localhost:3000')
        socket.on('welcome',function (data) {
            console.log('data = ' + data);   //要验证此代码需要实先重启服务端
        */
        global.socket.init();

        },

    buttonClick(event, customData) {
        console.log('customdata = ' + customData); //返回数据，以后把微信的回调写在这里
        switch (customData) {
            case 'wxLogin':
                global.socket.login(
                    global.tianba.playerData.uniqueID,
                    global.tianba.playerData.nickName,
                    global.tianba.playerData.avatarUrl,function (err,data) {
                        if (err){
                            console.log('login err'+ err);
                        }else {
                            console.log('login data =' + JSON.stringify(data));
                        }
                    });
                break;
            default:
                break;

        }
    }

    // update (dt) {},
});
