const { React } = require('powercord/webpack');
const { SliderInput } = require('powercord/components/settings');

module.exports = class LofiSettings extends React.PureComponent {
	render() {
		const { getSetting, updateSetting } = this.props;
		return (
			<SliderInput
				minValue={0}
				maxValue={100}
				initialValue={getSetting('volume', 1) * 100}
				markers={[0, 25, 50, 75, 100]}
				onValueChange={change => {
					updateSetting('volume', change / 100);
					window.sus.volume = change / 100;
				}}
			>
				Volume
			</SliderInput>
		);
	}
};
