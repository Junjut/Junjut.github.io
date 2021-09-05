window.onload = function() {

    document.getElementById('forgotlink').addEventListener('click', function(e) {
        e.preventDefault();
        var form = document.getElementById('forgotform');
        var input = document.createElement('input');
        var email = document.getElementById('email').value;
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'email');
        input.setAttribute('value', email);
        form.appendChild(input);
        form.submit();
    });


};

