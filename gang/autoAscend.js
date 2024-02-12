
//Thing that automatically ascends gang members once their strength multiplier after ascending hits 1.5
//also displays all of the current hypothetical ascention results in a table

//Gang member names are expected to all be 12 characters long (my renameMember.js script with a 10 character name works for this)

/** @param {NS} ns */
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}

function customRound(a, b) {
	let dp = 10 ** b
	return (Math.trunc(a * dp) / dp)
}
export async function main(ns) {
	ns.disableLog("ALL")

	ns.tail()

	ns.clearLog()

	//Settings
	let tick = 1000
	//time between checks (in ms)
	let threshold = 1.5
	//threshold for multipliers before ascending gang member

	let members = ns.gang.getMemberNames()
	let results = {}
	let hac, str, def, dex, agi, cha = ""

	ns.setTitle("Hypothetical Ascention Results")

	while (true) {
		ns.print("┌─────────────┬───────┬───────┬───────┬───────┬───────┬───────┐")
		ns.print("│ member name │  hac  │  str  │  def  │  dex  │  agi  │  cha  │")
		ns.print("├─────────────┼───────┼───────┼───────┼───────┼───────┼───────┤")
		for (let i = 0; i < members.length; i++) {
			results = ns.gang.getAscensionResult(members[i])

			if (results.str >= threshold) {
				//				 ^ YOU CAN CHANGE THIS IF YOU WANT TO CHECK A DIFFERENT STAT
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
			else {
				hac = String(customRound(results.hack, 2))
				str = String(customRound(results.str, 2))
				def = String(customRound(results.def, 2))
				dex = String(customRound(results.dex, 2))
				agi = String(customRound(results.agi, 2))
				cha = String(customRound(results.cha, 2))

				if (hac.length == 1) {
					hac = (" ×" + hac + "  ")
				}
				else if (hac.length == 3) {
					hac = (" ×" + hac)
				}
				else{
					hac = ("×" + hac)
				}

				if (str.length == 1) {
					str = (" ×" + str + "  ")
				}
				else if (str.length == 3) {
					str = (" ×" + str)
				}
				else{
					str = ("×" + str)
				}

				if (def.length == 1) {
					def = (" ×" + def + "  ")
				}
				else if (def.length == 3) {
					def = (" ×" + def)
				}
				else{
					def = ("×" + def)
				}

				if (dex.length == 1) {
					dex = (" ×" + dex + "  ")
				}
				else if (dex.length == 3) {
					dex = (" ×" + dex)
				}
				else{
					dex = ("×" + dex)
				}

				if (agi.length == 1) {
					agi = (" ×" + agi + "  ")
				}
				else if (agi.length == 3) {
					agi = (" ×" + agi)
				}
				else{
					agi = ("×" + agi)
				}

				if (cha.length == 1) {
					cha = (" ×" + cha + "  ")
				}
				else if (cha.length == 3) {
					cha = (" ×" + cha)
				}
				else{
					cha = ("×" + cha)
				}

				ns.print("│ " + members[i] + " │ " + hac + " │ " + str + " │ " + def + " │ " + dex + " │ " + agi + " │ " + cha + " │")
			}
		}
		ns.print("└─────────────┴───────┴───────┴───────┴───────┴───────┴───────┘")
		await ns.sleep(tick)
		ns.clearLog()
	}
}
