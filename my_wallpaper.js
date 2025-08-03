//your parameter variables go here!
let pupilsize = 20;
let triX1 = 90;
let triX2 = 110;
let pupilheight = 100;
let colourheight = 100;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 247, 240); //light CREam colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  eye()
  cirlcecollection()
}

function eye(){
noStroke()
  ellipse(100, 100, 50)
  triangle(triX1,77,triX1,123,55,100)
  triangle(triX2,77,triX2,123,145,100)//eyeshape
  
  
  //fill(255,233,108)//yellow
  fill(163, 187, 26)//green
  ellipse(100,colourheight,35)//eyecolour

  fill(0)
  ellipse(100,pupilheight,pupilsize)//pupil

  fill (230)
  ellipse(103,95,5)

}
function cirlcecollection(){
  noStroke()
  fill (224, 133, 141)// pink
  ellipse(30, 45, 25)
  fill (255, 247, 240)// indside of cirlce pink
  ellipse(27, 45, 10)

  fill (242, 114, 2)
  ellipse (43, 60, 28)
  fill(255, 247, 240) 
  ellipse (47, 60, 15) //ornage pupil 

  fill(109, 184, 191)
  ellipse (45,27,25)
  fill(255, 247, 240)
  ellipse(45,25,12)//bluecicle



}
