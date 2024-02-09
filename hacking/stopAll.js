/** @param {NS} ns */
export async function main(ns) {
	let serverlist = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "darkweb", "CSEC", "nectar-net", "zer0", "max-hardware", "silver-helix", "phantasy", "neo-net", "omega-net", "the-hub", "computek", "netlink", "johnson-ortho", "crush-fitness", "avmnite-02h", "rothman-uni", "zb-institute", "syscore", "summit-uni", "catalyst", "I.I.I.I", "aevum-police", "millenium-fitness", "lexo-corp", "rho-construction", "alpha-ent", "aerocorp", "global-pharm", "snap-fitness", "galactic-cyber", "unitalife", "omnia", "deltaone", "defcomm", "icarus", "univ-energy", "solaris", "zeus-med", "infocomm", "nova-med", "zb-def", "taiyang-digital", "run4theh111z", "microdyne", "titan-labs", "applied-energetics", "helios", "vitalife", "fulcrumtech", "stormtech", "4sigma", ".", "omnitek", "kuai-gong", "powerhouse-fitness", "b-and-a", "clarkinc", "blade", "nwo", "megacorp", "fulcrumassets", "The-Cave", "ecorp"]
	for (let i = 0; i < serverlist.length; i++){
		if (ns.kill("hacking/autoHacker.js", "home", serverlist[i]) == true){
			ns.tprint(serverlist[i] + "'s autohacker has been killed")
		}
		else{
			ns.tprint(serverlist[i]+"'s autohacker has not been killed")
		}
	}
}
