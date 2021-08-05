const { React } = require('powercord/webpack');
const { SliderInput } = require('powercord/components/settings');

module.exports = class LofiSettings extends React.PureComponent {
		return (
			<SliderInput
				minValue={0}
				maxValue={100}
				initialValue={getSetting('volume', 1) * 200}
				markers={[0, 25, 50, 75, 100, 125, 150, 175, 200]}
				onValueChange={change => {
					updateSetting('volume', change / 200);
					window.sus.volume = change / 200;
				}}
			>
				Volume
			</SliderInput>
		);
	}
};
