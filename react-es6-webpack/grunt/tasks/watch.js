module.exports = function(grunt, options) {
    return {
        js: {
            files: [
                'Gruntfile.js',
                '<%= build.paths.src.js %>/**/*.js',
                '<%= build.paths.src.js %>/**/*.jsx'
            ],
            
            tasks: ['webpack:debug']
        },
        
        options: {
            livereload: true
        }
    };
};