window.onload = function() {

    document.getElementById('overlay').addEventListener('click', function(e) {
        e.preventDefault();
        closeNav();
    });

    document.getElementById('closebutton').addEventListener('click', function(e) {
        e.preventDefault();
        closeNav();
    });

    document.getElementById('openbutton').addEventListener('click', function(e) {
        e.preventDefault();
        openNav();
    });

    document.getElementById('logoutbutton').addEventListener('click', function(e) {
        e.preventDefault();
        document.logoutform.submit();
    });

    
};

