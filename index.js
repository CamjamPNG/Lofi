const { Plugin } = require('powercord/entities');
window.sus = new Audio('https://v3-fastupload.s3-accelerate.amazonaws.com/1628132742-gg.mp3?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIASQBHBZCRVR4NVFHK%2F20210805%2Fap-southeast-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210805T030554Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=a6370b1b4661e8f3c1caea0f164c53d84f5c5daab86eea8846db97be4fbcbe7e');
const Settings = require('./Settings');

module.exports = class Lofi extends Plugin {
	updateVolume() {
		window.sus.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		window.sus.pause();
		window.sus.loop = true;
		window.sus.volume = this.settings.get('volume', 1);
		window.sus.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Lofi',
			render: Settings,
		});
	}

	pluginWillUnload() {
		window.sus.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};
