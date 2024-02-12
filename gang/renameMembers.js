/** @param {NS} ns */

//as the title suggests, this just renames all of your gang members to the argument you put in when you run it, all of them numbered.

export async function main(ns) {
	let members = ns.gang.getMemberNames()
	let name = ""
	let original = ""
	for (let i = 0; i < members.length; i++) {
		if (Math.floor((i+1) / 10) == 0) {
			name = ns.args[0]
			original = members[i]
			name = name.concat((i + 1) * 10)
			ns.gang.renameMember(members[i], name)
			ns.tprint(original + " is now " + name)
		}

		else if (i == 9) {
			name = ns.args[0]
			original = members[i]
			name = name.concat(i + 2)
			ns.gang.renameMember(members[i], name)
			ns.tprint(original + " is now " + name)
		}

		else {
			name = ns.args[0]
			original = members[i]
			name = name.concat((i + 3))
			ns.gang.renameMember(members[i], name)
			ns.tprint(original + " is now " + name)
		}
	}
}
