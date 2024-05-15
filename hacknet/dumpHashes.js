/** @param {NS} ns */
export async function main(ns) {

	function staytilaugs() {
		ns.tprint("INFO: This Effect Stays Until Augmentations Are Installed")
	}

	function lbreak() {
		ns.tprint("___________________________________________________________")
	}

	function stacks() {
		ns.tprint("INFO: The Cost Of This Upgrade Increases (Probably)")
	}
	//This wasn't here in the 1.0 because I'm stupid and haven't used all of the upgrades yet

	function expo(x, f) {
		return Number.parseFloat(x).toExponential(f);
	}

	let hashes = ns.hacknet.numHashes()
	let product = ns.args[0]
	let target = ns.args[1]
	let amountGained = 0
	hashes = Math.floor(hashes)
	let done = false
	let succeed = 0

	if (product == "!help") {
		ns.tprint("")
		ns.tprint("")
		ns.tprint("WARN: THESE ARE ALL CASE SENSITIVE")
		ns.tprint("Sells all of your hashes for: ")
		lbreak()
		ns.tprint("[Argument You Use]: [Full Hacknet Upgrade Name]")
		ns.tprint("[Abridged Description, Per Single Purchase]")
		ns.tprint("[Cost Of Product, Per Single Purchase, at time of using script]")
		ns.tprint("[Any Other Info]")
		lbreak()
		ns.tprint('"Money": Sell for Money')
		ns.tprint("Sell hashes for $1e6")
		ns.tprint("#" + ns.hacknet.hashCost('Sell for Money'))
		lbreak()
		ns.tprint('"Corp Funds": Sell for Corporation Funds')
		ns.tprint("Sell hashes for $1e9 in Corporation funds")
		ns.tprint("#" + ns.hacknet.hashCost('Sell for Corporation Funds'))
		ns.tprint("(Idk if this one stacks (don't have corps unlocked))")
		lbreak()
		ns.tprint('"Reduce Security": Reduce Minimum Security')
		ns.tprint("Decrease the minimum security of the target server by 2%.")
		ns.tprint("#" + ns.hacknet.hashCost('Reduce Minimum Security'))
		ns.tprint("INFO: Requires a second argument (Server Name)")
		stacks()
		staytilaugs()
		lbreak()
		ns.tprint('"Increase Money": Increase Maximum Money')
		ns.tprint("Increase the maximum money of the target server by 2%.")
		ns.tprint("#" + ns.hacknet.hashCost('Increase Maximum Money'))
		ns.tprint("INFO: Requires a second argument (Server Name)")
		stacks()
		staytilaugs()
		lbreak()
		ns.tprint('"Study": Improve Studying')
		ns.tprint("Increase the XP earned when studying by 20%")
		ns.tprint("#" + ns.hacknet.hashCost('Improve Studying'))
		stacks()
		staytilaugs()
		lbreak()
		ns.tprint('"Gym": Improve Gym Training')
		ns.tprint("Increase the XP earned at a gym by 20%")
		ns.tprint("#" + ns.hacknet.hashCost('Improve Gym Training'))
		stacks()
		staytilaugs()
		lbreak()
		ns.tprint('"Corp Research": Exchange for Corporation Research')
		ns.tprint("Gives 1k research for every industry")
		ns.tprint("#" + ns.hacknet.hashCost('Exchange for Corporation Research'))
		stacks()
		lbreak()
		ns.tprint('"BB Rank": Exchange for Bladeburner Rank')
		ns.tprint("Gives you 100 Bladeburner Rank")
		ns.tprint("#" + ns.hacknet.hashCost('Exchange for Bladeburner Rank'))
		lbreak()
		ns.tprint('"BB SP": Exchange for Bladeburner SP')
		ns.tprint("Gives you 10 Bladeburner Skill Points")
		ns.tprint("#" + ns.hacknet.hashCost('Exchange for Bladeburner SP'))
		ns.tprint("WARN: GIVES YOU LESS SKILL POINTS THAN BUYING RANK, ")
		ns.tprint("IF NEITHER HAVE BEEN PURCHASED")
		lbreak()
		ns.tprint('"Coding Contract": Generate Coding Contract')
		ns.tprint("Generates a random Coding Contract")
		ns.tprint("#" + ns.hacknet.hashCost('Generate Coding Contract'))
		stacks()
		lbreak()
		ns.tprint('"Favour": Company Favour')
		ns.tprint("Gives you 5 favour for the target company")
		ns.tprint("#" + ns.hacknet.hashCost('Company Favour'))
		ns.tprint("INFO: Requires a second argument (Company Name)")
		stacks()
		lbreak()
		ns.tprint("")
		ns.tprint("")
	}
	else {
		if (product == "Money") {
			while (!done) {
				if (ns.hacknet.spendHashes("Sell for Money", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 1e6
			ns.tprint("Gained $" + expo(amountGained, 2))
		}

		else if (product == "Corp Funds") {
			while (!done) {
				if (ns.hacknet.spendHashes("Sell for Corporation Funds", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 1e9
			ns.tprint("Gained $" + expo(amountGained, 2) + " in corporation funds")
		}

		else if (product == "Reduce Security") {
			while (!done) {
				if (ns.hacknet.spendHashes("Reduce Minimum Security", target, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			if (succeed >= 1) {
				amountGained = succeed * 2
				ns.tprint(target + "'s minimum security has been lowered by " + expo(amountGained, 2) + "%")
				staytilaugs()
			}
			else {
				ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED SERVER NAME")
			}
		}

		else if (product == "Increase Money") {
			while (!done) {
				if (ns.hacknet.spendHashes("Increase Maximum Money", target, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			if (succeed >= 1) {
				amountGained = succeed * 2
				ns.tprint(target + "'s maximum money has been raised by by " + expo(amountGained, 2) + "%")
				staytilaugs()
			}
			else {
				ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED SERVER NAME")
			}
		}

		else if (product == "Study") {
			while (!done) {
				if (ns.hacknet.spendHashes("Improve Studying", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 20
			ns.tprint("XP gained from studying increased by " + expo(amountGained, 2) + "%")
			staytilaugs()
		}

		else if (product == "Gym") {
			while (!done) {
				if (ns.hacknet.spendHashes("Improve Gym Training", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 20
			ns.tprint("XP gained from going to the gym increased by " + expo(amountGained, 2) + "%")
			staytilaugs()
		}

		else if (product == "Corp Research") {
			while (!done) {
				if (ns.hacknet.spendHashes("Exchange for Corporation Research", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 1e3
			ns.tprint("Gained " + expo(amountGained, 2) + "scientific research in all of your corporation's industries")
		}

		else if (product == "BB Rank") {
			while (!done) {
				if (ns.hacknet.spendHashes("Exchange for Bladeburner Rank", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 100
			ns.tprint("Bladeburner rank increased by " + expo(amountGained, 2))
		}

		else if (product == "BB SP") {
			while (!done) {
				if (ns.hacknet.spendHashes("Exchange for Bladeburner SP", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 10
			ns.tprint("Gained " + expo(amountGained, 2) + " Bladeburner skill points")
		}

		else if (product == "Coding Contract") {
			while (!done) {
				if (ns.hacknet.spendHashes("Generate Coding Contract", 1, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
			}
			amountGained = succeed * 1
			ns.tprint(expo(amountGained, 2) + " coding contracts generated")
		}

		else if (product == "Company Favour") {
			while (!done) {
				if (ns.hacknet.spendHashes("Company Favor", target, 1) == true) {
					succeed += 1
				}
				else {
					done = true
				}
				if (succeed <= 1) {
					amountGained = succeed * 20
					ns.tprint("Gained " + expo(amountGained, 2) + " company favour with " + target)
				}
				else {
					ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED COMPANY NAME")
				}
			}
		}

		else {
			ns.tprint("ERROR: DIDN'T PUT AN ACCEPTED INPUT.")
		}
	}
}
