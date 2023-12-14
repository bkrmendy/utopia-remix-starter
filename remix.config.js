/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'src',
  assetsBuildDirectory: 'public/build',
  ignoredRouteFiles: ['**/.*'],
  publicPath: '/build/',
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route('/somewhere/cool/*', 'catchall.tsx')
    })
  },
  serverBuildPath: 'build/index.js',
}
