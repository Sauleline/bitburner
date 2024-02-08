/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog("ALL")

  let tick = 5000 
  
	let equipment = []
	let member = []
	let worked = false

	while (true) {
		equipment = ns.gang.getEquipmentNames()
		member = ns.gang.getMemberNames()
		for (let i = 0; i < member.length; i++) {
			for (let j = 0; j < equipment.length; j++) {
				worked = ns.gang.purchaseEquipment(member[i], equipment[j])
				if (worked == true) {
					ns.tprint(member[i] + " now has " + equipment[j] + ".")
				}
			}
			await ns.sleep(1)
			worked = false
		}
	await ns.sleep (tick)
	}
}
