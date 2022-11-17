// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n

// /**
//  * @param {number[][]} image
//  * @param {number} sr
//  * @param {number} sc
//  * @param {number} color
//  * @return {number[][]}
//  */

//PREP
//P : Image is a 2d array with values of "color" integers. M and N can be different. Sr and Sc are the indices of the selected pixel s.t. the row is the sub-array in image and the column is the index of that sub-array.
//R : Are we mutating the original array? Yes, we are returning the MODIFIED array. Thus, we change the image array starting with the selected pixel and in the up, left, down, right directions. Any pixel connected to those directions and have the same "color" integer to the selected pixel must change. Additionally, any pixel in the 4 directions connected to the aforementioned pixels with the same color must also change.
//E : State example given and get on same page of returns.
//P : 4 Directions means we can only move along M and N exclusively. We start with the coordinates given and check the pixel if it needs to be changed. Then we recursively call the function on one up, left, down, and right.
var floodFill = function (image, sr, sc, color) {
  const sColor = image[sr][sc];
  const recurseFill = (image, sr, sc, color, sColor) => {
    if (image[sr][sc] != color) {
      if (image[sr][sc] == sColor) {
        image[sr][sc] = color;
        if (sr == 0) {
          recurseFill(image, sr + 1, sc, color, sColor);
        } else if (sr == image.length - 1) {
          recurseFill(image, sr - 1, sc, color, sColor);
        } else {
          recurseFill(image, sr - 1, sc, color, sColor);
          recurseFill(image, sr + 1, sc, color, sColor);
        }
        if (sc == 0) {
          recurseFill(image, sr, sc + 1, color, sColor);
        } else if (sc == image[sr].length - 1) {
          recurseFill(image, sr, sc - 1, color, sColor);
        } else {
          recurseFill(image, sr, sc - 1, color, sColor);
          recurseFill(image, sr, sc + 1, color, sColor);
        }
      }
    }
  };
  recurseFill(image, sr, sc, color, sColor);
  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
);
