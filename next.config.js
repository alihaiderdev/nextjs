module.exports = {
  reactStrictMode: true,
};

// whenever we change in this file we must start server and make new build otherwise changing will not be reflected
// module.exports = {
//   reactStrictMode: true,
//   env: {
//     mySiteUrl: 'www.google.com',
//   },
//   // basePath: '/codeText', // by setting basePath to this now we can not access our al urls like before e.g: localhost:3000/home this will show an error after doing this instead localhost:3000/codeText/home
//   async rewrites() {
//     return [
//       {
//         source: '/testing',
//         destination: '/blog/2',
//       },
//       {
//         source: '/dummy/:path',
//         destination: '/info/:path',
//       },
//     ];
//   },
//   async redirects() {
//     return [
//       {
//         source: '/mytesting',
//         destination: '/blog/5',
//         permanent: true,
//       },
//     ];
//   },
//   async headers() {
//     return [
//       {
//         source: '/blog/:blogId',
//         headers: [
//           {
//             key: 'xyz-code-imrove',
//             value: 'yes code imrove :blogId',
//           },
//         ],
//       },
//     ];
//   },
// };
