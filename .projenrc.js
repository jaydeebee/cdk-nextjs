const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'JetBridge (originally)',
  authorAddress: 'jdb@milliononmars.com',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: '@milliononmars/cdk-nextjs-standalone',
  repositoryUrl: 'https://github.com/jaydeebee/cdk-nextjs.git',
  authorOrganization: true,
  packageName: '@milliononmars/cdk-nextjs-standalone',
  description: 'Deploy a NextJS app to AWS using CDK. Uses standalone build and output tracing.',
  keywords: ['nextjs', 'next', 'aws-cdk', 'aws', 'cdk', 'standalone', 'iac', 'infrastructure', 'cloud', 'serverless'],
  eslintOptions: {
    prettier: true,
    // ignorePatterns: ['assets/**/*']
  },
  majorVersion: 1,

  tsconfig: { compilerOptions: { noUnusedLocals: false }, include: ['assets/**/*.ts'] },
  tsconfigDev: { compilerOptions: { noUnusedLocals: false } },

  bundledDeps: [
    'cross-spawn',
    'fs-extra',
    'indent-string',
    'micromatch',
    '@types/cross-spawn',
    '@types/fs-extra',
    '@types/micromatch',
    '@types/aws-lambda',
    'esbuild',
    'aws-lambda',
    'serverless-http',
    'jszip',
    'glob',
  ] /* Runtime dependencies of this module. */,
  devDeps: ['aws-sdk', 'constructs@10.1.21'] /* Build dependencies for this module. */,

  // do not generate sample test files
  sampleCode: false,
});
// project.eslint.addOverride({
//   rules: {},
// });
// project.tsconfig.addInclude('assets/**/*.ts');
project.synth();
