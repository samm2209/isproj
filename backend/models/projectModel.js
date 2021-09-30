import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    organiser: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    goal: {type: String, required: true},
    raised: {type: String, required: true},
    contribution: {type: String, required: true},
    shares: {type: String, required: true},
    followers: {type: String, required: true},
    progress: {type: Number, required: true}
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

export default Project;