module.exports = {
	siteMetadata: {
		siteUrl: `https://www.pranjals.live`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.pranjals.live',
				sitemap: 'https://www.pranjals.live/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		`gatsby-plugin-preload-fonts`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			},
		},
	],
};
