/** @param {NS} ns */
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}
function colourPrint(R, G, B) {
	return (String("\u001b[38;2;" + R + ";" + G + ";" + B + "m"))
}
export async function main(ns) {
	let targetServer = ns.args[0]
	let showInfo = ns.args[1]
	//Needs to be "true" or "false"
  //(Automatically false if ran through the deployer)

	let hackedfor = 0
	while (true) {
		if (ns.getServerSecurityLevel(targetServer) > ns.getServerMinSecurityLevel(targetServer)) {
			await ns.weaken(targetServer)
		}
		else if (ns.getServerMaxMoney(targetServer) > ns.getServerMoneyAvailable(targetServer)) {
			await ns.grow(targetServer)
		}
		else {
			hackedfor = (await ns.hack(targetServer))
			if ((!hackedfor == 0) && (showInfo == true)) {
				ns.tprint(targetServer + " has been hacked for" + colourPrint(224, 218, 22) + " $" + expo(hackedfor, 1))
			}
		}
	}
}
