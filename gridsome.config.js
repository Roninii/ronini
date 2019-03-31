// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ronini.dev',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/posts/**/*.md',
        typeName: 'BlogPost',
        route: '/posts/:slug',
      },
    },
  ],
};
