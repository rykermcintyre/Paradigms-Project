initHeader = () => {
    var header = document.createElement('header')
    header.setAttribute('class', 'mdl-layout__header')

    var div = document.createElement('div')
    div.setAttribute('class', 'mdl-layout__header-row')

    var h1 = document.createElement('h1')
    h1.setAttribute('class', 'mdl-layout-title')
    h1.innerHTML = 'Show Wiz'

    var spacer = document.createElement('div')
    spacer.setAttribute('class', 'mdl-layout-spacer')

    var nav = document.createElement('nav')
    nav.setAttribute('class', 'mdl-navigation')

    var signIn = document.createElement('a')
    signIn.setAttribute('id', 'sign')
    signIn.href = 'sign-or-create.html'
    signIn.setAttribute('class', 'mdl-navigation__link mdl-layout-spacer')
    signIn.innerHTML = 'Sign In/Create Account'

    var browse = document.createElement('a')
    browse.href = 'browse.html'
    browse.setAttribute('class', 'mdl-navigation__link mdl-layout-spacer')
    browse.innerHTML = 'Browse'

    nav.appendChild(signIn)
    nav.append(browse)

    div.appendChild(h1)
    div.appendChild(spacer)
    div.appendChild(nav)
    header.appendChild(div)
    document.getElementById('container').prepend(header)
}
// call this function after user signs in/clicks sign out
updateUser = () => {
    var anchor = document.getElementById('sign');
    console.log(anchor);
    var user = localStorage.getItem('uid');
    console.log(anchor)
    if (user != null) {
        anchor.innerHTML = 'Sign out ' + user + '?'
        anchor.onclick = () => {
            localStorage.clear()
        }
        anchor.href = "../website/index.html"
    }
}