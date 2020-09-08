const express = require('express');

const router = express.Router();

const GuestController = require('../controllers/guest');
const { route } = require('../main');

router.get('/', GuestController.HomePage);
router.get('/members', GuestController.MembersPage);
router.get('/voters-login', GuestController.VotingLogin);
router.get('/login', GuestController.VotingLogin);
router.get('/terms', GuestController.TermsPage);
router.get('/voting-page',GuestController.VotingPage);

module.exports = router;