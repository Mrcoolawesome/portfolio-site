For this project, I primarily worked on two Blender models: the **Grass Clump** model and the **Cactus** model

**Grass Clump**: This model was made because it was much more complicated to use the shader-code-created grass blade to make clumps of grass, so I just made one in Blender. This taught me how to use curve's and curve modifiers in Blender to create the single grass blade from scratch in Blender. I then copied that blade around and re-positioned the copies to look more like a clump. I was also able to apply the same shader code to it as I did to apply wind and color for the shader-code-created grass blade. Here's some photos of it in Blender and in Godot:
![[GrassClumpBlender-Normal.png]]
![[grass-clump.gif]]

It took a little more time to make than I expected. This was because, to make it look nice, I needed to make sure it was viewable from all sides. To do this I put copies of each blade perpendicular to the one it's right next to, so that when viewing it from the side you see one blade, and when viewing it from another you see the other blade in that spot. I also made sure to combine the tips of each pair of blades, so that each pair looked like one unit instead of two separate blades. Here's an image of the blades variations I made in Blender to make the clump:
![[GrassClumpBlender-Showoff.png]]

**Cactus:** For the cactus model, I also used curves and the curve modifier in Blender to make the 'branches'. I then used Blender's **Geometry Node Editor** to instantiate a simple triangle along the surface of the cactus. I unfortunately am not able to show the Geometry Nodes that I made to do that since I already applied the modifier so that it would be usable in Godot (it's possible that I could go back into my git commit history and find a commit that has the cactus and was before I applied the modifier, but I really don't wanna dig that far to find it). Here's an image of the cactus model in Blender:
![[cactus.png]]
