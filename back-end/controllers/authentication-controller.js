const bcrypt = require('bcrypt');
// const uuid = require('uuid/v4');
const jwt = require('jwt-simple');
const moment = require('moment');

const config = require('../configuration/config');

class AuthenticationController {
    constructor(data) {
        this.data = data;
    }

    async register(req, res) {
        const userFound = await this.data.users
            .getByValue('userName', req.body.userName);
        if (!userFound) {
            const user = {
                userName: req.body.userName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                roleId: 1,
            };
            const hashedPassword = bcrypt.hash(req.body.password, 10);
            user.password = await hashedPassword;
            await this.data.users.create(user);
            res.status(200).end();
        } else {
            res.status(401).send({
                err: 'User already exists',
            });
        }
    }

    async login(req, res) {
        const userFound = await this.data.users
            .getByValue('userName', req.body.userName);
        if (userFound) {
            bcrypt
                .compare(req.body.password,
                    userFound.password, (err, response) => {
                        if (response) {
                            const expire = moment(new Date())
                                .add(config.JWT_EXPIRE_TIME, 'minutes').unix();
                            const payload = {
                                sub: userFound.id,
                                email: userFound.email,
                                role: userFound.roleId,
                                exp: expire,
                                iss: config.JWT_ISS,
                            };
                            const secret = config.JWT_SECRET;
                            const token = jwt.encode(payload, secret);

                            res.status(200).send({
                                token,
                            });
                        } else {
                            res.status(401).send({
                                err: 'User not found',
                            });
                        }
                    });
        }
    }
}

module.exports = AuthenticationController;
