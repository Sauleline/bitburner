
//Thing that automatically ascends gang members once their strength multiplier after ascending hits 1.5

/** @param {NS} ns */
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}

function customRound(a, b) {
	let dp = 10 ** b
	return (Math.trunc(a * dp) / dp)
}

export async function main(ns) {
	//Settings
	let tick = 1000
	//time between checks (in ms)
	let threshold = 1.5
	//threshold for multipliers before ascending gang member

	let members = ns.gang.getMemberNames()
	let results = {}

	while (true) {
		for (let i = 0; i < members.length; i++) {
			results = ns.gang.getAscensionResult(members[i])
			if (results.str >= threshold) {
				/////////^ YOU CAN CHANGE THIS IF YOU WANT TO CHECK A DIFFERENT STAT
				results = (ns.gang.ascendMember(members[i]))
				ns.tprint(members[i] + " has been ascended.")
				ns.tprint("You have lost:")
				ns.tprint(expo(results.respect, 2) + " Respect")
				ns.tprint("This member has gained: ")
				ns.tprint("×" + customRound(results.hack, 2) + " Hack multiplier")
				ns.tprint("×" + customRound(results.str, 2) + " Strength multiplier")
				ns.tprint("×" + customRound(results.def, 2) + " Defence multiplier")
				ns.tprint("×" + customRound(results.dex, 2) + " Dexterity multiplier")
				ns.tprint("×" + customRound(results.agi, 2) + " Agility multiplier")
				ns.tprint("×" + customRound(results.cha, 2) + " Charisma multiplier")
			}
		}
		await ns.sleep(tick)
	}
}
