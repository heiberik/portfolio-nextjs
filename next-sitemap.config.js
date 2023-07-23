module.exports = {
    siteUrl: process.env.SITE_URL || 'heiberik.vercel.app',
    generateRobotsTxt: true,
    exclude: [
        "/admin",
        "/admin/*",
        "/api/server-sitemap-index.xml"
    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.SITE_URL}/api/server-sitemap-index.xml`
        ],
    },
    sitemapSize: 500,
}