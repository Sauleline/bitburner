/** @param {NS} ns */
//just a little script i made to show me what song im listening to at the moment. there are simple instructions for how to get a lastfm api key online, use them.
export async function main(ns) {
	ns.tail()
	let username = "YOUR LASTFM USERNAME"
	let apiKey = "YOUR API KEY"
	while (true) {
		let response = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+username+"&api_key="+apiKey+"&format=json&limit=1&extended=1");
		let recent = await response.json();
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
	}
}
