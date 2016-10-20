
$(document).ready(function() {
    // Cache selectors outside callback for performance. 
    var $window = $(window),
        $containerEl = $('#sidebar-wrapper'),
        $stickyEl = $('#search'),
        $stickyDOM = document.getElementById('search'),
        $stickySpacer = document.getElementById('search_spacer'),
        $stickySpacerEl = $('#search_spacer'),
        elTop = $stickyEl.offset().top
    
    $containerEl.scroll(function() {
        if ($stickyDOM.getBoundingClientRect().top <= 0 && $stickySpacer.getBoundingClientRect().top <= 0) {
            $stickyEl.addClass('sticky');
            $stickySpacerEl.removeClass('hidden');
            $stickyEl.width($stickySpacerEl.width());
        }
        else {
            $stickyEl.removeClass('sticky');
            $stickySpacerEl.addClass('hidden');
        }
    });
});