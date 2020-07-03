const express = require('express');
const router = express.Router();
const Story = require('../models/Photo');

// @desc Landing Page
// @route '/'
router.get('/', (req, res) => {
    res.render('hello');
})

// // Auth with google
// // @route GET /auth/google/

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// // @route GET /auth/google/callback
// router.get(
//     '/google/callback',
//     passport.authenticate('google', { failureRedirect: './' }),
//     (req, res) => {
//         res.redirect('/dashboard');
//     }
// );

// // @desc Logout User
// // @route GET /auth/logout
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Story = require('../models/Story');
// const { ensureAuth, ensureGuest } = require('../middleware/auth');

// // Login/LandingPage
// // @route GET/

// router.get('/', ensureGuest, (req, res) => {
//     res.render('login', {
//         layout: 'login'
//     });
// });

// router.get('/dashboard', ensureAuth, async (req, res) => {
//     try {
//         const stories = await Story.find({ user: req.user.id }).lean();
//         res.render('dashboard', {
//             layout: 'main',
//             name: req.user.firstName,
//             stories
//         });
//     } catch (err) {
//         console.error(err);
//         res.render('error/500');
//     }
// });

module.exports = router;
