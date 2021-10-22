const LinksSocialMedia = {
  github: 'caiophox',
  facebook: 'caiophox',
  twitter: 'caiophox',
  youtube: 'caiophox',
  instagram: 'caiophox'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }

}

changeSocialMediaLinks()

function getGithubProfileInfo(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLogin.href = data.html_url
    userImage.src = data.avatar_url
    userLoginInfo.textContent = data.login
  })
  
}

getGithubProfileInfo()

  
