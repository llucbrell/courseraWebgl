"use strict";

var gl;
var points;

window.onload = function init()
{
    //ge the canvas from the DOM
    var canvas = document.getElementById( "gl-canvas" );

    //detect if webGL works in the user's browser
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //set the vertices of the triangle
    //var vertices = new Float32Array([-1, -1, 0, 1, 1, -1]);
    //smaller triangle
    //var vertices= new Float32Array([-0.75, -0.75, 0, 1, 0.75, -0.75]);
    //different triangles
   // var vertices= new Float32Array([-1, -1, -0, 0, 1, -1]);
   var vertices= new Float32Array([-1, -1, -0, 0, 1, -1,
                                    0, 0, -1, 1, 0, 1]);


  
    //  Configure WebGL
    //stablish the canvas width, height and color
    gl.viewport( 0, 0, canvas.width, canvas.height );
   
     //background color of the canvas
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    // gl.clearColor(0.3,0.2,0.7,1.0);
    //  Load shaders and initialize attribute buffers
    // shaders are in the html
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    
    render();
};


function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    //draw the triangle
    //important the second number give us the number of vertex to be
    //rendered or drawed
    gl.drawArrays( gl.TRIANGLES, 0, 6 );
}
