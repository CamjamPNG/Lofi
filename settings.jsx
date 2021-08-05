const { React } = require('powercord/webpack');
const { SliderInput } = require('powercord/components/settings');

module.exports = class AmongSettings extends React.PureComponent {
	render() {
		const { getSetting, updateSetting } = this.props;
		return (
			<SliderInput
				minValue={0}
				maxValue={150}
				initialValue={getSetting('volume', 1) * 150}
				markers={[0, 25, 50, 75, 100, 125, 150]}
				onValueChange={change => {
					updateSetting('volume', change / 150);
					window.sus.volume = change / 150;
				}}
			>
				Volume
			</SliderInput>
		);
	}
};
