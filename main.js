import * as THREE from 'three'

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1C1C1C);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const aspectRatio = window.innerWidth / window.innerHeight;
const frustumSize = 15;
const camera = new THREE.OrthographicCamera(
    frustumSize * aspectRatio / -2, 
    frustumSize * aspectRatio / 2, 
    frustumSize / 2, 
    frustumSize / -2, 
    0.1, 1000
);

camera.position.set(10, 5, 10);
camera.lookAt(0, 0, 0);

// Floorboard loop
const boardWidth = 1;
const boardLength = 10;
const colors = [0x9f8556, 0x907747];

for (let i = -5; i < 5; i += boardWidth) {
    const index = Math.abs(i / boardWidth) % colors.length;
    const color = colors[index];
    const floorBMat = new THREE.MeshStandardMaterial({ color });

    const board = new THREE.Mesh(
        new THREE.BoxGeometry(boardWidth, 0.5, boardLength),
        floorBMat
    );
    board.position.set(i + boardWidth / 2, -1.7, 0);
    scene.add(board);
}

// Walls
const wallGeo = new THREE.BoxGeometry(10,5,0.1);
const wallMat = new THREE.MeshLambertMaterial({color: 0xf4ffd1});

const rightWall = new THREE.Mesh(wallGeo, wallMat);
rightWall.position.set(0,1,-4.95);
scene.add(rightWall);

const leftWall = new THREE.Mesh(wallGeo, wallMat);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.set(-4.95,1,0);
scene.add(leftWall);

// Wall Molding
const lowerGeo = new THREE.BoxGeometry(0.03,0.3,10);
const lowerMat = new THREE.MeshLambertMaterial({color: 0x9f8556});

const wallMold1 = new THREE.Mesh(lowerGeo,lowerMat);
wallMold1.position.set(-4.88,-1.28,0);
scene.add(wallMold1);

const wallMold2 = new THREE.Mesh(lowerGeo,lowerMat);
wallMold2.position.set(0,-1.28,-4.88);
wallMold2.rotation.y = Math.PI / 2;
scene.add(wallMold2);

// Bed Frame
const bedFGeo = new THREE.BoxGeometry(6.5,0.38,3);
const bedFMat = new THREE.MeshLambertMaterial({color: 0x907747});
const bedFrame = new THREE.Mesh(bedFGeo,bedFMat);
bedFrame.position.set(1.7,-0.87,-3.21);
scene.add(bedFrame);

// Bed Headboard
const hBoardGeo = new THREE.BoxGeometry(0.4,1.5,3.2);
const hBoardMat = new THREE.MeshLambertMaterial({color: 0x907747});
const hBoard = new THREE.Mesh(hBoardGeo,hBoardMat);
hBoard.position.set(4.799,-0.31,-3.31);
scene.add(hBoard);

// Bed Legs
const legsGeo = new THREE.BoxGeometry(0.4,0.7,0.4);
const legsMat = new THREE.MeshLambertMaterial({color: 0x907747});

const leg1 = new THREE.Mesh(legsGeo,legsMat);
leg1.position.set(-1.35,-1.2,-1.91);
scene.add(leg1);

const leg2 = new THREE.Mesh(legsGeo,legsMat);
leg2.position.set(4.799,-1.2,-1.91);
scene.add(leg2);

const leg3 = new THREE.Mesh(legsGeo,legsMat);
leg3.position.set(4.799,-1.2,-4.69);
scene.add(leg3);

// Mattress
const matGeo = new THREE.BoxGeometry(6.3,0.3,2.8);
const matMat = new THREE.MeshLambertMaterial({color: 0xffffff});
const mattress = new THREE.Mesh(matGeo,matMat);
mattress.position.set(1.7,-0.6,-3.16);
scene.add(mattress);

// Pillow
const pillowGeo = new THREE.BoxGeometry(1,0.3,1.5);
const pillowMat = new THREE.MeshLambertMaterial({color: 0xffffff});
const pillow = new THREE.Mesh(pillowGeo,pillowMat);
pillow.position.set(4.2,-0.3,-3);
scene.add(pillow);

// Blanket + Design
const blanketGeo = new THREE.BoxGeometry(5.4,0.4,2.89);
const blanketMat = new THREE.MeshLambertMaterial({color: 0xfffff0});
const blanket = new THREE.Mesh(blanketGeo,blanketMat);
blanket.position.set(1.25,-0.6,-3.16);
scene.add(blanket);

const stripGeoG = new THREE.BoxGeometry(0.1,0.2,2.89);
const stripMatG = new THREE.MeshLambertMaterial({color: 0xbdd86f});
const stripGeoP = new THREE.BoxGeometry(5.4,0.08,2.89);
const stripMatP = new THREE.MeshLambertMaterial({color: 0xffd1ec});

const stripPosX = [1.9,2.9,0.9,-0.1,-1];
for (let i = 0; i < stripPosX.length; i++) {
    const gStrip = new THREE.Mesh(stripGeoG, stripMatG);
    gStrip.position.set(stripPosX[i], -0.49, -3.16);
    scene.add(gStrip);
}

const pStrip = new THREE.Mesh(stripGeoP,stripMatP);
pStrip.position.set(1.26,-0.6,-3.159);
scene.add(pStrip);

// Small Table
const tableGeo = new THREE.CylinderGeometry( 1.2, 1.2, 0.1, 32 ); 
const tableMat = new THREE.MeshLambertMaterial({color: 0xf5ffd6}); 
const table = new THREE.Mesh(tableGeo,tableMat);
table.position.set(-0.1,-0.6,0.6);
scene.add(table);

const tLegGeo = new THREE.BoxGeometry(0.1,0.8,0.26);
const tLegMat = new THREE.MeshLambertMaterial({color: 0xf5ffd6});

const tLeg1 = new THREE.Mesh(tLegGeo, tLegMat);
tLeg1.position.set(0.6,-1.0,0.1);
scene.add(tLeg1);

const tLeg2 = new THREE.Mesh(tLegGeo, tLegMat);
tLeg2.position.set(-0.6,-1.0,1.3);
tLeg2.rotation.y = Math.PI / 2;
scene.add(tLeg2);

// Rug
const rugGeo1 = new THREE.BoxGeometry(4.8,0.1,4.8);
const rugMat1 = new THREE.MeshLambertMaterial({color: 0xfffff0});
const rugGeo2 = new THREE.BoxGeometry(4.82,0.1,2.5);
const rugMat2 = new THREE.MeshLambertMaterial({color: 0xffdbff});

const rug1 = new THREE.Mesh(rugGeo1,rugMat1);
rug1.position.set(0.3,-1.45,1);
scene.add(rug1);

const rug2 = new THREE.Mesh(rugGeo2,rugMat2);
rug2.position.set(0.3,-1.449,1);
scene.add(rug2);

rug1.rotation.y = 0.03;
rug2.rotation.y = 0.03;

// Cabinet
const cabGeo = new THREE.BoxGeometry(2,3,3);
const cabMat = new THREE.MeshLambertMaterial({color: 0xbddeff})
const cabinet = new THREE.Mesh(cabGeo,cabMat);
cabinet.position.set(-4.9,-0.4,-3.5);
scene.add(cabinet);

const deet1Geo = new THREE.BoxGeometry(1,0.5,2.7);
const deet1Mat = new THREE.MeshLambertMaterial({color: 0x98c2ec});

const deetPosY = -1;

for (let i = 0; i < 4; i++) {
    const detail = new THREE.Mesh(deet1Geo, deet1Mat);
    const newY = deetPosY + i * (5 + -4.44);
    detail.position.set(-4.36, newY, -3.45);
    scene.add(detail);
}

// Writing Desk
const shelfGeo = new THREE.BoxGeometry(1.75,4,1);
const shelfMat = new THREE.MeshLambertMaterial({color: 0x907747});
const shelf = new THREE.Mesh(shelfGeo,shelfMat);
shelf.position.set(-4.09,0,4.499);
scene.add(shelf);

const deskGeo = new THREE.BoxGeometry(1.7,0.2,4.5);
const deskMat = new THREE.MeshLambertMaterial({color: 0x907747});
const desk = new THREE.Mesh(deskGeo,deskMat);
desk.position.set(-4.07,0,2.2);
scene.add(desk);

const dDrawGeo = new THREE.BoxGeometry(1.75,2,1.35);
const dDrawMat = new THREE.MeshLambertMaterial({color: 0x907747});
const deskDrawer = new THREE.Mesh(dDrawGeo,dDrawMat);
deskDrawer.position.set(-4.099,-0.9,0.499);
scene.add(deskDrawer);

const drawGeo = new THREE.BoxGeometry(1.75,0.5,1.2);
const drawMat = new THREE.MeshLambertMaterial({color: 0x9a8051});

for (let i = 0; i < 2; i++) {
    const drawer = new THREE.Mesh(drawGeo,drawMat);
    const newY = deetPosY + i * (5 + -4.44);
    drawer.position.set(-4.05, newY, 0.5);
    scene.add(drawer);
}

// Writing Desk Items
const paperGeo = new THREE.BoxGeometry(0.8,0.1,0.6);
const paperMat = new THREE.MeshLambertMaterial({color: 0xffffff});
const paper = new THREE.Mesh(paperGeo,paperMat);
paper.position.set(-3.89,0.07,2);
paper.rotation.y = 0.2;
scene.add(paper);

const pHoldGeo = new THREE.CylinderGeometry(0.15,0.15,0.3,32); 
const pHoldMat = new THREE.MeshLambertMaterial({color: 0xefbeef}); 
const penHolder = new THREE.Mesh(pHoldGeo,pHoldMat);
penHolder.position.set(-4.5,0.35,1);
scene.add(penHolder);

const deskmatGeo = new THREE.BoxGeometry(1.15,0.1,2);
const deskmatMat = new THREE.MeshLambertMaterial({color: 0x454545});
const deskmat = new THREE.Mesh(deskmatGeo,deskmatMat);
deskmat.position.set(-3.89,0.06,2.25);
scene.add(deskmat);

// Chair
const cLegGeo1 = new THREE.BoxGeometry(0.15,2.2,0.15);
const cLegGeo2 = new THREE.BoxGeometry(0.15,1.1,0.15);
const cLegMat = new THREE.MeshLambertMaterial({color: 0x9a8051});

const chairLeg1 = new THREE.Mesh(cLegGeo1,cLegMat);
chairLeg1.position.set(-2.5,-0.4,2.25);
scene.add(chairLeg1);

const chairLeg2 = new THREE.Mesh(cLegGeo1,cLegMat);
chairLeg2.position.set(-2.5,-0.4,3.5);
scene.add(chairLeg2);

const chairLeg3 = new THREE.Mesh(cLegGeo2,cLegMat);
chairLeg3.position.set(-3.4,-1.2,3.5);
scene.add(chairLeg3);

const chairLeg4 = new THREE.Mesh(cLegGeo2,cLegMat);
chairLeg4.position.set(-3.4,-1.2,2.25);
scene.add(chairLeg4);

const backrestGeo = new THREE.BoxGeometry(0.08,0.3,1.4);
const backrestMat = new THREE.MeshLambertMaterial({color: 0x9a8051});
const backrest = new THREE.Mesh(backrestGeo,backrestMat);
backrest.position.set(-2.5,0.3,2.88);
scene.add(backrest);

const seatGeo = new THREE.BoxGeometry(1.05,0.1,1.4);
const seatMat = new THREE.MeshLambertMaterial({color: 0x9a8051});
const seat = new THREE.Mesh(seatGeo,seatMat);
seat.position.set(-2.95,-0.6,2.88);
scene.add(seat);

const cushGeo = new THREE.BoxGeometry(0.98,0.09,1.37);
const cushMat = new THREE.MeshLambertMaterial({color: 0xd89dd8});
const cushion = new THREE.Mesh(cushGeo,cushMat);
cushion.position.set(-2.95,-0.55,2.88);
scene.add(cushion);

// Window Pane
const paneGeo = new THREE.BoxGeometry(3.5,2,0.3);
const paneMat = new THREE.MeshLambertMaterial({color: 0x5687d2});
const pane = new THREE.Mesh(paneGeo,paneMat);
pane.position.set(0.4,1.1,-4.99);
scene.add(pane);

// Window Sill
const sillGeo = new THREE.BoxGeometry(3.8,0.09,0.2);
const sillVGeo = new THREE.BoxGeometry(2.1,0.1,0.2);
const sillMat = new THREE.MeshLambertMaterial({color: 0x9fb6c1});
const sill1 = new THREE.Mesh(sillGeo,sillMat);
sill1.position.set(0.4,0.1,-4.9);
scene.add(sill1);

const sill2 = new THREE.Mesh(sillGeo,sillMat);
sill2.position.set(0.4,2.1,-4.9);
scene.add(sill2);

const sill3 = new THREE.Mesh(sillVGeo,sillMat);
sill3.position.set(-1.45,1.1,-4.9);
sill3.rotation.z = Math.PI/2;
scene.add(sill3);

const sill4 = new THREE.Mesh(sillVGeo,sillMat);
sill4.position.set(2.26,1.1,-4.9);
sill4.rotation.z = Math.PI/2;
scene.add(sill4);

const sill5 = new THREE.Mesh(sillVGeo,sillMat);
sill5.position.set(0.4,1.1,-4.9);
sill5.rotation.z = Math.PI/2;
scene.add(sill5);

// Curtains
const curtGeo = new THREE.BoxGeometry(0.5,2.4,0.02);
const curtMat = new THREE.MeshLambertMaterial({color: 0xcfe199});

const curtain1 = new THREE.Mesh(curtGeo,curtMat);
curtain1.position.set(-1.4,1,-4.8);
scene.add(curtain1);

const curtain2 = new THREE.Mesh(curtGeo,curtMat);
curtain2.position.set(2.3,1,-4.8);
scene.add(curtain2);

const poleGeo = new THREE.BoxGeometry(4.2,0.05,0.1);
const poleMat = new THREE.MeshLambertMaterial({color: 0x87a3b0});
const pole = new THREE.Mesh(poleGeo,poleMat);
pole.position.set(0.42,2.2,-4.85);
scene.add(pole);

// Planetarium
const plGeo = new THREE.BoxGeometry(0.35,0.35,0.35);
const plMat = new THREE.MeshLambertMaterial({color: 0xf2f2f2});
const planetarium = new THREE.Mesh(plGeo,plMat);
planetarium.position.set(-3.7,0.35,0.5);
planetarium.rotation.z = 0.8;
scene.add(planetarium);

const rimGeo = new THREE.BoxGeometry(0.54,0.25,0.25);
const rimMat = new THREE.MeshLambertMaterial({color: 0xe3e3e3});
const rim = new THREE.Mesh(rimGeo,rimMat);
rim.position.set(-3.74,0.3,0.5);
rim.rotation.z = 0.8;
scene.add(rim);

const lensGeo = new THREE.BoxGeometry(0.2,0.18,0.15);
const lensMat = new THREE.MeshLambertMaterial({color: 0x182034});
const lens = new THREE.Mesh(lensGeo,lensMat);
lens.position.set(-3.58,0.47,0.51);
lens.rotation.z = 0.8;
scene.add(lens);

const standGeo = new THREE.BoxGeometry(0.35,0.35,0.45);
const standMat = new THREE.MeshLambertMaterial({color: 0xe3e3e3});
const stand = new THREE.Mesh(standGeo,standMat);
stand.position.set(-3.7,0.1,0.5);
stand.rotation.z = 0.8;
scene.add(stand);

const plLight = new THREE.PointLight(0x50789f, 0.5, 1);
plLight.position.set(-3.4,0.7,0.51);
scene.add(plLight);

// Light Sources = night effect: 0x3b6187, default: 0xffffff
const light = new THREE.DirectionalLight(0x3b6187, 1); 
light.position.set(20,40,10);
light.castShadow = true;
scene.add(light);

const moonlight = new THREE.PointLight(0x50789f, 5, 1000);
moonlight.position.set(0.5, 1.2, -3.8);
scene.add(moonlight);

// const lightHelper = new THREE.PointLightHelper(plLight);
// scene.add(lightHelper);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
