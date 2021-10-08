// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
   
    Cubo = [];   // Definir un array unidimensional

    Delta=10;
    Dim=4;
    Numero=Math.round(Math.random() * (2 - 0) + 0);
    Numero2=Math.round(Math.random() * (2 - 0) + 0);
    Numero3=Math.round(Math.random() * (2 - 0) + 0);  

    Angulo = prompt("Digite el ángulo que desea", " ejemplo 25");

    Radianes=(Angulo)*((2*Math.PI)/(360));

    if(Angulo != null)
    {
    alert("Has escrito " + Angulo);
    }   
    else 
    {
    alert("No has escrito nada");
    }

    Cubo.push(cubo(Dim, Dim, Dim, 0xFFDD00, 'Physical', false));
    Cubo.push(cubo(Dim, Dim, Dim, 0x6FA8DC, 'Standard', false));
    Cubo.push(cubo(Dim, Dim, Dim, 0x0000FF, 'Basic', false));

    Valor=Math.round(Math.random() * (2 - 0) + 0);

    if (Valor=0)
    {
    Cubo[Numero].rotateZ(Radianes); //metodo que use fue el Metodo rotate, con un parametro en este caso en la coordenada z para que quede en este eje
    Cubo[Numero].translateX(Delta); //El metodo que use fue el Metodo translate, con un parametro en este caso en la coordenada x 
    }
    if (Valor=1)
    {
    Cubo[Numero2].rotateX(Radianes); // metodo que use fue el Metodo rotate, con un parametro en este caso en la coordenada x para que quede en este eje
    Cubo[Numero2].translateY(Delta); //El metodo que use fue el Metodo translate, con un parametro en este caso en la coordenada y 
    }
    if (Valor=2)
    {
    Cubo[Numero3].rotateY(Radianes); //metodo que use fue el Metodo rotate, con un parametro en este caso en la coordenada y para que quede en este eje
    Cubo[Numero3].translateZ(Delta); //El metodo que use fue el Metodo translate, con un parametro en este caso en la coordenada z 
    }
  
    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFFFF); //  Luz proveniente de un punto en el espacio, 
                                        //  semejante al sol.
    light.position.set(-10, 5, 10);             //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);



}

