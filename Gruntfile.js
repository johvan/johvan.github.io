module.exports = function tasks(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    "src/*.s",
                ],
                dest: "dist/app.main.js",
            },
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['concat'],
            },
        },
    });
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
};