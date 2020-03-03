module.exports = {
  root: true,
  plugins: [],
	env: {
    es6: true,
    node: true,
	},
	"parserOptions": {
    "ecmaVersion": 8
  },
  extends: [
    "eslint:recommended",
	],
	rules: {
		"no-unused-vars": "off",
		"quotes": ["error", "double"],
		"comma-dangle": ["error",
			{
			"arrays": "never",
			"objects": "always-multiline",
			"imports": "never",
      "exports": "never",
			}
		],
		"jsx-quotes": ["error", "prefer-double"],
		"indent": ["error", "tab"],
		"eqeqeq": "error",
		"no-multi-str": "error",
		"arrow-spacing": ["error", { "before": true, "after": true }]
	},

};
