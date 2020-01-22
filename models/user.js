const Mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//create user model
const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: 'Your email is required',
        trim: true
    },

    username: {
        type: String,
        unique: true,
        required: 'Your username is required',
    },

    password: {
        type: String,
        required: 'Your password is required',
        max: 100
    },
    fname: {
        type: String,
        required: false,
        max: 100
    },

    lname: {
        type: String,
        required: false,
        max: 100
    },
    fullname: {
        type: String,
        max: 300
    },
    bio: {
        type: String,
        required: false,
        max: 255
    },

    profileImage: {
        type: String,
        required: false,
        max: 255
    }
}, { timestamps: true });


UserSchema.pre('save', function (next) {
    const user = this;

    this.fullname = this.fname + " " + this.lname;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    let payload = {
        id: this._id,
        email: this.email,
        username: this.username,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
    });
};

Mongoose.set('useFindAndModify', false);
module.exports = Mongoose.model('Users', UserSchema);