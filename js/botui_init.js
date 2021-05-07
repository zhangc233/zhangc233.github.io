function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
        delay: 800,
        content: "Hi, 欢迎光临我的学习录😊"
    }).then(function() {
        botui.message.add({
            delay: 1100,
            content: "我是小张😄"
        }).then(function() {
            botui.message.add({
                delay: 1100,
                content: "你也可以叫我ZC~😋"
            }).then(function() {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "我想知道更多关于学习的!😃",
                        value: "sure"
                    }, {
                        text: "好的，就这样吧，拜拜！🙄",
                        value: "skip"
                    }]
                }).then(function(a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function() {
            botui.message.add({
                delay: 600,
                content: "🎉🎉🎉🎉🎉🎉"
            }).then(function() {
                secondpart()
            })
        },
        end = function() {
            botui.message.add({
                delay: 600,
                content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
            })
        },
        secondpart = function() {
            botui.message.add({
                delay: 5000,
                content: "首先呢，很感谢您肯在这里驻足片刻❤️。这里是一个个人性质的博客，我会在这里发表各种各样的内容。"
            }).then(function() {
                botui.message.add({
                    delay: 15000,
                    content: "学习吖"
                }).then(function() {
                    botui.message.add({
                        delay: 5000,
                        content: "分类是我随便想的。👀"
                    }).then(function() {
                        botui.message.add({
                            delay: 8000,
                            content: "都是见名知意啦！🎉"
                        }).then(function() {
                            botui.message.add({
                                delay: 5000,
                                content: "相册不要看，很羞耻的。😶"
                            }).then(function() {
                                botui.message.add({
                                    delay: 4000,
                                    content: "我个人最推荐的不断更，是我来说是个挑战，很可能断更。👻"
                                }).then(function() {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "为什么叫ZC的学习录呢？🤔",
                                            value: "why-mashiro"
                                        }]
                                    }).then(function(a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function() {
            botui.message.add({
                delay: 1e3,
                content: "诶？ZC是我的英文名啊😏。"
            }).then(function() {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "😲，那英文名为什么叫ZC呢？",
                        value: "why-cat"
                    }]
                }).then(function(a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function() {
            botui.message.add({
                delay: 3000,
                content: "这个是因为我的名字的首字母啊 "
            }).then(function() {
                botui.message.add({
                    delay: 3000,
                    content: "嘻嘻~"
                }).then(function() {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "方便透露一下真名吗？👀",
                            value: "why-domain"
                        }]
                    }).then(function(a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function() {
            botui.message.add({
                delay: 5000,
                content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
            }).then(function() {
                botui.message.add({
                    delay: 3000,
                    content: "只是一介无名小卒而已^_^"
                })
            })
        }
}