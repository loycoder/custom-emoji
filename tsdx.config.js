/* eslint-disable no-undef */


const alias = require('@rollup/plugin-alias');
const images = require('@rollup/plugin-image');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');



module.exports = {
  rollup(config, options) {
    const plugins = [
    /*   alias({
        entries: [
          {
             find: '@',
             replacement: path.resolve(__dirname, '/src/'),
          },
        ]
      }), */
      images({ incude: ['**/*.png', '**/*.svg'] }),
      postcss({
        plugins: [
          require('postcss-inline-svg'),
          require('postcss-svgo'),
          require('autoprefixer'),
          require('cssnano')
        ],
        inject: true,
        extract: !!options.writeMeta
      }),
    ]
    config.plugins = [
     ...plugins,
     ...config.plugins,
     peerDepsExternal(),
    ];
    return config;
  }
};
