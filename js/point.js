var xieyuba = {
	message: function(text, time) {
		if (!text || !time) {
			return false;
		}
		var str = $("<div class='popMessage'><div class='mobileMessage'>" + text + "</div></div>");
		str.appendTo("body");
		$('.popMessage').css({
			position: 'fixed',
			width: '100%',
			height: '100%',
			left: '0',
			top: '0',
			'z-index': '50'
		})
		$('.mobileMessage').css({
			width: '3rem',
			height: 'auto',
			position: 'absolute',
			top: '50%',
			left: '50%',
			'border-radius': '0.1rem',
			background: 'url(images/message.png) no-repeat center 0.1rem rgba(0,0,0,0.7)',
			'background-size': '38% 48%',
			overflow: 'hidden',
			'text-align': 'center',
			color: '#fff',
			'font-size': '0.24rem',
			'z-index': '9999',
			'-webkit-transform': 'translate(-50%,-50%)',
			'-moz-transform': 'translate(-50%,-50%)',
			'transform': 'translate(-50%,-50%)'
		});
		var offMessage = function remove() {
			$('.popMessage').remove();
		}
		setTimeout(offMessage, time);
	}
}