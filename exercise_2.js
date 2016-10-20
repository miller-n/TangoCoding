/**
 * Created by nick on 10/20/16.
 *
 * There is a lot to visualize in this problem. I needed to draw everything out on paper before attempting to solve it
 * Once I draw out a coordinate system and a few rectangles I was able to come up with a solution
 * In this case its easier to test if the rectangles do not overlap. Rather than trying to figure out if they do overlap
 * If we test the negation and it proves false then we know the rectangles must intersect somewhere
 *
 * So in order to test if the rectangles do not intersect we need to look at their edges and ask 2 questions
 *  If rect A is to the left of Rect B left edge then they cannot intersect. (also visa versa if rect B is left of rect A)
 *  AND
 *  if rect A is above the top edge of rect B then they cannot intersect (also visa versa)
 *
 *  I think drawing everything out makes it much clearer
 *
 */


function intersection(rect1, rect2) {

    if(rect1.x+rect1.width < rect2.x || rect2.x+rect2.width < rect1.x || rect1.y+rect1.height < rect2.height
        || rect2.y+rect2.height < rect1.y){

        console.log("Rectangles do not intersect ");
        return false;
    }
    else{
        console.log("Rectangles intersect");
        return true;
    }

}

var rect1 = {x:20, y:30, width:40, height:11};
var rect2 = {x:50, y:22, width:26, height:36};
var rect3 = {x:10, y:10, width:30, height:20};
var rect4 = {x:45, y:10, width:12, height:4};

intersection(rect2, rect3);