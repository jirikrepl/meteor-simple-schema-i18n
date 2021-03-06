/* globals Package */
Package.describe({
    name: 'jirikrepl:simple-schema-i18n',
    summary: 'Internationalization for SimpleSchema',
    version: '0.3.1',
    git: 'https://github.com/gwendall/meteor-simple-schema-i18n.git',
});

const packages = [
    'aldeed:simple-schema@1.3.2',
    'tap:i18n@1.6.1',
    'templating@1.1.4',
    'underscore@1.0.4',
];

Package.onUse(function (api, where) {
    api.use(packages);
    api.imply(packages);

    api.addFiles([
        'package-tap.i18n',
        'shared/lib.js',
    ]);

    api.addAssets(['package-tap.i18n'], ['client', 'server']);
});
