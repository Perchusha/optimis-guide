function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const dataset = [];
for (let i = 1; i <= 30; i++) {
	dataset.push({
		id: i,
		value: `Value ${i}`,
		name: `Name ${i}`,
		color: getRandomColor(),
		chartValue: Math.floor(Math.random() * Math.floor(i * i)) + 1
	});
}

const dataCollection = new dhx.DataCollection();
dataCollection.parse(dataset);
export default dataCollection;
