/** next-sitemap.config.js */
module.exports = {
  siteUrl: 'https://beauty-secrets-juliasun.vercel.app',  // ваш домен
  generateIndexSitemap: false,   // НЕ делаем индексный sitemap-0.xml
  sitemapSize: 7000,             // сколько URL в одном файле (у вас явно меньше)
  outDir: './public',            // всё вывалится в папку public/
}
