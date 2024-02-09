/** @param {NS} ns */

//quickly slapped together script which needs SF4 to run. 

export async function main(ns) {
	let gang = ns.gang.getGangInformation()
	let augs = ns.singularity.getAugmentationsFromFaction(gang.faction)
	for (let i = 0; i < augs.length; i++) {
		ns.singularity.purchaseAugmentation(gang.faction, augs[i])
	}
}
