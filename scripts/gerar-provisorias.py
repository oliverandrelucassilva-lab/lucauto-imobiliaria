# Gera as 5 imagens provisórias da galeria (assets/v2/prov-1..5.webp). Uso: python3 scripts/gerar-provisorias.py
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
import random
W,H=960,720
GOLD=(201,162,74); GL=(224,190,106)
FONT=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',22)
def base():
    im=Image.new('RGB',(W,H)); d=ImageDraw.Draw(im)
    for y in range(H):
        t=y/H; d.line([(0,y),(W,y)],fill=(int(8+40*t**2),int(24+22*t),int(56+10*t-30*t**2)))
    return im
def label(d): d.text((36,H-56),"IMAGEM PROVISÓRIA",fill=GOLD,font=FONT)
def glow(im,cx,cy,r,c):
    g=Image.new('RGB',(W,H),(0,0,0)); d=ImageDraw.Draw(g); d.ellipse([cx-r,cy-r,cx+r,cy+r],fill=c)
    return ImageChops.add(im,g.filter(ImageFilter.GaussianBlur(r/2)))
out=[]
random.seed(3); im=glow(base(),700,620,260,(90,55,15)); d=ImageDraw.Draw(im); x=70
while x<W-110:
    w=random.randint(80,140); h=random.randint(160,380); d.rectangle([x,H-130-h,x+w,H-130],outline=GOLD,width=2)
    for yy in range(H-130-h+20,H-150,28):
        for xx in range(x+14,x+w-14,24):
            if random.random()<.35: d.rectangle([xx,yy,xx+8,yy+12],fill=GL)
    x+=w+random.randint(20,44)
d.line([(30,H-130),(W-30,H-130)],fill=GOLD,width=2); label(d); out.append(im)
im=glow(base(),480,520,300,(90,55,15)); d=ImageDraw.Draw(im)
d.polygon([(180,380),(480,200),(780,380)],outline=GOLD,width=3); d.rectangle([230,380,730,600],outline=GOLD,width=3); d.rectangle([420,470,540,600],outline=GOLD,width=2)
for x0 in (270,600): d.rectangle([x0,430,x0+90,510],fill=(120,85,30),outline=GL,width=2)
d.line([(120,600),(840,600)],fill=GOLD,width=2); label(d); out.append(im)
im=base(); d=ImageDraw.Draw(im); pts=[(180,300),(780,260),(840,560),(140,590)]; d.polygon(pts,outline=GOLD,width=3)
for i in range(1,6):
    t=i/6; a=(pts[0][0]+(pts[1][0]-pts[0][0])*t,pts[0][1]+(pts[1][1]-pts[0][1])*t); b=(pts[3][0]+(pts[2][0]-pts[3][0])*t,pts[3][1]+(pts[2][1]-pts[3][1])*t); d.line([a,b],fill=(120,95,45),width=1)
for p in pts: d.ellipse([p[0]-7,p[1]-7,p[0]+7,p[1]+7],fill=GL)
d.line([(100,640),(860,640)],fill=GOLD,width=2); label(d); out.append(im)
im=glow(base(),300,420,260,(80,50,15)); d=ImageDraw.Draw(im)
d.rectangle([140,160,820,560],outline=GOLD,width=3); d.line([(140,560),(60,640)],fill=GOLD,width=2); d.line([(820,560),(900,640)],fill=GOLD,width=2)
d.rectangle([560,210,780,430],fill=(110,80,30),outline=GL,width=2); d.line([(670,210),(670,430)],fill=GL,width=2)
d.rectangle([200,430,500,520],outline=GOLD,width=3); d.rectangle([200,400,500,432],outline=GOLD,width=3)
d.line([(60,640),(900,640)],fill=GOLD,width=2); label(d); out.append(im)
random.seed(9); im=glow(base(),300,560,320,(120,70,20)); d=ImageDraw.Draw(im); d.ellipse([240,470,360,590],outline=GL,width=3); x=420
while x<W-60:
    w=random.randint(60,110); h=random.randint(120,300); d.rectangle([x,H-130-h,x+w,H-130],outline=GOLD,width=2); x+=w+random.randint(14,30)
d.line([(30,H-130),(W-30,H-130)],fill=GOLD,width=2); label(d); out.append(im)
for i,im in enumerate(out,1): im.save(f'assets/v2/prov-{i}.webp',quality=72,method=6)
