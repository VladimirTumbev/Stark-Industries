'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "buttons", deps: []
 * createTable "contactInfos", deps: []
 * createTable "jobs", deps: []
 * createTable "roles", deps: []
 * createTable "Users", deps: [roles]
 * createTable "applications", deps: [jobs, Users]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2018-05-07T18:20:28.332Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "buttons",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "targetURL": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "iconURL": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "type": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "hidden": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "contactInfos",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "value": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "icon": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "isPrimary": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": false
                },
                "isMappable": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": false
                },
                "latitude": {
                    "type": Sequelize.FLOAT,
                    "allowNull": true
                },
                "longtitude": {
                    "type": Sequelize.FLOAT,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jobs",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "title": {
                    "type": Sequelize.STRING,
                    "unique": true,
                    "allowNull": false
                },
                "type": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "description": {
                    "type": Sequelize.TEXT,
                    "allowNull": false
                },
                "status": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "roles",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "userName": {
                    "type": Sequelize.STRING,
                    "unique": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "email": {
                    "type": Sequelize.STRING,
                    "unique": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "roleId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "roles",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "applications",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "cv": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "comment": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "coverLetter": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "jobId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "jobs",
                        "key": "id"
                    },
                    "allowNull": true
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
