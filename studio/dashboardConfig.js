export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5df5c8aa805d4777e294eeed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nd3enebx',
                  apiId: 'f8b11650-3a5b-4b64-b72f-445a16af8373'
                },
                {
                  buildHookId: '5df5c8aa6e1ad19eedb99cc4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ecujc3nr',
                  apiId: 'b8985b4f-3a97-4657-a32b-d591d822843e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HoukasaurusRex/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ecujc3nr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
