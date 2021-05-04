module.exports = {
  title: "Plutonium Documentation",
  description: "Official Plutonium Documentation",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
  ],
  themeConfig: {
    repo: "plutoniumpw/docs",
    editLinks: true,
    docsDir: "docs",
    lastUpdated: false,
    nav: [
      {
        text: "General",
        link: "/general/"
      },
      {
        text: "Client",
        link: "/client/"
      },
      {
        text: "Server",
        link: "/server/"
      }
    ],
    sidebar: {
      "/general/": [
        {
          title: "General",
          collapsable: false,
          children: [
            ""
          ]
        }
      ],
      "/client/": [
        {
          title: "Client",
          collapsable: false,
          children: [
            ""
          ]
        }
      ],
      "/server/": [
        {
          title: "Server",
          collapsable: false,
          children: [
            ""
          ]
        }
      ]
    }
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
  ]
}
