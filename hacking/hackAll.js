/** @param {NS} ns */
export async function main(ns) {
	let threadCount = ns.args[0]
	let displayInfo = ns.args[1]

  

	let serverList = ["n00dles","foodnstuff","sigma-cosmetics","joesguns","hong-fang-tea","harakiri-sushi","iron-gym","darkweb","nectar-net","CSEC","max-hardware","zer0","silver-helix","phantasy","neo-net","omega-net","the-hub","netlink","computek","johnson-ortho","crush-fitness","avmnite-02h","rothman-uni","catalyst","summit-uni","syscore","I.I.I.I","zb-institute","lexo-corp","alpha-ent","aevum-police","millenium-fitness","rho-construction","galactic-cyber","aerocorp","global-pharm","snap-fitness","unitalife","omnia","deltaone","defcomm","univ-energy","solaris","icarus","zeus-med","taiyang-digital","nova-med","zb-def","infocomm","microdyne","applied-energetics","run4theh111z","titan-labs","helios","fulcrumtech","vitalife","stormtech","omnitek",".","4sigma","kuai-gong","b-and-a","clarkinc","blade","nwo","powerhouse-fitness","fulcrumassets","The-Cave","megacorp","ecorp","w0r1d_d43m0n"]

	for (let i = 0; i < serverList.length; i++){
		if((!ns.isRunning("hacking/autoHacker.js", "home", serverList[i]))){
			if(!(ns.run("hacking/autoHacker.js", threadCount, serverList[i], displayInfo))==0){
				ns.tprint(serverList[i]+" is now being autohackered.")
			}
		}
	}
}
