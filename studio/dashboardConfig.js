export default {
  widgets: [
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
                  buildHookId: '5eba9e82f5037ad3d6cad38c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n5dni4f1',
                  apiId: 'be80a95b-4987-4a00-8237-d3e796547ef8'
                },
                {
                  buildHookId: '5eba9e83f30aa76fde1554a2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qc9psn7q',
                  apiId: 'd434efc5-7f57-44bc-826d-4ea5c8de3124'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qc9psn7q.netlify.app', category: 'apps'}
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
