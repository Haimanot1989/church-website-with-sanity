export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6230f7e301be5d0c9339a8cd',
                  title: 'Sanity Studio',
                  name: 'church-website-with-sanity-studio',
                  apiId: '9d7425ad-68a1-4337-8a4f-09562da66d9d'
                },
                {
                  buildHookId: '6230f7e3011c380d80321736',
                  title: 'Landing pages Website',
                  name: 'church-website-with-sanity',
                  apiId: 'cbab0e8a-f842-4ff4-81a3-da4e2bcc0bff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Haimanot1989/church-website-with-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://church-website-with-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
