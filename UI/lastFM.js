/** @param {NS} ns */
//just a little script i made to show me what song im listening to at the moment. there are simple instructions for how to get a lastfm api key online, use them.
export async function main(ns) {
	function lfm(func, key, ...params) {
		let out = "https://ws.audioscrobbler.com/2.0/?method=" + func + "&api_key=" + key
		for (let i = 0; i < params.length; i++) {
			out = out + "&" + params[i][0] + "=" + params[i][1]
		}
		out = out + "&format=json"
		return (out)
	}

	ns.tail()
	ns.disableLog("ALL")
	let username = "YOUR LASTFM USERNAME"
	let apiKey = "YOUR API KEY"
	while (true) {
		let response = await fetch(lfm("user.getrecenttracks", apiKey, ["user", username], ["limit", 1], ["extended", 1]))
		let recent = await response.json()
		ns.clearLog()
		let recentTrack = recent.recenttracks.track[0]
		ns.print("Now Playing: " + recentTrack.name)
		ns.print("────────────────────────────────────────────")
		ns.print("On Album: " + recentTrack.album["#text"])
		ns.print("────────────────────────────────────────────")
		ns.print("By: " + recentTrack.artist.name)
		ns.print("────────────────────────────────────────────")
		if(recentTrack.loved == 1){
			ns.print("\u001b[38;2;217;35;35m<3")
		}
		else{
			ns.print("\u001b[38;2;187;187;187m<3")
		}
		await ns.sleep(1500)
		//Rate Limit protection
	}
}
