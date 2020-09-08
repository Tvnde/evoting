module.exports = {
    HomePage: (req, res) => {
        res.render('index', {title: 'Welcome'});
    },
    MembersPage: (req, res) => {
        res.render('member', {title: 'Members Area'});
    },
    VotingLogin: (req, res) => {
        res.render('votinglogin', {title: 'Voting Login'});
    },
    VotingPage: (req, res) => {
        res.render('votingpage', {title: "Voting Page"});
    },
    LoginPage: (req, res)=> {
        res.render('login', {title: "login"});
    },
    TermsPage: (req, res) => {
        res.render('terms', {title: "Terms and Conditions"});
    }
}