import { intro } from "./intro.js";
import { projectList } from "./project-list.js";
// import { githubProjects } from "./github-projects.js";
import { contact } from "./contact.js";
// import { showProjects } from "./github-projects.js";
import { fetchUser } from "../../../api-calls/api-call.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

const array = [
  {
    id: 396927254,
    node_id: "MDEwOlJlcG9zaXRvcnkzOTY5MjcyNTQ=",
    name: "20JS-form-validator",
    full_name: "alinamarasca/20JS-form-validator",
    private: false,
    owner: {
      login: "alinamarasca",
      id: 75176258,
      node_id: "MDQ6VXNlcjc1MTc2MjU4",
      avatar_url: "https://avatars.githubusercontent.com/u/75176258?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/alinamarasca",
      html_url: "https://github.com/alinamarasca",
      followers_url: "https://api.github.com/users/alinamarasca/followers",
      following_url:
        "https://api.github.com/users/alinamarasca/following{/other_user}",
      gists_url: "https://api.github.com/users/alinamarasca/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/alinamarasca/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/alinamarasca/subscriptions",
      organizations_url: "https://api.github.com/users/alinamarasca/orgs",
      repos_url: "https://api.github.com/users/alinamarasca/repos",
      events_url: "https://api.github.com/users/alinamarasca/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/alinamarasca/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/alinamarasca/20JS-form-validator",
    description: "simple login/register form with field validation",
    fork: false,
    url: "https://api.github.com/repos/alinamarasca/20JS-form-validator",
    forks_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/forks",
    keys_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/teams",
    hooks_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/hooks",
    issue_events_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/events",
    assignees_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/tags",
    blobs_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/languages",
    stargazers_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/stargazers",
    contributors_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/contributors",
    subscribers_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/subscribers",
    subscription_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/subscription",
    commits_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/merges",
    archive_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/downloads",
    issues_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/labels{/name}",
    releases_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/alinamarasca/20JS-form-validator/deployments",
    created_at: "2021-08-16T18:45:48Z",
    updated_at: "2021-08-18T08:32:01Z",
    pushed_at: "2021-08-18T08:31:58Z",
    git_url: "git://github.com/alinamarasca/20JS-form-validator.git",
    ssh_url: "git@github.com:alinamarasca/20JS-form-validator.git",
    clone_url: "https://github.com/alinamarasca/20JS-form-validator.git",
    svn_url: "https://github.com/alinamarasca/20JS-form-validator",
    homepage: "https://alinamarasca.github.io/20JS-form-validator/",
    size: 4,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 389363705,
    node_id: "MDEwOlJlcG9zaXRvcnkzODkzNjM3MDU=",
    name: "33-js-concepts",
    full_name: "alinamarasca/33-js-concepts",
    private: false,
    owner: {
      login: "alinamarasca",
      id: 75176258,
      node_id: "MDQ6VXNlcjc1MTc2MjU4",
      avatar_url: "https://avatars.githubusercontent.com/u/75176258?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/alinamarasca",
      html_url: "https://github.com/alinamarasca",
      followers_url: "https://api.github.com/users/alinamarasca/followers",
      following_url:
        "https://api.github.com/users/alinamarasca/following{/other_user}",
      gists_url: "https://api.github.com/users/alinamarasca/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/alinamarasca/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/alinamarasca/subscriptions",
      organizations_url: "https://api.github.com/users/alinamarasca/orgs",
      repos_url: "https://api.github.com/users/alinamarasca/repos",
      events_url: "https://api.github.com/users/alinamarasca/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/alinamarasca/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/alinamarasca/33-js-concepts",
    description: "📜 33 JavaScript concepts every developer should know!!!!",
    fork: true,
    url: "https://api.github.com/repos/alinamarasca/33-js-concepts",
    forks_url: "https://api.github.com/repos/alinamarasca/33-js-concepts/forks",
    keys_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/alinamarasca/33-js-concepts/teams",
    hooks_url: "https://api.github.com/repos/alinamarasca/33-js-concepts/hooks",
    issue_events_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/events",
    assignees_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/branches{/branch}",
    tags_url: "https://api.github.com/repos/alinamarasca/33-js-concepts/tags",
    blobs_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/languages",
    stargazers_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/stargazers",
    contributors_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/contributors",
    subscribers_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/subscribers",
    subscription_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/subscription",
    commits_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/merges",
    archive_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/downloads",
    issues_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/labels{/name}",
    releases_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/alinamarasca/33-js-concepts/deployments",
    created_at: "2021-07-25T14:15:01Z",
    updated_at: "2021-08-10T13:05:26Z",
    pushed_at: "2021-07-22T12:21:41Z",
    git_url: "git://github.com/alinamarasca/33-js-concepts.git",
    ssh_url: "git@github.com:alinamarasca/33-js-concepts.git",
    clone_url: "https://github.com/alinamarasca/33-js-concepts.git",
    svn_url: "https://github.com/alinamarasca/33-js-concepts",
    homepage: "",
    size: 851,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
];
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(intro());

  container.appendChild(projectList(array));
  // container.append(showProjects());
  container.append(contact());

  return container;
};
