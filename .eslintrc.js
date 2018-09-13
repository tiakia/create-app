module.exports = {
    "parser": "babel-eslint",
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "react/prop-types": [2],
        "jsx-a11y/href-no-hash": "off"
    },
    "extends": "react-app"
}
