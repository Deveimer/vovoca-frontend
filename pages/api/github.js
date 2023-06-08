const { Octokit } = require('@octokit/rest');

const getUsersList = async repo => {
  const octokit = new Octokit({
    baseUrl: 'https://api.github.com',
  });
  const { data } = await octokit.rest.repos.listContributors({
    owner: 'Deveimer',
    repo: repo,
  });
  const usersList = data.map(src => {
    return {
      avatar_url: src.avatar_url,
      url: src.html_url,
    };
  });
  return usersList;
};

const getContributors = async (req, res) => {
  try {
    const frontendList = await getUsersList('vovoca-frontend');
    const backendList = await getUsersList('vovoca-backend');
    const combinedList = [...frontendList, ...backendList];
    const usersList = combinedList.filter((value, index) => {
      const _value = JSON.stringify(value);
      return (
        index ===
        combinedList.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        })
      );
    });

    return res.status(200).json({
      users: usersList,
    });
  } catch (error) {
    console.error(error);
  }
};

export default getContributors;
