/** @param {NS} ns */

//Bad script that goes through every gang member and ascends them, then displaying the info on the terminal.

function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}
export async function main(ns) {
	var member = []
	let info = ""
	member = ns.gang.getMemberNames()
	let displayinfo = ["Respect Lost : ", "Hack Multiplier : ", "Str Multiplier : ", "Def Multiplier : ", "Dex Multiplier : ", "Agi Multiplier : ", "Cha Multiplier : "]
	let infoarray = []
	let finaldisplay = []

	for (let i = 0; i < member.length; i++) {
		info = ns.gang.ascendMember(member[i])
		ns.tprint(member[i] + " has been ascended.")
		infoarray = Object.values(info)
		for (let j = 0; j < displayinfo.length; j++) {
			finaldisplay.push(displayinfo[j])
			finaldisplay.push(infoarray[j])
		}
		ns.tprint(finaldisplay)
		infoarray = []
		finaldisplay = []
	}
}
