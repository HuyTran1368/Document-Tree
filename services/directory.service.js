"use strict";

// const DbMixin = require("../mixins/db.mixin");
// const { Directory } = require('../../dist/entity')÷
const Document = require('../models/migrate')

module.exports = {
	name: "directory",

	// mixins: [DbMixin("document")],

	settings: {},

	dependencies: [],

	actions: {
		hello: {
			rest: {
				method: "GET",
				path: "/hello",
			},

			async handler() {
				try {
					getConnection()
				} catch {
					const connection = await createConnection();
					console.log(connection, '======')
				}

				const userRepo = getConnection().getRepository(Directory)

				const u = userRepo.findOne(1);

				return u;
			},
		},
	},

	events: {},

	methods: {},

	created() { },

	async started() { },

	async stopped() { },
};
