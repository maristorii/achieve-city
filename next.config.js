const isExport = process.env.NEXT_PUBLIC_ENV === 'export';

module.exports = {
  basePath: isExport ? '/achieve-city' : '',
  assetPrefix: isExport ? '/achieve-city' : '',
}
