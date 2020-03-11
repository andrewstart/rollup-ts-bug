import path from 'path';
import ts from 'rollup-plugin-ts';

async function main()
{
	const pkg = require('./package.json');
	const plugins = [
		ts({browserslist: false}),
	];

	const results = [];

	// Check for bundle folder
	const basePath = __dirname;
	const input = path.join(basePath, 'src/index.ts');

	results.push({
		input,
		output: [
			{
				file: path.join(basePath, pkg.main),
				format: 'es',
			},
		],
		external: ['pixi.js'],
		plugins
	});

	return results;
}

export default main();