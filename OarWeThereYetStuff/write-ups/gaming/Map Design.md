Finally, the map. I actually used quite an easy method to make the main map mesh. I got the height map of one part of the Grand Canyon from a [free to use online tool](https://tangrams.github.io/heightmapper/#12.08333/36.3003/-112.8347), and then edited the map in GIMP so that the canyon drops off quickly at specific spots so that I could make waterfalls at those spots. Here's a top view of the map in the game along with the height map:

Original height map:
![[height-map.png]]

Map height map (edited for waterfall-dropoffs):
![[height-map-down-test.png]]

Current version of the map in Godot:
![[MapFromAbove.png]]

I used the [Terrain3D Addon](https://github.com/TokisanGames/Terrain3D) for Godot to import the height map, and then used the terrain editor to get rid of all the side branches since all we wanted was the main river. I then used the Terrain3D addon to instantiate rocks, several types of grass, and cacti around the map, as well as smooth out some of the rough spots, and make a grass bowl at the end of the game (can be seen in the top right corner). Here are some screenshots of the inside of the map:

![[WaterFall.png]]![[RiverBend 1.png]]![[RiverWithEmptyBoat.png]]