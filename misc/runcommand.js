/** @param {NS} ns */

//Thanks to alainbryden for the idea.

export async function main(ns) {
	let func = ns.args
	let tempFile = "temp.js"
	
	if (func[0] == "!help"){
		ns.tprint("")
		ns.tprint("")
		ns.tprint("This script creates a dummy file, and then runs the function(s) that you provide as arguments.")	
		ns.tprint("")
		ns.tprint("Each argument that is provided counts as 1 line of the script, and indents aren't supported, as")
		ns.tprint("whenever you try to put '\\n' or '\\t' as an argument, it automatically replaces it with '\\\\n' and '\\\\t', respectively.")
		ns.tprint("")
		ns.tprint("")
	}

	else if (func.length == 0) {
		ns.alert("ERROR: No function provided.")
	}
	
	else{
		ns.write(tempFile, "/** @param {NS} ns */\nexport async function main(ns) {\n\t", "w")
		for (let i = 0; i < func.length; i++)
			ns.write(tempFile, func[i] + "\n", "a")
		ns.write(tempFile, "\n\t}", "a")
		await ns.sleep(10)
		ns.run(tempFile)
		await ns.sleep(50)
		ns.rm(tempFile)
	}
}
