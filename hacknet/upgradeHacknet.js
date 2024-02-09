/** @param {NS} ns */

//very bad script which just upgrades your hacknet nodes, with the first one first. it's not optimized at all.

export async function main(ns) {
	let nodecount = 0
	let currentnode = 0
	let nodelevel = 0
	let levelleft = 0
	nodecount = ns.hacknet.numNodes()
	for (let i = 0; i < nodecount; i++) {
		currentnode = ns.hacknet.getNodeStats(i)
		nodelevel = currentnode.ram
		levelleft = 64 - nodelevel
		ns.hacknet.upgradeRam(i, levelleft)
		currentnode = ns.hacknet.getNodeStats(i)
		nodelevel = currentnode.cores
		levelleft = 16 - nodelevel
		for (let j = 0; j < levelleft; j++) {
			ns.hacknet.upgradeCore(i, 1)
		}
		nodelevel = currentnode.level
		levelleft = 200 - nodelevel
		for (let j = 0; j < levelleft; j++) {
			ns.hacknet.upgradeLevel(i, 1)
		}
	}
}
