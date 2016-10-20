/**
 * Created by nick on 10/20/16.
 *
 * The first function loops through the array multiple times. Comparing every element to every other element
 *  in order to find the largest difference. There is very inefficient brute force approach.
 * Runtime for the first function is O(n^2) since the outter loop goes for i < N elements and there is a nested
 *  inner loop that goes for j < N elements.
 *
 * The second function is much more efficient. It orders the array first then since we know the largest element is in the last
 *  index position we can grab that in O(1) time and subtract it from the very first element at index position 0
 *  The only runtime cost we incur in the 2nd function is ordering the array.
 *  Javascript uses quick sort underneath to power the inbuilt sort() function. Quick sort has a O(n log n) runtime.
 *  This is much better than our first function.
 *
 */

function find_diff_unsorted(myarray){

    var max = 0;
    for (i = 0; i < myarray.length; i++) // outer loop
    {
        for (j = 0; j <myarray.length; j++) // inner loop to compare each element to every other element
        {

            var temp = myarray[j] - myarray[i];
            temp = Math.abs(temp); // get the absolute value
            if(temp > max) // check if we have a new max value
            {
                max = temp;
            }
        }
    }
    console.log(max)
}

function find_diff_sorted(myarray){

    myarray.sort(function (a, b) {return a-b}); // sort the array numerically so the largest element is in the last index position
    var max = myarray[myarray.length-1] - myarray[0];
    console.log(max);
}

myarray = [2, 5, 7, 9, 3, 1, 10]; // used for testing

find_diff_unsorted(myarray);
find_diff_sorted(myarray);