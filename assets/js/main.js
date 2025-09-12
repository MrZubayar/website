/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

<!-- Optional: show a quick status after submission without leaving page -->
<script>
  (function () {
    var form = document.querySelector('.contact-form');
    var status = document.getElementById('form-status');
    if (!form || !status) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
        if (res.ok) {
          status.textContent = 'Thanks! I will get back to you soon.';
          status.style.display = 'block';
          form.reset();
        } else {
          status.textContent = 'Something went wrong. Please email me directly.';
          status.style.display = 'block';
        }
      } catch (err) {
        status.textContent = 'Network error. Please email me directly.';
        status.style.display = 'block';
      }
    });
  })();
</script>

<script>
  (function() {
    var sections = ['banner','about','education','experience','skills','services','projects','contact']
      .map(function(id){ var el = document.getElementById(id); return el ? {id, top:0, el} : null; })
      .filter(Boolean);
    var links = Array.from(document.querySelectorAll('#header nav a'));
    function onScroll() {
      var y = window.scrollY + window.innerHeight * 0.25; // activate a bit before the section center
      var current = sections[0] && sections[0].id;
      sections.forEach(function(s){
        s.top = s.el.getBoundingClientRect().top + window.scrollY;
        if (y >= s.top) current = s.id;
      });
      links.forEach(function(a){
        var href = a.getAttribute('href') || '';
        var id   = href.startsWith('#') ? href.slice(1) : '';
        a.classList.toggle('active', id === current);
      });
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    onScroll();
  })();
</script>

