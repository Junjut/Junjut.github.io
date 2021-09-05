window.onload = function() {

    document.getElementById('TOSAPP').addEventListener('click', function(e) {
        e.preventDefault();
        var form = document.getElementById('TOSAPP_form');
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'TOSAPP');
        input.setAttribute('value', '');
        form.appendChild(input);
        form.submit();
    });


};

