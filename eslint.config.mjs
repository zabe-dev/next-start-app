import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		plugins: ['check-file'],
		rules: {
			'prefer-arrow-callback': 'error',
			'prefer-template': 'error',
			'semi': 'error',
		},
	},
];

export default eslintConfig;
