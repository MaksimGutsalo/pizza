document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.innerWidth < 1024) {
        var div = document.createElement('div');
        div.className = 'sidebar-filter-btn';
        div.innerHTML = 'Filter';
        var parentElem = document.querySelector('.filter');
        parentElem.appendChild(div);
  
        document.querySelector('.sidebar-filter-btn').onclick = function() {
            var sidebar = document.querySelector('aside.left-sidebar');
            if(sidebar.classList.contains('open') === true) {
                sidebar.classList.remove('open');
            } else {
                sidebar.classList.add('open');
            }
        }

        var span = document.createElement('span');
        span.className = 'close';
        span.innerHTML = 'Close';
        var parentElem = document.querySelector('aside.left-sidebar .category-block .block-title');
        parentElem.appendChild(span);

        document.querySelector('aside.left-sidebar .block-title .close').onclick = function() {
            var sidebar = document.querySelector('aside.left-sidebar');
            if(sidebar.classList.contains('open') === true) {
                sidebar.classList.remove('open');
            }
        }
    }
});