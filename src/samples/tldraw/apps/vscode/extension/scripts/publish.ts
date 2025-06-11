import { exec } from 'child_process'

async function main() {
	const preRelease = process.argv.includes('--pre-release')
	 
	console.log(`Publishing extension${preRelease ? ' (pre-release)' : ''}`)
	exec(`vsce publish${preRelease ? ' --pre-release' : ''}`)
}

main()
