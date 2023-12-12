

var express = require('express');
var router = express.Router();

//채팅 이력 리스트
router.get('/list',async(req,res)=>{
    res.render('message/list')
})
//신규 채팅 이력 생성
router.get('/create',async(req,res)=>{
    res.render('message/create')
}),

router.post('/create',async(req,res)=>{
    let userId = req.body.userId
    let userPassword= req.body.userPassword
    var member={
        userId,
        userPassword,
    }
    res.redirect('/message/list')
})
//채팅 이력 수정 
router.get('/modify',async(req,res)=>{
    res.render('message/modify')
})


router.post('/modify',async(req,res)=>{
    let userId = req.body.userId
    let userPassword= req.body.userPassword
    var member={
        userId,
        userPassword,
    }
    res.redirect('/message/list')
})

router.get('/delete',async(req,res)=>{
    res.redirect('/message/list')
})



module.exports = router;