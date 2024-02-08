/** @param {NS} ns */
//Exponent Form
function expo(x, f) {
	return Number.parseFloat(x).toExponential(f);
}
//Simple Round
function customRound(a, b) {
	let dp = 10 ** b
	return (Math.trunc(a * dp) / dp)
}

//adds colour to the string
function colourPrint(R, G, B) {
	return (String("\u001b[38;2;" + R + ";" + G + ";" + B + "m"))
}

//Line Break
function lbreak() {
	let out = "\u001b[38;2;176;11;105m==============================="
	return out
}

//Turns milliseconds to days, hours, minutes, and then seconds. 
function msToDhms(seconds) {
	seconds = Number(seconds);
	seconds = seconds / 1000
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);

	var dDisplay = d > 0 ? d + (d == 1 ? "d, " : "d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? "h, " : "h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m, " : "m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

export async function main(ns) {
	ns.clearLog()
	ns.disableLog("ALL")
	ns.tail()

	let gang = ""
	let player = ns.getPlayer()
	let home = ns.getServer()
	let worldinfo = ns.getBitNodeMultipliers()
	let ownedAugs = ns.singularity.getOwnedAugmentations()
	if (ns.gang.inGang == true) {
		gang = ns.gang.getGangInformation()
	}
	let canBuyDisplay = "False"
	let canBreakDisplay = "False"
	let canRamDisplay = "False"
	let canCPUDisplay = "False"
	let bitNodeNames = ["Source Genesis", "Rise of the Underworld", "Corporatocracy", "The Singularity", "Artificial Intelligence", "Bladeburners", "Bladeburners 2079", "Ghost of Wall Street", " Hacktocracy", "Digital Carbon", "The Big Crash", "The Recursion", "They’re lunatics"]

	ns.setTitle("More Info")

	while (true) {
		player = ns.getPlayer()
		home = ns.getServer()
		if (ns.gang.inGang() == true) {
			gang = ns.gang.getGangInformation()
		}
		if (ns.gang.inGang() == false) {
			//karmacheck
			ns.print(colourPrint(0, 121, 148) + "Karma: " + customRound(ns.heart.break(), 1))
			ns.print(colourPrint(0, 121, 148) + "Amount to start gang: " + customRound((ns.heart.break() - (-54000)), 1))
			ns.print(lbreak())
		}
		//World Info
		ns.print("City: " + player.city)
		ns.print(String("Building: " + player.location))
		ns.print("BitNode: BN" + ns.getResetInfo().currentNode + ":" + bitNodeNames[ns.getResetInfo().currentNode - 1])
		if (!player.hp.current == player.hp.max)
			ns.print("Hospital Cost: " + colourPrint(255, 255, 94) + "$" + (expo(Math.min(player.money * 0.1, (player.hp.max - player.hp.current) * 100e3), 3)))
		ns.print(lbreak())

		//hacknet info
		ns.print(colourPrint(191, 107, 255) + "Hacknet Servers: " + ns.hacknet.numNodes() + " / " + ns.hacknet.maxNumNodes())
		if (!ns.hacknet.numNodes() == ns.hacknet.maxNumNodes()) {
			ns.print(colourPrint(191, 107, 255) + "Next Server Cost: " + colourPrint(255, 255, 94) + "$" + expo(ns.hacknet.getPurchaseNodeCost(), 2))

			if (player.money >= ns.hacknet.getPurchaseNodeCost()) {
				canBuyDisplay = (colourPrint(0, 255, 0) + "Yes")
			}
			else {
				canBuyDisplay = (colourPrint(255, 0, 0) + "No")
			}
			ns.print(colourPrint(191, 107, 255) + "Can Buy New Server? " + canBuyDisplay)
		}
		ns.print(colourPrint(191, 107, 255) + "Hashes: " + colourPrint(81, 140, 131) + "#" + expo(ns.hacknet.numHashes(), 3) + colourPrint(191, 107, 255) + " / " + colourPrint(81, 140, 131) + "#" + expo(ns.hacknet.hashCapacity(), 3))
		ns.print(colourPrint(191, 107, 255) + "Money From Hashes: " + colourPrint(255, 255, 94) + "$" + expo(((Math.floor(ns.hacknet.numHashes()) / 4) * 1e6), 2))
		ns.print(colourPrint(191, 107, 255) + "Money After Selling: " + colourPrint(255, 255, 94) + "$" + expo(player.money + ((Math.floor(ns.hacknet.numHashes()) / 4) * 1e6), 2))
		ns.print(lbreak())

		//Home Computer Info
		ns.print(colourPrint(0, 150, 255) + "RAM: " + customRound(home.ramUsed, 1) + " / " + customRound((home.maxRam), 1))
		ns.print(colourPrint(0, 150, 255) + "Next RAM Cost: " + colourPrint(255, 255, 94) + "$" + expo(ns.singularity.getUpgradeHomeRamCost(), 2))
		if (player.money >= ns.singularity.getUpgradeHomeRamCost()) {
			canRamDisplay = (colourPrint(0, 255, 0) + "Yes")
		}
		else {
			canRamDisplay = (colourPrint(255, 0, 0) + "No")
		}
		ns.print(colourPrint(0, 150, 255) + "Can Buy RAM Up? " + canRamDisplay)
		ns.print(colourPrint(0, 150, 255) + "Cores: " + home.cpuCores)
		ns.print(colourPrint(0, 150, 255) + "Next CPU Cost: " + colourPrint(255, 255, 94) + "$" + expo(ns.singularity.getUpgradeHomeCoresCost(), 2))
		if (player.money >= ns.singularity.getUpgradeHomeCoresCost()) {
			canCPUDisplay = (colourPrint(0, 255, 0) + "Yes")
		}
		else {
			canCPUDisplay = (colourPrint(255, 0, 0) + "No")
		}
		ns.print(colourPrint(0, 150, 255) + "Can Buy CPU Up? " + canCPUDisplay)
		ns.print(lbreak())

		//gang info
		if (ns.gang.inGang() == true) {
			ns.print(colourPrint(0, 255, 0) + "Gang Name: " + gang.faction)
			ns.print(colourPrint(0, 255, 0) + "Respect: " + expo(gang.respect, 2))
			ns.print(colourPrint(0, 255, 0) + "Wanted Level: " + expo(gang.wantedLevel, 2))
			ns.print(colourPrint(0, 255, 0) + "Territory: " + customRound(gang.territory * 100, 2) + "%")
			if (ns.gang.getBonusTime() >= 3000) {
				ns.print(colourPrint(0, 255, 0) + "Bonus Time: " + msToDhms(ns.gang.getBonusTime()))
			}
			ns.print(lbreak())
		}

		//fl1ght.exe
		ns.print("Augs: " + ownedAugs.length + " / 30")
		ns.print("Money: " + expo(player.money, 2) + " / 1e+9")
		ns.print("Hacking skill: " + player.skills.hacking + " / 2500")
		ns.print(lbreak())

		//Bladeburner Placeholder
		//ns,print(lbreak())

		//misc info
		if (!ownedAugs.includes("nickofolas Congruity Implant")) {
			ns.print("Current Entropy: " + player.entropy)
			ns.print(lbreak())
		}
		if (player.skills.hacking <= (worldinfo.WorldDaemonDifficulty * 3000)) {
			canBreakDisplay = (colourPrint(255, 0, 0) + "No")
		}
		else {
			if (ownedAugs.includes("The Red Pill")) {
				canBreakDisplay = (colourPrint(0, 255, 0) + "Yes")
			}
			else {
				canBreakDisplay = (colourPrint(255, 0, 0) + "No")
			}
		}
		ns.print(colourPrint(255, 130, 234) + "Can Break Daemon? " + canBreakDisplay)

		await ns.sleep(100)
		ns.clearLog()
	}
}
