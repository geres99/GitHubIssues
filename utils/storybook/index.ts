export const makeStorybookAssetUrl = (assetUrl: string): string => {
  const GITLAB_CI_PROJECT_NAME = process.env.STORYBOOK_CI_PROJECT_NAME || "";

  console.log("/" + GITLAB_CI_PROJECT_NAME + assetUrl);

  return "/" + GITLAB_CI_PROJECT_NAME + assetUrl;
};
