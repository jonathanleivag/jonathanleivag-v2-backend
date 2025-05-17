import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
import { ENV } from '../enum.js'
import { IProject, PinnedRepo, Res } from '../type.js'
import { getEnv } from '../utils/env.util.js'

export const getProjects = async (): Promise<Res<IProject>> => {
  console.log('🚀 ~ getProjects ~ getProjects')
  try {
    const pinned = (await fetchPinnedRepos()).data
    const readme = (await getReadme()).data
    const info = (await getInfo()).data

    if (pinned === null || readme === null || info === null) {
      return {
        status: 404,
        statusText: 'Not Found',
        error: 'No se encontraron los datos',
        data: null
      }
    }

    return {
      status: 200,
      statusText: 'OK',
      error: null,
      data: { pinned, readme, info }
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 500,
        statusText: 'Internal Server Error',
        error: error.message,
        data: null
      }
    }
    return {
      status: 500,
      statusText: 'Internal Server Error',
      error: 'Internal Server Error',
      data: null
    }
  }
}

export const fetchPinnedRepos = async (): Promise<Res<PinnedRepo[]>> => {
  console.log('🚀 ~ fetchPinnedRepos ~ fetchPinnedRepos')
  const query = `
    query($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          edges {
            node {
              ... on Repository {
                name
                description
                url
                stargazerCount
                forkCount
              }
            }
          }
        }
      }
    }
  `

  try {
    const variables = { username: getEnv(ENV.GITHUB_USERNAME) }

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getEnv(ENV.GITHUB_TOKEN)}`
      },
      body: JSON.stringify({ query, variables })
    })

    if (!response.ok) {
      return {
        status: 500,
        statusText: 'Internal Server Error',
        error: 'Internal Server Error',
        data: null
      }
    }

    const data = await response.json()

    const pinnedRepos = data.data.user.pinnedItems.edges.map((edge: any) => ({
      name: edge.node.name,
      description: edge.node.description,
      url: edge.node.url,
      stargazerCount: edge.node.stargazerCount,
      forkCount: edge.node.forkCount
    })) as PinnedRepo[]

    return {
      status: 200,
      statusText: 'OK',
      error: null,
      data: pinnedRepos
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error al obtener los repositorios pineados:',
        error.message
      )
      return {
        status: 500,
        statusText: 'Internal Server Error',
        error: 'Internal Server Error',
        data: null
      }
    }
    return {
      status: 500,
      statusText: 'Internal Server Error',
      error: 'Internal Server Error',
      data: null
    }
  }
}

export const getReadme = async (): Promise<Res<string>> => {
  console.log('🚀 ~ getReadme ~ getReadme')
  const octokit = new Octokit({
    auth: getEnv(ENV.GITHUB_TOKEN)
  })

  try {
    const { data } = await octokit.repos.getReadme({
      owner: getEnv(ENV.GITHUB_USERNAME),
      repo: getEnv(ENV.GITHUB_USERNAME)
    })

    const content = Buffer.from(data.content, 'base64').toString('utf-8')

    return {
      status: 200,
      statusText: 'OK',
      error: null,
      data: content
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error al obtener el contenido del README.md:',
        error.message
      )
      return {
        status: 500,
        statusText: 'Internal Server Error',
        error: 'Internal Server Error',
        data: null
      }
    }
    return {
      status: 500,
      statusText: 'Internal Server Error',
      error: 'Internal Server Error',
      data: null
    }
  }
}

export const getInfo = async (): Promise<
  Res<RestEndpointMethodTypes['users']['getAuthenticated']['response']['data']>
> => {
  console.log('🚀 ~ getInfo ~ getInfo')
  const octokit = new Octokit({
    auth: getEnv(ENV.GITHUB_TOKEN)
  })

  try {
    const { data } = await octokit.rest.users.getAuthenticated()

    return {
      status: 200,
      statusText: 'OK',
      error: null,
      data
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error al obtener la información del usuario:',
        error.message
      )
      return {
        status: 500,
        statusText: 'Internal Server Error',
        error: 'Internal Server Error',
        data: null
      }
    }
    return {
      status: 500,
      statusText: 'Internal Server Error',
      error: 'Internal Server Error',
      data: null
    }
  }
}
