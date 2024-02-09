/** @param {NS} ns */
//a very shitty script which just generates a list of every hash upgrade, with their price, in the log.
export async function main(ns) {
  ns.tail()
	ns.clearLog()
	let upgrades = ns.hacknet.getHashUpgrades()
	for (let i = 0; i < upgrades.length; i++) {
		ns.print(upgrades[i] + " costs " + ns.hacknet.hashCost(upgrades[i]))
	}
}
