const { Octokit } = require('@octokit/rest');

const getContributors = async (req, res) => {
  try {
    const octokit = new Octokit({
      baseUrl: 'https://api.github.com',
    });

    octokit.rest.repos
      .listContributors({
        owner: 'Deveimer',
        repo: 'vovoca-frontend',
      })
      .then(({ data }) => {
        const usersList = data.map(src => {
          return {
            avatar_url: src.avatar_url,
            url: src.html_url,
          };
        });

        return res.status(200).json({
          users: usersList,
        });
      });
  } catch (error) {
    console.error(error);
  }
};

export default getContributors;
