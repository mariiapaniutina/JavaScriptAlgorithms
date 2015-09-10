/*
Rectangle Area

Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
Rectangle Area

Assume that the total area is never beyond the maximum possible value of int.

 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var sA = (C-A)*(D-B);
    var sB = (G-E)*(H-F);
    var x = 0;
    var y=0;
    
    
    if(A<=G && E<=C){
        x = Math.min(C, G) - Math.max(A, E);
    }
    
    if(B<=H && F<=D){
        y = Math.min(D, H) - Math.max(B, F);
    }
    
    return (sA+sB)-x*y;
    
};
