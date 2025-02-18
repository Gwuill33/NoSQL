const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Routes CRUD pour les profils
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.createProfile);
router.put('/:id', controller.updateProfile);
router.delete('/:id', controller.deleteProfilebyId);

// Routes pour gérer les expériences
router.post('/:id/experience', controller.addExperience);
router.delete('/:id/experience/:exp', controller.deleteExperience);

// Routes pour gérer les compétences
router.post('/:id/skills', controller.addSkill);
router.delete('/:id/skills/:skill', controller.deleteSkill);

// Route pour mettre à jour les informations du profil
router.put('/:id/information', controller.updateProfileInfo);

// Route pour filter les profils
router.get('/filter/:filter', controller.getAllByFilter);

module.exports = router;
