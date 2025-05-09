import React from 'react';
import { PureIndexScreen } from './index';

export default {
  component: PureIndexScreen,
  title: 'Screens/IndexScreen/index',
  parameters: {
    layout: 'fullscreen',
  },
};

function Story(args) {
  return <PureIndexScreen {...args} />;
}
export const Default = Story.bind({});
Default.args = {
  data: {
    allEditionsChapters: {
      edges: [
        {
          node: {
            fields: {
              slug: '/guide',
            },
          },
        },
        {
          node: {
            fields: {
              slug: '/en/guide',
            },
          },
        },
      ],
    },
    guides: {
      edges: [
        {
          node: {
            frontmatter: {
              description: `Learn to create bulletproof UI components, along the way you'll build an app UI from scratch.`,
              title: 'Intro to Storybook',
              themeColor: '#6F2CAC',
              thumbImagePath: '/guide-thumb/intro.svg',
            },
            fields: {
              guide: 'guide',
              slug: '/guide',
            },
          },
        },
        {
          node: {
            frontmatter: {
              description:
                '✍️Coming soon: Visual testing is a pragmatic yet precise way to check UI appearance.',
              title: 'Visual Testing Handbook',
              themeColor: '#129F00',
              thumbImagePath: '/guide-thumb/visual-testing.svg',
            },
            fields: {
              guide: 'guide',
              slug: '/guide',
            },
          },
        },
      ],
    },
    chapters: {
      edges: [
        {
          node: {
            fields: {
              guide: 'guide',
            },
          },
        },
        {
          node: {
            fields: {
              guide: 'guide',
            },
          },
        },
      ],
    },
  },
};
