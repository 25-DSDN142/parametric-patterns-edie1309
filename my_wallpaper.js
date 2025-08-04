//your parameter variables go here!
let pupilsize = 30;
let triX1 = 90;
let triX2 = 110;
let pupilheight = 100;
let colourheight = 100;
let cellwidth = 200
let cellheight = 200

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cellwidth;
  pWallpaper.grid_settings.cell_height = cellheight;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 247, 240); //light CREam colour

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  eyeshape()
  eye()
  circlepink()
  circleorange()
  circleblue()
  circlelightgreen()
  c2green()
  c2pink ()
  c2orange()


}


function eyeshape(){
strokeWeight(4)
stroke(100)
  ellipse(100, 100, 50)
  triangle(triX1,77,triX1,123,55,100)
  triangle(triX2,77,triX2,123,145,100)


  noStroke()
  ellipse(100, 100, 50)
  triangle(triX1,77,triX1,123,55,100)
  triangle(triX2,77,triX2,123,145,100)//eyeshape

}
  
function eye(){
  //fill(255,233,108)//yellow
  fill(163, 187, 26)//green
  ellipse(100,colourheight,35)//eyecolour

  fill(0)
  ellipse(100,pupilheight,pupilsize)//pupil

  fill (230)
  ellipse(103,95,5)

}
function circlepink(){
  noStroke()
  fill (224, 133, 141)// pink
  ellipse(30, 45, 25)
  fill (0)// indside of cirlce pink
  ellipse(27, 45, 10)
}
function circleorange(){ 
  fill (242, 114, 2)
  ellipse (43, 60, 28)
  fill(0) 
  ellipse (47, 60, 15) //ornage pupil 
}
function circleblue(){ 
  fill(109, 184, 191)
  ellipse (45,27,25)
  fill(0)
  ellipse(45,25,12)//bluecicle
}
function circlelightgreen(){
  fill (157, 199, 152)
  ellipse(33,14,27)
  fill(0)
  ellipse(30,17,7)
}

function c2green(){
  fill (157, 199, 152)
  ellipse(170,140,28)
  fill(0)
  ellipse(174,140,17)

}

function c2pink(){
  fill (224, 133, 141)
  ellipse (158, 160, 25)
  fill(0)
  ellipse(155, 163,13)
}

function c2orange(){
  fill(242, 114, 2)
  ellipse(165, 175, 20)
  fill(0)
  ellipse(168,178,10)

}

