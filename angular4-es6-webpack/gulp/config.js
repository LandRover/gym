module.exports = {
    path: {
        js: {
            files: 'src/**/*.js'
        },

        assets: [
            'src/assets/**',
            'node_modules/angular-material/angular-material.min.css'
        ],

        dist: {
            assets: 'dist/assets'
        },

        tasks: {
            files: 'gulp/**/*.js'
        },

        test: {
            files: 'test/**/*.spec.js'
        },

        modules: {
            npm: 'node_modules/**'
        }
    },

    jscpd: {
        'min-lines': 5,
        verbose: true
    },

    messages: {
        error: 'Error: <%= error.message %> on file <%= file.relative %>',
        success: 'Success: File <%= file.relative %> gulped'
    }
};