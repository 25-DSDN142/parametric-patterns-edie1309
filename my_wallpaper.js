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
  background(108,200,250); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  eye()
  eye2()
}

function eye(){
noStroke()
  ellipse(100, 100, 50)
  triangle(triX1,77,triX1,123,55,100)
  triangle(triX2,77,triX2,123,145,100)//eyeshape
  
  
  //fill(255,233,108)//yellow
  fill(53, 130, 70)//green
  ellipse(100,colourheight,35)//eyecolour

  fill(0)
  ellipse(100,pupilheight,pupilsize)//pupil

  fill (230)
  ellipse(103,95,5)

}
function eye2(){
  noStroke()
  ellipse(40, 45, 25)
  triangle
}
