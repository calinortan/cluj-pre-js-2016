module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine"],
        files: [
            'app/songs.js',
            'app/user.js',
            'app/**/*.js',
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        singleRun: false,
        browsers: ['PhantomJS'],
        preprocessors: { 'app/**/*.js': 'coverage' },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
