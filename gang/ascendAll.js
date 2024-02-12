//completely revamped script that goes through every gang member, ascends them, and then displays the information, in a table, a la autoAscend.js

/** @param {NS} ns */
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}
function customRound(a, b) {
	let dp = 10 ** b
	return (Math.trunc(a * dp) / dp)
}
export async function main(ns) {
	let member = ns.gang.getMemberNames()
	let results = {}
		let resp, hac, str, def, dex, agi, cha = ""

	ns.tprint("┌─────────────┬───────────┬───────┬───────┬───────┬───────┬───────┬───────┐")
	ns.tprint("│ member name │  respect  │  hac  │  str  │  def  │  dex  │  agi  │  cha  │")
	ns.tprint("├─────────────┼───────────┼───────┼───────┼───────┼───────┼───────┼───────┤")

	for (let i = 0; i < member.length; i++) {
		results = ns.gang.ascendMember(member[i])

		resp = String(expo(results.respect, 3))		
		hac = String(customRound(results.hack, 2))
		str = String(customRound(results.str, 2))
		def = String(customRound(results.def, 2))
		dex = String(customRound(results.dex, 2))
		agi = String(customRound(results.agi, 2))
		cha = String(customRound(results.cha, 2))

		if (resp.length == 8){
			resp = (" " + resp)
		}

		if (hac.length == 1) {
			hac = (" ×" + hac + "  ")
		}
		else if (hac.length == 3) {
			hac = (" ×" + hac)
		}
		else {
			hac = ("×" + hac)
		}

		if (str.length == 1) {
			str = (" ×" + str + "  ")
		}
		else if (str.length == 3) {
			str = (" ×" + str)
		}
		else {
			str = ("×" + str)
		}

		if (def.length == 1) {
			def = (" ×" + def + "  ")
		}
		else if (def.length == 3) {
			def = (" ×" + def)
		}
		else {
			def = ("×" + def)
		}

		if (dex.length == 1) {
			dex = (" ×" + dex + "  ")
		}
		else if (dex.length == 3) {
			dex = (" ×" + dex)
		}
		else {
			dex = ("×" + dex)
		}

		if (agi.length == 1) {
			agi = (" ×" + agi + "  ")
		}
		else if (agi.length == 3) {
			agi = (" ×" + agi)
		}
		else {
			agi = ("×" + agi)
		}

		if (cha.length == 1) {
			cha = (" ×" + cha + "  ")
		}
		else if (cha.length == 3) {
			cha = (" ×" + cha)
		}
		else {
			cha = ("×" + cha)
		}

		ns.tprint("│ " + member[i] + " │ " + resp + " │ " + hac + " │ " + str + " │ " + def + " │ " + dex + " │ " + agi + " │ " + cha + " │")
	
	}
	ns.tprint("└─────────────┴───────────┴───────┴───────┴───────┴───────┴───────┴───────┘")
}
