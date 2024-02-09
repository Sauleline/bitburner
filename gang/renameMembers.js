/** @param {NS} ns */

//as the title suggests, this just renames all of your gang members to the argument you put in when you run it, all of them numbered.

export async function main(ns) {
	let members = ns.gang.getMemberNames()
	let name = ""
	let original = ""
	for (let i = 0; i < members.length; i++){
		name = ns.args[0]
		original = members[i]
		name = name.concat(i)
		ns.gang.renameMember(members[i], name)
		ns.tprint(original + " is now " + name)
	}
}
