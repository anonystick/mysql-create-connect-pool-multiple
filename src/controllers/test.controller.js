'use strict'
// XEM KHOA HOC VIEN DE HIEU VE PROCESS CONTROLER + SERVICE + REPO + MODEL
class TestController {
    
    test = async (req, res, next) => {
        try {
            res.json({
                OK: 1
            })
        } catch (error) {
            console.error(`error::`, error)
            // next()
        }
    }
    
}

module.exports = new TestController()