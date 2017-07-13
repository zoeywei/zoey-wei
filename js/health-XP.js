$(document).ready(function() {
	var leng = 5;//章节数
	var id;//章节的id
	var name;//第几章
	for (var i = 1; i <= leng; i++) {
		id = "chapter" + i;
		name = "第" + i + "章";
		var div = $('<div class="class2 class3 class4" id="' + id + '"><div class="class2-cen pull-left"><p class="class3-p class4-p">' + name + '</p><p class="class3-p-rig">阅读</p></div></div>');
		$("#chap").append(div);
	}
});