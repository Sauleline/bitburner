/** @param {NS} ns */

//sells all of you hashes for money as soon as you max them out.

export async function main(ns) {
	function expo(x, f) {
		return Number.parseFloat(x).toExponential(f);
	}

	let hashes = ns.hacknet.numHashes()
	let amountGained = 0
	hashes = Math.floor(hashes / 4)
	ns.disableLog("ALL")
	ns.tail()

	if (ns.hacknet.spendHashes("Sell for Money", 1, hashes) == true) {
		ns.clearLog()
		amountGained = hashes * 1e6
		ns.print("Gained: " + expo(amountGained, 2))
	}

	ns.setTitle("Last Sold:")

	while (true) {
		amountGained = 0
		if (ns.hacknet.numHashes() == (ns.hacknet.hashCapacity())) {
			if (ns.hacknet.spendHashes("Sell for Money", 1, hashes) == true) {
				ns.clearLog()
				amountGained = hashes * 1e6
				ns.print(expo(amountGained, 2))
			}
		}
		await ns.sleep(2000)
	}
}
