/** @param {NS} ns */
export async function main(ns) {

	function staytilaugs() {
		ns.tprint("INFO: This Effect Stays Until Augmentations Are Installed")
	}

	function lbreak() {
		ns.tprint("___________________________________________________________")
	}

	function expo(x, f) {
		return Number.parseFloat(x).toExponential(f);
	}

	let hashes = ns.hacknet.numHashes()
	let product = ns.args[0]
	let target = ns.args[1]
	let amountGained = 0

  //lol this was my first script with a !help
  
	hashes = Math.floor(hashes)
	if (product == "!help") {
		ns.tprint("")
		ns.tprint("")
		ns.tprint("WARN: THESE ARE ALL CASE SENSITIVE")
		ns.tprint("Sells all of your hashes for: ")
		lbreak()
		ns.tprint("[Argument You Use]: [Full Hacknet Upgrade Name]")
		ns.tprint("[Abridged Description, Per Single Purchase]")
		ns.tprint("[Cost Of Product, Per Single Purchase]")
		ns.tprint("[Any Other Info]")
		lbreak()
		ns.tprint('"Money": Sell for Money')
		ns.tprint("Sell hashes for $1e6")
		ns.tprint("#4")
		lbreak()
		ns.tprint('"Corp Funds": Sell for Corporation Funds')
		ns.tprint("Sell hashes for $1e9 in Corporation funds")
		ns.tprint("#100")
		lbreak()
		ns.tprint('"Reduce Security": Reduce Minimum Security')
		ns.tprint("Decrease the minimum security of the target server by 2%.")
		ns.tprint("#50")
		ns.tprint("INFO: Requires a second argument (Server Name)")
		staytilaugs()
		lbreak()
		ns.tprint('"Increase Money": Increase Maximum Money')
		ns.tprint("Increase the maximum money of the target server by 2%.")
		ns.tprint("#50")
		ns.tprint("INFO: Requires a second argument (Server Name)")
		staytilaugs()
		lbreak()
		ns.tprint('"Study": Improve Studying')
		ns.tprint("Increase the XP earned when studying by 20%")
		ns.tprint("#50")
		staytilaugs()
		lbreak()
		ns.tprint('"Gym": Improve Gym Training')
		ns.tprint("Increase the XP earned at a gym by 20%")
		ns.tprint("#50")
		staytilaugs()
		lbreak()
		ns.tprint('"Corp Research": Exchange for Corporation Research')
		ns.tprint("Gives 1k research for every industry")
		ns.tprint("#200")
		lbreak()
		ns.tprint('"BB Rank": Exchange for Bladeburner Rank')
		ns.tprint("Gives you 100 Bladeburner Rank")
		ns.tprint("#250")
		lbreak()
		ns.tprint('"BB SP": Exchange for Bladeburner SP')
		ns.tprint("Gives you 10 Bladeburner Skill Points")
		ns.tprint("#250")
		ns.tprint("WARN: GIVES YOU LESS SKILL POINTS THAN BUYING RANK")
		lbreak()
		ns.tprint('"Coding Contract": Generate Coding Contract')
		ns.tprint("Generates a random Coding Contract")
		ns.tprint("#200")
		lbreak()
		ns.tprint('"Favour": Company Favour')
		ns.tprint("Gives you 5 favour for the target company")
		ns.tprint("#200")
		ns.tprint("INFO: Requires a second argument (Company Name)")
		lbreak()
		ns.tprint("")
		ns.tprint("")
	}
	else {
		if (product == "Money") {
			if (ns.hacknet.spendHashes("Sell for Money", 1, Math.floor(hashes / 4)) == true) {
				amountGained = Math.floor(hashes / 4) * 1e6
				ns.tprint("Gained $" + expo(amountGained, 2))
			}
		}

		else if (product == "Corp Funds") {
			if (ns.hacknet.spendHashes("Sell for Corporation Funds", 1, Math.floor(hashes / 100)) == true) {
				amountGained = Math.floor(hashes / 100) * 1e9
				ns.tprint("Gained $" + expo(amountGained, 2) + " in corporation funds")
			}
		}

		else if (product == "Reduce Security") {
			if (ns.hacknet.spendHashes("Reduce Minimum Security", target, Math.floor(hashes / 50)) == true) {
				amountGained = Math.floor(hashes / 50) * 2
				ns.tprint(target + "'s minimum security has been lowered by " + expo(amountGained, 2) + "%")
				staytilaugs()
			}
			else {
				ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED FACTION NAME")
			}
		}

		else if (product == "Increase Money") {
			if (ns.hacknet.spendHashes("Increase Maximum Money", target, Math.floor(hashes / 50)) == true) {
				amountGained = Math.floor(hashes / 50) * 2
				ns.tprint(target + "'s maximum money has been raised by by " + expo(amountGained, 2) + "%")
				staytilaugs()
			}
			else {
				ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED FACTION NAME")
			}
		}

		else if (product == "Study") {
			if (ns.hacknet.spendHashes("Improve Studying", 1, Math.floor(hashes / 50)) == true) {
				amountGained = Math.floor(hashes / 50) * 20
				ns.tprint("XP gained from studying increased by " + expo(amountGained, 2) + "%")
				staytilaugs()
			}
		}

		else if (product == "Gym") {
			if (ns.hacknet.spendHashes("Improve Gym Training", 1, Math.floor(hashes / 50)) == true) {
				amountGained = Math.floor(hashes / 50) * 20
				ns.tprint("XP gained from studying increased by " + expo(amountGained, 2) + "%")
				staytilaugs()
			}
		}

		else if (product == "Corp Research") {
			if (ns.hacknet.spendHashes("Exchange for Corporation Research", 1, Math.floor(hashes / 200)) == true) {
				amountGained = Math.floor(hashes / 200) * 1e3
				ns.tprint("Gained " + expo(amountGained, 2) + "scientific research in all of your corporation's industries")
			}
		}

		else if (product == "BB Rank") {
			if (ns.hacknet.spendHashes("Exchange for Bladeburner Rank", 1, Math.floor(hashes / 250)) == true) {
				amountGained = Math.floor(hashes / 250) * 100
				ns.tprint("Bladeburner rank increased by " + expo(amountGained, 2))
			}
		}

		else if (product == "BB SP") {
			if (ns.hacknet.spendHashes("Exchange for Bladeburner SP", 1, Math.floor(hashes / 250)) == true) {
				amountGained = Math.floor(hashes / 250) * 10
				ns.tprint("Gained " + expo(amountGained, 2) + " Bladeburner skill points")
			}
		}
		else if (product == "Coding Contract") {
			if (ns.hacknet.spendHashes("Generate Coding Contract", 1, Math.floor(hashes / 200)) == true) {
				amountGained = Math.floor(hashes / 200) * 1
				ns.tprint(expo(amountGained,2) + " coding contracts generated")
			}
		}
		else if (product == "Company Favour") {
			if (ns.hacknet.spendHashes("Company Favor", target, Math.floor(hashes / 200)) == true) {
				amountGained = Math.floor(hashes / 200) * 20
				ns.tprint("Gained " + expo(amountGained, 2) + " company favour with " + target)
			}
			else {
				ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED COMPANY NAME")
			}
		}
		else {
			ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED INPUT.")
		}
	}
}
