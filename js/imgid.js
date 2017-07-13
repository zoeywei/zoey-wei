//图片上传预览。
function previewImage1(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview1');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead1>';
		var img = document.getElementById('imghead1');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';

		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage2(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview2');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead2>';
		var img = document.getElementById('imghead2');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';

		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage3(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview3');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead3>';
		var img = document.getElementById('imghead3');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';

		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage4(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview4');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead4>';
		var img = document.getElementById('imghead4');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage5(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview5');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead5>';
		var img = document.getElementById('imghead5');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage6(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview6');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead6>';
		var img = document.getElementById('imghead6');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';

		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage7(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview7');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead7>';
		var img = document.getElementById('imghead7');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage8(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview8');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead8>';
		var img = document.getElementById('imghead8');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function previewImage9(file) {
	var MAXWIDTH = 102;
	var MAXHEIGHT = 102;
	var div = document.getElementById('preview9');
	if (file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead9>';
		var img = document.getElementById('imghead9');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	}
}

function clacImgZoomParam(maxWidth, maxHeight, width, height) {
	var param = {
		top: 0,
		left: 0,
		width: width,
		height: height
	};
	if (width > maxWidth || height > maxHeight) {
		rateWidth = width / maxWidth;
		rateHeight = height / maxHeight;
		if (rateWidth > rateHeight) {
			param.width = maxWidth;
			param.height = Math.round(height / rateWidth);
		} else {
			param.width = Math.round(width / rateHeight);
			param.height = maxHeight;
		}
	}
	param.left = Math.round((maxWidth - param.width) / 2);
	param.top = Math.round((maxHeight - param.height) / 2);
	return param;
}