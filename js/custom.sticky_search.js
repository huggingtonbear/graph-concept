
$(document).ready(function() {
    // Cache selectors outside callback for performance. 
    var $window = $(window),
        $containerEl = $('#sidebar-wrapper'),
        $sidebarEL = document.getElementById('sidebar-nav'),
        $stickyEl = $('#search'),
        $stickySpacerEl = $('#search_spacer'),
        elTop = $stickyEl.offset().top,
        elWidth = $stickyEl.width();
    
    $containerEl.scroll(function() {
        if ($sidebarEL.getBoundingClientRect().top * -1 > elTop) {
            $stickyEl.addClass('sticky');
            $stickySpacerEl.removeClass('hidden');
            $stickyEl.width(elWidth);
        }
        else {
            $stickyEl.removeClass('sticky');
            $stickySpacerEl.addClass('hidden');
        }
    });
});