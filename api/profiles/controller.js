const Profile = require('./model.js');

const getAll = async (req, res) => {
    try {
        const profiles = await Profile.find({ isDeleted: {$ne: true} });
        return res.status(200).json(profiles);
    } catch (err) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des profils' });
    }
};
const createProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).send("Nom et email sont requis");
        }
        const newProfile = {
            email : email,
            name : name,
            isDeleted : false
        };
        await new Profile(newProfile).save();
        return res.status(201).json({ message: 'Profile created' });
    } catch (err) {
        return res.status(500).json({ message: 'Erreur lors de la création du profil' });
    }
};
const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const profile = await Profile.findOne({_id: id, isDeleted: {$ne: true}});
        return res.status(200).json(profile);
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const deleteProfilebyId = async (req, res) => {
    try {
        const id = req.params.id;
        await Profile.updateOne({_id: id}, { $set: { isDeleted: true } });
        return res.status(200).json({ message: 'Profile deleted' });
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const updateProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        if (!name && !email || !id) {
            return res.status(400).send("Id, nom et email sont requis");
        }
        await
        Profile.updateOne({_id: id}, { $set: { name, email } });
        return res.status(200).json({ message: 'Profile updated' });
    }
    catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const addExperience = async (req, res) => {
    try {
        const id = req.params.id;
        const { titre, entreprise, dates, description } = req.body;
        if (!titre || !entreprise || !dates || !description) {
            return res.status(400).send("Titre, entreprise, dates et description sont requis");
        }
        await Profile.updateOne({_id: id}, { $push: { experience: { titre, entreprise, dates, description } } });
        return res.status(200).json({ message: 'Experience added' });
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const deleteExperience = async (req, res) => {
    try {
        const id = req.params.id;
        const exp = req.params.exp;
        await Profile.updateOne({_id: id}, { $pull: { experience: { _id: exp } } });
        return res.status(200).json({ message: 'Experience deleted' });
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const addSkill = async (req, res) => {
    try {
        const id = req.params.id;
        const { skill } = req.body;
        if (!skill) {
            return res.status(400).send("Skill est requis");
        }
        await Profile.updateOne({_id: id}, { $push: { skills: skill } });
        return res.status(200).json({ message: 'Skill added' });
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const deleteSkill = async (req, res) => {
    try {
        const id = req.params.id;
        const skill = req.params.skill;
        await Profile.updateOne({_id: id}, { $pull: { skills: skill } });
        return res.status(200).json({ message: 'Skill deleted' });
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const updateProfileInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const { bio, localisation, siteWeb } = req.body;
        if (!bio && !localisation && !siteWeb) {
            return res.status(400).send("Bio, localisation ou siteWeb sont requis");
        }
        await Profile.updateOne({_id: id}, { $set: { information: { bio, localisation, siteWeb } } });
        return res.status(200).json({ message: 'Profile information updated' });
    } catch (err) {
        return res.status(404).json({ message: 'Profile not found' });
    }
};
const getAllByFilter = async (req, res) => {
    try {
        const filter = req.params.filter;
        const forfilter = req.body;
        const profiles = await Profile.find({ [filter]: forfilter[filter], isDeleted: {$ne: true} });
        return res.status(200).json(profiles);
    } catch (err) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des profils [filtre inconu]' });
    }
};


exports.updateProfile = updateProfile;
exports.deleteProfilebyId = deleteProfilebyId;
exports.getById = getById;
exports.getAll = getAll;
exports.createProfile = createProfile;
exports.addExperience = addExperience;
exports.deleteExperience = deleteExperience;
exports.addSkill = addSkill;
exports.deleteSkill = deleteSkill;
exports.updateProfileInfo = updateProfileInfo;
exports.getAllByFilter = getAllByFilter;