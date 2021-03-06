var config = ko.observable();

$.ajax({
	type: 'GET',
	url: [
		'http://',
		document.location.hostname,
		document.location.port && ':' + document.location.port,
		'/scripts/api-explorer/v2/config.json'
	].join(''),
	async: true,
	dataType: "json",
	complete: function(res, msg) {
		if (msg == 'error') {
			console.error('can\'t load config.json!');
		} else {
			config(res.responseJSON);
		}
	}
});

module.exports = config;
