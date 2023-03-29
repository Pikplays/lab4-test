module.exports = {
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: 'reports', outputname: 'report.xml'}],
    ],
};