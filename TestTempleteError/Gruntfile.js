module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["wwwroot/lib/*", "temp/"],
        copy: {
            css: {
                files: [
                    { expand: true, cwd: "node_modules/@coreui/icons/css/", src: ["coreui-icons.min.css"], dest: "wwwroot/css" },
                    { expand: true, cwd: "node_modules/@coreui/coreui/dist/css/", src: ["coreui.min.css"], dest: "wwwroot/css" },

                ]
            },
            js: {
                files: [
                    { expand: true, cwd: "node_modules/jquery/dist/", src: ["jquery.min.js"], dest: "wwwroot/js" },
                    { expand: true, cwd: "node_modules/popper.js/dist/umd/", src: ["popper.min.js"], dest: "wwwroot/js" },
                    { expand: true, cwd: "node_modules/perfect-scrollbar/dist/", src: ["perfect-scrollbar.min.js"], dest: "wwwroot/js" }
                    //{ expand: true, cwd: "node_modules/@coreui/coreui/dist/js/", src: ["coreui.bundle.js"], dest: "wwwroot/js" },

                ]
            }
        }
    });


    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask('development', ['clean', 'copy']);
};