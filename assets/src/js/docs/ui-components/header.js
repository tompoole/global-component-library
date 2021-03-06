import $ from '@justeat/f-dom';

const signedOutDemoEl = $.first('[data-js-header-signed-out]');
if (signedOutDemoEl) {
    $.first('[data-auth-wrapper]', signedOutDemoEl).remove();
    $.first('[data-login]', signedOutDemoEl).classList.remove('is-hidden');
}

const signedInDemoEl = $.first('[data-js-header-signed-in]');
if (signedInDemoEl) {
    $.first('[data-name]', signedInDemoEl).textContent = 'Bear';
    $.first('[data-email]', signedInDemoEl).textContent = 'ui@just-eat.com';

    $.first('[data-auth-wrapper]', signedInDemoEl).classList.remove('is-hidden');
    $.first('[data-login]', signedInDemoEl).remove();
}
