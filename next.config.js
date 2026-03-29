/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api/**/*': [
        'GASTeamStuff/**/*',
        'OarWeThereYetStuff/**/*',
        'RoboticsStuff/**/*',
        '*.jpg',
        '*.png',
        '*.gif',
        '*.mp4',
        '*.webm'
      ],
    },
  },
}

module.exports = nextConfig
