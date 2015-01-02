/**
 * Created by janos on 27/12/14.
 */
module.exports = {

    db: 'mongodb://localhost/mean-skel',
    sessionSecret: 'developmentSessionSecret',
    port: 3000,

    facebookAuth : {
        'clientID'      : '341567182697899',
        'clientSecret'  : '3c2b03ee1e763e9ff5ecb3370cae1ed3',
        'callbackURI'   : 'http://localhost:' + this.port + '/auth/facebook/callback'
    },

    twitterAuth : {
        'consumerKey'       : 'fJF5KbO7TpJAM3XunLbeu9zUl',
        'consumerSecret'    : 'W4Xp5XOXlFsAE9JHZ8m3beFsztPj2J9Z9K4G4j0PeTx1oMzvBf',
        'callbackURI'       : 'http://localhost:' + this.port + '/auth/twitter/callback'
    },

    googleAuth : {
        'clientID'      : '656002956013-4rjut15amlhufnhjvlao7qqcetuvplvq.apps.googleusercontent.com',
        'clientSecret'  : 'mdU4Ocu1B1uvNrSP3CHELH_q',
        'callbackURI'   : 'http://localhost:' + this.port + '/auth/google/callback'
    }

};