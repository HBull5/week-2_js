// local storage
localStorage.setItem('malicious devastation', 'death');
localStorage.setItem('rememberMe', true);
localStorage.setItem('username', 'user123');

if (localStorage.getItem('rememberMe') === 'true') {
	console.log(localStorage.getItem('username'));
}

localStorage.removeItem('malicious devastation');
localStorage.clear();

// session storage
sessionStorage.setItem('preferences', [true, false, true, true]);

// cookies

document.cookie = 'username=user123; password=pass; path=/';

document.cookie = 'password=pass; path=/';
