$(function () {
  			$('[data-toggle="tooltip"]').tooltip();
  			$('[data-toggle="popover"]').popover();
  			$('.carousel').carousel({
  				interval: 4000
  			});
  			$('#contacto').on('show.bs.modal', function(e){
  				$('#contactoBtn').removeClass('btn-outline-success');
  				$('#contactoBtn').addClass('btn-primary');
  				/*$('#contactoBtn').prop('disabled', true);
  				*/
  				
  				
  			});
		});